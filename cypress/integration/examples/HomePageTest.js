/// <reference types="Cypress" />

import HomePage from '../examples/PageObjects/HomePage'
import { beforeEach } from 'mocha'

describe('My First Test Suit', () => {
  beforeEach(() => {

    cy.visit(Cypress.env('url'))
    cy.fixture('euser').as('user')

    cy.get('@user').then((user) => {

      cy.login(user.userEmail, user.userPassword);
    })
    cy.fixture('orderHistorydata').then(function (data) {
    this.data1 = data
})
cy.fixture('creditSlipdata').then(function (data) {
  this.data2 = data
})
  })

  afterEach(function () {
    cy.get('.logout').click()
  })


  it('Verify Home Page(Order History) of the Application', () => {
    const homePage = new HomePage();

    cy.url().should('include', 'controller=my-account')
    homePage.getOrderHistoryLink().click();
    cy.url().should('include', 'controller=history')
    cy.get('.page-heading').then(function (element) {

      const actualText1 = element.text()

      expect(actualText1.includes(this.data1.Orderhistory)).to.be.true
      cy.get('.footer_links > :nth-child(1) > .btn > span').click()
    })
  })


  it('Verify Home Page(Credit slips) of the Application', () => {

    const homePage = new HomePage();
    cy.url().should('include', 'controller=my-account')
    homePage.getCreditSlipsLink().click()
    cy.url().should('include', 'controller=order-slip')
    cy.get('.page-heading').then(function (element) {

      const actualText = element.text()

      expect(actualText.includes(this.data2.Creditslips)).to.be.true

      cy.get('.footer_links > :nth-child(1) > .btn > span').click()
    })

  })



})

