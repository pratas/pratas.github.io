document.addEventListener("DOMContentLoaded", function () {
  const toggleAlumniBtn = document.getElementById('toggleAlumni');
  const alumniList = document.getElementById('alumniList');
  const toggleBiographyBtn = document.getElementById('toggleBiography');  // updated here
  const biography = document.getElementById('biography');
  const topBtn = document.getElementById("topBtn");

  if (toggleAlumniBtn && alumniList) {
    toggleAlumniBtn.addEventListener('click', function() {
      alumniList.classList.toggle('hidden');
      this.textContent = alumniList.classList.contains('hidden')
        ? 'Show Alumni'
        : 'Hide Alumni';
    });
  }

  if (toggleBiographyBtn) {
    toggleBiographyBtn.addEventListener('click', function() {
      biography.classList.toggle('hidden');
      this.textContent = biography.classList.contains('hidden')
        ? 'Show Biography'
        : 'Hide Biography';
    });
  }

  if (topBtn) {
    window.addEventListener("scroll", function () {
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
      } else {
        topBtn.style.display = "none";
      }
    });

    topBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
