'use strict';

var webdriver = require('selenium-webdriver');
 
function LoginPage(driver) {
    this.driver = driver;
    this.url = 'http://localhost:3000';
};

LoginPage.prototype = {
    openPage : function() {
        this.driver.get(this.url);
        var SetUpView = require('./lib/view/main_page/view.js');
        var setUpView = new SetUpView(this.driver);
        return setUpView;
    }
};

module.exports = LoginPage;
