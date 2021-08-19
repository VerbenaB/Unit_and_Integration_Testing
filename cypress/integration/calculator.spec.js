describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it("should have working number buttons", () => {
    cy.get("#number2").click();
    cy.get(".display").should("contain", "2");
  }),

    it("should display the result of the operation", () => {
      cy.get("#number2").click();
      cy.get("#operator_add").click();
      cy.get("#number7").click();
      cy.get("#operator-equals").click();
      cy.get(".display").should("contain", "9");
    }),

    it("should be able to chain multiple operations together", () => {
      cy.get("#number7").click();
      cy.get("#operator-multiply").click();
      cy.get("#operator-multiply").click();
      cy.get(".display").should("contain", "14");
    }),
    it("should work for negative numbers", () => {
      cy.get("#number4").click();
      cy.get("#operator-subtract").click();
      cy.get("#number6").click();
      cy.get("#operator-equals").click();
      cy.get(".display").should("contain", "-2");
    }),
    

    it("should work for decimal numbers", () => {
      cy.get("#number9").click();
      cy.get("#operator-divide").click();
      cy.get("#number4").click();
      cy.get("#decimal").click();
      cy.get("#number6").click();
      cy.get("#operator-equals").click();
      cy.get(".display").should("contain", "1.96");
    }),

    it("should display 0 when dividing a number by 0", () => {
      cy.get("#number9").click();
      cy.get("#operator-divide").click();
      cy.get("#number0").click();
      cy.get("#operator-equals").click();
      cy.get(".display").should("contain", "0");
    });

})