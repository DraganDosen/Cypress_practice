describe('API', () => {
    
    it('verify API Post', () => {
        
        
        cy.request('POST','https://dummy.restapiexample.com/api/v1/create',{
            "name": "Dragan",
            "salary": "12300",
            "age": "48"
          }).then((response)=>
    
        {
            // response.body is automatically serialized into JSON
            //expect(response.body).to.have.property('id', '1') // true
            expect(response.status).equals(200)// true
            expect(response.body).to.have.property('message','Successfully! Record has been added.')
            /*expect(response.body).to.deep.equal({
               
                    "status": "success",
                    "data": {
                        "name": "Dragan",
                        "salary": "12300",
                        "age": "48"
                        //"id": 6397
                    },
                    "message": "Successfully! Record has been added."
               
            })*/
            
          }
        )
    })
})