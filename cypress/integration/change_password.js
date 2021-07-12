///<reference types="Cypress"/>
require('cypress-plugin-tab')

const password= "abcd1234"
const new_password="5737b3f"

describe('ems login test',function(){
    it('login successfull',function(){
        cy.visit('https://10.4.21.54:8444/ssp')
        cy.get('.gwt-TextBox').should('be.visible').type('setup').tab().
        type(`${password}`)
        cy.get('#login-submit-button').should('be.enabled').click()
        cy.url()
        cy.should('include','/menu/menu.html')
        cy.get('#sideBarButtonOpenLeft').should('be.visible').click()
        cy.get(':nth-child(4) > .side-panel-button-image > .gwt-Image').click()
        cy.get('body > div.gwt-DialogBox-No-Title > div > table > tbody > tr.dialogMiddle > td.dialogMiddleCenter > div > table > tbody > tr:nth-child(3) > td > table > tbody > tr:nth-child(2) > td > input').type(`${password}`).tab().
        type(`${new_password}`).tab().
        type(`${new_password}`)
        cy.get(':nth-child(1) > .buttons').should('be.enabled').click()
        cy.get(':nth-child(2) > .buttons').should('be.enabled').click()
    })
})