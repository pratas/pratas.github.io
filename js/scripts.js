document.getElementById('toggleAlumni').addEventListener('click', function() {
  const list = document.getElementById('alumniList');
  list.classList.toggle('hidden');
  this.textContent = list.classList.contains('hidden')
    ? 'Show Alumni'
    : 'Hide Alumni';
});

// script.js
document.addEventListener("DOMContentLoaded", function () {
  const bio = document.getElementById("biography");
  const btn = document.getElementById("bioButton");

  if (btn && bio) {
    btn.addEventListener("click", function () {
      if (bio.style.display === "none" || bio.style.display === "") {
        bio.style.display = "block";
        btn.textContent = "Hide Biography";
      } else {
        bio.style.display = "none";
        btn.textContent = "Show Biography";
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const topBtn = document.getElementById("topBtn");

  topBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
