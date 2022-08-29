import React from 'react'
import {Route} from "react-router-dom"
import mini from './mini.png'
import Login from './login'
import Register from './register'
import './inicio.css';

function Inicio() {
  return (
    <header className="login-caja">
      
      <h1 class="login-circulo">&nbsp;</h1>
      <h1 class="login-cajas">&nbsp;</h1>
      <form action="/login" method="submit"> <input name="login" type="submit" class="login-boton" id="login-boton" value="Iniciar sesion" onclick="login.js" /></form>
			 <form action="/register" method="submit">  <input name="registro" type="submit" class="login-registrarse" id="login-registrarse" value="Registrarse" onclick="register.js"/></form>
    
		    <h4 class="login-copy">VOS ELEGIS EL TAG...</h4>
        <h4 class="login-copy2">NOSOTROS</h4>
		    <h4 class="login-copy3">EL</h4>
		    <h2 class="login-match">MATCH</h2>
        <h1 class="login-caja">&nbsp;</h1>
        
        <h1 class="login-line">&nbsp;</h1>
		    <h1 class="login-line2">&nbsp;</h1>
        <img class = 'mini' src={mini} />
        
      
       <h4 class="login-texto"><p>A Través de todas las características nombradas anteriormente, Match-Tag va a ser capaz de conectar a cualquier persona en cuestión de segundos y sin problemas para que estas interactúen ya que el mismo sitio web les va a dar una razón por la que interactuar, como es el tener los mismos intereses.</p></h4>
       


      
    </header>
  )
}

export default Inicio
