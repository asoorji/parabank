const RegisterPage = require('../pages/registerPage');
// require ('cypress-xpath')
describe('Parabank Functional Test', () => {
  it('Register New User', () => {

    const registerPage = new RegisterPage();
    const newUser = {
      firstName: 'John',
      lastName: 'Doe',
      address: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zipCode: '90210',
      phone: '555-555-5555',
      ssn: '123-45-6789',
      username: 'johndoe',
      password: 'password123',
      confirmPassword: 'password123',
    };
    registerPage.visit();
    registerPage.register(newUser);

    // cy.url().should('include', '/welcome'); 
  })
})