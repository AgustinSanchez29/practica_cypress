require('cypress-plugin-tab')

const password= "abcd1234"

describe('ems login test',function(){
    it('login successfull',function(){
        cy.visit('https://10.4.21.54:8444/ssp')
        cy.get('.gwt-TextBox').should('be.visible').type('setup').tab().
        type(`${password}`)
        cy.get('#login-submit-button').should('be.enabled').click()
        cy.url()
        cy.should('include','/menu/menu.html')
    })
})