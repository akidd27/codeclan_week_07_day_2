describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2');
  });

  it('should display the result of operations', () => {
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4');
  });

  it('should be able to chain operations', () => {
    cy.get('#number8').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '1');
  });

  it('should compute correctly for large numbers', () => {
    cy.get('#number1').click();
    for(let n=0; n<20; n++){
      cy.get('#number0').click();
    };
    cy.get('#operator-multiply').click();
    for(let n=0; n<5; n++){
      cy.get('#number8').click();
    };
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '8.8888e+24');
  });

  it('should correctly display negative results', () => {
    cy.get('#number4').click();
    cy.get('#operator-subtract').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-5');
  });

  it('should be able to handle decimals', () => {
    cy.get('#number2').click();
    cy.get('#decimal').click();
    cy.get('#number7').click();
    cy.get('#operator-divide').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0.9');
  });

  it('should display undefined on division by zero', () => {
    cy.get('#number7').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'undefined');
  })
})