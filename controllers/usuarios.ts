import { Request, Response } from 'express'
import Usuario from '../models/usuario'

export const getUsuarios = async (req : Request, res : Response) => {
  const usuarios = await Usuario.findAll()

  res.json({
    msg: 'getUsuarios',
    usuarios
  })
}

export const getUsuario = async (req : Request, res : Response) => {
  const { id } = req.params

  const usuario = await Usuario.findByPk(id)

  if (usuario) {
    res.json({
      msg: 'getUsuario',
      id,
      usuario
    })
  } else {
    res.status(404).json({
      msg: 'no se encontro usuario' + id
    })
  }
}

export const postUsuarios = async (req : Request, res : Response) => {
  const { body } = req

  try {
    const existeEmail = await Usuario.findOne({
      where: {
        email: body.email
      }
    })

    if (existeEmail) {
      return res.status(400).json({
        msg: 'El usuario ya existe'
      })
    }

    const usuario = await Usuario.create(body)

    res.json({
      msg: 'postUsuario',
      body,
      nose: 'holas',
      usuario
    })
  } catch (error) {
    res.status(500).json({
      msg: 'Hbale con el administrador'

    })
  }
}

export const putUsuarios = async (req : Request, res : Response) => {
  const { id } = req.params
  const { body } = req

  try {
    const usuario = await Usuario.findByPk(id)

    if (!usuario) {
      return res.status(404).json({
        msg: 'No existe un usuario copn el id'
      })
    }

    await usuario.update(body)

    res.json({
      msg: 'putUsuario',
      usuario
    })
  } catch (error) {
    res.status(500).json({
      msg: 'Hbale con el administrador'

    })
  }
}

export const deleteUsuarios = async (req : Request, res : Response) => {
  const { id } = req.params
  const usuario = await Usuario.findByPk(id)
  if (!usuario) {
    return res.status(404).json({
      msg: 'No existe un usuario copn el id'
    })
  }

  // await usuario.destroy()  //? BORRA LA BASE DE DATOS

  await usuario.update({ estado: false })

  res.json({
    msg: 'deleteUsuario',
    usuario
  })
}
