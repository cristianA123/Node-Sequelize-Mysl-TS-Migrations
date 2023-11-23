import { DataTypes } from 'sequelize'
import db from '../db/connection'

const Usuario = db.define('Usuario', {

  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false
  },

  estado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  }

})

export default Usuario
