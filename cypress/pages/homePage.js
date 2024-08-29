class HomePage {
    constructor() {
      this.logoutButton = () => cy.xpath("//a[normalize-space()='Log Out']"); 
    }
  
    logout() {
      this.logoutButton().click();
    }
  }
  
  module.exports = HomePage;
  