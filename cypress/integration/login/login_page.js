import LoginPage from '../../support/page-objects/LoginPage'

describe('Login Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login')
        cy.intercept({method: 'POST',url: '/prod/login',}).as('login-api');
        cy.wrap(LoginPage()).as('page')
    })

    describe('Login Components', () => {
      Object.getOwnPropertyNames(LoginPage().login_components).forEach((comp) => {
          it(`displays ${comp}`, () => {
            cy.get('@page').then((page) => {
              page[comp]().should('be.visible')
            })
          })
      })
    })
  
  
  describe('login in flow', () => {

    describe('with valid username and password', () => {
        beforeEach(() => {
            cy.currentPage((page) => {
                page.login('ironman', 'stark')
            })
        })

        it('should return 200 in login api', () => {
            cy.wait('@login-api').then(({request, response}) => {
                expect(response.statusCode).to.eq(200)
            })
        })

        it('should redirect me to dashboard page', () => {
            cy.wait('@login-api')
            cy.url().then((url) => {
                expect(url).to.be.eql('http://localhost:3000/dashboard')
            })
        })
    })

    describe('with invalid credentials', () => {
        it('should return 401 with bad password', () => {
            cy.currentPage((page) => {
                page.login('asdf', 'password')
                cy.wait('@login-api').then(({request, response}) => {
                    expect(response.statusCode).to.eq(401)
                })
            })
        })
    })
  })
  
})
