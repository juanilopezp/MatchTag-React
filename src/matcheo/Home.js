import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import './Home.css';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'
function Home() {
  const [sideBar, setSideBar] = useState(false);
  const showSidebar = () => setSideBar(!sideBar);
  return (
  <>
    <button class='logo-matchtag' onClick={(e) => { window.location.pathname = '/'; } }>
      MatchTag
    </button>
  <nav class='sidenav-menu'>
    <ul class='sidenav-menu-item'>
      <li class='sidenav-toggle'>
        <Link to ='#' class='menu-bar'>
          <div/>
        </Link>
      </li>
    </ul>
  </nav>
  </>

  )
}

export default Home