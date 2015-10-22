/**
 * Create publisher with build-in authorization check
 *
 * @param {string} publisherName name of publisher
 * @param {Function} publishFn publish function
 * @param {Function|*} securityCheck optional predicate. Receives userId as argument and should return true if user is allowed to got data of subscription
 */
Meteor.publishAuthorized = function (publisherName, publishFn, securityCheck) {
  var checkPermissions = function (userId) {
    var isAuthorized = !!userId;
    if (_.isFunction(securityCheck)) {
      return isAuthorized && securityCheck(userId);
    } else {
      return isAuthorized;
    }
  };

  var wrappedFn = function () {
    if (checkPermissions(this.userId)) {
      return publishFn.apply(this, arguments);
    } else {
      var error = new Error('Access denied. Not authorized user.');
      this.error(error);
    }
  };

  Meteor.publish(publisherName, wrappedFn);
};