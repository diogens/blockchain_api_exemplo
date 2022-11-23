const express = require('express')
const Blockchain = require('../blockchain')
const P2pServer = require('./p2p-server')

const HTTP_PORT = process.env.HTTP_PORT || 3001
/* HTTP_PORT = 3005 npm run dev */

const app = express()
const bc = new Blockchain()
const p2pServer = new P2pServer(bc)

app.use(express.json())

app.get('/blocks', (request, response) => {
    response.json(bc.chain)
})

app.post('/mine', (request, response) => {
    const block = bc.addBlock(request.body.data)

    p2pServer.syncChain()

    console.log(`New Block added ${block.toString()}`)
    response.redirect('/blocks')
})

app.listen(HTTP_PORT, () => {
    console.log(`server ${HTTP_PORT}`)
})
p2pServer.listen()