/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the .iconMenu */
function showNavBar() {
  let navMenuElement = document.getElementById("myNavMenu");
  if (navMenuElement.className === "navMenu") {
    navMenuElement.className += "responsiveMenu";
  } else {
    navMenuElement.className = "navMenu";
  }
}