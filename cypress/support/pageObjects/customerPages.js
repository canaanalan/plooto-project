import {
    TEST_EMAIL,
    TEST_PASSWORD,
    LOGIN,
    COMPANY_SELECTION,
    DASHBOARD,
    PAYMENT_APPROVALS,
    PENDING_PAYMENTS,
    APPROVED_PAYMENT,
  } from "../constants/customerConstants";

  //Helper function to verify the url
  const verifyUrl = (path) => {
    cy.url().should("include", path + ".html");
  };

  //Finds and element by class name and record it's DOM state
  const percySnapshotElement = (classname, percyTitle) => {
    cy.get(classname)
      .should("exist")
      .then(() => {
        cy.percySnapshot(percyTitle);
      });
  };

  export class customerPagesObjects {
    loginPage() {
      verifyUrl("/login");
      cy.percySnapshot(LOGIN);
      cy.get("#email").should("be.visible").type(TEST_EMAIL);
      cy.get("#passphrase").should("be.visible").type(TEST_PASSWORD);
      cy.get(".btn").contains("Sign In").click();
    }

    openLoginPage() {
      cy.visit("/login.html");
    }

    companySelectionPage() {
      cy.percySnapshot(COMPANY_SELECTION);
      verifyUrl("/company_select");
      percySnapshotElement(".table", "Companies Table");
      cy.get(".editRow").contains("Plooto Inc").eq(0).click();
    }

    dashboardPage() {
      verifyUrl("/dashboard");
      cy.percySnapshot(DASHBOARD);
    }

    openDashboardPage() {
      cy.visit("/dashboard.html");
    }

    paymentApprovalsSection() {
      //Payment approvals
      cy.get('a[href="#user/dashboard/approvePayments"]').click();
      verifyUrl("/payment_approvals");
      percySnapshotElement(".clearfix", PAYMENT_APPROVALS);
    }

    pendingPaymentsSection() {
      // Pending Payments
      cy.get('a[href="#user/dashboard/pendingPayments"]').click();
      verifyUrl("/pending_payments");
      percySnapshotElement(".clearfix", PENDING_PAYMENTS);
      cy.get(".editRow").contains("Cavages").click();
    }

    approvedPaymentPage() {
      // Approved Payment
      verifyUrl("/payment_approval");
      percySnapshotElement(".card-block", APPROVED_PAYMENT);
    }

    openApprovedPaymentPage() {
      cy.visit("/payment_approval.html");
    }
  }

  export const customerPages = new customerPagesObjects();
