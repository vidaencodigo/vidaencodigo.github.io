
function Services() {
    const $services_section = document.createElement('section');
    $services_section.setAttribute('class', 'services mt-5');
    $services_section.setAttribute('id', 'services');

    $services_section.innerHTML = `
    <div class="container">
        <div class="services__tag mb-4">
            <h2  class="services__tag--label"> Servicios </h2>
            <p>Ofrezco una variedad de servicios para ayudarte a alcanzar tus objetivos digitales.</p>
        </div>

        <div id="services-list">
        </div>
    </div>
    `;
   
    return $services_section;
}

export { Services };