class HomePage {

   getOrderHistoryLink() {

      return cy.get(':nth-child(1) > .myaccount-link-list > :nth-child(1) > a > span')
   }

   getCreditSlipsLink() {

      return cy.get('.myaccount-link-list > :nth-child(2) > a > span')
   }

   get myAddressLink() {

      return cy.get('.myaccount-link-list > :nth-child(3) > a > span')
   }

   getPersonalInformationLink() {

      return cy.get('.myaccount-link-list > :nth-child(4) > a > span')
   }


   getMyWishListLink() {

      return cy.get('.lnk_wishlist > a > span')
   }

   getMyAddresseLink() {

      return cy.get('.myaccount-link-list > :nth-child(4) > a > span')

   }


}

export default HomePage;