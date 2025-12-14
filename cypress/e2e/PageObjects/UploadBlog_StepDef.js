// import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

// // Blog selectors
// const blogMenu = '[data-testid="menu-text-blog"]';
// const createBlogBtn = 'Create blogs';
// const blogTitleInput = '[data-testid="blog-title-input"]';
// const blogContentTextarea = '[data-testid="blog-content-textarea"]';
// const publishBtn = '[data-testid="publish-button"]';
// const email = "stephen@almondcareers.com";
// const password = "Test1234";

// Given("that I am on the Blog Page", () => {
//   // custom login command
//   cy.login(email, password);

//   // Navigate to Blog and Create Blog
//   cy.get(blogMenu).click();
//   cy.contains(createBlogBtn).click();

//   cy.url().should("include", "/blog/create");
// });

// When("I click on upload Blog", () => {
//   // Fill blog form
//   cy.get(blogTitleInput).clear().type("hope this works?");
//   cy.get(blogContentTextarea).clear().type("God abeg");
//   cy.get(publishBtn).click();

// });

// Then("I can be able to upload new blog to the website", () => {
//   cy.url().should("include", "/blog/all");
//   //Confirming the blog title appears
//   cy.contains("hope this works?").should("be.visible");
// });


