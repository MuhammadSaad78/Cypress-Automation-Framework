describe('Leave Management - Apply for Leave', () => {
  before(() => {
    cy.visit('https://example-hrms.com/login');

    cy.get('#username').type('testuser');
    cy.get('#password').type('Test@123');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/dashboard');
  });

  it('should allow user to apply for annual leave', () => {
    cy.visit('https://example-hrms.com/leave');

    // Select leave type
    cy.get('#leaveType').select('Annual');

    // Pick From and To dates
    cy.get('#fromDate').type('2025-08-05');
    cy.get('#toDate').type('2025-08-07');

    // Add reason
    cy.get('#reason').type('Family vacation');

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Verify success message
    cy.contains('Leave request submitted successfully').should('be.visible');
  });
});
