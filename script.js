
//desktop and mobile menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}



//experiences nav bar
function showExperience(event, experienceId) {

  const navigationLinks = document.querySelectorAll('.nav-links2 a');

  // Remove 'active' class from all navigation links
  navigationLinks.forEach(navLink => {
      navLink.classList.remove('active');
  });
  // Add 'active' class to the clicked navigation link
  event.target.classList.add('active');


  // Prevent the default behavior of the anchor tag
  event.preventDefault();
  // Hide all experiences
  const experiences = document.querySelectorAll('.experience');
  experiences.forEach((experience) => {
      experience.classList.remove('active');
  });

  // Show the selected experience
  const selectedExperience = document.getElementById(experienceId);
  selectedExperience.classList.add('active');
}


// Trigger click event for the first link when the page loads
window.addEventListener('load', function () {
  const firstNavLink = document.querySelector('.nav-links2 a:first-child');
  firstNavLink.click();
});
