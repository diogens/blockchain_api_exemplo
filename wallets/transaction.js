const ChainUtil = require('../chain_util')

class Transaction {
    constructor() {
        this.id = ChainUtil.id()
        this.input = null
        this.output = []
    }

    static newTransaction(senderWallet, recipient, amount) {
        const transaction = new this()
        if(amount>senderWallet.balance) {
            console.log(`Amount: ${amount} exceeds balance`);
            return;
        }

        transaction.output.push(...[{amount: senderWallet.balance - amount, adress: senderWallet.publicKey},
            {amount, adress: recipient}])
            
        return transaction
    }
}

module.exports = Transaction;