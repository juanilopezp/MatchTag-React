import React from 'react'
import './Edicion.css'

function Edicion() {
  return (
    <>
    <input className="change_foto" type='file' />
    <input placeholder='Editar nombre' />
    <input placeholder='Editar nombre de usuario' />
    </>
  )
}

export default Edicion