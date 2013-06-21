/*
 * grunt-asset-smasher
 * https://github.com/jriecken/grunt-asset-smasher
 *
 * Copyright (c) 2013 Jim Riecken
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.registerMultiTask('asset_smasher', 'Run asset-smasher.', function() {
    var done = this.async();

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      paths: [process.cwd()],
      prefix: '',
      compress: false,
      hash: false,
      gzip: false,
      hashVersion: '1.0',
      helpers: {},
      amd:false,
      verbose: false,
      noclean: false
    });

    if (!options.outputTo) {
      grunt.fail.warn('Asset-smasher requires outputTo option to be set');
      return;
    }

    try {
      var Smasher = require('asset-smasher').Smasher;
      var smash = new Smasher(options);
      smash.compileAssets(function(err) {
        if (err) {
          grunt.log.error(err);
          grunt.fail.warn('Asset-smasher failed to compile assets.');
        } 
        done();
      });
    } catch (e) {
      grunt.log.error(e);
      grunt.fail.warn('Asset-smasher failed to compile assets.');
      done();
    }

  });

};
