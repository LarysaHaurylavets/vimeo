@smoke
Feature: Download page
As a user I want be able to click download and get info about app

  
  Scenario: Validation the download page of Cameo application
    Given I am on "Home" page
    When I click on "Download" button
    Then I should be on "Itunes" page
    Then Page title should be "Cameo - Video Editor and Movie Maker on the App Store"
    And Text of element "Size" should be "Size: 120 MB"
    And Text of element "Version" should be "2.3.1"
    And Text of element "Update" should be "Sep 12, 2016"
    

