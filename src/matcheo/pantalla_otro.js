import React from "react";
import './pantalla_otro.css';
import DataUsu from './Usuarios.json'
function PantallaOtro(){
	{/*let btnCambio = document.getElementById('btnPO');
	btnCambio.addEventListener('click', () =>{
		btnCambio.innerText = 'Esperando aprobacion';
	})
	*/ }
	let btnMatcheo = document.getElementById('btnMatch')
	btnMatcheo.addEventListener('click', function(btnMatch) {btnMatcheo.target.classList.toggle = 'btnEspera'})
	return(
	<>
	{DataUsu.map(user =>{
		return(
		<div class="usuarioTop">
				<h1>{user.nomUsuario}</h1>
				<div> tags: {user.tags}</div>
				<img src={user.phPerfil} alt= ""/> 
		</div>
		)
	})}
			
				<div class="botones">
					<button id="btnMatch">seguir</button>
					<button id="btnEspera">siguiendo</button>
				</div>
		<ul class="usuarioDown">
				<div class="publicaciones">
					<slider>

					</slider>
				</div>
		</ul></>

	)
}
export default PantallaOtro