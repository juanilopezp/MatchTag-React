import React from 'react'
import { Link } from 'react-router-dom'
import{Home} from './Home'

function Deporte() {
  return (
    <><center>
      <header>
        <Link to={'/'}>Match</Link>
      </header>
      <Link to = {'/pantalla_otro'}>nomPerfil</Link>
    </center>
    <h1>Deporte</h1></>
  )
}

export default Deporte