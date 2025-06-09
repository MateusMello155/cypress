Cypress.Commands.add('login', (username = 'standard_user', password = 'secret_sauce') => {
    cy.visit('https://www.saucedemo.com/v1/index.html');
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('.btn_action').click();
    cy.get('.product_label').should('be.visible');
  });