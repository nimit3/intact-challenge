const { element } = require("protractor");

class StartingPage {
  businessNameField = element(by.xpath("//*[@id='businessName']"));
  businessAddressField = element(by.xpath("//*[@id='typeahead-http-address']"));
  dropdownFirstOption = element(by.xpath("//*[@role='option'][1]"));

  async enterBusinessName(name) {
    await this.businessNameField.sendKeys(name);
  }

  async enterBusinessAddress(address) {
    await this.businessAddressField.sendKeys(address);
  }

  async selectFirstAddressOption() {
    await this.dropdownFirstOption.click();
  }
}

exports.StartingPage = StartingPage;
