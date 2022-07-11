import React from "react";
import img from './messiPer.jpg';
import './pantallaMatcheo.css';
function Matcheo(){
    return(
        <><img src={img} />
        <label class='nomUsuario'></label>
        <button class='agregarM'></button>
        <button class='chatM'></button>
        <label class='tagSim'></label>
        </>
    );
}
export default Matcheo;