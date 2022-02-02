/// <reference types="cypress" />

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('should display default digit 0 on the screen', () => {
    cy.get('#total').should('contain', '0');
  });

  it('should display digit that is selected when digit button is clicked', () => {
    cy.get('.digits').contains('4').click();
    cy.get('#total').should('contain', '4');
  });
});
