"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// const db = new Sequelize(process.env.NAMEDATABASE!, process.env.USER!, process.env.PASSWORD!, {
//   host: process.env.HOST!,
//   dialect: process.env.DATABASELENGUAJE
// //   logging : false
// })
const db = new sequelize_1.Sequelize('node_ts_migrations', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
    //   logging : false
});
exports.default = db;
//# sourceMappingURL=connection.js.map