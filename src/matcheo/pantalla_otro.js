import React, { useState } from "react";
import './pantalla_otro.css';
import DataUsu from './Usuarios.json'
import { useRef, useEffect } from 'react';
function PantallaOtro() {
	{/*let btnCambio = document.getElementById('btnPO');
	btnCambio.addEventListener('click', () =>{
		btnCambio.innerText = 'Esperando aprobacion';
	})
	*/ }
	//const [toggle, setToggle] = useState(false)
	//const toggler = () =>{
	//	toggle ? setToggle(false):setToggle(true)
	//}
	//let val = 0
	//if(e.target.innerText == "Siguiendo"){
	//	val = 1;
	//}
	//else {
	//	val = 0;
	//}
	return (
		
		
		<>
		
			{DataUsu.map(user => {
				return (
					<>
					<div class ='container'>
						<div class="usuarioLeft">
							<img class = 'phPerfil' src={user.phPerfil} />
							<h1>{user.nomUsuario}</h1>
							<div class="botones">
								<button id="btnMatch" onClick={(e) => e.target.innerText = (e.target.innerText === "Siguiendo" ? "Seguir" : 'Siguiendo') }>Seguir</button>
							</div>
							<div class='tags-container'> 
								<div class='tags'>{user.tags}</div>
							</div>						
						</div>
						<div class="usuarioRight">
							<div class="publicaciones">
								<slider>
									{user.publicaciones}
								</slider>
							</div>
						</div>
					</div></>
				)
			})}


</>
	)
}
export default PantallaOtro