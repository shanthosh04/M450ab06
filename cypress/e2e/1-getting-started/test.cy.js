describe("Meine erste Test Suite", () => {
    it("Testfall 1: Besuche eine Website und überprüfe den Titel", () => {
      cy.visit("https://www.google.com");
      cy.title().should("eq", "Beispiel Domain");
    });
  
    it("Testfall 2: Überprüfe das Vorhandensein eines Elements", () => {
      cy.visit("https://www.google.com/binladen");
      cy.get("h1").should("exist");
    });
  });
  