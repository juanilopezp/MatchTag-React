import React, { useState } from "react";
import img from './messiPer.jpg';
import './pantallaMatcheo.css';
import App from "../App";
import {Route, Link} from "react-router-dom";
import DataUsu from './Usuarios.json';
function Matcheo(){
    return(
        <>
            
                {/*<div className="usus">
                    {usuario.map(usuario =>(
                        <div className="tarjeta">
                            <img>{usuario.url}</img>
                            <h1>{usuario.nomUsuario}</h1>
                        </div>
                    ))}
                </div>
                */}
                <div class="top-matcheo">
                    {DataUsu.map((a, index)=>{
                        return( 
                        <div class = 'fotomatch-container'>
                            <div class='fotoMatch'>
                            <img src={a.phPerfil} />
                            <Link class = 'hoverFotoMatch' to='/pantalla_otro'>
                                Perfil
                            </Link>
                        </div>
                        <label class='nomUsuario'>{a.nomUsuario}</label> </div>)
                    })}
                    <button class='agregarM'></button>
                    <label class='tagSim'></label>
                </div>
 
        </>          
        /*react router navigate*/
    );
}
export default Matcheo;