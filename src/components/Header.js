import "@styles/header.css";
import Logo from "/evangelion-logo.png";
import { ButtonMobile } from "./ButtonMobile.js";

export const Header = () => {
    const headerElement = document.createElement("header");
    headerElement.id = "header";

    headerElement.innerHTML = `<img class="logo"
    src="${Logo}"
    alt="Evangelion Anime's Logo"
    aria-label="Logo do Anime Evangelion"
    title="Evangelion Logo" />
    `;

    const { buttonElement, navigation } = ButtonMobile();

    headerElement.appendChild(buttonElement);
    headerElement.appendChild(navigation);

    return headerElement;
};
