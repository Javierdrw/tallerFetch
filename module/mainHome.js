// crear funtion mainHome con una descripcion de colombia junto con los botones de los departamentos y las especies
import { descripcionColombia } from "./data.js";
export function pintarMainHome() {
    const mainHome = document.getElementById("homeMain");
    mainHome.innerHTML = `
    <section class="section-home">
    <h1 class="text-center">Colombia</h1>
    <p class="text-center">${descripcionColombia}</p>
    <div class="botton-main">
    <a href= "./pages/departamentos.html" class="btn btn-primary" id="bottonDepartamentos">Departamentos</a>
    <a href= "./pages/especies.html" class="btn btn-primary" id="bottonEspecies">Especies</a>
    </div>
    </section>
    `
}

