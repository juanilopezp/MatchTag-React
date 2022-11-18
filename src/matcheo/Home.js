import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import './Home.css';
import { motion } from 'framer-motion';
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
      path:'/Publicar',
      cName :'nav-Subir'
    },
    {
      title: 'Matcheo',
      path:'/pantallaMatcheo',
      cName:'nav-Matcheo'
    }
  ]
  function likeFunction(){
		if(like){
			setLike(false)
		}
		else{
			setLike(true)
		}
	}
  const [comentarios, setComentarios] = useState('')
  const [mostrarCom, setMostrarCom] = useState([])
	const onClickHandler = () =>{
		setMostrarCom((mostrarCom)=>[...mostrarCom, comentarios]).then(()=>{
			("#output").val("");
		});
	}
  const onChangeHandler = (e) =>{
		setComentarios (e.target.value)
	}
  const [like, setLike] = useState(false);
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
  <div class='center-container'>
    <motion.div class='publicaciones_container' drag='y'>
      <div class='publicacione2'>
        <img/>
        <div className={[like ? 'active-like': 'like']} onClick={likeFunction}>
        </div>
      </div>
      <div class='comentarios-container'>
								{mostrarCom.map((text)=>(
									<div class='comentarios'>
										{text}
									</div>
								))}
								<div class='input-container'>
									<input 
									value={comentarios} 
									onChange={onChangeHandler} 
									class='caja-input'
									/>
									<button onClick={onClickHandler} class='subir-btn'>
										Subir
									</button>
								</div>
							</div>
    </motion.div>
  </div>
  </>

  )
}

export default Home