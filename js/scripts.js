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

