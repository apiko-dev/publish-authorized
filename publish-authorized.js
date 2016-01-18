/**
 * Register a publish handler function with build-in authorization check.
 *
 * @param name {String} identifier for query
 * @param func {Function} publish handler
 * @param options {Object}
 * @param checker {Function} authorization checker
 *
 * Server will call handler function on each new subscription,
 * either when receiving DDP sub message for a named subscription, or on
 * DDP connect for a universal subscription.
 *
 * If name is null, this will be a subscription that is
 * automatically established and permanently on for all connected
 * client, instead of a subscription that can be turned on and off
 * with subscribe().
 *
 * options to contain:
 *  - (mostly internal) is_auto: true if generated automatically
 *    from an autopublish hook. this is for cosmetic purposes only
 *    (it lets us determine whether to print a warning suggesting
 *    that you turn off autopublish.)
 */
Meteor.publishAuthorized = function (name, func, options, checker) {
  // We were passed 3 arguments. They may be either (name, args, options)
  // or (name, args, checker)
  if (!checker && _.isFunction(options)) {
    checker = options;
    options = {};
  }

  Meteor.publish(name, function () {
    let hasAccess = !!this.userId;
    if (hasAccess && _.isFunction(checker)) {
      try {
        hasAccess = checker.apply(this, arguments);
      }
      catch (error) {
        hasAccess = false;
      }
    }
    if (!hasAccess) {
      return this.ready();
    }
    return func.apply(this, arguments);
  }, options);
};
