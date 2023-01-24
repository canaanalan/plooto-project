import { customerPages } from "../../support/pageObjects/customerPages";

// Ensure post-migration results match current visuals/data

describe("Visual regression tests with Percy", () => {
  it("Verify Login and Company Selection pages", () => {
    customerPages.openLoginPage();
    customerPages.loginPage();
    customerPages.companySelectionPage();
  });

  it("Verify Dashboard page", () => {
    customerPages.openDashboardPage();
    customerPages.dashboardPage();
  });

  it("Verify Payment Approvals and Pending Payments sections", () => {
    customerPages.openDashboardPage();
    customerPages.paymentApprovalsSection();
    customerPages.pendingPaymentsSection();
  });

  it("Verify Approved Payment page", () => {
    customerPages.openApprovedPaymentPage();
    customerPages.approvedPaymentPage();
  });
});

//  The data points reflected in the UI should be identical post-migration
//  in order to ensure continuity between snapshots.
//
//  Currently, I'm unable to retrieve any data by monitoring the network traffic.
//  To illustrate how this data could be manipulated I added the following fixture
//  in the 'fixtures' folder:  [ companiesDataExample.json ]
//
//  Mocking the data with a fixture can ensure values
//  are consistent before the DOM is captured by Percy
//  the code to achieve that would look something like this:
//
//  cy.intercept("GET", "/api/companies", {
//     fixture: "companiesDataExample",
//   }).as("companies");
//   cy.wait("@companies");
//
//  I would complete this process for each page in the tests.

