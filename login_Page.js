'use strict';

var config = require('./config.js');
var webdriver = require('selenium-webdriver');
var SetUpView = require('./lib/view/main_page/view.js');
var setUpView;

function LoginPage(driver) {

    this.driver = driver;
    this.url = config.BASE_URL
    setUpView = new SetUpView(this.driver);
};

LoginPage.prototype = {
    openPage : function() {
      return this.driver.get(this.url).then(function(){
        return setUpView;
      });
    }
};

module.exports = LoginPage;
