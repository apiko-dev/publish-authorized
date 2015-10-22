Package.describe({
  name: 'jss:publish-authorized',
  version: '0.1.0',
  // Brief, one-line summary of the package.
  summary: 'Publish only for authorized users or using custom security check',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/JSSolutions/publish-authorized',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');
  api.use('underscore');
  api.addFiles('publish-authorized.js', 'server');
});
