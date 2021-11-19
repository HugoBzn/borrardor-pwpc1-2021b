//1. Importa el modulo http
import { SSL_OP_CISCO_ANYCONNECT } from 'constants';
import http from 'http'
import fs from "fs";
// 2. Importando el module routes
import routes from "./routes.js"
// 3. Importando Express
import Express from 'express'

// Crear una instancia de Express
const app = Express(); // (req, res, next) => {} event handler

//2. Crea el servidor tomando como
// Manejador de peticiones a Express
const server = http.createServer(app);

//3. Pongo a trabajar al servidor
// Le paso un callback que se escribira en la consola
// cuando el servidor este ecuchando
//192.168.0.15:3000
server.listen(3000, '0.0.0.0', () => {
    console.log("🕵️‍♀️ Servidor escuchando en http://0.0.0.0:3000");
});
