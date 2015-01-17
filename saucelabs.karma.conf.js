var browsers = { // 1
    sl_chrome: {
        base: 'SauceLabs',
        browserName: 'chrome',
        platform: 'Windows 7',
        version: '35'
    },
    sl_firefox: {
        base: 'SauceLabs',
        browserName: 'firefox',
        version: '30'
    },
    sl_ios_safari: {
        base: 'SauceLabs',
        browserName: 'iphone',
        platform: 'OS X 10.9',
        version: '7.1'
    },
    sl_ie_11: {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        platform: 'Windows 8.1',
        version: '11'
    }
};

module.exports = function(config) {
    config.set({
        // all other options that are defined in
        // local.karma.conf.js were elided for the
        // purpose of this blog post.
        reporters: ['saucelabs', 'spec'], 
        browsers: Object.keys(browsers), 
        customLaunchers: browsers
    });
};
