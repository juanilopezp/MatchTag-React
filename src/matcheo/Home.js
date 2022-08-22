import React from 'react'
import {NavLink} from 'react-router-dom'
function Home() {
  return (
  <nav>
    <NavLink to={'pantalla_otro'}>
      Perfil
    </NavLink>
    <NavLink to={''}>
      Publicar
    </NavLink>
    <NavLink to={'Busqueda'}>
      Buscar
    </NavLink>
  </nav>

  )
}

export default Home