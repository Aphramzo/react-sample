import HomePage from '../../support/page-objects/HomePage'

describe('login page elements', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.wrap(HomePage()).as('page')
  })
  
  it('displays user name text field', () => {
    cy.get('@page').then((page) => {
      page.login_link().should('be.visible')
    })
  })
  
  describe('navigation to login page', () => {
    it('should direct me to login page', () => {
      cy.currentPage((page) => {
        page.login_link().click()
        cy.url().then((url) => {
          expect(url).to.be.eql('http://localhost:3000/login')
        })
      })
    })
  })
  
})
