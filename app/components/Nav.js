function Nav() {
    const $nav = document.createElement("nav");
    $nav.className = "navbar navbar-expand-lg sticky-top bg-body-white";
    $nav.innerHTML = `
    <div class="container">
        <a class="navbar-brand" href="#">Emmanuel</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          
            <ul class="navbar-nav ">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sobre mi</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#services">Servicios</a>
                </li>
       
            </ul>
            
        </div>
    </div>
    `;

    return $nav;
}

export { Nav };