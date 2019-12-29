class CheckoutPage {

  clickHomeLink() {

    return cy.get('li > .btn > span').click()
  }

getAddToCartButtons(){

 return cy.get('.button.ajax_add_to_cart_button.btn.btn-default:visible')
}
getCartbutton(){

 return cy.get('[title="View my shopping cart"]')
}

getProceedCheckOutButton(){

 return cy.get('a[title="Proceed to checkout"]:visible')
}
getProceedToCheckOutButton(){
 return cy.get('button[name="processAddress"]')
}

getTermsButton(){

 return cy.get('#cgv')
}

getPaybyChequeButton(){
 return cy.get('.cheque')
}
getConfirmOrder(){
 return cy.get('#cart_navigation > .button > span')
}

getShipConfirm(){
 return cy.get('.cart_navigation > .button > span')
}

getProduct(){

return  cy.get('#center_column')
}

getAddressLabel(){
 return cy.get('.navigation_page')
}

getShippingLabel(){

 return cy.get('.step_current.four')
}

getPaymentLabel(){
 return cy.get('.step_current.last')
}

getPaymentType(){
 return cy.get('.page-subheading')
}
getOrderCompleteInfo(){
 return cy.get('.alert.alert-success')
}
}

export default CheckoutPage;
