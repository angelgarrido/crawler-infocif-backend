const EmpresiaCompany = require("./empresia/empresiaCompany");

var url = "https://www.empresia.es/busqueda/?q=A50847037";

EmpresiaCompany.getCompanyFromUrl(url, function(err, company) {
  if (err) return callback(err);
  console.log("Company: %j", company);
});

// TODO Open CIF excel, iterate excel, add company info, save excel
