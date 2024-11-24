const closeWarningButton = document.getElementById("close-warning");
const warningMessage = document.getElementById("warning");
const triggerImage = document.getElementById("trigger-image");
const navbar = document.getElementById("navbar");


triggerImage.addEventListener("click", (e) => {
  e.stopPropagation();
  navbar.classList.toggle("visible");

  if (navbar.classList.contains("visible")) {
    triggerImage.style.display = "none"; 
  } else {
    triggerImage.style.display = "block";
  }
});

// Fermer la barre si on clique en dehors
document.addEventListener("click", (e) => {
  if (!navbar.contains(e.target) && !triggerImage.contains(e.target)) {
    navbar.classList.remove("visible");
    triggerImage.style.display = "block";
  }
});