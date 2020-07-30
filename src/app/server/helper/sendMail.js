var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");

const firebaseConfig = require("../../../node_modules/firebaseConf").firebaseConfig;
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

/**
 * 
 * proximamente, validar primero si hay conexion a internet y los permisos, de serlo asi, carga lo de base de datos
 * en firebase, como copia de seguridad y se le hace un envio por correo para validar y asi ppoder crear
 * su baul privado, de lo contrario no puede crear dicho bauul.
 * 
 * 
 */