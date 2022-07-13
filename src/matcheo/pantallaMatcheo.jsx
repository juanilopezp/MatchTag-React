import React from "react";
import img from './messiPer.jpg';
import './pantallaMatcheo.css';
import pantallaMatcheo from "./pantallaMatcheo";
function Matcheo(){
    return(
        <>
            <center>
                <div class='fotoMatch'>
                    <img src={img} />
                    <button class='verPerfil'>Perfil</button>
                </div>
                <label class='nomUsuario'></label>
                <button class='agregarM'></button>
                <button class='chatM'></button>
                <label class='tagSim'></label>
            </center>
 
        </>          
    );
}
export default Matcheo;