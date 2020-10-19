const playing = (e) => {
  const item = document.querySelector(`#key-${e.keyCode}`);
  const audio = document.querySelector(`#sound-${e.keyCode}`);
  if (!audio) {
    return;
  }
  item.classList.add("active");
  audio.currentTime = 0;
  audio.play();
  setTimeout(() => {
    item.classList.remove("active");
  }, 200);
};
window.addEventListener("keydown", playing);