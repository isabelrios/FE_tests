'use strict';

var webdriver = require('selenium-webdriver');
var AppPageAccessor = require('./accessors.js');

function AppPageView(driver) {
    this.driver = driver;
    this.accessors = new AppPageAccessor(this.driver);
};

AppPageView.prototype = {

    getAppName: function() {
        return this.accessors.getAppTittle.getText();
    }
};

module.exports = AppPageView;
