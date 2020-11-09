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
const { commonWebelments } = require("../webPages/commonWebelements");

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
//importig common webelemts class
const commonwebelements = new commonWebelments();

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
    commonwebelements.enterNextBtn();
    browser.sleep(700);
    //business profession selection page scripts
    businessProfessionpage.enterBusinessProfessionName(
      data.businessProfessionName
    );
    businessProfessionpage.selectFirstBusinessProfessionOption();
    commonwebelements.enterNextBtn();
    browser.sleep(500);
    //business details page scripts
    details.enterYear(data.yearEstablished);
    details.enterReceipt(data.annualReceipts);
    details.enterpercentageRevenue(data.revenuePercentage);
    details.selectQuestionOne();
    details.selectQuestionTwo();
    commonwebelements.enterNextBtn();
    browser.sleep(500);
    details.enterbusinessDescription(data.businessInfo);
    commonwebelements.enterNextBtn();
    browser.sleep(500);
    //contact information page scripts
    contacts.enterTitle();
    contacts.enterFirstName(data.firstname);
    contacts.enterSurname(data.lastname);
    contacts.enterPhoneNumber(data.contactno);
    contacts.enteremail(data.email);
    contacts.selectTerms();
    contacts.enterSubmitBtn();
    browser.sleep(1000);
    //verify that test script passed or not
    confirmatons.verifyPolicySubmission();

    afterAll(async () => {
      await browser.close();
    });
  });
});
