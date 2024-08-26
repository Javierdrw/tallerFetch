// 1. Crear una pagina Home que muestre una pequeña introducción sobre Colombia y de manera
//  ordenada imprima todos los departamentos que tiene Colombia en unas tarjetas con la información
//   básica(cada tarjeta deberá tener un botón de detalles que permita redirigirse a otra pagina donde 
//     encontraremos la información detallada del departamento)

import { pintarHeader } from "../module/header.js";
import { pintarMainHome } from "../module/mainHome.js";
import { renderizarFooter } from "../module/footer.js";

pintarHeader("homeHeader");
// pintarDepartamentos('homeMain');
pintarMainHome();

renderizarFooter("homeFooter");
