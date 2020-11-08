exports.config = {
  directConnect: true,
  capabilities: {
    browserName: "chrome",
  },
  framework: "jasmine",
  specs: ["./test/test.js"],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
  },
};
