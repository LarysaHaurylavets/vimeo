@smoke 
Feature: Scrolling page
As a user I want be able to scroll page and see images

    
    Background:
        Given I am on "Home" page

    
    Scenario Outline: Scrolling page and validate visibilities of elements on Home page
        
        Then "<section>" element should be visible
        And I scroll down "<count>" time(s)

        Examples:
            | section     | count   |
            | Intro       | 2.9     |
            | Phone       | 1.9     |
            | Features    | 3.6     |
            | Themes      | 2.5     |
            | Soundtracks | 3       |
            | Videos      | 3.5     |
            | Creators    | 6.5     |
            | Download    | 1       |



