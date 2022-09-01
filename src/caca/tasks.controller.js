const pool = require('../bdd')

function LogIn (){
    const {usuario_perfil} = req.params
    const {contra} = req.params

    const password = await pool.query('SELECT contraseña FROM Usuarios WHERE usuario_perfil = $1', [usuario_perfil]);
    if(password = contra > 0) {
        const id = await pool.query('SELECT Usuario_idUsuario FROM Usuarios WHERE usuario_perfil = $1', [usuario_perfil]);
    }else{
        console.log("Algo fallo en la autentificacion de los datos introducidos, intentelo nuevamente");
    }
    res.send('iniciando sesion');
} 

const getUserName = async (req, res) => {
    try {
    const {usuario_perfil} = req.params
    const result = await pool.query('SELECT * FROM Usuarios WHERE usuario_perfil = $1', [usuario_perfil]);
    if (result.rows.lenght === 0) return res.status(404).json({
        message: 'not found',
    }); //esto sirve como ej de como comprobar si algo existe o no en un GET    
    } catch (error) {
    console.log(error.message);
    }

    res.send('devolviendo un usuario segun su nombre/tag');
} 

//crea usuario
const createUser = async (req, res) => {
    try { //solamente falta verificar si el nombre existe o no
        const result = await pool.query('INSERT INTO Usuarios (valoriable1, valoriable2, valoriable3, valoriable4, valoriable5) VALUES ($1, $2, $3, $4, $5) RETURNING *', [
            valor1,
            valor2,
            valor3,
            valor4,
            valor5,
            //estas variables serian tipo, nombre, contraseña, imagen de perfil, descripcion  no m acuerdo todas x eso lo puse asi nomas
        ]); 
        res.json(result.rowns[0])   
    } catch (error) {
        console.log(error.message);
        res.json({error: error.message}); //esto es para desarrolladores cxuando terminemops saquemosle esto
    }
    
    
    res.send('creating a user');
}

//borra usuario
const deleteUser = async (req, res) => {
    const {id} = req.params;
    try {  
        const result = await pool.query('DELETE FROM Usuarios WHERE Usuario_idUsuario = $1', [id]);

        if (result.rows.lenght === 0) return res.status(404).json({message: 'not found',}); //esto sirve como ej de como comprobar si algo existe o no en un GET        
        return res.sendStatus(204);
    } catch (error) {
        console.log(error.message); 
    }
    res.send('deleting a user');
}

//devuelve usuario segun id
const getUser = async (req, res) => {
    try {
    const {id} = req.params
    const result = await pool.query('SELECT * FROM Usuarios WHERE Usuario_idUsuario = $1', [id]);
    if (result.rows.lenght === 0) return res.status(404).json({
        message: 'not found',
    }); //esto sirve como ej de como comprobar si algo existe o no en un GET    
    } catch (error) {
    console.log(error.message);
    }

    res.send('trayendo un usuario');
} 

//cambia algo del usuario, pueden ir cambiando los valores para ssaber q updatear
const updateUser = (req, res) => {
    try {
    const {id} = req.params
    const {valor1, valor2} = req.body;
    const result = await pool.query('UPDATE Usuarios SET variable1 = $1, variable2 = $2 WHERE Usuario_idUsuario = $3', [valor1, valor2, id]);

    if (result.rows.lenght === 0) return res.status(404).json(
        {message: 'not found',
    });
    } catch (error) {
        console.log(error.message);
    }
    res.send('updating a user');

    return res.json(result.rows[0]);   
}

//devuelve publicacion especifica
const getPublicacion = async (req, res) => {
    try {
    const {id} = req.params
    const result = await pool.query('SELECT * FROM Publicaciones WHERE id = $1', [id]);
    if (result.rows.lenght === 0) return res.status(404).json({
        message: 'not found',
    });   
    } catch (error) {
    console.log(error.message);
    }

    res.send('devolviendo una publicacion');
}

//publicaciones de un usuario
const getPublicacionUsuario = async (req, res) => {
    try {
    const {id} = req.params
    const result = await pool.query('SELECT publicaciones FROM Usuarios WHERE Usuario_idUsuario = $1', [id]);
    if (result.rows.lenght === 0) return res.status(404).json({
        message: 'not found',
    });   
    } catch (error) {
    console.log(error.message);
    }

    res.send('devolviendo una publicion de un usuario');
}

//crea publicacion 
const createPublicacion = async (req, res) => {
    const id_Usuario = req.params;
    try {
        const result = await pool.query('INSERT INTO Publicaciones (valoriable1, valoriable2, valoriable3, valoriable4, valoriable5) VALUES ($1, $2, $3, $4, $5) RETURNING *', [
            valor1,
            valor2,
            valor3,
            valor4,
            valor5,
            //estas variables serian tipo, imagen, descripcion, usuario, eso no m acuerdo todas x eso lo puse asi nomas
        ]); 
        res.json(result.rowns[0])   
    } catch (error) {
        console.log(error.message);
        res.json({error: error.message}); //esto es para desarrolladores cxuando terminemops saquemosle esto
    }
    
    
    res.send('creating publicacion');
}


//borra publicacion
const deletePublicacion = async (req, res) => { 
    const {id} = req.params;
    try {  
        const result = await pool.query('DELETE FROM Publicaciones WHERE id = $1', [id]);
        //faltaria chequiar si la publicacion es tuya pero eso para despues


        if (result.rows.lenght === 0) return res.status(404).json({message: 'not found',}); //esto sirve como ej de como comprobar si algo existe o no en un GET        
        return res.sendStatus(204);
    } catch (error) {
        console.log(error.message); 
    }
    res.send('deleting publicacion');
}

const getMatches = async (req, res) => { 

    try {        
        const {id} = req.params;
        const {etiquetasPropias} = await pool.query('SELECT Etiquetas_idEtiquetas FROM Usuario_has_Etiquetas where Usuario_idUsuario = $1', [id]);
        const {listaUsuarios} = await pool.query('SELECT Usuario_idUsuario FROM Usuarios');
        const usuariosMatcheados = [];
        
        listaUsuarios.forEach(function(user){
            etiquetas2 = await pool.query('SELECT Etiquetas_idEtiquetas FROM Usuario_has_Etiquetas WHERE Usuario_idUsuario = $1', [user]);

            result = array_intersect(etiquetasPropia, etiquetas2);
        
            if (Count(result) >= 3){
                array_push(usuariosMatcheados, r);
            }
        });    
        
    } catch (error) {
        console.log(error.message); 
    }
    res.send('trayendo matches');
}

const getMatchesProfiles = async (req, res) => { 

    try {        
        const {id} = req.params
        const result = await pool.query('SELECT * FROM Usuarios WHERE Usuario_idUsuario = $1', [id]);
        if (result.rows.lenght === 0) return res.status(404).json({
            message: 'not found',
        });     
    } catch (error) {
        console.log(error.message); 
    }
    res.send('trayendo matches');
}

const getEtiquetasUser = async (req, res) => { 

    try {        
        const {id} = req.params;
        const {etiquetasPropias} = await pool.query('SELECT Etiquetas_idEtiquetas FROM Usuario_has_Etiquetas where Usuario_idUsuario = $1', [id]); //deberia devolver un array esto    
        
    } catch (error) {
        console.log(error.message); 
    }
    res.send('trayendo etiquetas');
}

const postEtiquetas = async (req, res) => {
    const {etiquetasSeleccionadas} = req.params;
    
    
    try {
        const result = await pool.query('UPDATE Usuario_has_Etiquetas SET Etiquetas_idEtiquetas = $1 WHERE Usuario_idUsuario = $2', [
            etiquetasSeleccionadas,
            Usuario_idUsuario, //esto deberia ser una variable q queda guardada con el id del user logeado, hay q cambiaro en todas 
        ]);
        res.json(result.rowns[0])   
    } catch (error) {
        console.log(error.message); //esto es para desarrolladores cuando terminemos saquemosle esto, es para ver si se sube
        res.json({error: error.message}); 
    }
    
    
    res.send('updating etiquetas');
}

module.exports = {
    getUserName, 
    createUser,
    deleteUser,
    getUser,
    updateUser,
    getPublicacion,
    getPublicacionUsuario,
    createPublicacion,
    deletePublicacion,
    getMatches
}


/* 
//ESTO ES UN EJ DE UNA FUNCION GENERICA PRA HACER CUALQUIER COSA, ESTA FUNCION ES PARTE DEL FRONT SE CONECTA 
//CON REACT YA, VENDRIA A SER UNA FUNCIONA PARA PASARLE LA INFORMACION AL FRONT O PARA Q EL FRONT MANDE DATOS
//Y DESPUES LA PODES LLAMAR DESDE UN ONCLICK O ALGO ASI CON UN EVENTO PARA Q ACCIONE

//LO Q HACE ES FETCHEAR INFORMACION DE LA URL Y SEGUN EL "method:" SABE Q FUNCION BAJAR DESDE ES URL ESPECIFICA
//LAS FUNCIONES SE CONFIRGURAN SEGUN LA URL EN EL ARCHIVO DE "routes"
const nombreDeLaFuncion = async (parametro, id_por_ej) => {
    const respuesta = await fetch("http://localhost:4000/usuarios/:${id}", {    //NO HACE FALTA GUARDAR LA RESPUESTA
        method: "TIPO DE METODO, DELETE/POST/PUT_UPDATE",
    });
    const data = await respuesta.json();}
*/

/* 
//ESTO ES UN Ej D UNA FUNCION DE DESCARGA D DATOS, VENDRIA A SER UN "GET" X LA URL O POR LA URL + UN PARAMETRO
const LoadAlgo = async (parametro) =>{
    const respuesta = await fetch("http://localhost:4000/algo/:${paramtro}"); // no es obligatorio el prametro puede no tener
    const data = respuesta.json();
    //podes llamar a una funcion para q cargue lo q acabas d bajar x ej:
    loadAlgo(data);
};
*/

/* 
//ESTO ES UN Ej D UNA FUNCION DE SUBIDA DE DATOS O MEJOR DICHO UN "POST"
const SubirAlgo = async () =>{
    await fetch("http://localhost:4000/algo/"{
    method: "POST"
    body: JSON.strigify(cosaASubir) //se puede transformar el json en el tipo de dato q quieras subir, depende d la tabla de la bdd
    })
};
*/

/* 
const LoadEtiquetas = async (id_Usuario) =>{
    const respuesta = await fetch("http://localhost:4000/etiquetas/:${id_Usuario}"); //deberia devolver las etiquetas d un usuario
    const data = respuesta.json();
    //podes llamar a una funcion para q cargue lo q acabas d bajar x ej:
    loadAlgo(data);
};
*/  

/* 
//ESTO ES UN Ej D UNA FUNCION DE SUBIDA DE DATOS O MEJOR DICHO UN "POST"
const SubirEtiquetas = async (id_Usuario, id_etiquetas) =>{
    await fetch("http://localhost:4000/etiquetas/:${id_Usuario}/:${id_etiquetas}"{
    method: "PUT"
    body: JSON.strigify(id_etiquetas) //se puede transformar el json en el tipo de dato q quieras subir, depende d la tabla de la bdd
    })
};
*/

/* 
const LoadEtiquetas = async (id_Usuario) =>{
    const respuesta = await fetch("http://localhost:4000/users/publicaciones/:{id}");
    const data = respuesta.json();
    //esto deberia devolver una publicacion
    loadAlgo(data);
};
*/

/* 
//ESTO ES UN Ej D UNA FUNCION DE DESCARGA D DATOS, VENDRIA A SER UN "GET" X LA URL O POR LA URL + UN PARAMETRO
const LoadMatches = async (id_Usuario) =>{
    const respuesta = await fetch("http://localhost:4000/match/:${id_Usuario}"); // no es obligatorio el prametro puede no tener
    const data = respuesta.json();
    //podes llamar a una funcion para q cargue lo q acabas d bajar x ej:
    loadAlgo(data);
};
*/