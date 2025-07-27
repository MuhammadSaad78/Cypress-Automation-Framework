import Login from "./Pages/LoginPage";
import DashboardPage from "./Pages/Dashboard";

//const loginPage = new Login();
const dashboardPage = new DashboardPage();

describe("Sidebar Navigation Test", () => {
    console.log('Trigger test')

  beforeEach(() => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.login(); // custom command using fixtures
  });

  it("Should navigate to Admin page", () => {
    dashboardPage.clickMenu("Admin");
    cy.url().should('include', 'admin');
    dashboardPage.getPageHeader().should('contain', 'Admin');
  });

  it("Should navigate to PIM page", () => {
    dashboardPage.clickMenu("PIM");
    cy.url().should('include', 'pim');
    dashboardPage.getPageHeader().should('contain', 'PIM');
  });

  it("Should navigate to Leave page", () => {
    dashboardPage.clickMenu("Leave");
    cy.url().should('include', 'leave');
    dashboardPage.getPageHeader().should('contain', 'Leave');
  });

});
