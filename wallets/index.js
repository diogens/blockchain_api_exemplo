const {INITIAL_BALANCE} = require('../config')
const ChainUtil = require('../chain_util')

class Wallet {
    constructor() {
        this.balance = INITIAL_BALANCE;
        this.keyPair = ChainUtil.genKeyPair();
        this.publicKey = this.keyPair.getPublic()
    }

    toString() {
        return `Wallet -
            publicKey: ${this.publicKey.toString()}
            balance: ${this.balance}
        `
    }
}

module.exports = Wallet