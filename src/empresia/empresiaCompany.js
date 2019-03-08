const Xray = require("x-ray");
const x = Xray();

function removeLineBreaks(str) {
  if (str) {
    return str
      .replace(/(\r\n|\n|\r)/gm, " ")
      .replace(/\s+/g, " ")
      .replace(/^\s+|\s+$/, "");
  } else {
    return null;
  }
}

exports.getCompanyFromUrl = function getCompanyFromUrl(url, cb) {
  {
    x(url, {
      cif:
        "#page-content > div.col-fluid.page-main > div.list-group.datos-ident > div:nth-child(2) > div > div:nth-child(1) > p",
      name: "h4",
      cnae:
        "#page-content > div.col-fluid.page-main > div.list-group.datos-ident > div:nth-child(2) > p"
    })(function(err, company) {
      company["name"] = removeLineBreaks(company["name"]);
      company["cnae"] = removeLineBreaks(company["cnae"]);
      company["cnae-number"] = company["cnae"].replace(/^\D+|\D+$/g, "");
      company["cif"] = removeLineBreaks(company["cif"]);
      cb(err, company);
    });
  }
};
