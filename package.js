/* Meteor package information for package Dockerode*/
Package.describe({
  name: "ongoworks:speakingurl",
  summary: "Generate a slug. Wraps the speakingurl package for Meteor",
  version: "1.0.3",
  git: "https://github.com/ongoworks/meteor-speakingurl"
});

Npm.depends({
  "speakingurl": "0.17.0"
});

Package.on_use(function (api) {
  api.add_files('client/lib/speakingurl.min.js','client'); // client
  api.add_files('speakingurl.js','server'); //server
  api.export('getSlug');
});
