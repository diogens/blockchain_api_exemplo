const EC = require('elliptic').ec
const uuidV1 = require('uuid')

const ec = new EC('secp256k1')
/* standar elliptic criptografy primary  256 bit k kobalt matemático 1 primeiro algorito do tipo da implementação*/

class ChainUtil{
    static genKeyPair() {
        return ec.genKeyPair()
    }

    static id() {
        return uuidV1.v1()
    }
}

module.exports = ChainUtil;