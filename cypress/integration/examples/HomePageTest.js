/// <reference types="Cypress" />

import HomePage from '../examples/PageObjects/HomePage'
import OderHistoryPage from '../examples/PageObjects/OrderHistoryPage'
import CheckoutPage from '../examples/PageObjects/CheckoutPage'
import { beforeEach } from 'mocha'
import OrderHistoryPage from '../examples/PageObjects/OrderHistoryPage'
import CreditSlipsPage from './PageObjects/CreditSlipsPage'

describe('My First Test Suit', () => {
  beforeEach(() => {

    cy.visit(Cypress.env('url') + '/index.php?controller=authentication&back=my-account')
    cy.fixture('euser').as('user')

    cy.get('@user').then((user) => {

      cy.login(user.userEmail, user.userPassword);
    })
    cy.fixture('pageObjectdata').then(function (data) {
      this.pageModelData = data
    })

  })

  afterEach(function () {
    cy.get('.logout').click()
  })


  it('Verify Home Page(Order History) of the Application', () => {
    const homePage = new HomePage();
    const orderhistoryPage = new OrderHistoryPage();

    //===========================Test Cases 1=================================================//
    homePage.getHomePageLabel().then(function () {
      cy.url().should('include', this.pageModelData.HomePageUrl)
    })

    //===========================Test Cases 2=================================================//
    homePage.getOrderHistoryLink().click();
    orderhistoryPage.getOrderhistoryLabel().then(function () {
      cy.url().should('include', this.pageModelData.OrderhistoryUlr)
    })
    //=============================Test Cases 3=================================================//
    orderhistoryPage.getOrderhistoryLabel().then(function (element) {
      const actualText1 = element.text()
      expect(actualText1.includes(this.pageModelData.Orderhistory)).to.be.true
      orderhistoryPage.backtoHomePage().click()
    })
  })


  it('Verify Home Page(Credit slips) of the Application', () => {

    const homePage = new HomePage();
    const creditSlipPage = new CreditSlipsPage();


    //===========================Test Cases 4=================================================//
    homePage.getHomePageLabel().then(function () {
      cy.url().should('include', this.pageModelData.HomePageUrl)
    })
    //===========================Test Cases 5=================================================//
    homePage.getCreditSlipsLink().click()
    cy.get('.navigation_page').then(function () {
      cy.url().should('include', this.pageModelData.CreditslipsUrl)
      creditSlipPage.backFromCreateSlipLabel().click()
    })
  })

  it('Checkout Page of the Application', () => {
    const checkoutPage = new CheckoutPage();
    checkoutPage.clickHomeLink();

    //===========================Test Cases 6=================================================//
    checkoutPage.getAddToCartButtons().then(function () {
    cy.selectProduct(this.pageModelData.productName)

    //===========================Test Cases 7=================================================//
    checkoutPage.getCartbutton().click()
    cy.url().should('include',this.pageModelData.shoppingSummaryUrl)
    checkoutPage.getProduct().each(($el, index, $list) => {
    const textProduct = $el.find('.product-name:visible').text()
    expect(textProduct.includes(this.pageModelData.productName)).to.be.true
    })
    //===========================Test Cases 8=================================================//
    checkoutPage.getProceedCheckOutButton().click()
    checkoutPage.getAddressLabel().should('include.text', this.pageModelData.AddressLabel)

    //===========================Test Cases 9=================================================//
    checkoutPage.getProceedToCheckOutButton().click()
    checkoutPage.getShippingLabel().should('include.text', this.pageModelData.ShippingLabel)

    //===========================Test Cases 10=================================================//
    checkoutPage.getTermsButton().click()

    //===========================Test Cases 11=================================================//
    checkoutPage.getShipConfirm().click()
    checkoutPage.getPaymentLabel().should('include.text', this.pageModelData.PaymentLabel)

    //===========================Test Cases 12=================================================//
    checkoutPage.getPaybyChequeButton().click()
    checkoutPage.getPaymentType().should('include.text', this.pageModelData.PaymentType)

    //===========================Test Cases 13=================================================//
    checkoutPage.getConfirmOrder().click()
    checkoutPage.getOrderCompleteInfo().should('include.text',this.pageModelData.OrderCompleteInfoText)


    })
  })



})

