import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

// Login credentials
const email = "stephen@almondcareers.com";
const password = "Test1234";

// Edit FAQ Selectors
const settingsMenu = '[data-testid="option-icon-settings"]';
const faqMenu = '[data-testid="submenu-faq"]';
const faqContainer = '[data-testid="faq-table-container"]';
const faqQuestionInput = '[data-testid="edit-question-input"]';
const faqAnswerTextarea = '[data-testid="edit-answer-textarea"]';
const saveFaqBtn = '[data-testid="edit-faq-submit-button"]';



Given("that I am on the FAQ page and have selected an existing FAQ", () => {
  //Login to the application
  cy.login(email, password);

  // Open the Settings menu
  cy.get(settingsMenu).click();


  //  Navigate to the FAQ page
  cy.get(faqMenu).click();

  // Confirm the FAQ table is displayed
  cy.get(faqContainer, { timeout: 10000 })
    .should("be.visible");
});


When("I click on the Edit button", ()=>{


    cy.contains("Do you have any payment plan")
  .should("be.visible");

  cy.get('[data-testid="faq-more-options-2"]')
  .first()
  .click();

   // Click the Edit option from the menu
      cy.contains("Edit")
        .should("be.visible")
        .click();

})

And("I update the FAQ content", () => {
  //  Update the FAQ question
  cy.get(faqQuestionInput)
    .should("be.visible")
    .clear()
    .type("Do you offer installment payment plans?");

  // Update the FAQ answer
  cy.get(faqAnswerTextarea)
    .should("be.visible")
    .clear()
    .type("Yes, we offer flexible installment payment options.");

  //  Save the updated FAQ
  cy.get(saveFaqBtn)
    .should("be.visible")
    .click();
});

Then("the FAQ should be updated successfully", () => {
  // Assert alert
  cy.on("window:alert", (text) => {
    expect(text).to.equal("FAQ updated successfully!");
  });

});


