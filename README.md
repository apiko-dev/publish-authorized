[![Meteor Icon](http://icon.meteor.com/package/jss:publish-authorized)](https://atmospherejs.com/jss/publish-authorized)

## Publish Authorized

Enables publish data only to authorized users

## Examples

```javascript
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

## License
Note that this project is distributed under the [MIT License](LICENSE).  
Made by [![Professional Meteor Development Studio](http://s30.postimg.org/jfno1g71p/jss_xs.png)](http://jssolutionsdev.com) - [Professional Meteor Development Company](http://jssolutionsdev.com)

