import LoginPage from './Pages/LoginPage';

describe("Logout Flow Test", () => {

  beforeEach(() => {
    cy.fixture("credentials").then((data) => {
      LoginPage.visit();
      LoginPage.enterUsername(data.username);
      LoginPage.enterPassword(data.password);
      LoginPage.clickLogin();
    });
  });

  it("should log out successfully", () => {
    LoginPage.clickUserDropdown();
    LoginPage.clickLogout();
    cy.url().should("include", "/auth/login");
  });

});
