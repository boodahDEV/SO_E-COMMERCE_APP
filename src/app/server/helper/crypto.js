const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const secret = require("./../config/config").secret;

async function generateKeyPassImput(pass) {
  const password = pass;
  const saltRounds = 10;

  const hashedPassword = await new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, function (err, hash) {
      if (err) reject(err);
      resolve(hash);
    });
  });

  return hashedPassword;
} //end generateKeysOnPass

async function compareKeyPassImput(passIn, passDB) {
  const password = passIn;

  const validUser = await new Promise((resolve, reject) => {
    bcrypt.compare(password, passDB, function (err, ismatch) {
      if (err) reject(false);
      resolve(ismatch);
    });
  });

  return validUser;
} //end compareKeyPassImput

async function generateAccessKeyForChest(username,hash) {
  var objects_to_ramdon = await new Promise((resolve, reject) => {
    var char_on_sha = new Array();
    var code = new Array();
    hash.forEach((i) => {
      var code_to = Math.round(Math.random() * i.length);
      var obj_random = i[code_to];
      if(obj_random != null && code_to != null || typeof obj_random != "undefined" && code_to != "undefined"){
        code.push(code_to);
        char_on_sha.push(obj_random);
        console.log("-> Loading and analysis of key...")
      }
    });
    console.log("# End of analysis...")
    resolve("".concat(char_on_sha.join(""))+"-".concat(code.join(username[0])))
  });
  console.log("# Key generated...")
 return username + objects_to_ramdon.toString().split("-")[0] +hash.join("")+"."+objects_to_ramdon.toString().split("-")[1]
} //


function generateSHA512ForChest(key) {
  var hash = crypto.createHmac("sha512", key);
  return hash.digest("hex").match(/.{1,20}/g);
}

String.prototype.convertTo = function (delim) {
  return this.split("").map(function(c) {
      return ("0" + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(delim || "");
};

function generateKeyForSite(entry) { 
}

exports.generateKeyPassImput = generateKeyPassImput;
exports.compareKeyPassImput = compareKeyPassImput;
exports.generateAccessKeyForChest = generateAccessKeyForChest;
exports.generateSHA512ForChest = generateSHA512ForChest;
