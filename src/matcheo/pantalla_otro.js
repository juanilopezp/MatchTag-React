import React from "react";
import './pantalla_otro.css';
function PantallaOtro(){
	return(
		<><div class="usuarioTop">
			<h1>Este es mi nombre de usuario</h1>
			<div class="botones">
			<input  type="radio" name="control" id="match" />
			<label for="match" class="matchBtn" name="matchBtn">Matchear</label>
			<div class="botones2">
			<input  type="radio" name="control" id="espera" />
			<label for="espera" class="esperaBtn" name="esperaBtn">Esperar</label>
			</div>
		</div>
		</div>
		<ul class="usuarioDown">
		<div class="publicaciones">
			<slider>
				
			</slider>
		</div>
		</ul>
		</>

	)
}
export default PantallaOtro