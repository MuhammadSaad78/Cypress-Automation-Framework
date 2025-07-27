describe("Dashboard Tests", () => {

  beforeEach(() => {
    cy.fixture("credentials").then((userdata) => {
      cy.login(userdata.username, userdata.password);
    });
  });

  it("should load the dashboard", () => {
    cy.url().should("include", "/dashboard");
    cy.contains("Dashboard").should("be.visible");
  });

  it("should have Settings menu", () => {
    cy.get("nav").contains("Settings").should("exist");
  });

});
