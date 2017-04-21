var webpackConfig = require('./webpack.config');

module.exports = function (config) {
    var _config = {
        basePath: '',

        frameworks: ['jasmine'],

        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-remap-istanbul'),
            require('karma-webpack'),
            require('karma-sourcemap-loader'),
        ],

        files: [
            {pattern: './src/i18n/*.json', watched: false, included: false, served: true},
            // {pattern: 'src/assets/img/*.{png, jpg, gif}', watched: false, included: false, served: true},
            {pattern: './src/karma-test-shim.js', watched: false}
        ],

        preprocessors: {
            './src/karma-test-shim.js': ['webpack', 'sourcemap'],
        },

        remapIstanbulReporter: {
            reports: {
                html: 'coverage',
                lcovonly: './coverage/coverage.lcov',
            },
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            stats: 'errors-only',
        },

        webpackServer: {
            noInfo: true,
        },

        reporters: ['progress', 'karma-remap-istanbul'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false
    };

    config.set(_config);
};
