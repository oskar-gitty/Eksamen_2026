const toggle = document.getElementById("theme-toggle");

if (toggle) {
  toggle.addEventListener("change", function () {
    document.body.style.backgroundColor = toggle.checked ? "#4a4a4a" : "#94fa59";
  });
}
