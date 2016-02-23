'use strict';

var webdriver = require('selenium-webdriver');
var SuccessfulPageAccessor = require('./accessors.js');
var AppPage = require('../app_page/view.js');
var appPage;

function SuccessfulPageView(driver) {
    this.driver = driver;
    this.accessors = new SuccessfulPageAccessor(this.driver);
    appPage = new AppPage(this.driver);
};

SuccessfulPageView.prototype = {
  
    openLinkToApp: function() {
        return this.accessors.linkToTheApp.click().then(function(){
            return appPage;
        });
    },

    successLogin: function() {
        return this.accessors.successMessageLocator.getText();
    },
};

module.exports = SuccessfulPageView;
