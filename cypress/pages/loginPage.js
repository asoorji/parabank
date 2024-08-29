
class LoginPage {
    constructor() {
      this.usernameInput = () => cy.xpath("//input[@name='username']");
      this.passwordInput = () => cy.xpath("//input[@name='password']");
      this.loginButton = () => cy.xpath("//input[@value='Log In']");
    }

    visit() {
      cy.visit('/'); 
    }
  
    login(username, password) {
      this.usernameInput().type(username);
      this.passwordInput().type(password);
      this.loginButton().click();
    }
  }
  
  module.exports = LoginPage;