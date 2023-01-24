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

//  The datapoints reflected in the UI should be identical post-migration
//  in order to ensure continuity between snapshots.
//
//  Currrently, I'm unable to retirve any data by monitoring the network traffic.
//  To illitstrate how this data could be maniplilated I added the following fixture
//  in the 'fixtures' folder:  [ companiesDataExample.json ]
//
//  Mocking the data with a fixture can ensure values
//  are consitent before the DOM is captured by Percy
//  the code to achieve that would look somthing like this:
//
//  cy.intercept("GET", "/api/companies", {
//     fixture: "companiesDataExample",
//   }).as("companies");
//   cy.wait("@companies");
//
//  I would complete this process for each page in the tests.
