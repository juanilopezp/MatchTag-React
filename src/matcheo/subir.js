import React from 'react'
import Recuadro from './recuadro.png'
import './subir.css';
import Fotito from './fotito.png'
import Pc from './pc.png'


function Subir() {
  return (

    <>
    
    <h1 class="login-cajas">&nbsp;</h1>
    <img class = 'recuadro' src={Recuadro} />
    <img class = 'fotito' src={Fotito} />
    <img class = 'pc' src={Pc} />
    
<h1 class="perfil-cajamatch">&nbsp;</h1>
    <form action="./cualquier.js" method="post"><input class="subir-foto" name="subir foto" type="file" /></form>
      <h4 class="perfil-match">MATCH</h4>
    <form action="/cualquier.js" method="submit"> <input name="subir-foto" type="submit" class="subir-pun" id="subir-foto" value="PUBLICAR" /></form>
    <form action="/cualquier.js" method="submit"> <input name="editp" type="submit" class="editar-perfil" id="editar-perfil" value="Editar perfil" onclick="cualquier.js" /></form>
    <form action="/cualquier.js" method="submit"> <input name="pmenu" type="submit" class="perfil-menu" id="perfil-menu" value="Menú" onclick="cualquier.js" /></form>
</>
     
  
 )
}

export default Subir