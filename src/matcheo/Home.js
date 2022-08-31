import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import './Home.css';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'
function Home() {
  const SideBar =
  [
    {
      title: 'Mi perfil',
      path:'/perfil',
      cName: 'nav-Perfil'
    },
    {
      title: 'Buscar perfil',
      path:'/Busqueda',
      cName:'nav-Busqueda'
    },
    {
      title: 'Subir foto',
      path:'/subir',
      cName :'nav-Subir'
    }
  ]
  const [sideBar, setSideBar] = useState(false);
  const showSidebar = () => setSideBar(!sideBar);
  return (
  <>
    <div class='navbar'>
      <Link to ='#' class='menu-bars' onClick={showSidebar}>A</Link>
      <button class='logo-matchtag' onClick={(e) => { window.location.pathname = '/'; } }>
        MatchTag
      </button>
    </div>
    <nav className={sideBar ? 'sidenav-menu active' : 'sidenav-menu'}>
      <ul class='sidenav-menu-item'>
        {SideBar.map ((item, index) =>{
          return(  
          <li className={item.cName}>
            <Link to ={item.path}>
              <span>{item.title}</span>
            </Link>
          </li>
          )
    })}
      </ul>
    </nav>
  
  </>

  )
}

export default Home