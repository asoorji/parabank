class TransferFundPage {
    constructor() {
      this.transferFundText = () => cy.xpath("//a[normalize-space()='Transfer Funds']"); 
      // this.successText = () => cy.xpath("//h1[normalize-space()='Transfer Funds']");
      this.amount = () => cy.xpath("//input[@id='amount']");
      this.transferButton = () => cy.xpath("//input[@value='Transfer']");
    }
  
    transferFund() {
      cy.fixture('testData').then((data) => {
      const transferAmount = data.transferAmount;
  
        this.transferFundText().click();
        
        // this.successText().should('be.visible');
        cy.wait(10000);
        this.amount().type(transferAmount);
        this.transferButton().click();
      });
    }
  }
  
  module.exports = TransferFundPage;
  