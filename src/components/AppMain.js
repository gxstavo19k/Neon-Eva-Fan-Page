import evaTrio from "/trio.png";
import "@styles/AppMain.css";
import "@styles/main.css";

export let AppMain = () => {
  const containerMain = document.createElement("div");
  containerMain.id = "container-main";

  const links = {
    trailer: "https://www.youtube.com/watch?v=9Vr9PxiuH6w",
  };

  const contentMain = {
    paragraphMain:
      "Um dia, Shinji Ikari é recrutado por seu pai, Gendo, para a misteriosa organização NERV. Ele é jogado em um mundo ameaçado por seres monstruosos conhecidos como Anjos. Shinji, junto com outros adolescentes, Rei Ayanami e Asuka Sohryu, são os únicos capazes de pilotar as gigantescas máquinas biomecânicas chamadas Evangelions e combater os Anjos. No entanto, a batalha contra os Anjos é apenas a superfície. À medida que a luta continua, os pilotos são chamados para entender a causa final dos eventos e os motivos por trás das ações humanas. Eles são forçados a enfrentar suas próprias emoções e experiências, levando a questionamentos sobre a realidade e a existência. É então quando Shinji é confrontado com a verdade sobre os Evangelions e a NERV, e ele deve fazer tudo o que puder para deter os Anjos e reestabelecer a paz.",
    buttonMain: "Ver FIlmes",
    buttonAux: "Assistir ao trailer",
  };

  containerMain.innerHTML = `<main id="main">
        <div class="main__info">
          <p class="paragraphMain">
            ${contentMain.paragraphMain}
          </p>
          <div>
            <a class="buttonMain" href="${links.trailer}" target="_blank">${contentMain.buttonAux}</a>
            <button class="buttonAux" type="button" onclick="window.open('https://neongenesisevangelion.fandom.com/pt-br/wiki/Neon_Genesis_Evangelion#Composi%C3%A7%C3%A3o','_blank');">${contentMain.buttonMain}</button>
          </div>
        </div>
        <img class="simple-image" id="Trio" src="${evaTrio}" alt="Simples foto dos três protagonistas do Anime.">
      </main>`;

  return containerMain;
};
