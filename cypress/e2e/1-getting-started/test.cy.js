describe('open google', () => {
  it('passes', () => {
    cy.visit('https://google.com')
    cy.get("#L2AGLb").click()
    cy.get("#APjFqb").type("CsBe{enter}")
  })

})