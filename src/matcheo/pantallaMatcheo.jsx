import React from "react";
import img from './messiPer.jpg';
import './pantallaMatcheo.css';
import App from "../App";
import pantallaMatcheo from "./pantallaMatcheo";
import PantallaOtro from "./pantalla_otro";
import {Route, Link} from "react-router-dom";
function Matcheo(){
    const yendoPerfil = () =>{
            <Route path='pantalla_otro'/>
    }
    return(
        <>
            <center>
                <div class='fotoMatch'>
                    <img src={img} />
                     <Link class = 'hoverFotoMatch' to='/pantalla_otro'>
                        Perfil
                     </Link>
                </div>
                <label class='nomUsuario'></label>
                <button class='agregarM'></button>
                <label class='tagSim'></label>
            </center>
        </>          
        /*react router navigate*/
    );
}
export default Matcheo;