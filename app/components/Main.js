

function Main() {
    const $main = document.createElement("main");
    $main.className = "container mt-3 mb-3";
    $main.innerHTML = `
    <div class=" row justify-content-center align-items-center">
        <div class="col-md-4 col-sm-12">
            <h1>
            Descubre cómo un desarrollador web puede transformar tu idea en un sitio atractivo y funcional. 
            ¡Impulsa tu presencia en línea hoy mismo!
            </h1>
            <a type="button" href="#contact" class="mt-4 btn btn-lg contact-btn p-3">Agenda una consulta</a>
        </div>
        <div class="col-md-8 col-sm-12">
            <img src="./app/assets/hero-inferior.svg" alt="Hero Inferior" class="img-fluid">
        </div>
    </div>    
        `;
    return $main;
}

export { Main };
// This code defines a Main component that creates a main HTML element with a welcome message.