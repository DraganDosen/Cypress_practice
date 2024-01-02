describe('validate compex data using assert', function() {
    
    it('Assert', function() {
        
        cy.visit('www.google.com')
        let firstName ='TestingFunda'
        assert.include(firstName,'Test')
        assert.typeOf(firstName,'String')
        assert.notTypeOf(firstName,'Integer')
        //asserting objects
        let person ={
            firstName:'Testing',
            lastName:'Funda'
        };
        assert.property(person,'lastName')
        assert.deepPropertyVal(person,'lastName', 'Funda')
        //asserting arrays
        let assertingarrays = [1,2,3,4,5]
        assert.isArray(assertingarrays)
        assert.includeDeepMembers(assertingarrays,[1,2,3])
      
      
      })
})