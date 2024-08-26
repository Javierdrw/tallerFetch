import { url } from "./data.js";

// funcion para crear las tarjetas de los departamentos

export function pintarDepartamentos(id, search ) {
    const urlDepartamentos = `${url}/Department`;
    fetch(urlDepartamentos)
        .then((response) => response.json())
        .then((departamentos) => {
            // Filtrar y ordenar los departamentos por nombre
            if (search) {
                departamentos = departamentos.filter((departamento) => {
                    return (
                        departamento.name
                            .toLowerCase()
                            .includes(search.toLowerCase())
                    );
                });
            }
            departamentos.sort((a, b) => a.name.localeCompare(b.name));
            const departamentosElement = document.getElementById(id);
            const section = document.createElement("section");
            section.classList.add("section-departamentos");
            departamentosElement.innerHTML = ``;
            departamentos.forEach((departamento) => {
                const card = document.createElement("div");
                card.classList.add("card"); 
                const params = new URLSearchParams();
                params.append('id', departamento.id);
                card.innerHTML = `
                    <div class="card-body">
                    <img src="../media/logo-colombia.jpg" class="card-img-top" alt="${departamento.name}">
                        <h5 class="card-title">${departamento.name}</h5>
                        <p class="card-text descripcion-corta">${departamento.description}</p>
                        <a href="./details.html?${params.toString()}" class="btn btn-primary">Detalles</a>
                    </div>`;
                section.appendChild(card);
            }); 
            departamentosElement.appendChild(section);
        });
}
