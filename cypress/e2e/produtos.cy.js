describe('Testes da tela de produtos', () => {
    beforeEach(() => {
        cy.login();
    });

    it('Deve ser possivel exibir a lista de produtos', () => {
        cy.get('.inventory_list').should('be.visible');
    });

    it('Deve ser possível adicionar um produto no carrinho', () => {
        cy.get('.btn_primary').eq(0).click();
        cy.get('.shopping_cart_container').should('contain', 1);
    });

    it('Deve ser possível adicionar 2 produtos no carrinho', () => {
        cy.get('.btn_primary').eq(0).click();
        cy.get('.btn_primary').eq(2).click();
        cy.get('.shopping_cart_container').should('contain', 2);
    });

    it('Deve ser possível adicionar todos os produtos no carrinho', () => {
        cy.get('.btn_primary').each(($btn) => {
            cy.wrap($btn).scrollIntoView().click();
        });

        cy.get('.shopping_cart_container').should('contain', 6);

    });

    it('Deve ser possível acessar os detalhes de um produto', () => {
        cy.get('.inventory_item_name').should('contain.text', 'Sauce Labs Backpack').eq(0).click();
        cy.get('.inventory_details_container').should('be.visible');
        cy.get('.inventory_details_name').should('have.text', 'Sauce Labs Backpack');
        cy.get('.inventory_details_desc').should('be.visible');
        cy.get('.inventory_details_price').should('be.visible');
    });
    
});