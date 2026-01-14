function toggleDropdown() {
  document.getElementById("dropdownMenu").classList.toggle("show");
}

// Close dropdown when clicking outside
window.addEventListener("click", function (e) {
  const dropdown = document.getElementById("logoDropdown");
  const menu = document.getElementById("dropdownMenu");

  if (!dropdown.contains(e.target)) {
    menu.classList.remove("show");
  }
});