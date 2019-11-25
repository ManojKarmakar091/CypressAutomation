class MyWishListsPage

{

getProductName()
{

  return  cy.get('#name')
}

clickWishListSaveButton()
{

   return cy.get('#submitWishlist > span')
}

clickBackbuttonFromWishList()
{
    return cy.get('.footer_links > :nth-child(1) > .btn > span')
}


}


export default MyWishListsPage;