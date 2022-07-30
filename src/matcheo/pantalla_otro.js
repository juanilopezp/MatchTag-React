import React from "react";
import './pantalla_otro.css';
function PantallaOtro(){
	{/*let btnCambio = document.getElementById('btnPO');
	btnCambio.addEventListener('click', () =>{
		btnCambio.innerText = 'Esperando aprobacion';
	})
	*/ }
	
	return(
	<>
			<div class="usuarioTop">
				<h1>Este es mi nombre de usuario</h1>
				<div class="botones">
					<button id="btnPO" class="btnMatch"></button>
				</div>
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