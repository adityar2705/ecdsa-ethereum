const {keccak256} = require("ethereum-cryptography/keccak");
const secp = require("ethereum-cryptography/secp256k1");
const {utf8ToBytes,toHex} = require("ethereum-cryptography/utils");

//recover key function
async function recoverKey(hash, signature, recoveryBit) {
    return signature.recoverPublicKey(hash,signature,recoveryBit);
}

//hashing & getting the signature from the message
//using the signature to recover the public key
function hashSignature(message,PRIVATE_KEY){
    const bytes = utf8ToBytes(message);
    const hash = keccak256(bytes);
    const signature = secp.secp256k1.sign(hash,PRIVATE_KEY);
    console.log(secp.secp256k1.fromSignature(hash, signature, signature.recovery));
    recoverKey(hash,signature,signature.recovery).then((publicKey) => {
        console.log(publicKey);
    }).catch((error) => {
        console.error(error);
    });   
}

hashSignature("This is the message !","6d7ca22c17b90799d01c2550f99e748b2999070a3716d491d18aa57d95f132dc");
