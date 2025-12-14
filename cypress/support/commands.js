

// cypress/support/commands.js
Cypress.Commands.add("login", (email, password) => {
  // Visit login page
  cy.visit("http://ogc404gswg4oogcc0g088wsk.185.198.27.143.sslip.io/");

  // Fill login form
  cy.get('[data-testid="input-email"]').type(email);
  cy.get('[data-testid="input-password"]').type(password);

  // Click Sign In
  cy.get('[data-testid="signin-submit-button"]').click();

  // Confirm dashboard loaded
  // cy.contains("Welcome Back").should("be.visible");
  cy.url().should("include", "/admin-dashboard");
  cy.get('[data-testid="dashboard-welcome-title"]', { timeout: 10000 })
  .should("be.visible");

});
