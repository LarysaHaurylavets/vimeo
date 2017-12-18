@smoke
Feature: Create ures page
As user I will be able to login to vimeo

  
  Scenario: Login to Vimeo
    Given I am on "Home" page
    When I click on "Login" button
    And I wait until element "Form in Login Form" is visible
    And I clear "Email Address in Login Form"
    And I type "Email" in "Email Address in Login Form"
    And I clear "Password in Login Form"
    And I type "Pass" in "Password in Login Form"
    When I click on "Login With Email in Login Form" button
    Then I wait until element "User Avatar in User" is visible
