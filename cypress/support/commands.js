Cypress.Commands.add('login', (username = 'standard_user', password = 'secret_sauce') => {
  cy.visit('https://www.saucedemo.com/v1/index.html');
  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password);
  cy.get('.btn_action').click();
  cy.get('.product_label').should('be.visible');
});

Cypress.Commands.add('preencherCheckout', (firstName, lastName, postalCode) => {
  cy.get('[data-test="firstName"]').type(firstName);
  cy.get('[data-test="lastName"]').type(lastName);
  cy.get('[data-test="postalCode"]').type(postalCode);
  cy.get('.btn_primary').click();
});

Cypress.Commands.add('adicionarProdutoAoCarrinho', () => {
  cy.get('.shopping_cart_container').click();
  cy.get('.btn_secondary').click();
  cy.get('.btn_primary').eq(0).click();
  cy.get('.shopping_cart_container').should('contain', 1).click();
});