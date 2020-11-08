const { element } = require("protractor");

class contact {
  title = element(by.cssContainingText("#contactTitle-MR", "Mr."));
  firstName = element(by.id("contactFirstName"));
  lastName = element(by.id("contactLastName"));
  phoneNumber = element(by.id("contactPhone"));
  email = element(by.id("contactEmail"));
  termsAgreeCheckbox = element(by.xpath("//*[@for='contactPrivacy']"));
  submitBtn = element(by.buttonText("Submit"));

  async enterTitle() {
    await this.title.click();
  }

  async enterFirstName(name) {
    await this.firstName.sendKeys(name);
  }

  async enterSurname(surname) {
    await this.lastName.sendKeys(surname);
  }

  async enterPhoneNumber(phoneno) {
    await this.phoneNumber.sendKeys(phoneno);
  }

  async enteremail(email) {
    await this.email.sendKeys(email);
  }

  async selectTerms() {
    await this.termsAgreeCheckbox.click();
  }

  async enterSubmitBtn() {
    await this.submitBtn.click();
  }
}

exports.contact = contact;
