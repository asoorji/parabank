class RequestLoanPage {
    constructor() {
      this.requestLoanText = () => cy.xpath("//a[normalize-space()='Request Loan']"); 
      // this.successText = () => cy.xpath("//h1[normalize-space()='Apply for a Loan']");
      this.loanAmount = () => cy.xpath("//input[@id='amount']"); 
      this.downPayment = () => cy.xpath("//input[@id='downPayment']"); 
      this.applyButton = () => cy.xpath("//input[@value='Apply Now']"); 
    } 

    apply() {
      cy.fixture('testData').then((data) => {
        const loanAmount = data.loanAmount;
        const downPayment = data.downPayment;
       
        this.requestLoanText().click();
        // this.successText().should('be.visible');
        cy.wait(10000);
        this.loanAmount().type(loanAmount);
        this.downPayment().type(downPayment);
        this.applyButton().click();
      });
    }
  }
  
  module.exports = RequestLoanPage;
  