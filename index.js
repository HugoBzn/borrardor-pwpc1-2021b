//1. Importa el modulo http
import { SSL_OP_CISCO_ANYCONNECT } from 'constants';
import http from 'http'
import fs from "fs";
// 2. Importando el module routes
import routes from "./routes.js"
// 3. Importando Express
import Express from 'express'
import { send } from 'process';

// Crear una instancia de Express
const app = Express(); // (req, res, next) => {} request handler

app.use('/about',(_,res)=>{
    res.send("<h1>💡 Acerca de...</h1>\n 🙋‍♂️ Sitio inicial hecho con NodeJs")
});

app.use('/',(_,res)=>{
    console.log('📞 Emitiendo respuesta a cliente: "/"');
    res.send("<h1>Mi APP</h1>\n 🙋‍♂️ Bienvenido a este sitio");
});

/**
 * Codigos de Emojies
 * Ref: https://www.w3schools.com/charsets/ref_emoji.asp
 */

// Poniendo a escuchar la app de Express
app.listen(3000, '0.0.0.0',() => {
    console.log("🕵️‍♀️ Servidor escuchando en http://0.0.0.0:3000");
});