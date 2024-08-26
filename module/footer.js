


export function renderizarFooter(idContenedor) {
    const tituloPagina = document.title;
    const contenedor = document.getElementById(idContenedor);

    if (contenedor) {
        contenedor.innerHTML = `
            <div class="container-fluid d-flex flex-row justify-content-between bg-dark-subtle p-2">
                <div class="gap-2 d-flex flex-row">
                    <a class="col-2" href="https://www.facebook.com/?locale=es_LA">
                        <img class="col-12 rounded-circle" src="${tituloPagina == 'HOME'? './media/facebook.png' : '../media/facebook.png'}" alt="facebook" />
                    </a>
                    <a class="col-2" href="https://www.instagram.com/">
                        <img class="col-12 rounded-circle" src="${tituloPagina == 'HOME'? './media/instagram.png' : '../media/instagram.png'}" alt="instagram" />
                    </a>
                    <a class="col-2" href="https://web.whatsapp.com/">
                        <img class="col-12 rounded-circle" src="${tituloPagina == 'HOME'? './media/whatsapp.png' : '../media/whatsapp.png'}" alt="whatsapp" />
                    </a>
                </div>
                <p class="p-2">Desarrollador Javier Gutiérrez</p>
            </div>
        `;
    } else {
        console.error(`No se encontró un elemento con el ID ${idContenedor}`);
    }
}


