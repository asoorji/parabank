require ('cypress-xpath')
const { faker } = require('@faker-js/faker');

class RegisterPage {
    constructor() {
      this.firstNameInput = () => cy.xpath("//input[@id='customer.firstName']");
      this.lastNameInput = () => cy.xpath("//input[@id='customer.lastName']");
      this.addressInput = () => cy.xpath("//input[@id='customer.address.street']")
      this.cityInput = () => cy.xpath("//input[@id='customer.address.city']");
      this.stateInput = () => cy.xpath("//input[@id='customer.address.state']");
      this.zipCodeInput = () => cy.xpath("//input[@id='customer.address.zipCode']");
      this.phoneInput = () => cy.xpath("//input[@id='customer.phoneNumber']");
      this.ssnInput = () => cy.xpath("//input[@id='customer.ssn']");
      this.usernameInput = () => cy.xpath("//input[@id='customer.username']");
      this.passwordInput = () => cy.xpath("//input[@id='customer.password']");
      this.confirmPasswordInput = () => cy.xpath("//input[@id='repeatedPassword']");
      this.registerButton = () => cy.xpath("//input[@value='Register']");  
      this.usernameExistsError = () => cy.contains('This username already exists'); 
    }
  
    generateUser() {
      return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        phone: `+234${faker.phone.number('##########')}`,
        ssn: faker.finance.account(9), 
        username: faker.internet.userName(),
        password: faker.internet.password(),
        confirmPassword: '',
      };
    }

    visit() {
      cy.visit('/register.htm'); 
    }

    register(user) {
      this.firstNameInput().type(user.firstName);
      this.lastNameInput().type(user.lastName);
      this.addressInput().type(user.address);
      this.cityInput().type(user.city);
      this.stateInput().type(user.state);
      this.zipCodeInput().type(user.zipCode);
      this.phoneInput().type(user.phone);
      this.ssnInput().type(user.ssn);
      this.usernameInput().type(user.username);
      this.passwordInput().type(user.password);
      this.confirmPasswordInput().type(user.password);
      this.registerButton().click();
    }

    checkUsernameExists() {
      return this.usernameExistsError().should('be.visible');
    }
  }
  
  module.exports = RegisterPage;