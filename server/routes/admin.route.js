//1. Importando el enrutador de express
import { Router } from "express";

//Importando el modulo Path de node para trabajar con rutas absolutas
import path from 'path';

//Importando helper
import { ROOT_DIR } from "../helpers/path.helper.js";

//Base de datos volatil
export const products = []

//2. Crear una instancia del enrutador
export const router = Router();

//3. Registrar rutas a mi enrutador
//Sirve el formulario para agregar productos
//GET: /admin/add-product
router.get('/add-product',(_,res) => {
    const AddProductfilePath = path.join(ROOT_DIR, "server","views","add-product.html");
    res.sendFile(AddProductfilePath);
});
//Procesa el formulario para agregar productos
//GET: admin/add-product
router.post('/add-product',(req,res) => {
    //Desestructurando el body de la peticion
    const { name } = req.body;
    //Guardar en la base de datos el nombre dek producto
    products.push({name});
    //Redirecciono a la pantalla principal
    res.redirect('/');
});

//Exportando el router de la subruta de admin
// export default router;