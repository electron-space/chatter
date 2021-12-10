import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import cors from 'cors'
import config from 'config'


const port = config.get<number>("port")
const host = config.get<string>("port")
const corsOrigin = config.get<string>("corsOrigin")


const app = express()

const httpServer = createServer(app)


const io = new Server(httpServer, {
    cors: {
        origin: corsOrigin,
        credentials: true,
    },
})


app.get('/', (_, res) => res.send('Server is running'));

httpServer.listen(port, host, () => {
    console.log('Server is on ')
})