'use strict';

var assert = require('assert');
var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
var LoginPage = require('./login_Page.js');

var mochaTimeOut = 30000; //ms
var driver;
var loginPage;
var mainPage;

test.before(function() {
    this.timeout(mochaTimeOut);
    driver = new webdriver.Builder().
      forBrowser('firefox').
      build();
    loginPage = new LoginPage(driver);
});

test.describe( 'Setup Page', function() {

    beforeEach(function() {
         mainPage = loginPage.openPage();
    });

    test.it('shows pwd field', function() {
        mainPage.pwdFieldPresent().then(function(present) {
            assert.equal(present, true);
        });;

    });
    
    test.it('shows pwd confimation field', function() {
        mainPage.pwdConfirPresent().then(function(text) {
            assert.equal(text, true);
        
        });
    });

    test.it('introduce correct pwd', function() {
        mainPage.typePwd('12345678');
        mainPage.reTypePwd('12345678');
        mainPage.accpet();

        mainPage.successLogin().then(function(text) {
            assert.equal(text, 'Thank you!');
        });
    });

    test.it('introduce incorrect pwd', function() {
        mainPage.typePwd('12345678');
        mainPage.reTypePwd('123456');
        mainPage.accpet();

        mainPage.incorrectLogin().then(function(text){
            assert.equal(text, 'Passwords don\'t match! Please try again.')
        });

        mainPage.alertAccept();
    });

});

test.afterEach(function() {
    driver.manage().deleteAllCookies();
});

test.after(function() {
    driver.quit();
});
