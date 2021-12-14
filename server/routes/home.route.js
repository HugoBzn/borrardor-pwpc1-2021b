//1. Importando el enrutador de express
import { Router } from "express";

//Importando el modulo Path de node para trabajar con rutas absolutas
import path from 'path';

//Importando helper
import { ROOT_DIR } from "../helpers/path.helper.js";

//Importando el acceso a los datos
import { products } from "./admin.route.js";

//2. Crear una instancia del enrutador
const router = Router();

//3. Registrar rutas a mi enrutador
router.get('/about',(_,res)=>{
    console.log("📔 Sirviendo recurso: 'about.html'");
    res.render('about');
});

// La ruta raiz entra en todo tipo de peticion
router.get(['/','/home'],(_,res)=>{
    console.log(`📔 Inventario productos: ${JSON.stringify(products)}`);
    console.log("📔 Sirviendo recurso: 'shop.html'");
    res.render('shop');
});

//Exportando el router de la subruta de home
export default router;