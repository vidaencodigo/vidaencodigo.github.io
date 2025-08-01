function Cards() {
    const d = document.createElement("div");
    d.className = "cards";
    
    const card1 = document.createElement("div");
    card1.className = "card__service development";
    card1.innerHTML = `
        <div class="card__service--content">
            <label class="card__service--label">Desarrollo Web</label>  
            <p>Desarrollo de software web personalizado.</p>     
        </div>
        <div class="card__service--image">
            <img src="./app/assets/dev.png" alt="Card 1 Image" class="img-fluid">
        </div>
        `;
    const card2 = document.createElement("div");
    card2.className = "card__service web-design";
    card2.innerHTML = `
        <div class="card__service--content">
            <label class="card__service--label">Diseño de páginas Web</label>  
            <p>Diseño de sitios web atractivos y funcionales.</p>     
        </div>
        <div class="card__service--image">
            <img src="./app/assets/dev2.png" alt="Card 2 Image" class="img-fluid">
        </div>
        `;
    d.appendChild(card1);
    d.appendChild(card2);
    return d;
}

export { Cards };