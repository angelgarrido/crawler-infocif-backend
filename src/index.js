var Xray = require("x-ray");
var x = Xray();

x("http://www.infocif.es/ficha-empresa/mercadona-sa", ".post", [
  {
    CIF: "h1 a",
    Sector: ".article-title@href",
    empleados: "h1 a",
    web: "h1 a",
    ingresos2017: "h1 a",
    Ebitda2017: "h1 a",
    Ingresos2016: "h1 a",
    Ebitda2016: "h1 a",
    Clientes: "h1 a",
    Proveedores: "h1 a"
  }
])
  //  .paginate(".nav-previous a@href")
  //  .limit(3)
  .write("results.json");
