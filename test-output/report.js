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
  "status": "skipped"
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