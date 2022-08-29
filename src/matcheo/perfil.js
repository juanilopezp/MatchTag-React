import React from 'react'
import Coments from './coments.png'
import Post from './post.png'
import Fotoperfil from './fotoperfil.png'
import './perfil.css';

function Perfil() {
  return (
    <>
    
    <h1 class="login-cajaz">&nbsp;</h1>
    <h4 class="perfil-publicaciones">Publicaciones</h4>
    <h4 class="perfil-nombre">Dustin_Hellfire</h4>
    <h4 class="perfil-tags">Tags</h4>
    <h1 class="perfil-cajamatch">&nbsp;</h1>
    <h4 class="comentarios-titulo">Comentarios</h4>
    <h4 class="comentario-1">jajjajaj le cortaste la cabeza a los neness</h4>
    <h4 class="comentario-2">Mary342-</h4><h4 class="comentario-3">Diegomado-</h4>
    <h4 class="comentario-4">Q fachero que</h4><h4 class="comentario-5">estas hermanoo</h4>
    <h4 class="comentario-6">Diegomado-</h4>
    <h4 class="comentario-7">Acordate de</h4>
    <h4 class="perfil-match">MATCH</h4>
	  
	  
    
    
    <h4 class="comentario-8">la plata que me debes😛😛😛</h4>
    
    <form action="rock.html" method="post"> <input name="rock" type="submit" class="perfil-btn1" id="login" value="Rock y Roll"/></form>
    <form action="redo.html" method="post"> <input name="rock" type="submit" class="perfil-btn2" id="Los" value="Los Redondos"/></form>
    <form action="video.html" method="post"> <input name="rock" type="submit" class="perfil-btn3" id="Los" value="Videogames"/></form>
    <form action="naruto.html" method="post"> <input name="rock" type="submit" class="perfil-btn4" id="Los" value="Naruto"/></form>
    <form action="gym.html" method="post"> <input name="rock" type="submit" class="perfil-btn5" id="Los" value="Gym bross"/></form>
    <form action="finance.html" method="post"> <input name="rock" type="submit" class="perfil-btn6" id="Los" value="Finance"/></form>
    
    
    <img class = 'post' src={Post} />
    <img class = 'coments' src={Coments} />
    <img class = 'fotoperfil' src={Fotoperfil} />
    <form action="/cualquier.js" method="submit"> <input name="editp" type="submit" class="editar-perfil" id="editar-perfil" value="Editar perfil" onclick="cualquier.js" /></form>
    <form action="/cualquier.js" method="submit"> <input name="pmenu" type="submit" class="perfil-menu" id="perfil-menu" value="Menú" onclick="cualquier.js" /></form>
    </>


    
  )
}

export default Perfil