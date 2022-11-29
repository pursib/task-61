import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  const hot = document.querySelectorAll('.hot');
  hot.forEach(e => {
    e.textContent += '🔥';
  });
});
