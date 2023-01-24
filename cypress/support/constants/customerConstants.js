// Test login data
export const TEST_EMAIL= "myTestEmail@plooto.com";
export const TEST_PASSWORD = "testPassword123";

// Percy snapshot names
export const LOGIN = "Login Page";
export const COMPANY_SELECTION = "Company Select Page";
export const DASHBOARD = "Dashboard Page";
export const PAYMENT_APPROVALS = "Payment Approvals Section";
export const PENDING_PAYMENTS = "Pending Payments Section";
export const APPROVED_PAYMENT = "Approved Payment Page";




// An idea I messing around with in order to validate some data on the static site
// was to create a new aray with the data present on the screen. Then compare it with some
// static data in a constants file.
// Something like this:
//
        //    cy.get(".table").find(".editRow").each(($el, index, $list) => {
        //    cy.wrap($el).find('span').eq(0).invoke('text').then($rowVar => {
        //     // cy.log($rowVar)
        //     if (index < 42) {
        //         names.push($rowVar)
        //     }

        //   })
        //   cy.log(names)
        // })
// But this wouldn't make sense in the real world, so I didn't fully implement it.

export const companyData  = [
    "Dream Home Improvements",
    "Record World",
    "Garden Guru",
    "Griff's Hamburgers",
    "Ardan's",
    "Central Hardware",
    "A. L. Price",
    "Beaver Lumber",
    "Standard Brands Paint Company",
    "Handy Andy Home Improvement Center",
    "Franklin Simon",
    "Peaches",
    "Golden Dawn",
    "Great Western",
    "Schaak Electronics",
    "Mr. Clark's Appliances",
    "Second Time Around",
    "Specialty Restaurant Group",
    "Bennett Brothers",
    "Payless Cashways",
    "Landskip Yard Service",
    "Pleasures and Pasttimes",
    "GEX",
    "Cloth World",
    "Chandlers",
    "Maxaprofit",
    "Plooto Inc",
    "Plooto Inc 2",
    "Superior Interactive",
    "Rainbow Records",
    "Wise Appraisals",
    "Burger Chef",
    "Budget Tapes & Records                                                                                                                                ",
    "Courtesy Hardware Store",
    "Advansed Teksyztems",
    "Hastings",
    "Gamble-Skogmo",
    "Rivera Property Maintenance",
    "Lawn N' Order Garden Care",
    "Hit or Miss",
    "Red Fox Tavern",
    "Maxaprofit",
]