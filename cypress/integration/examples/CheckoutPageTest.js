/// <reference types="Cypress" />
import HomePage from '../examples/PageObjects/HomePage'
import CheckoutPage from '../examples/PageObjects/CheckoutPage'

describe('My First Test Suit', () => {
    before(() => {

        cy.visit(Cypress.env('url'))
        cy.fixture('euser').as('user')

        cy.get('@user').then((user) => {

            cy.login(user.userEmail, user.userPassword);
        })
        cy.fixture('example').then(function (data) {
            this.data = data
        })
        after(function () {
            cy.get('.logout').click()
          })
    })
    


    it('Checkout Page of the Application', () => {

        const checkoutPage = new CheckoutPage();


        checkoutPage.clickHomeLink();

        cy.get('.button.ajax_add_to_cart_button.btn.btn-default:visible').then(function () {

            cy.selectProduct(this.data.productName)
            cy.get('[title="View my shopping cart"]').click()
            cy.get('.cart_navigation > .button > span').click()
            cy.get('.cart_navigation > .button > span').click()
            cy.get('#cgv').click()
            cy.get('.cart_navigation > .button > span').click()
            cy.get('.cheque').click()
            cy.get('#cart_navigation > .button > span').click()
            cy.get('.alert').should('contain', 'Your order on My Store is complete')
        })








    })
})
