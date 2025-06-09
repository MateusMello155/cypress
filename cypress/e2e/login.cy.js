describe('Validando tela de login', () => {
  it('Deve ser possivel realizar o login com sucesso', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('.btn_action').click();
    cy.get('.product_label').should('be.visible');
  })

  it('Não deve ser possivel realizar o login', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html');
    cy.get('[data-test="username"]').type('standard_user12');
    cy.get('[data-test="password"]').type('secret_sauce12');
    cy.get('.btn_action').click();
    cy.get('[data-test="error"]').should('be.visible');
  })
})