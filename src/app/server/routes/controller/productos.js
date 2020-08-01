const crypto = require("../../helper/crypto");
const database = require('../../config/database')
const secret = require("../../config/config").secret;
const Swal = require("sweetalert2");

async function load_data_products(req, res) {
    const tipo_producto = req.params.id;
    query = `
    SELECT ID_PRODUCTO, C.DESCRIPCION, B.DESCRIPCION AS "TIPO_PRODUCTO", PRECIO_UNITARIO 
    FROM PRODUCTO C, TIPO_PRODUCTO B
    WHERE C.ID_TIPO_PROD = ${tipo_producto} 
    `
    /** CARGA DE UN NUEVO PRODUCTO EN LA BASE DE DATOS*/

    var result_query = await new Promise((resolve, reject) => {
        // const sqlQuery = `INSERT INTO PRODUCTO VALUES (:1, :2)`;

        // binds = [ ["test001", "test001@email.com" ], 
        //           ["test002", "test002@email.com" ], 
        //           ["test003", "test003@email.com" ]];

        // result = database.value[0].executeMany(sqlQuery, binds, {});

        // console.log("Number of inserted rows:", result.rowsAffected);

    });
    res.status(200).send(result_query);
} //end load_data_products

async function get_products_with_category_id(req,res){
    const tipo_producto = req.params.id;
    console.log('server: ',tipo_producto)
    query = `
    SELECT ID_PRODUCTO, C.DESCRIPCION, B.DESCRIPCION AS "TIPO_PRODUCTO", PRECIO_UNITARIO 
    FROM PRODUCTO C, TIPO_PRODUCTO B
    WHERE C.ID_TIPO_PROD = ${tipo_producto} AND B.ID_TIPO_PROD = ${tipo_producto}
    `
    /** CARGA DE UN NUEVO PRODUCTO EN LA BASE DE DATOS*/

    var result_query = await new Promise((resolve, reject) => {
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
                            type_product: element[2],
                            priceUM: ((element[3]).toFixed(2)).toString(),
                            priceP: Number(Number(element[3]) + Number(55.84)).toFixed(2),

                        })
                    });
                    resolve(
                        data
                    )
                    console.log(`[\x1b[32m POST \x1b[0m] -> \x1b[44mdata extracted products by category\x1b[0m -> \x1b[33mSuccessfully\x1b[0m.`);

            });
        })

    });
    res.status(200).send(result_query);
}

async function get_all_product(req, res) {
    const username = req.body;
    console.log(req.body)
    query = `
        SELECT ID_PRODUCTO, C.DESCRIPCION, B.DESCRIPCION AS "TIPO_PRODUCTO", PRECIO_UNITARIO 
        FROM PRODUCTO C, TIPO_PRODUCTO B
        WHERE C.ID_TIPO_PROD = B.ID_TIPO_PROD
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
                            type_product: element[2],
                            priceUM: ((element[3]).toFixed(2)).toString(),
                            priceP: Number(Number(element[3]) + Number(55.84)).toFixed(2),

                        })
                    });
                    resolve(
                        data
                    )
                    console.log(`[\x1b[32m POST \x1b[0m] -> \x1b[44mdata extracted products\x1b[0m -> \x1b[33mSuccessfully\x1b[0m.`);

                });
        })
    });
    res.status(200).send(result_query);

}

exports.load_data_products = load_data_products;
exports.get_all_product = get_all_product;
exports.get_products_with_category_id = get_products_with_category_id;
