'use strict';
var webdriver = require('selenium-webdriver');
var By = require('selenium-webdriver').By;

var SELECTORS = Object.freeze({
    passwordField: By.id('pwd1-input'),
    confirmPasswordField: By.id('pwd2-input'),
    submit: By.id('set-button'),
    successMessage: By.id('thank-you')
});

function SetUpAccessor(driver) {
  this.driver = driver;
};

SetUpAccessor.prototype = {
   get isPasswordFieldPresent() {
        return this.driver.isElementPresent(SELECTORS.passwordField);
   },

   get isConfirmPasswordFieldPresent() {
        return this.driver.isElementPresent(SELECTORS.confirmPasswordField);
   },

   get insertPassword() {
        return this.driver.findElement(SELECTORS.passwordField);
    },

    get confirmPassword() {
        return this.driver.findElement(SELECTORS.confirmPasswordField);
    },

    get submitButton() {
        return this.driver.findElement(SELECTORS.submit);
    },

   get successMessageLocator() {
        return this.driver.findElement(SELECTORS.successMessage);
   },
};

module.exports = SetUpAccessor;
