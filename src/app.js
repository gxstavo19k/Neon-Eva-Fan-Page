import "./global.css";
import { AppMain } from "@components/AppMain.js";
import { SpinnerLoader } from "@modules/SpinnerLoader.js";

addEventListener("DOMContentLoaded", () => {
    SpinnerLoader();
    const app = document.querySelector('#app');
    const containerMain = AppMain();
    app.appendChild(containerMain);
})