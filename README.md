# Parabank GUI Automation with Cypress

This project automates the testing of the Parabank website using Cypress and the Page Object Model (POM) framework. The tests cover essential scenarios to ensure the functionality and reliability of the website.

## Test Scenarios

- User Registration
- Login (Positive and Negative)
- Open an Account
- Transfer Funds
- Request a Loan
- Logout

## Features

- **Faker for Test Data:** Faker is used to generate dynamic test data such as usernames, addresses, and phone numbers.
- **Username Uniqueness Check:** The automation script checks for existing usernames during registration and generates a unique username if needed.
- **Retry Mechanism:** The retry mechanism is implemented to handle flaky tests and ensure reliable test execution.
- **Daily Email Notifications:** GitHub Actions configuration includes a step to send daily email notifications with test results.

## Project Setup

### Prerequisites

Before getting started, ensure you have the following installed:

- Node.js (Version 14 or later)
- npm (comes with Node.js)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/asoorji/parabank.git
   cd parabank
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

## Running Tests

To execute the tests locally:

1. **Run Cypress Tests:**

   ```bash
   npx cypress open
   ```

   This will open the Cypress Test Runner where you can select and run the tests interactively.

2. **Run Tests Headlessly:**

   ```bash
   npx cypress run
   ```

## Configuration

- **Cypress Configuration:** Configuration is managed in `cypress.config.js`. Update environment variables and base URL as needed.
- **Test Data:** Test data is managed using `cypress/fixtures/testData.json`. You can modify this file to update test inputs such as usernames, passwords, and transfer amounts.
- **Retry Mechanism:** The test retry mechanism is configured to handle flaky tests. The retries are set in `cypress.config.js` for both `runMode` and `openMode`.
- **CI/CD Integration:** The project uses GitHub Actions for Continuous Integration and Deployment. The configuration file `.github/workflows/main.yml` is set up to run tests on each push or pull request and to generate and upload test reports.

## Reporting

- **Mochawesome Reports:** Test results are reported using Mochawesome. The reports are generated in HTML and JSON formats and stored in the `mochawesome-report` directory. Use the following command to generate the report:

  ```bash
  npm run report
  ```

- **Cypress Dashboard:** For real-time test monitoring and detailed reports, integrate with the Cypress Dashboard by configuring `cypress.config.js` with your project ID and record key.

