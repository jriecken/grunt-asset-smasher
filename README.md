# grunt-asset-smasher

> Grunt plugin for [asset-smasher](http://jriecken.github.io/asset-smasher/)

See [the asset-smasher homepage](http://jriecken.github.io/asset-smasher/) for more details on usage of asset-smasher and how it works.

## Getting Started
This plugin requires Grunt `~0.4.1` and asset-smasher `~0.3.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-asset-smasher --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-asset-smasher');
```

## The "asset_smasher" task

### Overview
In your project's Gruntfile, add a section named `asset_smasher` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  asset_smasher: {
    options: {
      // asset-smasher options go here
    }
  },
})
```

### Options

#### options.outputTo
Type: `String`
Default value: No Default. This must be specified

The directory to output assets into

#### options.paths
Type: `String[]`
Default value: `[process.cwd()]`

An array of asset paths

#### options.only
Type: `String[]`
Default value: `['**/*.*']`

Array of glob patterns for assets that should be output (other assets will be filtered out/not processed)

#### options.prefix
Type: `String`
Default value: `''`

Prefix to append to logical paths when constructing urls. use if output dir is not served from the root of your web app

#### options.compress
Type: `Boolean`
Default value: `false`

Whether to compress JavaScript and CSS assets

#### options.hash
Type: `Boolean`
Default value: `false`

Whether to output copies of the final assets with an MD5 hash of the contents appended to the file name (e.g. myasset-xxxxxxxxxxxxxxxxxxxx.js)

#### options.gzip
Type: `Boolean`
Default value: `false`

Whether to output a copy of the final assets gzipped

#### options.hashVersion
Type: `String`
Default value: `1.0`

Change this value if you want to invalidate all of your assets (the version is included when computing the hash value for an asset)

#### options.helpers
Type: `Object`
Default value: `{}`

Helpers/values to pass into transformers (e.g. the `ejs` transformer exposes these as local variables)

#### options.amd
Type: `Boolean|Object`
Default value: `false`

Whether to enable AMD module support. Either a boolean can be passed in, or an object of the form

    {
      baseLogicalPath: 'base/path' // The value defaults to '' and will be stripped off of all logical paths before constructing module ids
    }

#### options.verbose
Type: `Boolean`
Default value: `false`

Whether verbose information should be printed out to stdout when compiling

#### options.noclean
Type: `Boolean`
Default value: `false`

Whether to prevent deletion of the output directory before compilation

### Usage Examples

#### Basic Options

This will compile all files in `my/assets` and output them to `output/dir`

```js
grunt.initConfig({
  asset_smasher: {
    options: {
      paths: ['my/assets'],
      outputTo: 'output/dir'
    }
  },
})
```

#### More Advanced Options

This compiles only the manifest files in several asset paths, compresses the result, and creates hashed versions of the files.

```js
grunt.initConfig({
  asset_smasher: {
    options: {
      paths: ['my/assets', 'my/otherassets'],
      outputTo: 'output/dir',
      only: ['**/*.mf'],
      prefix: 'assets',
      compress: true,
      hash: true
    }
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

### 0.1 (June 20, 2013)

Initial release - Compatible with `asset-smasher` 0.3.x
