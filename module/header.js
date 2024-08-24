// Creacion de funcion header

export function pintarHeader(headerId) {
  const headerElement = document.getElementById(headerId);
  const tituloPagina = document.title;
  console.log(tituloPagina);
  headerElement.classList.add("header");
  headerElement.innerHTML = `
     <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class=" container-fluid d-flex flex-row ">
          <a class="navbar-brand" href="${tituloPagina == 'HOME'? '#' : '../index.html'}">Colombia</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="${tituloPagina == 'Departamentos'? '#' : tituloPagina == 'Especies Invasoras' || 'Detalles'? './departamentos.html' : './pages/departamentos.html'}">Departamento</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="${tituloPagina == 'Especies Invasoras'? '#' : tituloPagina == 'Departamentos' || 'Detalles'? './Especies.html' : './pages/departamentos.html'}">Especies Invasoras</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    <div class="container-header">
      <h1>${tituloPagina}</h1>

    </div>`;
}
