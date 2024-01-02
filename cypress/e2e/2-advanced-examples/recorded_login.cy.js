describe("Recording 1. 1. 2024. at 21:51:18", () => {
    it("tests Recording 1. 1. 2024. at 21:51:18", () => {
      cy.viewport(609, 651);
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      cy.get("form > div:nth-of-type(1) input").click();
      cy.get("form > div:nth-of-type(1) input").type("Admin");
      cy.get("form > div:nth-of-type(2) input").click();
      cy.get("form > div:nth-of-type(2) input").type("admin123");
      cy.get("button").click();
      cy.location("href").should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
      //cy.get("header li:nth-of-type(1) > a").click();
      cy.get("div.oxd-overlay button").click();
      cy.get("div.oxd-topbar-header-userarea i").click();
      cy.get("header li:nth-of-type(2) > a").click();
      cy.location("href").should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/help/support");
      cy.get("div.oxd-topbar-header-userarea i").click();
      cy.get("header li:nth-of-type(3) > a").click();
      cy.location("href").should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/pim/updatePassword");
      cy.get("div.oxd-topbar-header-userarea i").click();
      cy.get("div.oxd-topbar-header li:nth-of-type(4) > a").click();
      cy.location("href").should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    });
  });