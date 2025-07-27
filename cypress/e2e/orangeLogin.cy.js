describe("Smart login with custom command", () => {
  beforeEach(() => {
    cy.login();
  });

  it("should land on dashboard", () => {
    cy.get('.oxd-topbar-header-title').should('contain', 'Dashboard');
  });
});
