/// <reference types="cypress" />

context("Reviews: Home variant", function () {
  beforeEach(function () {
    cy.visit("/");
  });

  it("should show the campus signal wall homepage variant", function () {
    cy.get("[data-test=home-radical-hero]").should("be.visible");
    cy.contains("Campus signal wall").should("be.visible");
    cy.get("a[data-test=home-hero-search]").should(
      "have.attr",
      "href",
      "/search",
    );
    cy.get("a[data-test=home-hero-review]").should(
      "have.attr",
      "href",
      "/submit",
    );
    cy.get("[data-test=home-live-signal]").should("have.length", 3);
    cy.contains("Live review wire").should("be.visible");
  });
});
