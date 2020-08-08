Feature: Image Sample

    Scenario: Get Image Comparison
        Given Image-start app
        Then Image-button name is next
        When Image-move next
        Then Image-next page
        When Image-move prev
        Then Image-prev page