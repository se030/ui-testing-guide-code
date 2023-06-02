/* eslint-disable no-undef */

describe('The Login Page', () => {
  beforeEach(() => {
    cy.intercept('POST', '/authenticate', {
      statusCode: 201,
      body: {
        user: {
          name: 'Alice Carr',
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
        },
      },
    });

    cy.intercept('GET', '/tasks', {
      statusCode: 201,
      body: {
        tasks: [
          { id: '1', state: 'TASK_INBOX', title: 'Build a date picker' },
          { id: '2', state: 'TASK_INBOX', title: 'QA dropdown' },
          {
            id: '3',
            state: 'TASK_INBOX',
            title: 'Write a schema for account avatar component',
          },
          { id: '4', state: 'TASK_INBOX', title: 'Export logo' },
          {
            id: '5',
            state: 'TASK_INBOX',
            title: 'Fix bug in input error state',
          },
          {
            id: '6',
            state: 'TASK_INBOX',
            title: 'Draft monthly blog to customers',
          },
        ],
      },
    });
  });

  it('user can authenticate using the login form', () => {
    const email = 'alice.carr@test.com';
    const password = 'k12h1k0$5;lpa@Afn';

    cy.visit('/');

    // Fill out the form
    cy.get('input[name=email]').type(email);
    cy.get('input[name=password]').type(`${password}`);

    // Click the sign-in button
    cy.get('button[type=submit]').click();

    // UI should display the user's task list
    cy.get('[aria-label="tasks"] li').should('have.length', 6);
  });
});
