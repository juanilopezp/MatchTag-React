const {Client} = require('pg');
const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "matchtag",
    database: "Matchtag"
})
client.connect();
client.query(`Select * from Etiquetas`, (err, res)=>{
    if(!err){
        console.log(res.rows);
    }
    else{
        console.log(err.message);
    }
    client.end();
})