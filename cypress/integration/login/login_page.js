import LoginPage from '../../support/page-objects/LoginPage'

describe('login page elements', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login')
    cy.wrap(LoginPage()).as('page')
  })
  
  it('displays user name text field', () => {
    cy.get('@page').then((page) => {
      page.username_input().should('be.visible')
    })
  })
  
  it('displays password text field', () => {
    cy.get('@page').then((page) => {
      page.password_input().should('be.visible')
    })
  })

  it('displays submit button', () => {
    cy.get('@page').then((page) => {
      page.submit_button().should('exist')
    })
  })
  
  
  describe('login in low', () => {
    it('should let me login after entering username and password', () => {
      cy.currentPage((page) => {
        page.username_input().type('test')
        page.password_input().type('123')
        page.submit_button().click()
      })
    })
    
  })
  
})
