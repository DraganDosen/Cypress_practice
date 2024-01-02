/// <reference types ="Cypress"/>

describe('example to-do app', () => {
    beforeEach(() => {
      // npx cypress open
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      // chrome recorder
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })
    it('c...', () => {
        // First, let's click the "Clear completed" button
        // `contains` is actually serving two purposes here.
        // First, it's ensuring that the button exists within the dom.
        // This button only appears when at least one task is checked
        // so this command is implicitly verifying that it does exist.
        // Second, it selects the button so we can click it.
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        cy.get(':nth-child(3) > .oxd-main-menu-item > .oxd-text').click()
        cy.get('.oxd-topbar-body-nav > ul').contains('Apply').click()
      
      })
})