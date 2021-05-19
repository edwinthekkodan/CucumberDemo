$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/Eclipse Workspace/CucumberLoginDemo/src/main/java/Features/admins.feature");
formatter.feature({
  "line": 1,
  "name": "Php Travels Add Admins",
  "description": "",
  "id": "php-travels-add-admins",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Adding Admins Scenario",
  "description": "",
  "id": "php-travels-add-admins;adding-admins-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Title of login page is Administrator Login",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User moves to Add Admins page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User Enters \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters \"\u003cEmail\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User selects \"\u003cCountry\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "php-travels-add-admins;adding-admins-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "Email",
        "Password",
        "Country"
      ],
      "line": 16,
      "id": "php-travels-add-admins;adding-admins-scenario;;1"
    },
    {
      "cells": [
        "admin@phptravels.com",
        "demoadmin",
        "dean",
        "joan",
        "dejo@xyz.com",
        "dj123",
        "India"
      ],
      "line": 17,
      "id": "php-travels-add-admins;adding-admins-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Adding Admins Scenario",
  "description": "",
  "id": "php-travels-add-admins;adding-admins-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Title of login page is Administrator Login",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters \"admin@phptravels.com\" and \"demoadmin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User moves to Add Admins page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User Enters \"dean\" and \"joan\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters \"dejo@xyz.com\" and \"dj123\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User selects \"India\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AdminStepDefinition.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 4920815900,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: unable to send message to renderer\n  (Session info: chrome\u003d90.0.4430.212)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-UIFVI6LU\u0027, ip: \u0027192.168.29.97\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.212, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\hp\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:61357}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 29b636075e3ccdbca991942827c12e17\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat stepDefinitions.AdminStepDefinition.user_is_on_Login_Page(AdminStepDefinition.java:26)\r\n\tat ✽.Given User is on Login Page(E:/Eclipse Workspace/CucumberLoginDemo/src/main/java/Features/admins.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AdminStepDefinition.title_of_login_page_is_Administrator_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@phptravels.com",
      "offset": 13
    },
    {
      "val": "demoadmin",
      "offset": 40
    }
  ],
  "location": "AdminStepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AdminStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AdminStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AdminStepDefinition.user_moves_to_Add_Admins_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "dean",
      "offset": 13
    },
    {
      "val": "joan",
      "offset": 24
    }
  ],
  "location": "AdminStepDefinition.user_Enters_fname_and_lname(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "dejo@xyz.com",
      "offset": 13
    },
    {
      "val": "dj123",
      "offset": 32
    }
  ],
  "location": "AdminStepDefinition.user_Enters_email_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 14
    }
  ],
  "location": "AdminStepDefinition.user_selects_country(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AdminStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});