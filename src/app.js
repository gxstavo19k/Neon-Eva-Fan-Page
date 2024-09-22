import "./global.css";
import { AppMain } from "@components/AppMain.js";

addEventListener("DOMContentLoaded", () => {
    const app = document.querySelector('#app');
    const containerMain = AppMain();
    app.appendChild(containerMain);
})