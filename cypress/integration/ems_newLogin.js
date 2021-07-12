require('cypress-plugin-tab')

const password= "5737b3f"
const new_password= "abcd1234"

describe('ems new login test',function(){
    it('titulo',function(){
        cy.visit('https://10.4.21.54:8444/ssp')
        cy.get('.gwt-TextBox').should('be.visible').type('setup').tab().
        type(`${password}`)
        cy.get('#login-submit-button').should('be.enabled').click()
        cy.get('body > div.gwt-DialogBox-No-Title > div > table > tbody > tr.dialogMiddle > td.dialogMiddleCenter > div > table > tbody > tr:nth-child(3) > td > table > tbody > tr:nth-child(2) > td > input').type('5737b3f').tab().
        type(`${new_password}`).tab().
        type(`${new_password}`)
        cy.get(':nth-child(1) > .buttons').should('be.enabled').click()
        cy.get(':nth-child(2) > .buttons').should('be.enabled').click()
        cy.get('.gwt-TextBox').should('be.visible').type('setup').tab().
        type(`${new_password}`)
        cy.get('#login-submit-button').should('be.enabled').click()
    })
})