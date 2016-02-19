'use strict';
var webdriver = require('selenium-webdriver');


var SELECTORS = Object.freeze({
    pwdSelector: webdriver.By.id('pwd1-input'),
    pwdConfirmSelector: webdriver.By.id('pwd2-input'),
    submit: webdriver.By.id('set-button'),
    successMessage: webdriver.By.id('thank-you')
});

function SetUpAccessor(driver) {
  this.driver = driver;

}

SetUpAccessor.prototype = {
   get pwdFieldLocator() {
        return this.driver.isElementPresent(SELECTORS.pwdSelector);
   },

   get pwdConfirmFieldLocator() {
        return this.driver.isElementPresent(SELECTORS.pwdConfirmSelector);
   },

   get insertPwd() {
        return this.driver.findElement(SELECTORS.pwdSelector);
    },

    get confirmPwd() {
        return this.driver.findElement(SELECTORS.pwdConfirmSelector);
    },

    get submitButton() {
        return this.driver.findElement(SELECTORS.submit);
   },

   get successMessageLocator() {
        return  this.driver.findElement(SELECTORS.successMessage);
   },

};

module.exports = SetUpAccessor;
