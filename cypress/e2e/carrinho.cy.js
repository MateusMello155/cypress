describe('Testes da tela de carrinho de compra', () => {
    beforeEach(() => {
        cy.login();
    });

    it('Deve ser possível adicionar um produto no carrinho e finalizar a compra', () => {
        cy.adicionarProdutoAoCarrinho();
        cy.get('.cart_item').should('be.visible');
        cy.get('.btn_action').click();
        cy.preencherCheckout('Mateus', 'Mello', '0000000');
        cy.get('.cart_list').should('be.visible');
        cy.get('.summary_info').should('be.visible');
        cy.get('.btn_action').scrollIntoView().click();
        cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER');
    });

    it('Deve ser possível remover um produto do carrinho', () => {
        cy.adicionarProdutoAoCarrinho();
        cy.get('.item_pricebar > .btn_secondary').click();
        cy.get('.cart_item').should('not.exist');
    });

    it('Deve ser possível adicionar mais de um produto no carrinho', () => {
        cy.adicionarProdutoAoCarrinho();
        cy.get('.cart_footer > .btn_secondary').click();
        cy.get(':nth-child(2) > .pricebar > .btn_primary').click();
        cy.get('.shopping_cart_container').should('contain', 2).click();
        cy.get('.btn_action').click();
        cy.preencherCheckout('mateus', 'mello', '00000');
        cy.get('.cart_list').should('be.visible');
        cy.get('.summary_info').should('be.visible');
        cy.get('.btn_action').scrollIntoView().click();
        cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER');
    });

    it('Não deve ser possível realizar a compra sem preencher os dados', () => {
        cy.adicionarProdutoAoCarrinho();
        cy.get('.btn_action').click();
        cy.get('.btn_primary').click();
        cy.get('[data-test="error"]').should('be.visible');

    });

});