Feature: Belly

  Scenario: a few cukes
    Given I have 42 cukes in my belly
    When I wait 10000 milliseconds
    Then my belly should growl
