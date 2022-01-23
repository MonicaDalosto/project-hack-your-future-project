/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the .iconMenu */
function showNavBar() {
  let menuMobile = document.getElementById("menuMobile");
  if (menuMobile.className.includes('active')) {
    menuMobile.classList.remove('active');
  } else {
    menuMobile.classList.add('active');
  }
}