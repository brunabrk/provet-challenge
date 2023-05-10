Cypress.Commands.add("getByIdStartsWith", (idStarts) =>
  cy.get(`[id^=${idStarts}-]`)
);
