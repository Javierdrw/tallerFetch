import { pintarHeader } from "../module/header.js";
import { pintarDepartamentos } from "../module/departamens.js";

let valor = document.getElementById("search");

valor.addEventListener("keyup", function (event) {
    event.preventDefault();
    pintarDepartamentos("departamentos", event.target.value);
});

pintarHeader("departamentosHeader");
pintarDepartamentos("departamentos");