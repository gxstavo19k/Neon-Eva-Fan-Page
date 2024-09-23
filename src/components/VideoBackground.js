import "@styles/background.css"

export const videoBackground = () => {
  let videoSrcURL = 'https://github.com/gustavo19k/assets-SouKick/raw/main/1o-projeto-web/background-video.mp4';
  let videoContainer = document.createElement('div');
  videoContainer.className = 'bg-video';
  videoContainer.innerHTML = ` <video class="video" autoplay muted loop>
         <source src="${videoSrcURL}" type="video/mp4" />
       </video>`;

  // const videoElement = videoContainer.querySelector('video');
  // videoElement.addEventListener('loadeddata', () => {
  //     videoContainer.style.visibility = 'visible'; // Exibe o container quando o vídeo estiver pronto
  // });
  return videoContainer;
};
