describe('Cypress Tests', () => {
  it('Registration', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type('Renato Motikawa');
    cy.get('[data-test="input-email"]').type('renato@email.com');
    cy.get('[data-test="input-password"]').type('Senha123');
    cy.get('[data-test="input-confirm-password"]').type('Senha123');
    cy.get('[data-test="submit-button"]').click();
  })

  it('See pets for adoption and headers', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('.button').click();
    cy.get('.header__home').click();
    cy.get('.button').click();
    cy.get('.header__message').click();
    cy.get('.header__home').click();
    cy.get('.button').click();
    cy.get(':nth-child(1) > .card__contact').click();
  })
})