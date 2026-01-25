Feature: Edit FAQ 

@TagName
Scenario: Editing an existing FAQ
    Given that I am on the FAQ page and have selected an existing FAQ
    When I click on the Edit button
    And I update the FAQ content
    Then the FAQ should be updated successfully