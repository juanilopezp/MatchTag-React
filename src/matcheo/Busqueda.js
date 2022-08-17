import React from "react";
import './Busqueda.css'
import DataUsu from './Usuarios.json'
import { useState } from 'react';
function Busqueda(){
    const[searchTerm, setSearchTerm] = useState('')
    return(
        <>
        
            
                <form autocomplete="off">
                    <div id = 'busUsu' class = "Buscador">
                        <input type="text" name="busqueda" placeholder='Buscar Etiqueta'onChange={event =>{setSearchTerm(event.target.value)}} data-search/>
          {/*<button class="enlace"> </button>*/}
                    </div>
                </form>
           
        
        {DataUsu.filter((val)=>{
            if(searchTerm === ""){
              return null
            } else if(val.nomUsuario.toLowerCase().includes(searchTerm.toLowerCase())){
              return val
            }
          }).map((val, key) =>{
         return <div class='container-container'>
                  <button class = 'b-container'>
                    <div class='usu-container'>
                      <img class='imgPerfil' src={val.phPerfil}/>
                      <label class='nomUsuarios'>{val.nomUsuario}</label>
                    </div>
                    <button class='agregarAmigo' onClick={(e) => e.target.innerText = (e.target.innerText === "Siguiendo" ? "Seguir" : 'Siguiendo')}>Seguir</button>
                  </button>
                </div>
       })}</>
    );
}
export default Busqueda 