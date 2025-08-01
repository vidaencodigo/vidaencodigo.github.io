function Contact() {
    const $contact_section = document.createElement('section');
    $contact_section.setAttribute('class', 'contact mt-5 mb-5');
    $contact_section.setAttribute('id', 'contact');
    $contact_section.innerHTML = `
        <div class = "container">
            <div class="services__tag mb-4">
            <h2  class="services__tag--label"> Contacto </h2>
            <p>Si tienes alguna pregunta o deseas más información, no dudes en contactarme.</p>
            </div>

            <div class="contact-card">
            <form class = "contact-form col-md-6 col-sm-12  needs-validation"  id = "contact-form" action="https://formsubmit.co/6f1b727d2b6f27d46f51525f0f79bd8e " method="POST" novalidate>
                <div class="mb-3">
                <label for="name" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="name" name="name" placeholder="name" required>
                    <div class="invalid-feedback">
                    Campo requerido.
                    </div>
                </div>
                <div class="mb-3">
                <label for="email" class="form-label">Correo</label>
                <input type="email" class="form-control" id="email" name="email" placeholder="name@example.com" required>
                </div>
                <div class="mb-3">
                <label for="mensaje" class="form-label">Mensaje*</label>
                <textarea class="form-control" id="mensaje" name="mensaje" rows="3" required></textarea>
                </div>
                <button type="submit" class="btn mt-4 btn-lg contact-btn p-3">Enviar Mensaje</button>
            </form>
            </div>
        </div>        
    `;
    return $contact_section;
}

export { Contact };