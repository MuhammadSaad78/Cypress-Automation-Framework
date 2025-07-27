class DashboardPage {
  clickMenu(menuText) {
    cy.get('.oxd-main-menu-item').contains(menuText).click();
  }

  getPageHeader() {
    return cy.get('.oxd-topbar-header-breadcrumb > h6');
  }
}

export default DashboardPage;
