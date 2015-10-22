/**
 * Create publisher with build-in authorization check
 *
 * @param {string} publisherName name of publisher
 * @param {Function} publishFn publish function
 * @param {Function|*} securityCheck optional predicate. Receives userId as argument and should return true if user is allowed to got data of subscription
 */
Meteor.publishAuthorized = function (publisherName, publishFn, securityCheck) {
  var checkPermissions = function (userId) {
    return _.isFunction(securityCheck) && !!userId && securityCheck(userId) || !!userId;
  };

  var wrappedFn = function () {
    if (checkPermissions(this.userId)) {
      return publishFn.apply(this, arguments);
    } else {
      var error = new Meteor.Error('Access denied. You should be authorized to get this data.');
      this.error(error)
    }
  };

  Meteor.publish(publisherName, wrappedFn);
};