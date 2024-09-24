import "@styles/nav.css";
import githubSvg from "/github.svg"
import instagramSvg from "/instagram.svg"
import figmaSvg from "/figma.svg";

const links = {
  home: "index.html",
  story: "https://neongenesisevangelion.fandom.com/pt-br/wiki/Neon_Genesis_Evangelion#Composi%C3%A7%C3%A3o",
  trailer: "https://www.youtube.com/watch?v=9Vr9PxiuH6w",
  github: "https://github.com/gxstavo19k",
  instagram: "",
  figma: ""
};

export const NavComponent = () => {
  let navElement = document.createElement("nav");
  navElement.className = "navigation";

  navElement.innerHTML = `
    <ul class="navigation__links">
      <li>
        <a href="${links.home}" class="navigation__link">Home</a>
      </li>
      <li>
        <a href="${links.story}" class="navigation__link" target="_blank">Story</a>
      </li>
      <li>
        <a href="${links.trailer}" target="_blank" class="navigation__link" title="trailer do anime no YT">Trailer</a>
      </li>
    </ul>
    <div class="navigation__social">
      <a href="${links.github}" title="Link do repositório deste projeto">
        <img id="github-logo"
          src="${githubSvg}"
          alt="GitHub">
      </a>
      <a href="${links.instagram}" target="_blank" title="Link do meu perfil Instagram.">
        <img src="${instagramSvg}" alt="Instagram">
      </a>
      <a href="${links.figma}" target="_blank">
        <img src="${figmaSvg}" alt="Link do figma" title="Link do projeto no Figma deste site.">
      </a>
    </div>
    `;
  return navElement;
}