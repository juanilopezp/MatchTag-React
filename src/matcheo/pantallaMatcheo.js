import React, { useState } from "react";
import img from './messiPer.jpg';
import './pantallaMatcheo.css';
import App from "../App";
import {Route, Link} from "react-router-dom";
function Matcheo(){
    return(
        <>
            <center>
                {/*<div className="usus">
                    {usuario.map(usuario =>(
                        <div className="tarjeta">
                            <img>{usuario.url}</img>
                            <h1>{usuario.nomUsuario}</h1>
                        </div>
                    ))}
                </div>
                */}
                
                <div class='fotoMatch'>
                    <img src={img} />
                     <Link class = 'hoverFotoMatch' to='/pantalla_otro'>
                        Perfil
                     </Link>
                    <label class='nomUsuario'>Leo Messi</label>
                </div>
                <button class='agregarM'></button>
                <label class='tagSim'></label>
                
            </center>
        </>          
        /*react router navigate*/
    );
}
export default Matcheo;