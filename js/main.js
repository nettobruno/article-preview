function showSocialMedia() {
  var display = document.getElementById("social-media").style.display;

  if(display === "none") {
    document.getElementById("social-media").style.display = "flex";
  }
  else {
    document.getElementById("social-media").style.display = "none";
  }
}