require("babel-register")({
    presets: ['es2015']
});
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        'browserName': 'chrome'
    },
    framework: 'jasmine',
    specs: [
        './tests/**/HomeTests.js'
    ],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },
    onPrepare: function () {
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);
        browser.ignoreSynchronization = true;
    },
    baseUrl: "https://www.protractortest.org/#/"
};