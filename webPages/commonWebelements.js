const { element } = require("protractor");

class commonWebelments {
  nextBtn = element(by.buttonText("Next"));

  async enterNextBtn() {
    await this.nextBtn.click();
  }
}

exports.commonWebelments = commonWebelments;
