/// <reference types ="Cypress"/>

describe('Custom command - login  method', () => {
    beforeEach(() => {
      // npx cypress run  -- "cypress/e2e/apiGet.cy.js" 
      // Login method is in commands file
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })
    it('c...', () => {
        
        cy.Login('Admin','admin123')
      })
})