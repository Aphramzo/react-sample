import LoginPage from '../../support/page-objects/LoginPage'
import DashboardPage from '../../support/page-objects/DashboardPage'

describe('Dashboard Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login')
        cy.intercept({method: 'POST',url: '/prod/login',}).as('login-api');
        LoginPage().login('ironman', 'stark')
        cy.wrap(DashboardPage()).as('page')
    })

    describe('Welcome Message Components', () => {
        it('should dispay welcome message', () => {
            cy.wait('@login-api')
            expect(DashboardPage().welcome_message_container().should('be.visible'))
        })
    })

})
