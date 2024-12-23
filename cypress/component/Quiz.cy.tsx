import Quiz from "../../client/src/components/Quiz"

describe('Quiz Component', () => {
  beforeEach(() => {
    cy.intercept({
        method: 'GET',
        url: '/api/questions/random'
      },
      {
        fixture: 'questions.json',
        statusCode: 200
      }
      ).as('getRandomQuestion')
    });

  it('Page Loads', () => {
    cy.mount(<Quiz />);
    cy.get('button').should('exist')
    })

  it('Quiz Starts', () => {
    cy.mount(<Quiz />);
    cy.get('button').should('exist').click();
    cy.get('.card').should('exist');
    cy.get('h2').should('exist');
  })

  it('Quiz Finishes', () => {
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    cy.get('button').contains('1').click();
    cy.get('.alert-success').should('be.visible').and('contain', 'Your score');
  });

  it('Quiz Resets', () => {

    cy.mount(<Quiz />);

    cy.get('button').contains('Start Quiz').click();

    cy.get('button').contains('1').click();

    cy.get('button').contains('Take New Quiz').should('exist').click();

    cy.get('.card').should('exist');
    cy.get('h2').should('exist');
  })
})

