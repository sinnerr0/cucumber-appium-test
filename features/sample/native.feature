Feature: Native Sample

  Background:
    Given I am logged in

  Scenario Outline: Get Native Object
    Given Native-start app
    Then Native-button name is next
    When Native-move next
    Then Native-next page
    When Native-move prev
    Then Native-prev page

    Examples:
      | day    |
      | Friday |
