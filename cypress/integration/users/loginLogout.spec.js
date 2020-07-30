beforeEach(() => {
    // Start tests from login page
    cy.visit("/login")
})


describe('Test login', () => {
  it('Should go to the login page', () => {
    cy.visit('/login')
    cy.url().should('include', '/login')
  })
})

it('should render SignIn component', () => {
  cy.root().should('contain','Username')
    .should('contain', 'Password')
})