let fixtures = {}

before(() => {
  cy.fixture('registeredUser.json').then((user) => {
      fixtures.registeredUser = user
  })
})

beforeEach(() => {
    // Start tests from login page
    cy.visit("/dashboard")
    // If user is logged in, log out
    cy.get('[data-cy=navbar]').then((navbar)=> {
      if(navbar.find('[data-cy=logout]').length > 0) {
        cy.get('[data-cy=logout').click()
      }
    })
})


describe('Test login', () => {
  it('Should redirect to the login page if user not logged in and render sign in component', () => {
    cy.visit('/dashboard')
    cy.url().should('include', '/dashboard')
    cy.root().should('contain','Username')
    .should('contain', 'Password')
  })
  it('can login', () => {
    cy.get("[data-cy=username]").type(fixtures.registeredUser.username)
    cy.get("[data-cy=password]").type(fixtures.registeredUser.password)
    cy.get("[data-cy=loginButton]").click()
    cy.get('[data-cy=quotes]').should('be.visible')
  })
})

describe('Logout user', () => {
  it('should logout user', () => {
  cy.get("[data-cy=username]").type(fixtures.registeredUser.username)
  cy.get("[data-cy=password]").type(fixtures.registeredUser.password)
  cy.get("[data-cy=loginButton]").click()
  cy.get('[data-cy=logout]').click()
  cy.get('[data-cy=home]').should('be.visible')
  })
})