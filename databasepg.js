const {Pool} = require("pg")

const pool = new Pool ({
    user: 'postgres',
    password: 'matchtag',
    host: 'localhost',
    port: 5432,
    database: 'Matchtag'
})
module.exports = pool;
//$env:OPENSSL_CONF = ''   
//instalar nodemon -D
//instalar express morgan cors