/* Meteor package information for package Dockerode*/
Package.describe({
  name: "ongoworks:speakingurl",
  summary: "Generate a slug. Wraps the speakingurl package for Meteor",
  version: "1.0.2",
  git: "https://github.com/ongoworks/meteor-speakingurl"
});


Package.on_use(function (api) {
  api.add_files('lib/speakingurl.min.js');
  api.add_files('speakingurl.js');
  api.export('getSlug');
});
