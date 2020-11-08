const { element } = require("protractor");

class businessProfessionPage {
  businessProfessionNameField = element(by.xpath("//*[@role='combobox']"));
  businessProfessionNameFirstSelectedOption = element(
    by.xpath("//*[@role='option'][1]")
  );

  async enterBusinessProfessionName(name) {
    await this.businessProfessionNameField.sendKeys(name);
  }

  async selectFirstBusinessProfessionOption() {
    await this.businessProfessionNameFirstSelectedOption.click();
  }
}

exports.businessProfessionPage = businessProfessionPage;
