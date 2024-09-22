const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./test-result/report/",
  reportPath: "./test-result/report/",
  metadata: {
    browser: {
      name: "chrome",
      version: "120",
    },
    device: "Server",
    platform: {
      name: "windows",
      version: "11",
    },
  },
  customData: {
    title: "Sprint 11 Regression",
    data: [
      { label: "Project", value: "Custom project" },
      { label: "Release", value: "4.2" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: new Date().getDate()},
      { label: "Execution End Time", value: new Date().getDate() },
    ],
  },
});