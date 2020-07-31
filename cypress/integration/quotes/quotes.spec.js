// adding testing for add a quote and delete a quote

let fixtures = {}

beforeEach(() => {
      // Start tests from home page
      cy.visit("/")
      // If user is logged in, log out
      cy.get('[data-cy=navbar]').then((navbar)=> {
        if(navbar.find('[data-cy=logout]').length > 0) {
          cy.get('[data-cy=logout').click()
        }
      })
      cy.fixture("newQuote.json").then(quote => {
        fixtures.newQuote = quote
        // If the test post already exists, delete it
        deleteQuote(quote)
      })
})

function deleteQuote(quote) {
	// If the quote exists, delete it
	cy.root().then(root => {
		if (root.find(quote.name).length > 0) {
			cy.contains(quote.name).click({force: true})
			cy.get("[data-cy=deleteButton]").click()
		}
	})
}

describe('Add a quote', () =>{
  it("should display request a call form", () => {
    cy.get("[data-cy=addQuote]").click()
		cy.get("[data-cy=addQuoteForm]").should("be.visible")
  })
  it("should add quote", () => {
		cy.get("[data-cy=addQuote").click()
		cy.get("[data-cy=addQuoteForm").click()
		cy.get("[data-cy=name").type(fixtures.newQuote.name)
    cy.get("[data-cy=phone").type(fixtures.newQuote.phone)
    cy.get("[data-cy=message").type(fixtures.newQuote.message)
    cy.get("[data-cy=addQuoteButton").click()
    // log in to verify quote was added 
    cy.visit('/dashboard')
    cy.get("[data-cy=username]").type(fixtures.registeredUser.username)
    cy.get("[data-cy=password]").type(fixtures.registeredUser.password)
    cy.get("[data-cy=loginButton]").click()
    cy.get('[data-cy=quotes]').should("contain", fixtures.newQuote.name)
    // If the quote exists, delete it
		cy.contains(fixtures.newQuote.name).then(newQuote => {
			newQuote.click()
			cy.get("[data-cy=deleteButton").click()
    })
    // verify quote was deleted
    cy.get('[data-cy=quotes]').should("not.contain", fixtures.newQuote.name)

})
