'use strict';
var webdriver = require('selenium-webdriver');
var By = require('selenium-webdriver').By;

var SELECTORS = Object.freeze({
    successMessage: By.id('thank-you'),
    appLink: By.css('a'),
    appTittle: By.css('h1')
});

function SuccessfulPageAccessor(driver) {
  this.driver = driver;
};

SuccessfulPageAccessor.prototype = {
   get linkToTheApp() {
        return this.driver.findElement(SELECTORS.appLink);
   },

   get successMessageLocator() {
        return this.driver.findElement(SELECTORS.successMessage);
   }
};

module.exports = SuccessfulPageAccessor;
