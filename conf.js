exports.config = {
  directConnect: true,
  capabilities: {
    browserName: "chrome",
  },
  framework: "jasmine",
  specs: ["./test scripts/policyFillupTestScript.js"],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
  },
};
