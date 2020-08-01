var oracledb = require('oracledb');



async function connect_database_oracle() {
  var conexion = await new Promise((resolve, reject) => {
    var connection;
    try {
      connection = oracledb.getConnection({
        user: 'ADMIN_DB',
        password: 'ecommerce',
        connectString: 'localhost/XE',
        poolMax:          44,
        poolMin:          2,
        poolIncrement:    5,
        poolTimeout:      4
      })
      console.log("\x1b[42mORACLE\x1b[0m -> [\x1b[32mconnected successfully\x1b[0m]");
      resolve(connection)
    } catch (err) {
      console.log("\x1b[41mORACLE\x1b[0m -> [\x1b[31mdisconnected to services\x1b[0m]");
      console.log(err);
    }
  }) //exit promise

  return conexion
}//fin de la funcion de conexion
var conn = []

function exportConnect(conexion) {
  conn.push(conexion)
  return conexion
}

exports.connect = connect_database_oracle;
exports.ToEvent = exportConnect;
exports.value = conn;
