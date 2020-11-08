const { browser } = require("protractor");
const { async } = require("q");
const { StartingPage } = require("../webPages/startingPage");
const { data } = require("../data/data");
const {
  businessProfessionPage,
} = require("../webPages/businessProfessionapage");
const { detail } = require("../webPages/detail");
const { contact } = require("../webPages/contactInfoPage");
const { confirmation } = require("../webPages/confirmationPage");

//importing firstPage class
const startingpage = new StartingPage();
//importing  businessProfessionPage class
const businessProfessionpage = new businessProfessionPage();
//importing details class
const details = new detail();
//importing contact class
const contacts = new contact();
//importing confirmation class
const confirmatons = new confirmation();
describe("Policy submission test suite", () => {
  beforeAll(async () => {
    await browser.get("https://apps.intactinsurance.com/quick-quote-cl/app/v1");
    await browser.manage().window().maximize();
  });

  it("policy submission positive test case 1", async () => {
    //first landing page scripts
    startingpage.enterBusinessName(data.businessName);
    startingpage.enterBusinessAddress(data.businessAddress);
    startingpage.selectFirstAddressOption();
    startingpage.submitNextBtn();
    browser.sleep(500);
    //business profession selection page scripts
    businessProfessionpage.enterBusinessProfessionName(
      data.businessProfessionName
    );
    businessProfessionpage.selectFirstBusinessProfessionOption();
    businessProfessionpage.submitNextBtn();
    browser.sleep(500);
    //business details page scripts
    details.enterYear(data.yearEstablished);
    details.enterReceipt(data.annualReceipts);
    details.enterpercentageRevenue(data.revenuePercentage);
    details.selectQuestionOne();
    details.selectQuestionTwo();
    details.submitNextBtn();
    browser.sleep(500);
    details.enterbusinessDescription(data.businessInfo);
    details.submitNextBtn();
    browser.sleep(500);
    //contact information page scripts
    contacts.enterTitle();
    contacts.enterFirstName(data.firstname);
    contacts.enterSurname(data.lastname);
    contacts.enterPhoneNumber(data.contactno);
    contacts.enteremail(data.email);
    contacts.selectTerms();
    contacts.submitbtn();
    browser.sleep(500);
    confirmatons.verifyPolicySubmission();
  });
});
