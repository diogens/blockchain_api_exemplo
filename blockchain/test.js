const Blockchain = require('./index')

const BC = new Blockchain()

const blocks = []

for(i = 0; i < 10; i++) {
    blocks.push(BC.addBlock(i))
} 

console.log(blocks)