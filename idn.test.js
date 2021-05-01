// const validateHindiWord = require("./validation");
const idn = require("./idn");
const each = require("jest-each").default;
const domainAnalysisTestsInputData = [
  ["भारतभाषा.भारत", "It is an Internationalized Domain"],
  ["flipkart.com", "It is regular ASCII (non IDN) Domain"],
  [null, "Please enter a valid domain name."],
  ["@-", "Please enter a valid domain name."],
  ["", "Please enter a valid domain name."],
];
const punyToUniTestsData = [
  ["भारतभाषा.भारत", "भारतभाषा.भारत"],
  ["google.com", "google.com"],
  ["xn--h2brbk1b0bdb.xn--h2brj9c", "भारतभाषा.भारत"],
  ["xn--81bg3cc2b2bk5hb.xn--h2brj9c", "रजिस्ट्री.भारत"],
];
const checkStringTypeTestsData = ["भारतभाषा.भारत", "google.com"];

describe("Domain Analysis Tests", () => {
  test.each(domainAnalysisTestsInputData)(
    "Get domain analysis result for domain :: '%s'",
    (domain, expected) => {
      expect(idn.getDomainAnalysisResult(domain)).toContain(expected);
    }
  );

  test.each(checkStringTypeTestsData)("check string type", (domain) => {
    expect(typeof idn.getDomainAnalysisResult(domain)).toBe("string");
  });
});

describe("Punycode to Unicode Tests", () => {
  test.each(punyToUniTestsData)(
    "Get domain analysis result for domain :: '%s'",
    (domain, expected) => {
      expect(idn.punycode.toUnicode(domain)).toBe(expected);
    }
  );
});

//console.log(validateHindiWord("ॱ का का"));
//console.log(idn.punycode.toUnicode(""));
