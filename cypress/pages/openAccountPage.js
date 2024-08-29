class OpenAccountPage {
    constructor() {
      this.openAccountText = () => cy.xpath("//a[normalize-space()='Open New Account']"); 
      this.openAccountButton = () => cy.xpath("//input[@value='Open New Account']");
      this.successText = () => cy.xpath("//h1[normalize-space()='Open New Account']");
    }
  
    openAccount() {
      this.openAccountText().click();
      this.successText().should('be.visible');
      cy.wait(10000);
      this.openAccountButton().click();
    }
  }
  
  module.exports = OpenAccountPage;
  