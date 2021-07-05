describe('My first test', function(){
    it('actions that expected', function(){
        cy.visit('https://example.cypress.io')
        cy.contains('type').click()
        cy.url()
        cy.should('include','/commands/actions')
        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value','fake@email.com')
    })
})