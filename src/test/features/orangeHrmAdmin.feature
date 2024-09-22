Feature: Orange HRM Admin Feature

Scenario: Login Orange HRM and navigate to Admin Tab
Given user is on the organgehrm login page
When user enters valid username "<username>"
And user enters valid password "<password>"
And user clicks on the login button
And user clicks on Admin Tab
Then user will be navigated to Admin page

Examples:
|username|password|
|Admin|admin123|