import React from 'react'
import {NavLink} from 'react-router-dom'
import './Home.css';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'
function Home() {
  return (
  <>
  <nav>
    <button class='logo-matchtag' onClick={(e) => { window.location.pathname = '/'; } }>
      MatchTag
    </button>
  
  <SideNav>
      <NavItem to={'pantalla_otro'}>
        <NavText>
          Perfil
        </NavText>
      </NavItem>
      <NavLink to={''}>
        Publicar
      </NavLink>
      <NavLink to={'Busqueda'}>
        Buscar
      </NavLink>
    </SideNav>
   </nav>
  </>

  )
}

export default Home