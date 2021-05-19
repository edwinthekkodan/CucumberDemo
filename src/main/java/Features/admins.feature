Feature: Php Travels Add Admins

Scenario Outline: Adding Admins Scenario
Given User is on Login Page 
When Title of login page is Administrator Login
Then User enters "<username>" and "<password>"
Then User clicks on login button
Then User is on home page 
Then User moves to Add Admins page
Then User Enters "<firstname>" and "<lastname>"
Then user enters "<Email>" and "<Password>"
Then User selects "<Country>" 
Then Close the browser 

Examples: 
		| username | password | firstname | lastname | Email | Password | Country | 
		| admin@phptravels.com | demoadmin | dean | joan | dejo@xyz.com | dj123 | India | 

