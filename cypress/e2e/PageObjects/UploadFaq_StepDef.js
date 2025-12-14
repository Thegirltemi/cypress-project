import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

// Login credentials
const email = "stephen@almondcareers.com";
const password = "Test1234";

// FAQ selectors
const faqMenu = '[data-testid="submenu-faq"]';
const createFaqBtn = '[data-testid="add-faq-text"]';
const faqContainer = '[data-testid="faq-table-container"]';
const AddFaqBtn = '[data-testid="add-faq-submit-button"]';
const settingsMenu = '[data-testid="option-icon-settings"]';
const faqTitleInput = '[data-testid="question-input"]';
const faqContextTextArea = '[data-testid="answer-textarea"]';

Given("that I am on the settings page", () => {
  //  custom login command
  cy.login(email, password);

  // Navigate to Settings
  cy.get(settingsMenu).click();
  cy.get(faqMenu).click();

  cy.url().should("include", "/settings/faq");
});
When("I click on the upload FAQ", ()=>{
    // Fill FAQ form
  cy.get(createFaqBtn).click();
  cy.contains("Add FAQs").should("be.visible");
})
And ("I input all the required details and save",() => {
    cy.get(faqTitleInput).clear().type("Do you have any payment plan");
    cy.get(faqContextTextArea).clear().type("yes we do");
    cy.get(AddFaqBtn).click();
})
Then("I should be able to create a new FAQ successfully", () => {
  //  Wait for the FAQ table to appear 
  cy.get(faqContainer, { timeout: 10000 }).should("be.visible");

  // Confirm that the new FAQ question exists
  cy.contains("Do you have any payment plan").should("be.visible");

  
});

