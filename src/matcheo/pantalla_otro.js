import React from "react";
import './pantalla_otro.css';
import DataUsu from './Usuarios.json'
import { useRef, useEffect } from 'react';
function PantallaOtro() {
	{/*let btnCambio = document.getElementById('btnPO');
	btnCambio.addEventListener('click', () =>{
		btnCambio.innerText = 'Esperando aprobacion';
	})
	*/ }
	return (
		<>
			{DataUsu.map(user => {
				return (
					<div class="usuarioLeft">
						<h1>{user.nomUsuario}</h1>
						<div class='tags'> tags: {user.tags}</div>
						<img src={user.phPerfil} />
						<div class="botones">
							<button id="btnMatch" onClick={(e) => e.target.innerText = (e.target.innerText === "Siguiendo" ? "Seguir" : 'Siguiendo')}>Seguir</button>
						</div>
					</div>
				)
			})}


			<ul class="usuarioRight">
				<div class="publicaciones">
					<slider>

					</slider>
				</div>
			</ul></>
	)
}
export default PantallaOtro