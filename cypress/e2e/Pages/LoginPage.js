class Login {
  visit() {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
  }

  enterUsername(username) {
    cy.get('input[name="username"]').type(username);
  }

  enterPassword(password) {
    cy.get('input[name="password"]').type(password);
  }

  clickLogin() {
    cy.get('button[type="submit"]').click();
  }

  clickUserDropdown() {
    cy.get('.oxd-userdropdown-name').click();
  }

  clickLogout() {
    cy.contains("Logout").click();
  }
}

export default new Login;
