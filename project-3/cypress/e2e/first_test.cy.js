require("dotenv").config();
import {sumOfTwoPlusTwo} from "../functions/functions";

const  textfList = ["samsung", "apple", "nokia"];

console.log("[process.env.baseURL]", process.env.baseURL)

describe('template spec', () => {
  it('passes', () => {
    try {
      expect(sumOfTwoPlusTwo()).to.equal(4);
      expect(sumOfTwoPlusTwo()).to.equal(4);
      expect(sumOfTwoPlusTwo()).to.equal(4);
      expect(sumOfTwoPlusTwo()).to.equal(3);
    }
    catch(e) {
      console.log (e.message)
    }

    cy.visit(Cypress.env())

    for (const i of textfList) {
      cy.get('[name="search"]').type(i)
      cy.get(".button_color_green").click()
      cy.get("[name='search']").clear()
    }

    // cy.visit({url: process.env.baseURL || // bad practic
    //    'https://hard.rozetka.com.ua/processors/c80083/'})

    // cy.get(".catalog-settings__filter-button").click();
    // cy.contains("Бренд").click();
    // cy.get(".checkbox-filter__link").click({multiple: true});
    
    
  });
})