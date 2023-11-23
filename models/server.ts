import express, { Application } from 'express'
import cors from 'cors'
import userRoutes from '../routes/usuario'

import db from './../db/connection'

class Server {
    private app : Application
    private port : string
    private apiPath = {
      usuarios: '/api/usuarios'
    }

    constructor () {
      this.app = express()
      this.port = process.env.PORT || '4000'
      this.middlewares()
      // Definir la rutas
      this.routes()
      this.dbCOnnection()
    }

    async dbCOnnection () {
      try {
        await db.authenticate()
        console.log(' database conectado online---- MYSQL-- GOO')
      } catch (error :any) {
        throw new Error(error)
      }
    }

    middlewares () {
      // Configirar el cors
      this.app.use(cors())
      // Lectura del body
      this.app.use(express.json())

      // carpeta publica
      this.app.use(express.static('public'))
    }

    routes () {
      this.app.use(this.apiPath.usuarios, userRoutes)
    }

    listen () {
      this.app.listen(this.port, () => {
        console.log('sERVIDOR CORRIENDO EN EL PUERTO', this.port)
      })
    }
}

export default Server
