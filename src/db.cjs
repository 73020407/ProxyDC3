const { Client } = require('pg')

const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'Proxiad2024*!'
})
client.connect((err)=>{
    if(err){
        console.error('connection error', err.stack)
    }
    else{
        console.log('connected')
    }
})
module.exports = client;