Feature: Create ures page
As user I will be able to create a new user via Join form

  Scenario: Create a new user in Vimeo
    Given I am on "Home" page
    When I click on "Join" button
    And I wait until element "Form in Join Form" is visible
    And I clear "User Name in Join Form"
    And I type "User" in "User Name in Join Form"
    And I clear "Email Address in Join Form"
    And I type "Email" in "Email Address in Join Form"
    And I clear "Password in Join Form"
    And I type "Pass" in "Password in Join Form"
    And I click on "Join With Email in Join Form" button



