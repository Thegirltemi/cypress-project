Feature: Upload FAQ 

@TagName
Scenario: Creating a new FAQ
    Given that I am on the settings page
    When I click on the upload FAQ
    And I input all the required details and save
    Then I should be able to create a new FAQ successfully
