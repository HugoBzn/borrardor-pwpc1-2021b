//1. Importa el modulo http
import { SSL_OP_CISCO_ANYCONNECT } from 'constants';
import http from 'http'

//2. Crea el servidor
//Callback (cb) es una funcion que se ejeutará ante cualquier peticion de un recusro
//En nuestro Server (request, response)
const server = http.createServer((req, res)=>{
    // Obteniendo el recurso solicitado
    let { url, method } = req;

    // Informa en la consola del servidor que ha recibido unapeticion
    console.log(`📮 Se ha solicitado el siguiente recurso: ${method} : ${req}`);

    // FIltrar la URL
    if (url === '/') {
        // Respuesta ante "Get /"
        // 1. Estableciendo el tipo de retorno como html
        res.setHeader('Content-Type','text/html');
        // 2. Escribiendo la respuesta 
        res.write('<html>');
        res.write('<head><title>My app</title></head>');
        res.write('<body><h1>Hello from my server 🤠</h1></body>');
        res.write('</html>');

        // Cerrando la conexion
        res.end();
    }else{
        // Recurso no encontrado
        console.log(`❌ Recurso solicitado no encontrado ❌: ${url}`);

        // Respuesta ante "Get /"
        // 1. Estableciendo el tipo de retorno como html
        res.setHeader('Content-Type','text/html');
        // 2. Escribiendo la respuesta 
        res.write('<html>');
        res.write('<head><title>My app</title></head>');
        res.write('<body><h1>ERROR: 404 - Recurso no encontrado</h1></body>');
        res.write('</html>');

        // Cerrando conexion
        res.end();
    }
});

//3. Pongo a trabajar al servidor
// Le paso un callback que se escribira en la consola
// cuando el servidor este ecuchando
//192.168.0.15:3000
server.listen(3000, '0.0.0.0', () => {
    console.log("🕵️‍♀️ Servidor escuchando en http://192.168.0.15:3000");
});
