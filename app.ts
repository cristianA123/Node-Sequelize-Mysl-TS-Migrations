import dotenv from 'dotenv'
import Server from './models/server'
dotenv.config()

const serve = new Server()

serve.listen()
