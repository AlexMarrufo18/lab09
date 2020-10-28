//console.log("hola mundo");

// desplegarservidor
const express = require('express') //trae el frameword
const { dbconection } = require('./database/config');
require('dotenv').config();
const cors = require('cors');


//usuario: userMarrufo 
//paswoord: XFuL0U8fanHCUE9b
//string de conexion: mongodb+srv://userMarrufo:<passwoord>@cluster0.swkzc.mongodb.net/test


// codigo para desplegarservidor
const server = express();

//configurando cors
server.use(cors());


//PRIMERA PETICIÓN GET
server.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Desplegando el primer servicio REST'
    });
});

//CONEXION A LA BASE DE DATOS
dbconection();

//console.log(process.evn);

//DESPLIEGUE DEL SERVIDOR
server.listen(process.env.PORT, () => {
    console.log("el servidor se esta desplegando en el puerto : " + process.env.PORT)
    console.log('Marrufo Huamán Alex Anders');
});