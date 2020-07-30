const crypto = require("../../helper/crypto");
const database = require('../../config/database')
const jwt = require("jsonwebtoken");
const { query } = require("express");
const secret = require("../../config/config").secret;

async function signin(req, res) {
  const {
    email,
    password
  } = req.body;
  query=""

  /** VALIDACIONES DE INGRESO EN FORMA DE READ*/

  var result_query = await new Promise((resolve, reject) => {
    database.connect().then(consulta => {
      consulta.execute(query,
        [],
        function (err, result) {
          if (err) {
            console.error(err.message);
            return;
          }
          console.log(`[\x1b[32mUser\x1b[0m] -> \x1b[44mdata extracted\x1b[0m -> \x1b[33mSuccessfully\x1b[0m.`);
          resolve(
            result.rows
          )

        });
    })
  });

  res.status(200).send({
    id:result_query
  });
} //end signin

exports.signin = signin;
