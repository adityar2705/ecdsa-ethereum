const secp = require("ethereum-cryptography/secp256k1");
const {toHex} = require("ethereum-cryptography/utils");

//generating a private key
const privateKey = secp.secp256k1.utils.randomPrivateKey();

//generating the respective public key
const publicKey = secp.secp256k1.getPublicKey(privateKey);

console.log("Public key : ",toHex(publicKey)," \n Private key : ",toHex(privateKey));