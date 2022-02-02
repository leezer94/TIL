/// <reference types="cypress" />

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('should display default digit 0 on the screen', () => {
    cy.get('#total').should('contain', '0');
  });
});
