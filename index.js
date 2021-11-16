//1. Importa el modulo http
import { SSL_OP_CISCO_ANYCONNECT } from 'constants';
import http from 'http'
import fs from "fs";

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
        res.write(`
        <html>
            <head>
                <title>Enter Message</title>
            </head>
            <body>
            <h1>Send Message</h1>
            <form action="/message" method="POST">
                <input type="text" name="message">
                <button type="submit">send</button>
            </form>
            </body>
        </html>
        `);
        // Cerrando la conexion
        res.end();

    }else if(url === '/message' && method === 'POST') {
        //1. Se crea una variable para guardar los datos de entrada
        let body = [];
        //2. Registrar un manejador para la entrada de los datos
        req.on("data", (chunk)=>{
            //2.1 Registrando los trozos de datos que llega al backend
            console.log(chunk);
            //2.2 Acumula los datos de entrada
            body.push(chunk);
            //2.3 Proteccion en caso de recepcion masiva de datos
            if (body > 1e6) req.socket.destroy();
        });
        // Ejecuta Operacion(ARGS1,ARGS2,ARG3,cb)
        // Suma2Numeros(1,2,(res) => {console.log(res)})
        /*
        1. let res = Suma2Numeros(1,2);
        2. Console.log(res); //undefined
        */
        //3. Registrando un manejador de fin de recepcion de datos
        req.on('end', ()=>{
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            // Guardando el mensaje en un archivo
            fs.writeFile('message.txt', message, (err)=>{
                //Verificar que hubo eror
                if (err) {
                    console.log("> No se pudo grabar el archivo");
                    res.statusCode = 500; // Internal server error
                    res.setHeader("ERROR WHEN LOADING FILE");
                    return res.end();
                }
                // En caso de no haber error
                fs.writeFileSync('message.txt', message);
                // Establecer el status code de redireccionamiento
                res.statusCode = 302;
                // Establecemos ruta de redireccionamiento
                res.setHeader('Location', '/');
                //Finalizo la conexion
                return res.end();
            });
        });
    } else if(url === '/author'){
                // 1. Estableciendo el tipo de retorno como html
                res.setHeader('Content-Type','text/html');
                let urlImage = 'https://pbs.twimg.com/profile_images/1073208648355209217/NC_kTVjb_400x400.jpg';
                // 2. Escribiendo la respuesta 
                res.write('<html>');
                res.write('<head><title>My app</title></head>');
                res.write('<body>');
                res.write('<h1>Author</h1>');
                res.write('<p>Ivan Rivalcoba Rivas - Web Developer</p>');
                res.write(`<img width="300px" src="${urlImage}" alt="Foto Ian Rivalcoba">`);
                res.write('</body>');
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
    console.log("🕵️‍♀️ Servidor escuchando en http://0.0.0.0:3000");
});
