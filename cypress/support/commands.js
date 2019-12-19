// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
Cypress.Commands.add("login", (email, password) => {
    cy.get('#email').type(email,{ log: false }).blur()
    cy.get('#passwd').type(password, { log: false }).blur()
    cy.get('#SubmitLogin > span').click()

});



Cypress.Commands.add("selectProduct", (productName) => {

    cy.get('.tab-content:visible').find('.product-container:visible').each(($el, index, $list) => {

        const textProduct = $el.find('h5[itemprop="name"]:visible').text()

        if (textProduct.includes(productName)) {

            cy.get('.button.ajax_add_to_cart_button.btn.btn-default:visible').eq(index).click({ force: true })

        }

    })



})





//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
