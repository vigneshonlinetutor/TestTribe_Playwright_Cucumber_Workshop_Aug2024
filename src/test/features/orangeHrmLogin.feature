Feature: Orange HRM Login Feature

Scenario: Login Orange HRM with valid credentials
Given user is on the organgehrm login page
When user enters valid username
And user enters valid password
And user clicks on the login button
Then user will be navigated to Dashboard page