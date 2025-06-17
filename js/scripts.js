document.getElementById('toggleAlumni').addEventListener('click', function() {
  const list = document.getElementById('alumniList');
  list.classList.toggle('hidden');
  this.textContent = list.classList.contains('hidden')
    ? 'Show Alumni'
    : 'Hide Alumni';
});

document.getElementById('toggleBiography').addEventListener('click', function() {
  const list = document.getElementById('biography');
  list.classList.toggle('hidden');
  this.textContent = list.classList.contains('hidden')
    ? 'Show Biography'
    : 'Hide Biography';
});

document.addEventListener("DOMContentLoaded", function () {
  const topBtn = document.getElementById("topBtn");

  // Mostrar ou esconder o botão consoante o scroll
  window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  });

  // Voltar ao topo ao clicar
  topBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
