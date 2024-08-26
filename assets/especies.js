import { pintarHeader } from "../module/header.js";
import { pintarEspecies } from "../module/invasiveSpace.js";
import { renderizarFooter } from "../module/footer.js";

pintarHeader("especiesHeader");
pintarEspecies();
renderizarFooter("especiesFooter");