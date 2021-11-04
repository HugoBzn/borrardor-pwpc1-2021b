//1. Importa el modulo http
import { SSL_OP_CISCO_ANYCONNECT } from 'constants';
import http from 'http'

//2. Crea el servidor
//Callback (cb) es una funcion que se ejeutará ante cualquier peticion de un recusro
//En nuestro Server (request, response)
const server = http.createServer((req, res)=>{
    console.log("> Se ha recibido una peticion.");
    //Respondemos
    res.write('Hola');
    //Terminar conexion
    res.end();
});

//3. Pongo a trabajar al servidor
// Le paso un callback que se escribira en la consola
// cuando el servidor este ecuchando
//192.168.0.15
server.listen(3000, '192.168.0.15', () => {
    console.log("🕵️‍♀️ Servidor escuchando en http://192.168.0.15:3000");
});
