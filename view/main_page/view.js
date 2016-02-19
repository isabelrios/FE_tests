'use strict';

var webdriver = require('selenium-webdriver');
var SetUpAccessor = require('./accessors.js');
 
function SetUpView(driver) {
    this.driver = driver;
    this.url = 'http://localhost:3000';
    this.accessors = new SetUpAccessor(this.driver);
};


SetUpView.prototype = {
  
    pwdFieldPresent: function() {
      return this.accessors.pwdFieldLocator;

    },
    pwdConfirPresent: function() {
        return this.accessors.pwdConfirmFieldLocator;
    },

    typePwd: function(text) {
        this.accessors.insertPwd.sendKeys(text);
    },

    reTypePwd: function(text) {
        this.accessors.confirmPwd.sendKeys(text);
    },

    accpet: function() {
        this.accessors.submitButton.click();
    },

    successLogin: function() {
        return this.accessors.successMessageLocator.getText();
    
    },

    incorrectLogin: function() {
        return this.driver.switchTo().alert().getText();
    },
    
    alertAccept: function() {
       this.driver.switchTo().alert().accept();
    }
};

module.exports = SetUpView;
