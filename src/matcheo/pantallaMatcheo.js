import React, { useState, useEffect, useMemo, Children } from "react";
import img from './messiPer.jpg';
import './pantallaMatcheo.css';
import App from "../App";
import {Route, Link} from "react-router-dom";
import DataUsu from './Usuarios.json';
function Matcheo(){
    const [siguiendo, setSiguiendo] = useState(false);
    const Cheshire = ({children}) => {
        const slides = useMemo(() => {
            if(children.lenght >1){
                let items = Children.map(children,(child, index) =>)
            }
        }, [children])
        return <div id = 'user-render' class='fotomatch-container'>
        <div class='fotoMatch'>
            <img src={DataUsu.phPerfil} />
            <Link class='hoverFotoMatch' to='/pantalla_otro'>
                Perfil
            </Link>
        </div>
        <label class='nomUsuario'>{DataUsu.nomUsuario}</label>
    </div>
    }
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
                
                    {DataUsu.map((a, index)=>{
                        return( 
                        <>
                        <div class="top-matcheo">
                            
                            <div class='agregarM-container'>
                                <button class='agregarM' onClick={() => setSiguiendo(s => !s)}></button>
                                <Link class='child-link' to='/pantalla_otro'></Link>
                            </div>
                        </div>
                            <div id = 'user-render'class='labels-container'>
                                <label class='tagSim'>
                                    {a.tags}
                                </label>
                            </div>
                            </>
                            )
                    })}
                
                <button class ='btnIzq'>
                </button>
                <button class='btnDer'>
                </button>
 
        </>          
        /*react router navigate*/
    );
}
export default Matcheo;
{
    /*
    
    */
}