import { pintarHeader } from "../module/header.js";
import { url } from "../module/data.js";
import { pintarMunicipios } from "../module/pintarMunicipios.js";
import { pintarAreasNaturales } from "../module/pintarAreasNaturales.js";

pintarHeader("detailsHeader");

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
pintarDetalles(id);


function pintarDetalles(id) {
    const urlDepartamentos = `${url}/Department/${id}`;

    fetch(urlDepartamentos)
        .then((response) => response.json())
        .then((departamento) => {
            const section = document.getElementById("detailsMain");
            const card = document.createElement("div");
            card.classList.add("card-detail");
            card.innerHTML = `
                <div class="card-body">
                    <h2 class="text-center my-3">${departamento.name}</h2>
                    <p class="card-text">Descripción ${departamento.description}</p>
                    <p class="card-text">Poblacion: ${departamento.population}</p>
                    <p class="card-text">Municipio: ${departamento.municipalities}</p>
                </div>

                
            `;
            section.appendChild(card);
        })
}

// Creacion de Funtion municipios de los departamentos
pintarMunicipios(id);


// Creacion de Funtion areas naturales de los municipios


pintarAreasNaturales(id);


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    
    if (form) {
        form.addEventListener('change', (e) => {
            if (e.target.type === 'checkbox') {
                // Obtener el label asociado al checkbox
                const label = document.querySelector(`label[for="${e.target.id}"]`);
                
                if (label) {
                    // Alternar la clase 'active' basado en si el checkbox está marcado
                    label.classList.toggle('active', e.target.checked);
                }
            }
        });
    } else {
        console.error('El elemento con id "form" no se encontró en el DOM.');
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');

    if (form) {
        // Agregar un eventListener al formulario para detectar cambios
        form.addEventListener('change', (e) => {
            if (e.target.type === 'checkbox') {
                // Verificar si el checkbox está marcado
                const checkboxesSeleccionados = document.querySelectorAll('input[type="checkbox"]:checked');
                const valoresSeleccionados = Array.from(checkboxesSeleccionados).map(checkbox => checkbox.value);
                console.log('Checkboxes seleccionados:', valoresSeleccionados);
                if(valoresSeleccionados.length == 1){
                    if(valoresSeleccionados.includes('municipios')){
                        pintarMunicipios(id);
                        let areaNaturales = document.getElementById('areasNaturales'); 
                        areaNaturales.innerHTML = "";

                    }else if(valoresSeleccionados.includes('areas naturales')){
                        pintarAreasNaturales(id);
                        let municipios = document.getElementById('municipios'); 
                        municipios.innerHTML = "";
                    }
                }if(valoresSeleccionados.length === 0){
                    pintarMunicipios(id);
                    pintarAreasNaturales(id);
                }if(valoresSeleccionados.length === 2){
                    pintarMunicipios(id);
                    pintarAreasNaturales(id);
                }
            }
        });
    } else {
        console.error('El elemento con id "form" no se encontró en el DOM.');
    }
});

// Definición de la función debounce
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

document.addEventListener('DOMContentLoaded', () => {
    const valor = document.getElementById("search-detail");

    // Define la función que será ejecutada después del debounce
    function handleSearch(event) {
        const checkboxesSeleccionados = document.querySelectorAll('input[type="checkbox"]:checked');
        const valoresSeleccionados = Array.from(checkboxesSeleccionados).map(checkbox => checkbox.value);
        if(valoresSeleccionados.length === 0){
            pintarMunicipios(id, event.target.value);
            pintarAreasNaturales(id, event.target.value);
        }if(valoresSeleccionados.length === 1){
            if(valoresSeleccionados.includes('municipios')){
                pintarMunicipios(id, event.target.value);
                let areaNaturales = document.getElementById('areasNaturales'); 
                areaNaturales.innerHTML = "";
            }else{
                pintarAreasNaturales(id, event.target.value);
                let municipios = document.getElementById('municipios'); 
                municipios.innerHTML = "";
            }
        }if(valoresSeleccionados.length === 2){
            pintarMunicipios(id, event.target.value);
            pintarAreasNaturales(id, event.target.value);
        }
    }

    // Aplica debounce a la función handleSearch
    const debouncedSearch = debounce(handleSearch, 500); // 300 ms de retraso

    if (valor) {
        valor.addEventListener("keyup", function (event) {
            event.preventDefault();
            debouncedSearch(event);
        });
    }
});
