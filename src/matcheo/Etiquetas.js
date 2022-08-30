import React, {useState} from 'react'
import { BrowserRouter , Link} from 'react-router-dom'
import './Etiquetas.css';
function Etiquetas() {
  const dataE = 
    [
      {"nomEtiqueta": "Deporte"},
      {"nomEtiqueta": "Musica"},
      {"nomEtiqueta": "Videojuegos"},
      {"nomEtiqueta": "Cine"},
      {"nomEtiqueta": "Computacion"},
      {"nomEtiqueta": "Comida"},
      {"nomEtiqueta": "Autos"},
      {"nomEtiqueta": "Arte"},
      {"nomEtiqueta": "Ropa"},
      {"nomEtiqueta": "Gym"}
    ]
      const[searchTerm, setSearchTerm] = useState('')
      const[Yeah, setYeah] = useState(true)
      const handleChange = (data) =>{
        console.log(data)
        }
      const coreaDelNorte = async (parameter, id)=>{
        const respuesta = await fetch("http://localhost3000/Etiquetas/:$id", {
          method: "POST",
        });
        const usa = await respuesta.json();
        window.location.pathname='/'
      }
        
      
//CAPAZ PUEDO HACER LOS BOTONES FUNCIONAR, SI HAGO QUE CADA VEZ QUE SE APRETE EL BOTON SE CHEQUEE LA CHECKBOX
  return (
     <>
         {dataE.filter((val)=>{
           if(searchTerm === ""){
             return val
           } else if(val.nomEtiqueta.toLowerCase().includes(searchTerm.toLowerCase())){
             return val
           }
         }).map((val, key) =>{
        return <button id='Etiquetas' onClick={()=> setYeah(y => !y)}>{val.nomEtiqueta} </button>
      })}
      
     <section>
       <form autocomplete="off">
        <div class = "Buscador">
          <input type="text" name="busqueda" placeholder='Buscar Etiqueta' onChange={event =>{setSearchTerm(event.target.value)}} data-search/>
        </div>
       </form>
      </section>
    
      <button className="LoginBtn" onClick={coreaDelNorte} >
        Continuar
      </button>
    
    <div class='circle'>
    </div>
    <p>Encuentra el Tag perfecto para vos</p>
    </>
  ) 
  
}

export default Etiquetas