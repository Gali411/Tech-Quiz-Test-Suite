describe('Quiz Component', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:3001/')
  });

  it('Page Loads', () => {
    cy.get('button').should('exist')
  })
  
  it('Quiz starts', () => {
    cy.get('button').should('exist').click();
    cy.get('.card').should('exist');
    cy.get('h2').should('exist');
  })

  it('Quiz Finishes', () => {
    cy.get('button').contains('Start Quiz').click();
    for (let i = 0; i < 10; i++) {
      cy.get('button').contains('1').click();
    }
    cy.get('.alert-success').should('be.visible').and('contain', 'Your score');
  });

  it('Quiz Resets', () => {
    cy.get('button').contains('Start Quiz').click();
    for (let i = 0; i < 10; i++) {
      cy.get('button').contains('2').click();
    }
    cy.get('button').contains('Take New Quiz').should('exist').click();
    cy.get('.card').should('exist');
    cy.get('h2').should('exist');
  })
})

