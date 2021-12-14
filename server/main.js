//Importando Express
import Express from "express";

//Importando el modulo Path de node para trabajar con rutas absolutas
import path from "path";

//Importando el motor de plantillas
import { engine } from "express-handlebars";

//Crear la instancia del motor de plantillas
const hbsTemplateEngine = engine({
  extname: ".hbs",
  defaultLayout: "main",
});

//Importando helper
import { ROOT_DIR } from "./helpers/path.helper.js";

//Importar los entutadores
import { router as adminRoute } from "./routes/admin.route.js";
import homeRoute from "./routes/home.route.js";

console.log(`Variable de entorno: ${process.env.NODE_ENV}`);

// Crear una instancia de Express
const app = Express(); // (req, res, next) => {} request handler

// Registro el motor de las plantillas
app.engine("hbs", hbsTemplateEngine);

// Seleccionar en la app el motor a utilizar
app.set("view engine", "hbs");

// Establecer las rutas de las vistas
app.set("views", path.join(ROOT_DIR, "server", "views"));

// 1. Insertando Middleware para la lectura de datos
// desde un cliente
app.use(Express.urlencoded({ extended: false }));

// Loggin de peticiones
app.use((req, _, next) => {
  console.log(`📞 Se ha realizado la peticion: "${req.method} : ${req.path}"`);
  next();
});

//Registrando el Middleware que maneja
//el servicio de archivos estaticos
app.use(Express.static(path.join(ROOT_DIR, "public")));

//Se agrega a la aplicacion la ruta admin
app.use("/admin", adminRoute);
//Se agrega a la aplicacion la ruta home
app.use(homeRoute);
//404 error page
app.use((_, res) => {
  console.log("💔 Recurso no encontrado: '404.html'");
  res.render("404");
});
/**
 * Codigos de Emojies
 * Ref: https://www.w3schools.com/charsets/ref_emoji.asp
 */

// Poniendo a escuchar la app de Express
app.listen(3000, "0.0.0.0", () => {
  console.log("🕵️‍♀️ Servidor escuchando en http://localhost:3000");
});
