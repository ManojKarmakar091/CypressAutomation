class CheckoutPage {

  clickHomeLink() {

    return cy.get('li > .btn > span').click()
  }



}

export default CheckoutPage;
