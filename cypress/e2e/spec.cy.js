describe('Cypress Tests', () => {
  it('Registration', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Cadastrar').click();
    cy.get('input[name="nome"]').type('Renato Motikawa');
    cy.get('input[name="email"]').type('renato@email.com');
    cy.get('input[name="password"]').type('Senha123');
    cy.get('input[name="confirm_password"]').type('Senha123');
    cy.contains('button', 'Cadastrar').click();
  })

  it('See pets for adoption and headers', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Ver pets disponíveis para adoção').click();
    cy.get('a.header__home').click();
    cy.contains('a', 'Ver pets disponíveis para adoção').click();
    cy.get('a.header__message').click();
    cy.get('a.header__home').click();
    cy.contains('a', 'Ver pets disponíveis para adoção').click();
    cy.get('a.card__contact').first().click();
  })
})