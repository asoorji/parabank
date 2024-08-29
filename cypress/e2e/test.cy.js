const RegisterPage = require('../pages/registerPage');
const LoginPage = require('../pages/loginPage');
const HomePage = require('../pages/homePage');
const OpenAccountPage = require('../pages/openAccountPage');
const TransferFundPagee = require('../pages/transferFundPage');
const RequestLoanPage = require('../pages/requestLoanPage');
const testData = require('../fixtures/testData.json');

describe('Parabank Functional Test', () => {
  const registerPage = new RegisterPage();
  const loginPage = new LoginPage();
  const homePage = new HomePage();
  const openAccountPage = new OpenAccountPage();
  const transferFundPage = new TransferFundPagee();
  const requestLoanPage = new RequestLoanPage();

  it('Register New User with a unique username', () => {
    let user = registerPage.generateUser();
    registerPage.visit();
    registerPage.register(user);

    // Assert that the account was created successfully
    cy.xpath("//p[contains(text(),'Your account was created successfully. You are now')]").should('be.visible');
    cy.xpath(`//h1[normalize-space()='Welcome ${user.username}']`).should('be.visible');
  })

  it('Login with registered user', () => {
    loginPage.visit();
    const username = Cypress.env('username');
    const password = Cypress.env('password');
    loginPage.login(username, password);
    
    // Assert that the user is on the overview page after login
    cy.url().should('include', '/overview');
    cy.xpath("//h1[normalize-space()='Accounts Overview']").should('be.visible');
  })

  it('Invalid Login Credential', () => {
    loginPage.visit();
    const invalidUsername = 'wrongUsername';
    const invalidPassword = 'wrongPassword';
    loginPage.login(invalidUsername, invalidPassword);

    // Assert that the error message is displayed
    cy.xpath("//h1[normalize-space()='Error!']").should('be.visible');
    cy.xpath("//p[@class='error']").should('be.visible');
  })

  it('Open an Account', () => {
    loginPage.visit();
    const username = Cypress.env('username');
    const password = Cypress.env('password');
    loginPage.login(username, password);
    openAccountPage.openAccount();

    // Assert that the account was opened successfully
    cy.xpath("//h1[normalize-space()='Account Opened!']").should('be.visible');
    cy.xpath("//p[normalize-space()='Congratulations, your account is now open.']").should('be.visible');
    cy.contains('Your new account number').should('be.visible');
  })

  it(' Transfer Funds', () => {
    loginPage.visit();
    const username = Cypress.env('username');
    const password = Cypress.env('password');
    loginPage.login(username, password);
    transferFundPage.transferFund();

    cy.xpath("//h1[normalize-space()='Transfer Complete!']").should('be.visible');
  })

  it('Request Loan', () => {
    loginPage.visit();
    const username = Cypress.env('username');
    const password = Cypress.env('password');
    loginPage.login(username, password);
    
    requestLoanPage.apply()
    cy.xpath("//h1[normalize-space()='Loan Request Processed']").should('be.visible');
  })

  it('Logout', () => {
    loginPage.visit();
    const username = Cypress.env('username');
    const password = Cypress.env('password');
    loginPage.login(username, password);

    homePage.logout();
    cy.xpath("//h2[normalize-space()='Customer Login']").should('be.visible');
  })
})