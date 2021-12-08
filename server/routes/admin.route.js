//1. Importando el enrutador de express
import { Router } from "express";

//Importando el modulo Path de node para trabajar con rutas absolutas
import path from 'path';

//2. Crear una instancia del enrutador
const router = Router();

//3. Registrar rutas a mi enrutador
//Sirve el formulario para agregar productos
//GET: /admin/add-product
router.get('/add-product',(_,res) => {
    const AddProductfilePath = path.join(path.resolve(), "server","views","add-product.html");
    res.sendFile(AddProductfilePath);
});
//Procesa el formulario para agregar productos
//GET: admin/add-product
router.post('/add-product',(req,res) => {
    //Desestructurando el body de la peticion
    const { body } = req;
    //Respondiendo con JSON el body
    res.json(body);
});

//Exportando el router de la subruta de admin
export default router;