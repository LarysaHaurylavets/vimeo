
Feature: Scrolling page
  As a user I want be able to scroll page and see images

    Background:
        Given I am on "Home" page

    Scenario Outline: Scrolling page and validate visibilities of elements on Home page
       When I scroll down "<count>" time(s)
       Then "<section>" element should be visible      

   
    Examples:
        |section        |  count|        
        |Phone          |   5.5|
        |Features       |   6.3|
        |Themes         |   7.5|
        |Soundtracks    |   10|
        |Videos         |   14.5|
        |Creators       |   18.5|
        |Download       |   23.5|



