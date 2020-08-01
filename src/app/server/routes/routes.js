const { Router } = require("express");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

const router = new Router();
const signup = require("./auth/signup").signup;
const signin = require("./auth/signin").signin;
const productos = require('./controller/productos');
const categorias =require('./controller/categoria')

// router.get("/", (req, res) => redir ); //test Router



router.post("/signup", [
  check("email").isEmail(), check("password").isLength(
    { min: 8 }
  ),
  check("firstname").notEmpty(),
  check("lastname").notEmpty(),
], async (req, res) => { // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  /**AQUI VA ALGO RESPECTO AL REGISTRO */
  signup(req, res);
}); // fin de la ruta /signup



router.post("/signin", [
  check("email").isEmail(), check("password").isLength(
    { min: 8 }
  ),
], async (req, res) => { // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  /**AQUI VA ALGO RESPECTO AL LOGIN */
  signin(req, res);
}); // fin de /signup

router.post("/producto", async (req, res) => { //ESTA URL ES PARA TRAER TODOS LOS PRODUCTOS ALMACENADOS
  productos.get_all_product(req,res);
})

router.post("/producto/:id", (req, res) => { // AQUI ES PARA LEER UN PRODUCTO EN ESPECIFICO
  productos.get_products_with_category_id(req,res)
})

router.put("/producto/:id", (req, res) => { // ESTA ACTUALIZA LA INFO DE UN PRODUCTOS EN ESPECIFICO

})


router.put("/producto", (req, res) => { // AQUI ES PARA CARGAR A LA BASE DE DATOS UN BUFFER DE PRODUCTOS.
  // productos.load_data_products(req, res);
})

router.post("/categoria/", (req, res) => { // /ESTA URL ES PARA TRAER TODOS LAS CATEGORIA O TIPO DE PRODUCTOS
  categorias.get_all_category(req,res)
})

router.get("/inventario/", (req, res) => { // /ESTA URL ES PARA TRAER TODOS Los INVENTARIOS 

})

router.post("/categoria/:id",(req, res)=>{ // TRAE UNA CATEGORIA EN ESPECIFICO O TIPO DE PRODUCTO

})

module.exports = router; // al final exporto las rutas al index principal
