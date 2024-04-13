function showPopup(title, description) {
  document.getElementById("popupOverlay").style.display = "flex";
  document.getElementById("popupTitle").innerText = title;
  document.getElementById("popupDescription").innerText = description;
}

function closePopup() {
  document.getElementById("popupOverlay").style.display = "none";
}
