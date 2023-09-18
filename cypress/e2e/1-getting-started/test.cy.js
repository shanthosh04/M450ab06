describe("Erste Test Suite", () => {
    it("Eine Website öfnnen", () => {
      cy.visit("https://www.google.com");
      cy.get("#L2AGLb").click();
    });

  });
  