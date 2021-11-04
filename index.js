//1. Importa el modulo http
import { SSL_OP_CISCO_ANYCONNECT } from 'constants';
import http from 'http'

//2. Crea el servidor
//Callback (cb) es una funcion que se ejeutará ante cualquier peticion de un recusro
//En nuestro Server (request, response)
const server = http.createServer((req, res)=>{
    console.log("> Se ha recibido una peticion.");
    // Logeando el objeto req: peticion
    console.log(`Informacion de la peticion`);
    console.log(`🐱‍🐉 url: ${req.url}`);
    console.log(`🐱‍🐉 Request method: ${req.method}`);
    console.log(`🐱‍🐉 PLataforma del cliente: ${req.headers['sec-ch-ua-platform']}`);
    console.log(`🐱‍🐉 PLataforma del cliente: ${req.headers['sec-ch-ua-mobile']}`);
    //Respondemos
    res.write("Esta es la respuesta del servidor.");
    //Terminar conexion
    res.end();
});

//3. Pongo a trabajar al servidor
// Le paso un callback que se escribira en la consola
// cuando el servidor este ecuchando
//192.168.0.15:3000
server.listen(3000, '0.0.0.0', () => {
    console.log("🕵️‍♀️ Servidor escuchando en http://localhost:3000");
});
