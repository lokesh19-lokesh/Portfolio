// Navbar Hamburger Menu Functionality
// This code handles the toggle of the hamburger menu in responsive design.
const hamburger = document.getElementById('hamburger'); // Get the hamburger menu icon
const menu = document.querySelector('.menu'); // Get the navigation menu

// Add a click event listener to the hamburger icon
hamburger.addEventListener('click', function () {
    // Get the hamburger and cross (close) icons
    const hamIcon = this.querySelector('.hamburger-icon');
    const crossIcon = this.querySelector('.cross-icon');

    // Check if the hamburger icon is hidden, and toggle between hamburger and cross icons
    if (hamIcon.style.display === "none") {
        hamIcon.style.display = "inline-block"; // Show hamburger icon
        menu.style.display = "none"; // Hide the navigation menu
        crossIcon.style.display = "none"; // Hide the cross icon
    } else {
        crossIcon.style.display = "inline-block"; // Show the cross (close) icon
        hamIcon.style.display = "none"; // Hide the hamburger icon
        menu.style.display = "block"; // Display the navigation menu
    }
});

// Functionality for "Hire Me" button
// Redirects the user to the default mail client to send an email
const hireMeBtn = document.getElementById('hire-me-btn'); // Get the "Hire Me" button
hireMeBtn.addEventListener('click', function() {
    window.location.href = "mailto:2100030312cseh@gmail.com"; // Opens the mail client with the predefined email address
});

// Functionality for "Get Resume" button
// Opens the resume in a new tab when the button is clicked
const getResumeBtn = document.getElementById('get-resume-btn'); // Get the "Get Resume" button
getResumeBtn.addEventListener('click', function() {
    window.open('resume.pdf', '_blank'); // Opens the 'resume.pdf' file in a new browser tab
});

// Show/Hide Details Functionality for Portfolio Section
// This function shows or hides the details for a selected portfolio item.
// When a user clicks on an item, it displays the corresponding details and hides the others.
function showDetails(detailId) {
    const detailElement = document.getElementById(detailId); // Get the specific detail element by its ID
    const allDetails = document.querySelectorAll('.details-content'); // Select all elements with the 'details-content' class
    
    // Loop through all details and hide those that are not the selected one
    allDetails.forEach(detail => {
        if (detail !== detailElement) {
            detail.style.display = 'none'; // Hide the other details
        }
    });
    
    // Toggle display of the selected detail (show/hide)
    detailElement.style.display = detailElement.style.display === 'block' ? 'none' : 'block';
}