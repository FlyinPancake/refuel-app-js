import express from "express"

let server = express()
server.use(express.static('public'))

server.listen(3000)