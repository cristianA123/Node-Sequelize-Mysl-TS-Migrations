import { Sequelize } from 'sequelize'

// const db = new Sequelize(process.env.NAMEDATABASE!, process.env.USER!, process.env.PASSWORD!, {
//   host: process.env.HOST!,
//   dialect: process.env.DATABASELENGUAJE
// //   logging : false
// })

const db = new Sequelize('node_ts_migrations', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
  //   logging : false
})

export default db
