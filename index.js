//1. Importa el modulo http
import { SSL_OP_CISCO_ANYCONNECT } from 'constants';
import http from 'http'
import fs from "fs";
// 2. Importando el module routes
import routes from "./routes.js"
// 3. Importando Express
import Express from 'express'

// Crear una instancia de Express
const app = Express(); // (req, res, next) => {} request handler

// Registrando el primer middleware
app.use((req,res,next)=>{
    // Registrar un mensaje en el log
    console.log("📞 Esoty en el middleware 1");
    // Dar la instruccion de pasar al siguiente middleware
    next();
});

// Registrando el segundo middleware
app.use((req,res,next)=>{
    // Registrar un mensaje en el log
    console.log("📞 Esoty en el middleware 2");
    // Dar la instruccion de pasar al siguiente middleware
    next();
});

// Registrando tercer middleware
app.use((_,res)=>{
    console.log("📞 Esoty en el middleware 2");
    console.log("📞 Emitiendo respuesta a cliente");
    res.send("<h1>Mi respuesta</h1>\n 🙋‍♂️ Hola");
});

/**
 * Codigos de Emojies
 * Ref: https://www.w3schools.com/charsets/ref_emoji.asp
 */

// Poniendo a escuchar la app de Express
app.listen(3000, '0.0.0.0',() => {
    console.log("🕵️‍♀️ Servidor escuchando en http://0.0.0.0:3000");
});