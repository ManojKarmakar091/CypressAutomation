class MyAddressPage {

   getFirstName() {
      return cy.get('#firstname')
   }


   getLastName() {

      return cy.get('#lastname')
   }

   getCompanyName() {
      return cy.get('#company')
   }
   getAddress1() {
      return cy.get('#address1')
   }

   getAddress2() {
      return cy.get('#address2')
   }

   getCity() {

      return cy.get('#city')
   }
   getState() {
      return cy.get('#id_state')
   }

   getPostalCode() {
      return cy.get('#postcode')
   }


   getCountry() {
      return cy.get('#id_country')
   }

   getHomePhone() {

      return cy.get('#phone')
   }

   getPhoneNumber() {
      return cy.get('#phone_mobile')
   }

   getAdditionalInfo() {
      return cy.get('#other')
   }

   getAlias() {
      return cy.get('#alias')
   }


   get addNewAddress() {
      return cy.get('.main-page-indent > .btn > span')
   }
}

export default MyAddressPage;