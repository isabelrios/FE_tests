'use strict';

var webdriver = require('selenium-webdriver');
var SetUpAccessor = require('./accessors.js');

var SuccessfulPageView = require('../successful_page/view.js');
var successfulPageView;

function SetUpView(driver) {
    this.driver = driver;
    this.accessors = new SetUpAccessor(this.driver);
    successfulPageView = new SuccessfulPageView(this.driver);
};

SetUpView.prototype = {
  
    passwordField: function() {
        return this.accessors.isPasswordFieldPresent;
    },

    passwordConfirmField: function() {
        return this.accessors.isConfirmPasswordFieldPresent;
    },

    typePassword: function(text) {
        return this.accessors.insertPassword.sendKeys(text);
    },

    confirmTypePassword: function(text) {
        return this.accessors.confirmPassword.sendKeys(text);
    },

    accpet: function() {
        return this.accessors.submitButton.click().then(function(){
            return successfulPageView;
        });
    },

    incorrectLogin: function() {
        return this.driver.switchTo().alert().getText();
    },
    
    alertAccept: function() {
       this.driver.switchTo().alert().accept();
    }
};

module.exports = SetUpView;
