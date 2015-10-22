###Publish Authorized

Enables publish data only to authorized users

###Examples

```
//enable access to MyCollection only for authorized users
Meteor.publishAuthorized('mySecuredPublish', function (category) {
  return MyCollection.find({category: category});
});

//enable access to MyCollection only for specific users using custom check
Meteor.publishAuthorized('mySecuredPublish', function (category) {
  return MyCollection.find({category: category});
}, function (userId) {
  return customAccessCheckForMyCollection(userId);
});
```
