'use strict';

var assert = require('assert');
var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
var LoginPage = require('./login_Page.js');

var mochaTimeOut = 30000; //ms
var driver;
var loginPage;
var mainPage;
var successPage;
var newApp;

test.before(function() {
    this.timeout(mochaTimeOut);
    driver = new webdriver.Builder().
      forBrowser('firefox').
      build();
    loginPage = new LoginPage(driver);
});

test.describe( 'Setup Page', function() {

    beforeEach(function() {
        return loginPage.openPage().then(function(setUpView) {
            return mainPage = setUpView;
        });
    });

    test.it('shows password field', function() {
        return mainPage.passwordField().then(function(present) {
            return assert.equal(present, true);
        });
    });
    
    test.it('shows password confimation field', function() {
        return mainPage.passwordConfirmField().then(function(present) {
            return assert.equal(present, true);
        });
    });

    test.it('introduce correct password', function() {
        return mainPage.typePassword('12345678').then(function() {
            return mainPage.confirmTypePassword('12345678')
        }).then(function(){
            return mainPage.accpet()
        }).then(function(successfulPageView){
            return successPage = successfulPageView
        }).then(function(){
            return successPage.successLogin()
        }).then(function(text){
            return assert.equal(text, 'Thank you!')
        });
    });

    test.it('introduce incorrect password', function() {
        return mainPage.typePassword('12345678').then(function(){
            return mainPage.confirmTypePassword('123456')
        }).then(function(){
            return mainPage.accpet()
        }).then(function(){
            return mainPage.incorrectLogin()
        }).then(function(text){
            assert.equal(text, 'Passwords don\'t match! Please try again.')
        }).then(function(){
            return mainPage.alertAccept();
        });
    });

    test.it('open link to go to the app', function() {
        return mainPage.typePassword('12345678').then(function() {
            return mainPage.confirmTypePassword('12345678')
        }).then(function(){
            return mainPage.accpet()
        }).then(function(successfulPageView){
            return successPage = successfulPageView
        }).then(function(){
            return successPage.successLogin()
        }).then(function(text){
            return assert.equal(text, 'Thank you!')
        }).then(function(){
            return successPage.openLinkToApp()
        }).then(function(appPage){
            return newApp = appPage
        }).then(function(){
            return newApp.getAppName()
        }).then(function(text){
            return assert.equal(text, 'Example Domain');
        });
    });
});

test.afterEach(function() {
    driver.manage().deleteAllCookies();
});

test.after(function() {
    driver.quit();
});
