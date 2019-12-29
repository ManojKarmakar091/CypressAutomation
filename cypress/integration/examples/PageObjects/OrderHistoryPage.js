class OrderHistoryPage {

    getOrderhistoryLabel() {

        return cy.get('.navigation_page')
    }
    backtoHomePage() {

        return cy.get('.footer_links > :nth-child(1) > .btn > span')
    }
}

export default OrderHistoryPage;