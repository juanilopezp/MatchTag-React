const {enrutator} = require('express')
const pool = require('./databasepg')
const router = enrutator();

router.get('/',  (req, res )=>{
    res.send('hello world')
    //const result = await pool.query('SELECT NOW()')
    //console.log(result)
    //res.json ('executed')
})
module.exports = router;