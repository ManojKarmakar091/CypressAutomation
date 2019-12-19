/// <reference types="Cypress" />

import HomePage from '../examples/PageObjects/HomePage'
import MyWishListPage from '../examples/PageObjects/MyWishListsPage'

context('My Second Test Suit', () => {
  before(() => {
    cy.visit(Cypress.env('url'))
    cy.fixture('euser').as('user')

    cy.get('@user').then((user) => {

      cy.login(user.userEmail, user.userPassword);
    })
  })
  afterEach(function () {
    cy.get('.logout').click()
  })



  it('Wish List Page of the Application', () => {
    const homePage = new HomePage();
    const mywishlistsPage = new MyWishListPage();

    homePage.getMyWishListLink().click()


    cy.get('.footer_links > :nth-child(1) > .btn > span').click()

    homePage.getMyWishListLink().click()
    cy.get('.page-heading').then(function (element) {

      const actualText = element.text()

      expect(actualText.includes('My wishlists')).to.be.true
    })

    mywishlistsPage.getProductName().type('Printed Chiffon Dress')
    mywishlistsPage.clickWishListSaveButton().click()
    cy.get('td:nth-child(1)').then(function (element) {

      const wishlistText = element.text()


      expect(wishlistText.includes("Printed Chiffon Dress")).to.be.true

      cy.get('.footer_links > :nth-child(1) > .btn > span').click()

    })
  })
})