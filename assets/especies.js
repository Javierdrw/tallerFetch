import { pintarHeader } from "../module/header.js";
import { url } from "../module/data.js";

pintarHeader("especiesHeader");

function pintarEspecies() {
    fetch(`${url}/InvasiveSpecie`)
        .then(response => response.json())
        .then(data => {
            const section = document.getElementById("especiesMain");
            const table = document.createElement("table");
            table.classList.add("tabl");

            table.innerHTML = `
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Nombre Científico</th>
                        <th scope="col">Impacto</th>
                        <th scope="col">Manejo</th>
                        <th scope="col">Nivel de riesgo</th>
                        <th scope="col">Imagen</th>
                    </tr>
                </thead>
                <tbody></tbody>
            `;

            const tbody = table.querySelector("tbody");

            data.forEach(especie => {
                const tr = document.createElement("tr");

                // Asignar clase según el nivel de riesgo
                if (especie.riskLevel === 1) {
                    tr.className = "blue";
                } else if (especie.riskLevel === 2) {
                    tr.className = "green";
                }

                tr.innerHTML = `
                    <td>${especie.name}</td>
                    <td>${especie.scientificName}</td>
                    <td>${especie.impact}</td>
                    <td>${especie.manage}</td>
                    <td>${especie.riskLevel}</td>
                    <td><img src=${(especie.urlImage).replace(/ /g, "%20")} alt="${especie.name}" width="50"></td>
                `;

                tbody.appendChild(tr);
            });

            section.appendChild(table);
        });
}

pintarEspecies()