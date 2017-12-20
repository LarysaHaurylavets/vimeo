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
            | Intro       | 2.4     |
            | Phone       | 1.5     |
            | Features    | 6       |
            | Themes      | 3       |
            | Soundtracks | 3       |
            | Videos      | 4       |
            | Creators    | 3       |
            | Download    | 2       |



