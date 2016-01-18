Package.describe({
  name: 'jss:publish-authorized',
  version: '0.2.2',
  summary: 'Publish only for authorized users or using custom security check',
  git: 'https://github.com/JSSolutions/publish-authorized',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.1');
  api.use([
    'underscore',
    'ecmascript'
  ]);
  api.addFiles('publish-authorized.js', 'server');
});
