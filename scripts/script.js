
const texts = ["Naim Ben Ali","FrontEnd Developer", "BackEnd Developer", "Full Stack Developer","A Student","Software Engineer"];
let index = 0;
let charIndex = 0;
const typingElement = document.querySelector('.typing');

function type() {
    if (charIndex < texts[index].length) {
        typingElement.textContent += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100); // Adjust typing speed here (100ms)
    } else {
        setTimeout(erase, 2000); // Wait before erasing
    }
}
function erase() {
    if (charIndex > 0) {
        typingElement.textContent = texts[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50); // Adjust erasing speed here (50ms)
    } else {
        index = (index + 1) % texts.length; // Cycle through the texts
        setTimeout(type, 500); // Wait before starting to type the next text
    }
}

// Start the typing effect
type();

function confirmDownload() {
    // Ask the user for confirmation
    const isConfirmed = confirm("Are you sure you want to download my CV?");
    
    // Return true to proceed with the download or false to cancel
    return isConfirmed;
}



//function showContent(sectionId) {
    // Hide all sections
    //document.querySelectorAll('.content-section').forEach(section => {
       // section.classList.remove('active');
   // });
    // Show the selected section
    //document.getElementById(sectionId).classList.add('active');
//}
function showContent(sectionId, button) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    document.getElementById(sectionId).classList.add('active');

    // Remove 'active' class from all buttons
    const buttons = document.querySelectorAll('.left_side .buttons ul li button');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Add 'active' class to the clicked button
    button.classList.add('active');
}

// Automatically show the first section and set the first button as active on page load
document.addEventListener('DOMContentLoaded', () => {
    showContent('experience', document.querySelector('.left_side .buttons ul li button.active'));
});

