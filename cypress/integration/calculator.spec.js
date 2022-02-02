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

  it('should display a maximum of 3 digits even if more than 3 digits are entered', () => {
    cy.get('.digits').contains('1').click();
    cy.get('.digits').contains('2').click();
    cy.get('.digits').contains('3').click();
    cy.get('.digits').contains('4').click();
    cy.get('#total').should('contain', '123');
  });

  it('should display default digit 0 when AC button is clicked', () => {
    cy.get('.digits').contains('4').click();
    cy.get('#total').should('contain', '4');
    cy.contains('AC').click();
    cy.get('#total').should('contain', '0');
  });
});
