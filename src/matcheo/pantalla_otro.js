import React, { useState } from "react";
import './pantalla_otro.css';
import DataUsu from './Usuarios.json'
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
function PantallaOtro() {
	{/*let btnCambio = document.getElementById('btnPO');
	btnCambio.addEventListener('click', () =>{
		btnCambio.innerText = 'Esperando aprobacion';
	})
	*/ }
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
	const [siguiendo, setSiguiendo] = useState(false);
	const [like, setLike] = useState(false);
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
	return (
	<>
		{DataUsu.map(user => {
				return (
			<>
			
				<div class='container'>
					<div class="usuarioLeft">
						<img class='phPerfil' src={user.phPerfil} />
						<h1>{user.nomUsuario}</h1>
						<div class="botones">
							<button 
							id="btnMatch" 
							onClick={() => setSiguiendo(s => !s)}>{siguiendo ? "Siguiendo" : "Seguir"}
							</button>
						</div>
						<div class='tags-container'>
							<div class='tags'>{user.tags}</div>
						</div>
					</div>
					<div class="usuarioRight">
						<h1>Publicaciones</h1>
						<motion.div class="publicaciones-container" drag='y'>
							<div class='publicaciones'>
								<img src={user.publicaciones} />
								<div
								className={[like ? 'active-like': 'like']}
								onClick={likeFunction}>
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
				</div>
			</>
				)
			})}
		</>
	)
}
export default PantallaOtro