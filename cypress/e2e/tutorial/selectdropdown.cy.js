/// <reference types ="Cypress"/>

describe('select drop down', () => {
    beforeEach(() => {
      
      cy.visit('https://www.saucedemo.com/v1/inventory.html')
    })
    it('verify select', () => {
        
        
        cy.get('.product_sort_container').select('Price (low to high)') 
        cy.get('.product_sort_container').select('Price (high to low)')      
       
    })
})