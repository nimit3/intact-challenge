const { element, browser } = require("protractor");

class confirmation {
  confirmationMsg = element(by.xpath("//*[@id='thankYouMessage']/span[1]"));

  async verifyPolicySubmission() {
    let expectedmessage =
      "Thank you for choosing Intact Insurance. One of our brokers will get in touch to complete your quote by phone.";
    let message = await this.confirmationMsg.getText();
    expect(message).toEqual(expectedmessage);
  }
}

exports.confirmation = confirmation;
