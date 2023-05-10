describe("Request a demo feature", () => {
  it("Sucessfully request a demo with only the mandatory fields", () => {
    cy.visit("/");
    cy.getByIdStartsWith("firstname").type("Maria");
    cy.getByIdStartsWith("lastname").type("De Almeida");
    cy.getByIdStartsWith("company").type("New Company");
    cy.getByIdStartsWith("email").filter(":visible").type("maria@gmail.com");
    cy.getByIdStartsWith("phone").type("1761388922");
    cy.getByIdStartsWith("jobtitle").type("My Job Title");
    cy.getByIdStartsWith("LEGAL_CONSENT.subscription_type").click();
    cy.getByIdStartsWith("submit").click();
  });
});
