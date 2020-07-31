const crypto = require("../../helper/crypto");
const database = require('../../config/database')
const secret = require("../../config/config").secret;
const Swal = require("sweetalert2")

async function signin(req, res) {
  const {
    email,
    password
  } = req.body;

  query = `
    SELECT * FROM INFO_PERSONAL
    WHERE CORREO = '${email}' AND  PASSWORD = '${password}'
    AND ID_INFO_USER IN (SELECT ID_INFO_USER FROM USUARIO 
    
    )
  `


  /** VALIDACIONES DE INGRESO EN FORMA DE READ*/

  var result_query = await new Promise((resolve, reject) => {
    database.connect().then(consulta => {
      consulta.execute(query,
        [],
        function (err, result) {
          if (err) {
            res.status(500).send(err.message);
            return;
          }
          result.rows.forEach(element => {
            console.log(`[\x1b[32m Login by ${element[3]}\x1b[0m] -> \x1b[44mdata extracted\x1b[0m -> \x1b[33mSuccessfully\x1b[0m.`);
            resolve(
              {
                "email": element[5],
                "username": String(element[3])[0] + element[2],
                "id": element[0],
                "role": element[10]
              }
            )
          });

        });
    })
  });
  res.status(200).send(result_query);
} //end signin

exports.signin = signin;
