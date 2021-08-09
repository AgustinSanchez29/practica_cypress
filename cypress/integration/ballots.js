///<reference types="Cypress"/>
require('cypress-plugin-tab')

const user= "eleconf"
const password= "5737b3f"
const time = 1500

describe('Ballot design', () => {
    it('BDesign', () => {
        cy.visit('https://10.4.21.34:8444/ssp')
        cy.get('.gwt-TextBox').should('be.visible').type(`${user}`).tab().
        type(`${password}`)
        cy.get('#login-submit-button').should('be.enabled').click()
        cy.url()
        cy.should('include','/menu/menu.html')
        cy.wait(time)

        //Entrando a la funcionalidad
        cy.get('#BallotDesigner').should('be.visible').click()
        cy.url().should('include', '/ballot/suiteBallot.html')
    });
});

