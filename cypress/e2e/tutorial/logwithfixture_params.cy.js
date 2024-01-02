/// <reference types ="Cypress"/>

describe("Recording 20. 10. 2023. at 23:38:15", () => {

  before(function() {
    // call data from json file for loging
    cy.fixture("example").then(function(loginData){
    this.loginData=loginData
    })

  });
  it("tests Recording 20. 10. 2023. at 23:38:15", function()  {
    cy.viewport(879, 646);
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.get("form > div:nth-of-type(1) input").click();
    cy.get("form > div:nth-of-type(1) input").type(this.loginData.username);
    cy.get("form > div:nth-of-type(2) input").type(this.loginData.password);
    cy.get("button").click();
    cy.location("href").should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    cy.get("div.oxd-layout-navigation p").click();
    cy.get("header li:nth-of-type(1) > a").click();
    cy.get("div.oxd-overlay button").click();
    cy.get("div.oxd-topbar-header-userarea i").click();
    cy.get("header li:nth-of-type(4) > a").click();
    cy.location("href").should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  });
});
