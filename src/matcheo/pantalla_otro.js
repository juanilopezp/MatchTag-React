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
	const [siguiendo, setSiguiendo] = useState(false);
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
									<button id="btnMatch" onClick={() => setSiguiendo(s => !s)}>{siguiendo ? "Siguiendo" : "Seguir"}</button>
								</div>
								<div class='tags-container'>
									<div class='tags'>{user.tags}</div>
								</div>
							</div>
							<div class="usuarioRight">
								<h1>Publicaciones</h1>
								<motion.div class="publicaciones-container" drag='y'>
									<img class='publicaciones' src={user.publicaciones} />
									<div class='comentarios'>{user.coments}</div>
									<div class='likes'></div>
								</motion.div>
							</div>
						</div></>
				)
			})}


		</>
	)
}
export default PantallaOtro