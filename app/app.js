import { Main } from "./components/Main.js";
import { Nav } from "./components/Nav.js";
import { Services } from "./components/Services.js";
import { Cards } from "./components/Cards.js";
import { Contact } from "./components/Contact.js";
function App() {
    const d = document.getElementById("app");
    d.appendChild(Nav());
    d.appendChild(Main());
    d.appendChild(Services());
    const servicesList = document.getElementById('services-list');
    servicesList.appendChild(Cards());

    d.appendChild(Contact());


}

export { App };