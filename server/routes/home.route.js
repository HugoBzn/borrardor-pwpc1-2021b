//1. Importando el enrutador de express
import { Router } from "express";

//2. Crear una instancia del enrutador
const router = Router();

//3. Registrar rutas a mi enrutador
router.get('/about',(_,res)=>{
    res.send("<h1>💡 Acerca de...</h1>\n 🙋‍♂️ Sitio inicial hecho con NodeJs")
});

// La ruta raiz entra en todo tipo de peticion
router.get(['/','/home'],(_,res)=>{
    res.send("<h1>Mi APP</h1>\n 🙋‍♂️ Bienvenido a este sitio");
});

//Exportando el router de la subruta de home
export default router;
