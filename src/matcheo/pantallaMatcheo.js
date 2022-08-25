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
            if(children.lenght > 1){
                let items = Children.map(children,(child, index) => (
                    <li key={index}>
                        {child}
                    </li>
                ))
                return [
                    <li key={children.lenght + 1}>
                        {children[children.lenght - 1]}
                    </li>,
                    ...items,
                    <li key={children.lenght + 2}>
                        {children[0]}
                    </li>
                ];
            }
            return <li>{children[0]}</li>
        }, [children])
        return(
            <>
            <div class="top-matcheo">
                            
                                <div id = 'user-render' class='fotomatch-container'>
                                    <div class='fotoMatch'>
                                        {slides}
                                        <Link class='hoverFotoMatch' to='/pantalla_otro'>
                                            Perfil
                                        </Link>
                                    </div>
                                    {slides}
                                </div>
                            <div class='agregarM-container'>
                                <button class='agregarM' onClick={() => setSiguiendo(s => !s)}></button>
                                <Link class='child-link' to='/pantalla_otro'></Link>
                            </div>
                        </div>
                            <div id = 'user-render'class='labels-container'>
                                {slides}
                            </div>
                            </>
        )
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
                        <Cheshire>
                            <img src={a.phPerfil} />
                            <label class='nomUsuario'>{a.nomUsuario}</label>
                            <label class='tagSim'>
                                    {a.tags}
                            </label>
                        </Cheshire>
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