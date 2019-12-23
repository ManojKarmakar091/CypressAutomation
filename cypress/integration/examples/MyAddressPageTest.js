/// <reference types="Cypress" />

import HomePage from '../examples/PageObjects/HomePage'
import MyAddressPage from '../examples/PageObjects/MyAddressPage'
import MyWishListPage from '../examples/PageObjects/MyWishListsPage'


describe('My Second Test Suit', () => {
  before(() => {

    cy.visit(Cypress.env('url'))
    cy.fixture('euser').as('user')

    cy.get('@user').then((user) => {

      cy.login(user.userEmail, user.userPassword);
    })
    cy.fixture('example').then(function (data) {
      this.data = data
  })
  })
  
  after(function () {
    cy.get('.logout').click()
  })



  it('MyAddress Page of the Application', () => {
    const homePage = new HomePage();
    const myaddressPage = new MyAddressPage();


    homePage.getMyAddresseLink().click();

    //  cy.get('.main-page-indent > .btn > span').click();


    cy.get(':nth-child(1) > label').then(function () {

      myaddressPage.getFirstName().type(this.data.firstname)

    })
    cy.get(':nth-child(2) > label').then(function () {

      myaddressPage.getLastName().type(this.data.lastname)

    })


    //  cy.get(':nth-child(3) > label').then(function(){

    //   myaddressPage.getCompanyName().type(this.data.company)

    //  })
    // cy.get('#email').then(function(){

    //   myaddressPage.getAddress1().type(this.data.address1)

    //  })
    cy.get(':nth-child(5) > label').then(function () {

      myaddressPage.getAddress2().type(this.data.address2)

    })

    cy.get(':nth-child(6) > label').then(function () {

      myaddressPage.getCity().type(this.data.city)

    })

    cy.get('.id_state > label').then(function () {

      myaddressPage.getState().select(this.data.state)

    })
    cy.get('.postcode > label').then(function () {

      myaddressPage.getPostalCode().type(this.data.postalcode)

    })

    cy.get(':nth-child(9) > label').then(function () {

      myaddressPage.getCountry().select(this.data.country)

    })
    cy.get('.phone-number > label').then(function () {

      myaddressPage.getHomePhone().type(this.data.homephonenumber)

    })
    cy.get(':nth-child(13) > label').then(function () {

      myaddressPage.getPhoneNumber().type(this.data.mobilephonenumber)

    })
    cy.get(':nth-child(15) > label').then(function () {

      myaddressPage.getAdditionalInfo().type(this.data.additionalInfo)

    })
    cy.get('#adress_alias > label').then(function () {

      myaddressPage.getAlias().type(this.data.alias)

    })
    cy.get('#submitAddress > span').click();
  })
})