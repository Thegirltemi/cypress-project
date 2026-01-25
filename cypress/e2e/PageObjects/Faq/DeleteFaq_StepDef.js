
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const email = "stephen@almondcareers.com";
const password = "Test1234";

// Selectors
const settingsMenu = '[data-testid="option-icon-settings"]';
const faqMenu = '[data-testid="submenu-faq"]';
const faqContainer = '[data-testid="faq-table-container"]';


// Login and navigate to FAQ page
Given("that I am on the FAQ page", () => {
  cy.visit("/");

  cy.get('[data-testid="input-email"]').type(email);
  cy.get('[data-testid="input-password"]').type(password);
  cy.get('[data-testid="signin-submit-button"]').click();

  cy.url({ timeout: 10000 }).should("include", "/admin-dashboard");
  cy.get('[data-testid="dashboard-welcome-title"]', { timeout: 10000 })
    .should("be.visible");

  cy.get(settingsMenu).click();
  cy.get(faqMenu).click();

  cy.url({ timeout: 10000 }).should("include", "/settings/faq");
  cy.get(faqContainer, { timeout: 10000 }).should("be.visible");

  // FAQ rows are loaded
  cy.get('[data-testid="faq-table-body"]')
    .find('[data-testid^="faq-row-"]')
    .should("have.length.greaterThan", 0);
});

// Select FAQ dynamically
And("have selected a content", () => {
  cy.get('[data-testid="faq-table-body"]')
    .find('[data-testid^="faq-row-"]')
    .first()
    .as("selectedRow");

  // Save the FAQ question text
  cy.get("@selectedRow")
    .find('[data-testid^="faq-question-"]')
    .invoke("text")
    .then(text => {
      cy.wrap(text.trim()).as("faqText");
    });
});

//  Delete FAQ
When("I click on delete button", () => {
  cy.get("@selectedRow")
    .find('[data-testid^="faq-actions-"]')
    .click();

  cy.contains("Delete")
    .should("be.visible")
    .click();
});

//  Verify deletion
Then("I can successfully delete the content", () => {
  cy.get("@faqText").then(text => {
    cy.contains(text, { timeout: 10000 }).should("not.exist");
  });
});
