import { url } from "./data.js";

export function pintarMunicipios(id, search = '') {
    const urlMunicipios = `${url}/City`;

    fetch(urlMunicipios)
        .then((response) => response.json())
        .then((municipios) => {
            const section = document.getElementById("municipios");
            section.innerHTML = ''; // Limpiar la sección antes de agregar nuevos municipios
            
            // Filtrar y ordenar los municipios según el departmentId
            let municipiosFiltrados = municipios
                .filter((municipio) => municipio.departmentId == id)
                .sort((a, b) => a.name.localeCompare(b.name));
            
            // Filtrar por término de búsqueda si existe
            if (search) {
                municipiosFiltrados = municipiosFiltrados.filter((municipio) => {
                    return (
                        municipio.name.toLowerCase().includes(search.toLowerCase())
                    );
                });
            }

            // Obtener el nombre del departamento haciendo una solicitud a la API de departamentos
            const urlDepartamento = `${url}/Department/${id}`;
            fetch(urlDepartamento)
                .then((response) => response.json())
                .then((departamento) => {
                    // Crear y agregar el h2 con el nombre del departamento
                    const h2 = document.createElement("h2");
                    h2.textContent = `Ciudades de ${departamento.name}`;
                    section.appendChild(h2);

                    const div = document.createElement("div");
                    div.className = "row";

                    // Verificar si se encontraron municipios
                    if (municipiosFiltrados.length > 0) {
                        // Recorrer los municipios filtrados y agregar las tarjetas
                        municipiosFiltrados.forEach((municipio) => {
                            const card = document.createElement("div");
                            card.classList.add("card");
                            card.innerHTML = `
                                <div class="card-body">
                                <img src="../media/mapa-de-colombia-.jpg" class="card-img-top" alt="${municipio.name}">
                                    <h5 class="card-title">${municipio.name}</h5>
                                </div>
                            `;
                            div.appendChild(card);
                        });
                        section.appendChild(div);
                    } else {
                        // Mostrar mensaje si no se encontraron municipios
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
            console.error("Error al obtener los municipios:", error);
        });
}
