const { Pool } = require('pg');
 
const pool = new Pool({
     host: 'localhost',
     user: 'postgres',
     password: '1234',
     database: 'PruebaKolin',
     port: '5432'
 });

 pool.connect((err, res) => {
    if (err) {
        console.log('Error conexion BD')
    } else {
        console.log('base conectada')
    }
})
module.exports = pool;