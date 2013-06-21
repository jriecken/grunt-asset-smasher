'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.asset_smasher = {
  setUp: function(done) {
    done();
  },
  default_options: function(test) {
    test.expect(8);

    test.equal(grunt.file.exists('tmp/default/test.js'), true, 'tmp/default/test.js');
    test.equal(grunt.file.exists('tmp/default/three.js'), true, 'tmp/default/three.js');
    test.equal(grunt.file.exists('tmp/default/one/one.js'), true, 'tmp/default/one/one.js');
    test.equal(grunt.file.exists('tmp/default/one/two.js'), true, 'tmp/default/one/two.js');
    test.equal(grunt.file.exists('tmp/default/one/notincluded/notincluded.js'), true, 'tmp/default/one/notincluded/notincluded.js');
    test.equal(grunt.file.exists('tmp/default/two/one.js'), true, 'tmp/default/two/one.js');
    test.equal(grunt.file.exists('tmp/default/two/sub/one.js'), true, 'tmp/default/two/sub/one.js');
    test.equal(grunt.file.read('tmp/default/test.js'), grunt.file.read('test/actual/defaults.js'), 'Expect file contents to be correct');

    test.done();
  },
  custom_options: function(test) {
    test.expect(8);

    test.equal(grunt.file.exists('tmp/custom/test.js'), true, 'tmp/custom/test.js');
    test.equal(grunt.file.exists('tmp/custom/three.js'), false, 'tmp/custom/three.js');
    test.equal(grunt.file.exists('tmp/custom/one/one.js'), false, 'tmp/custom/one/one.js');
    test.equal(grunt.file.exists('tmp/custom/one/two.js'), false, 'tmp/custom/one/two.js');
    test.equal(grunt.file.exists('tmp/custom/one/notincluded/notincluded.js'), false, 'tmp/custom/one/notincluded/notincluded.js');
    test.equal(grunt.file.exists('tmp/custom/two/one.js'), false, 'tmp/custom/two/one.js');
    test.equal(grunt.file.exists('tmp/custom/two/sub/one.js'), false, 'tmp/custom/two/sub/one.js');
    test.equal(grunt.file.read('tmp/custom/test.js'), grunt.file.read('test/actual/compressed.js'), 'Expect file contents to be correct (and compressed)');

    test.done();
  },
};
