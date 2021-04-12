const { Pool } = require('pg');
 

const pool = new Pool({
    user: 'ztxukwgktjmnqg',
    host: 'ec2-54-224-120-186.compute-1.amazonaws.com',
    database: 'dciagdgj50i4mr',
    password: '5356f4a0a3b0837f701e314d3e42d9fa32bc23754cf0b60cc8ddb6e6ff510ffe',
    port: 5432,
    ssl: { rejectUnauthorized: false }
  });

 pool.connect((err, res) => {
    if (err) {
        console.log('Error conexion BD')
    } else {
        console.log('Base conectada')
    }
})
module.exports = pool;