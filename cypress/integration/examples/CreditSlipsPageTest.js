/// <reference types="Cypress" />

import HomePage from '../examples/PageObjects/HomePage'
import CreditSlipsPage from '../examples/PageObjects/CreditSlipsPage'

context('My Second Test Suit', () => {
  before(() => {
    cy.visit(Cypress.env('url'))
    cy.fixture('euser').as('user')

    cy.get('@user').then((user) => {

      cy.login(user.userEmail, user.userPassword);
    })
  })
  after(function () {
    cy.get('.logout').click()
  })



  it('Credit Slips Page of the Application', () => {
    const homePage = new HomePage();
    const creditslipsPage = new CreditSlipsPage();
    homePage.getCreditSlipsLink().click();

    cy.get('.page-heading').then(function (element) {

      const actualText = element.text()

      expect(actualText.includes('Credit slips')).to.be.true

      cy.get('.footer_links > :nth-child(1) > .btn > span').click();
    })



  })
})