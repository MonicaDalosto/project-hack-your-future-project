/* Toggle between adding and removing the ".active" class to the #menuMobile (.ulMenuSmallScreen) when the user clicks on the .iconMenu */
function showNavBar() {
  let menuMobile = document.getElementById("menuMobile");
  if (menuMobile.className.includes('active')) {
    menuMobile.classList.remove('active');
  } else {
    menuMobile.classList.add('active');
  }
}