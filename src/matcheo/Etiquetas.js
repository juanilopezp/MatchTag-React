import React, {useState} from 'react'
import { BrowserRouter , Link} from 'react-router-dom'
import './Etiquetas.css';
import lupita from './lupita.png'
function Etiquetas() {
  const dataE = [{"nomEtiqueta": "Deporte"},
  {"nomEtiqueta": "Musica"},
  {"nomEtiqueta": "Juegos"},
  {"nomEtiqueta": "Cine"},
  {"nomEtiqueta": "Ciencia"},
  {"nomEtiqueta": "Estudio"}]
    /*
      toggleEtiquetaSelect = idx =>{
          const {JSONDATA} = this.state;
          JSONDATA[idx].selected = !JSONDATA[idx].selected;
          this.setState({JSONDATA});
        }
      */      

        //para las checkboxes
      // userCardTemplate = document.querySelector("[data-user-template]")
      /*const searchInput = document.("[data-search]")
      searchInput.addEventListener('input', (e) =>{
       const value = e.target.value
       })*/
       //para la barra de busqueda
         const[searchTerm, setSearchTerm] = useState('')
         var botom = document.getElementsByClassName('LoginBtn');
         var checks = document.getElementsByClassName('checkbox');
         botom.addEvent
  return (
     <>
         {dataE.filter((val)=>{
           if(searchTerm === ""){
             return val
           } else if(val.nomEtiqueta.toLowerCase().includes(searchTerm.toLowerCase())){
             return val
           }
         }).map((val, key) =>{
        return <button id='Etiquetas'>{val.nomEtiqueta} <input type="checkbox" className="checkbox"/> </button>
      })}
      
     <section>
       <form autocomplete="off">
        <div class = "Buscador">
          <input type="text" name="busqueda" placeholder='Buscar Etiqueta' onChange={event =>{setSearchTerm(event.target.value)}} data-search/>
        </div>
       </form>
      </section>
    
      <button className="LoginBtn">YaTa</button>
    
    <div class='p'>
    </div>
    <p>Encuentra el Tag perfecto para vos</p>
    </>
  ) 
  
}

export default Etiquetas