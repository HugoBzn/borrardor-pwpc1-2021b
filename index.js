//1. Importa el modulo http
import { SSL_OP_CISCO_ANYCONNECT } from 'constants';
import http from 'http'

//2. Crea el servidor
//Callback (cb) es una funcion que se ejeutará ante cualquier peticion de un recusro
//En nuestro Server (request, response)
const server = http.createServer((req, res)=>{
    // INforma en la consola del servidor que ha recibido unapeticion
    console.log("> Se ha recibido una peticion.");
    // Logeando el objeto req: peticion
    console.log(`Informacion de la peticion`);
    console.log(`🐱‍🐉 url: ${req.url}`);
    console.log(`🐱‍🐉 Request method: ${req.method}`);

    //Establecer el tipo de contenido para el cliente 
    res.setHeader('Content-Type', 'text/html');

    // Envio el contenido
    res.write("<html>");
    res.write("<head><title>My App</title></head>");
    //res.write("<body><h1>Hello from the server &#128519;</h1></body>");
    res.write(`<body><h1>Hello from the server &#128519;</h1><p style="color:red">Rescurso solicitado: ${req.url}</p></body>`);
    res.write("</html>");

    //Terminar conexion
    res.end();
});

//3. Pongo a trabajar al servidor
// Le paso un callback que se escribira en la consola
// cuando el servidor este ecuchando
//192.168.0.15:3000
server.listen(3000, '192.168.0.15', () => {
    console.log("🕵️‍♀️ Servidor escuchando en http://192.168.0.15:3000");
});
