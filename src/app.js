import "./global.css";
import { AppMain } from "@components/AppMain.js";
import { SpinnerLoader } from "@modules/SpinnerLoader.js";
import { videoBackground } from "@components/VideoBackground.js";

addEventListener("DOMContentLoaded", () => {
    SpinnerLoader();
    const app = document.querySelector('#app');
    const containerMain = AppMain();
    const videoBg = videoBackground();
    app.appendChild(videoBg);
    app.appendChild(containerMain);
})