/// <reference types ="Cypress"/>

describe('bdd should assertion', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      // chrome recorder
      cy.visit('https://opensource-demo.orangehrmlive.com')
    })
    it('c...', () => {
        // First, let's click the "Clear completed" button
        // `contains` is actually serving two purposes here.
        // First, it's ensuring that the button exists within the dom.
        // This button only appears when at least one task is checked
        // so this command is implicitly verifying that it does exist.
        // Second, it selects the button so we can click it.
        cy.url().should('include','login')
        cy.title().should('eq','OrangeHRM')
        cy.get('.oxd-text--h5').should('have.text','Login')
      
      
      })
})