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

  topBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
