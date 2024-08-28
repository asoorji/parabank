
class LoginPage {
    constructor() {
      this.usernameInput = () => cy.get('[data-cy=username-input]');
      this.passwordInput = () => cy.get('[data-cy=password-input]');
      this.addressInput = () => cy.get('[data-cy=address-input]');
      this.loginButton = () => cy.get('[data-cy=login-button]');
    }
  
    login(username, password) {
      this.usernameInput().type(username);
      this.passwordInput().type(password);
      this.loginButton().click();
    }
  }
  
  module.exports = LoginPage;