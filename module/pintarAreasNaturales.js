import { url } from "./data.js";

export function pintarAreasNaturales(id, search = '') {
    const urlAreasNaturales = `${url}/NaturalArea`;

    fetch(urlAreasNaturales)
        .then((response) => response.json())
        .then((areas) => {
            const section = document.getElementById("areasNaturales");
            section.innerHTML = ''; // Limpiar la sección antes de agregar nuevas áreas

            // Filtrar y ordenar las áreas naturales según el departmentId
            let areasFiltradas = areas
                .filter((area) => area.departmentId == id)
                .sort((a, b) => a.name.localeCompare(b.name));
            
            // Filtrar por término de búsqueda si existe
            if (search) {
                areasFiltradas = areasFiltradas.filter((area) => {
                    return area.name.toLowerCase().includes(search.toLowerCase());
                });
            }

            // Crear un conjunto para almacenar los nombres de áreas naturales ya agregadas
            const nombresUnicos = new Set();

            // Obtener el nombre del departamento haciendo una solicitud a la API de departamentos
            const urlDepartamento = `${url}/Department/${id}`;
            fetch(urlDepartamento)
                .then((response) => response.json())
                .then((departamento) => {
                    // Crear y agregar el h2 con el nombre del departamento
                    const h2 = document.createElement("h2");
                    h2.textContent = `Áreas Naturales de ${departamento.name}`;
                    section.appendChild(h2);

                    const div = document.createElement("div");
                    div.className = "row";

                    // Verificar si se encontraron áreas naturales
                    if (areasFiltradas.length > 0) {
                        // Recorrer las áreas naturales filtradas y agregar las tarjetas si el nombre no se ha agregado antes
                        areasFiltradas.forEach((area) => {
                            if (!nombresUnicos.has(area.name)) {
                                nombresUnicos.add(area.name);
                                const card = document.createElement("div");
                                card.classList.add("card");
                                card.innerHTML = `
                                    <div class="card-body">
                                        <img src="../media/colombia3.jpg" class="card-img-top" alt="${area.name}">
                                        <h5 class="card-title">${area.name}</h5>
                                    </div>
                                `;
                                div.appendChild(card);
                            }
                        });
                        section.appendChild(div);
                    } else {
                        // Mostrar mensaje si no se encontraron áreas naturales
                        const noResultsMessage = document.createElement("p");
                        noResultsMessage.textContent = 'No se encontraron coincidencias.';
                        noResultsMessage.className = 'no-results-message'; // Opcional: puedes agregar una clase para estilo
                        section.appendChild(noResultsMessage);
                    }
                })
                .catch(error => {
                    console.error("Error al obtener el departamento:", error);
                });
        })
        .catch(error => {
            console.error("Error al obtener las áreas naturales:", error);
        });

    console.log('estoy en el área');
}
