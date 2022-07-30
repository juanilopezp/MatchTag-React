import React from 'react'
import { BrowserRouter , Link} from 'react-router-dom'
import './Etiquetas.css';
import lupita from './lupita.png'
import JSONDATA from './Etiquetas.json'
function Etiquetas() {
    /*state = {
        JSONDATA : [...JSONDATA.map(nomEtiqueta => {return {...nomEtiqueta, selected : false}})]
      }
      toggleEtiquetaSelect = idx =>{
          const {JSONDATA} = this.state;
          JSONDATA[idx].selected = !JSONDATA[idx].selected;
          this.setState({JSONDATA});
        }
      */      
     
        var text = '<span>seleccionaste: </span>';
        var listArray = [];
        var checkboxes = document.querySelectorAll ('.checkbox')
        console.log(checkboxes);
        for (var checkbox of checkboxes){
          checkbox.addEventListener('click', function(){
            if(this.checked == true){
              console.log(this.value);
            }
          })
        }
      
  return (
     <>
     {/*
      const searchInput = document.querySelector("[data-search]")
      searchInput.addEventListener('input', (e) =>{
       const value = e.target.value
       console.log(value)
       })
      */}

      
      {
      JSONDATA.map((val, key) =>{
        return <button id='Etiquetas'>{val.nomEtiqueta} <input type="checkbox"/> </button>
      })
      }
     <section>
       <form autocomplete="off">
        <div class = "Buscador">
          <input type="text" name="busqueda" placeholder='Buscar Etiqueta' data-search/>
          {/*<button class="enlace"> </button>*/}
        </div>
       </form>
      </section>
      {/*<div className='Etiquetas'>
        <button id='Etiqueta'class="Deporte">Deporte</button>
        <button id='Etiqueta'class="Musica">Musica</button>
        <button id='Etiqueta'class="Juegos">Juegos</button>
        <button id='Etiqueta'class="Cine">Cine</button>
        <button id='Etiqueta'class="Ciencia">Ciencia</button>
        <button id='Etiqueta'class="Estudio">Estudio</button>
    </div>*/}
    <Link to ='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
      <button class="LoginBtn">YaTa</button>
    </Link>
    <div class='p'>
    </div>
    <p>Encuentra el Tag perfecto para vos</p>
    </>
  ) 
  
}

export default Etiquetas