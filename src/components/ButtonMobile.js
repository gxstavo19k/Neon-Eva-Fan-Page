import "@styles/mobile.css";
import { NavComponent } from "./Nav.js";

export const ButtonMobile = () => {
    const buttonElement = document.createElement("button");
    buttonElement.type = "button";
    buttonElement.id = "button";
    buttonElement.className = "button__mobile";
    buttonElement.title = "Botão para mobile";

    buttonElement.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
    `;


    const navigation = NavComponent();

    function handleClick() {
        console.log("botão clicado");
        buttonElement.classList.toggle("active");

        
        if (buttonElement.classList.contains("active")) {
            document.body.style.overflow = "hidden"; 
        } else {
            document.body.style.overflow = ""; 
        }

        if (navigation) {
            navigation.classList.toggle("active");
            const mainInfoDiv = document.querySelector(".main__info div");
            if (navigation.classList.contains("active")) {
                mainInfoDiv.style.display = "none";
            } else {
                mainInfoDiv.style.display = "inherit";
            }
        }
    }

    buttonElement.addEventListener("click", handleClick);

    return { buttonElement, navigation };
};