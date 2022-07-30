import React from "react";
import './Busqueda.css'
function Busqueda(){
    return(
        <center>
            <section>
                <form autocomplete="off">
                    <div class = "Buscador">
                        <input type="text" name="busqueda" placeholder='Buscar Etiqueta' data-search/>
          {/*<button class="enlace"> </button>*/}
                    </div>
                </form>
            </section>
        </center>
    );
}
export default Busqueda 