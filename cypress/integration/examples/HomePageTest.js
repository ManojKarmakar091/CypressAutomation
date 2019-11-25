/// <reference types="Cypress" />

import HomePage from '../examples/PageObjects/HomePage'

context('My First Test Suit', () => {
    before(() => {
      cy.visit(Cypress.env('url'))
      cy.login();
    })
  
    
  
    it('Home Page of the Application', () => {
      const homePage =  new HomePage();
     
   cy.url().should('include','controller=my-account')
   homePage.getOrderHistoryLink().click();
   cy.url().should('include','controller=history')
   cy.get('.navigation_page').then(function(element){

     const actualText= element.text()

     expect(actualText.includes("Order history")).to.be.true
   })

   cy.get('.footer_links > :nth-child(1) > .btn > span').click()
   homePage.getCreditSlipsLink().click()
   cy.get('.page-heading').then(function(element){

    const actualText= element.text()

    expect(actualText.includes('Credit slips')).to.be.true

    cy.get('.footer_links > :nth-child(1) > .btn > span').click()

  })
 
 

  })
  })
  