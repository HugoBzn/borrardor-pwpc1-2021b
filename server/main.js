//Importando Express
import Express from 'express'

//Importando el modulo Path de node para trabajar con rutas absolutas
import path from 'path';

//Importando helper
import { ROOT_DIR } from "./helpers/path.helper.js";

//Importar los entutadores
import { router as adminRoute } from './routes/admin.route.js'
import homeRoute from './routes/home.route.js'

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

//Registrando el Middleware que maneja
//el servicio de archivos estaticos
app.use(Express.static(path.join(ROOT_DIR, 'public')));

//Se agrega a la aplicacion la ruta admin
app.use('/admin',adminRoute);
//Se agrega a la aplicacion la ruta home
app.use(homeRoute);
//404 error page
app.use((_,res)=>{
    const ERRProductfilePath = path.join(ROOT_DIR, "server","views","404.html");
    res.status(404).sendFile(ERRProductfilePath);
});
/**
 * Codigos de Emojies
 * Ref: https://www.w3schools.com/charsets/ref_emoji.asp
 */

// Poniendo a escuchar la app de Express
app.listen(3000, '0.0.0.0',() => {
    console.log("🕵️‍♀️ Servidor escuchando en http://localhost:3000");
});