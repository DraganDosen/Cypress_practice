/// <reference types ="Cypress"/>

describe('API', () => {
    
    it('verify API', () => {
        
        
        cy.request('https://dummy.restapiexample.com/api/v1/employee/1').then((response)=>
    
        {
            // response.body is automatically serialized into JSON 
            // npx cypress open
            //expect(response.body).to.have.property('id', '1') // true
            expect(response.status).equals(200)// true
            let empsalary = response.body.data.employee_salary
            expect(empsalary ).equals(320800)
            expect(response.body).to.have.property('message','Successfully! Record has been fetched.')
            expect(response.body).to.deep.equal({
                "status": "success",
                "data": {
                    "id": 1,
                    "employee_name": "Tiger Nixon",
                    "employee_salary": 320800,
                    "employee_age": 61,
                    "profile_image": ""
                },
                "message": "Successfully! Record has been fetched."
            })
            
          }
        )
    })
})