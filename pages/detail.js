const { element } = require("protractor");

class detail {
  startingYear = element(by.id("yearEstablished"));
  annualGrossReceipts = element(by.id("q1"));
  percentageRevenue = element(by.id("q167"));
  sellComputerAnswer = element(by.id("q170Y-label"));
  sellMainframeComputerAnswer = element(by.id("q171Y-label"));
  nextBtn = element(by.buttonText("Next"));
  descriptionOfProfession = element(by.id("businessDescriptionTextarea"));

  async enterYear(year) {
    await this.startingYear.sendKeys(year);
  }

  async enterReceipt(anuualReceipts) {
    await this.annualGrossReceipts.sendKeys(anuualReceipts);
  }

  async enterpercentageRevenue(percentage) {
    await this.percentageRevenue.sendKeys(percentage);
  }

  async selectQuestionOne() {
    await this.sellComputerAnswer.click();
  }

  async selectQuestionTwo() {
    await this.sellMainframeComputerAnswer.click();
  }

  async submitNextBtn() {
    await this.nextBtn.click();
  }

  async enterbusinessDescription(info) {
    await this.descriptionOfProfession.sendKeys(info);
  }
}

exports.detail = detail;
