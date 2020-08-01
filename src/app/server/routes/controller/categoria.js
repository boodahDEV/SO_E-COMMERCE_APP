const crypto = require("../../helper/crypto");
const database = require('../../config/database')
const secret = require("../../config/config").secret;
const Swal = require("sweetalert2");


async function get_all_category(req, res) {
    const username = req.body;
    console.log(req.body)
    query = `
        SELECT ID_TIPO_PROD, DESCRIPCION AS "CATEGORIA" 
        FROM TIPO_PRODUCTO
    `;

    var result_query = await new Promise((resolve, reject) => {
        // console.log(database.value[0])
        database.value[0].then(consulta => {
            consulta.execute(query,
                [],
                function (err, result) {
                    if (err) {
                        res.status(500).send(err.message);
                        return;
                    }
                    var data = []
                    result.rows.forEach(element => {
                        data.push({
                            id: element[0],
                            title: element[1],
                        })
                    });
                    resolve(
                        data
                    )
                    console.log(`[\x1b[32m POST \x1b[0m] -> \x1b[44mdata extracted categorys\x1b[0m -> \x1b[33mSuccessfully\x1b[0m.`);

                });
        })
    });
    res.status(200).send(result_query);

}

exports.get_all_category = get_all_category;
