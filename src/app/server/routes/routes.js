const { Router } = require("express");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

const router = new Router();
const signup = require("./auth/signup").signup;
const signin = require("./auth/signin").signin;

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

router.get("/producto", (req, res) => { //ESTA URL ES PARA TRAER TODOS LOS PRODUCTOS ALMACENADOS

})

router.put("/producto/:id", (req, res) => { // ESTA ACTUALIZA LA INFO DE UN PRODUCTOS EN ESPECIFICO

})

router.get("/producto/:id", (req, res) => { // AQUI ES PARA LEER UN PRODUCTO EN ESPECIFICO

})

router.get("/categoria/", (req, res) => { // /ESTA URL ES PARA TRAER TODOS LAS CATEGORIA O TIPO DE PRODUCTOS

})

module.exports = router; // al final exporto las rutas al index principal
