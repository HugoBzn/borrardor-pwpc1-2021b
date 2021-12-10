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
    const AboufilePath = path.join(ROOT_DIR, "server","views","about.html");
    res.sendFile(AboufilePath);
});

// La ruta raiz entra en todo tipo de peticion
router.get(['/','/home'],(_,res)=>{
    console.log(`📔 Inventario productos: ${JSON.stringify(products)}`);
    const filePath = path.join(ROOT_DIR, "server","views","shop.html");
    res.sendFile(filePath);
});

//Exportando el router de la subruta de home
export default router;