//1. Importa el modulo http
// import { SSL_OP_CISCO_ANYCONNECT } from 'constants';
// import http from 'http'
import fs from "fs";
// 2. Importando el module routes
import routes from "./routes.js"
// 3. Importando Express
import Express from 'express'

console.log(`Variable de entorno: ${process.env.NODE_ENV}`);

// Crear una instancia de Express
const app = Express(); // (req, res, next) => {} request handler

// 1. Insertando Middleware para la lectura de datos 
// desde un cliente
app.use(Express.urlencoded({extended: false}));

// Loggin de peticiones
app.use((req,_,next)=>{
    console.log(`📞 Se ha realizado la peticion: "${req.method} : ${req.path}"`);
    next();
});

// Se debe colocar primero ya que el orden de registro
// Determina el orden de verificacion
app.use('/about',(_,res)=>{
    res.send("<h1>💡 Acerca de...</h1>\n 🙋‍♂️ Sitio inicial hecho con NodeJs")
});

// Sirviendo recurso de formulario
app.use('/add-student-form', (_, res)=>{
    res.send(`
    <form action="/add-student" method="POST">
    <label for="student-name">👩‍🎓 Student Name</label>
    <input type="text" name="name" id="student-name">
    <button type="submit">Add student</button>
    </form>
    `);
});

// Ruta que procesa el formulario
app.post('/add-student', (req, res) => {
    // Iterando sobre todo el objeto
    for(const prop in req.body){
        console.log(`🚩 ${prop}: ${req.body[prop]}`);
    }
    console.log(`🚩 Metodo}: ${req.method}`);

    res.json(req.body);
    // Realizamos un redireccionamiento
    // res.redirect('/');
});

// La ruta raiz entra en todo tipo de peticion
app.use(['/','/home'],(_,res)=>{
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