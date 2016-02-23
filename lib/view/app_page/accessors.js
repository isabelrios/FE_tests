'use strict';
var webdriver = require('selenium-webdriver');
var By = require('selenium-webdriver').By;

var SELECTORS = Object.freeze({
    appTittle: By.css('h1')
});

function AppPageAccessor(driver) {
  this.driver = driver;
};

AppPageAccessor.prototype = {
   get getAppTittle() {
        return this.driver.findElement(SELECTORS.appTittle);
   }
};

module.exports = AppPageAccessor;
