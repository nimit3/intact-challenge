const { browser } = require("protractor");
const { async } = require("q");

describe("suite 1", () => {
  it("test case 1", async () => {
    browser.get("https://www.facebook.com");
    browser.sleep(4000);
  });
});
