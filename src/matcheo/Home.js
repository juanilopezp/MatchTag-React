import React from 'react'
import {NavLink} from 'react-router-dom'
import './Home.css';
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
    <button class='logo-matchtag' onClick={(e)=>{window.location.pathname='/'}}>
      MatchTag
    </button>
  </nav>

  )
}

export default Home