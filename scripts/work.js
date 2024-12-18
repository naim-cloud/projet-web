document.addEventListener('DOMContentLoaded', () => {
    const viewProjectBtn = document.querySelector('.view-project-btn');
    const modal = document.querySelector('.modal');
    const closeButton = document.querySelector('.close-btn');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description'); // Get the description element
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');

    // Array of images and descriptions
    const images = [
        { src: '../images/solar-app-image-1.png', desc: 
            "The 'Home' interface allows users to access key features. Clicking 'Login'"+ 
                "redirects to the 'Authenticate' page to sign in. Clicking 'Contact' leads to the"+ 
                "'License Request' page to submit a licence application. Lastly, 'Features' displays "+
                "the full list of functionalities offered by the application." },
        { src: '../images/solar-app-image-2.png', desc: "The 'Login' interface allows users to sign in by entering their email and"+
                 "password. Clicking 'Connect' logs them in, while 'Forgot Password?' redirects to the"+
                  "password recovery page." },
        { src: '../images/solar-app-image-3.png', desc: "The 'Request Licence' interface allows potential clients to send a licence"+ 
                "request to the application administrator." },
        { src: '../images/solar-app-image-4.png', desc: "The administrator's home interface allows managing licence requests, including"+
                 "filtering, deleting, and approving them. Clicking the 'Approve' button redirects to the "+
                 "'Approve Licence Request' interface, while rejecting can be done with the corresponding "+
                 "button. " },
        { src: '../images/solar-app-image-5.png', desc: "The 'Approve Licence Request' interface allows an administrator to input an"+
                 "entrepreneur's personal information and assign a licence to them." },
        { src: '../images/solar-app-image-6.png', desc: "Interface for managing quote requests, where an entrepreneur or secretary"+ 
                "can filter, edit, and delete requests. Only the entrepreneur and manager can create a"+
                 "quote from a specific request." },
        { src: '../images/solar-app-image-7.png', desc: "Clicking the 'Add' button in the 'Manage Quote Requests' interface navigates"+
                 "to the 'Add Quote Request' interface. This interface allows an entrepreneur or secretary"+ 
                 "to enter the details of a quote request and save them in the system." },
        { src: '../images/solar-app-image-8.png', desc: "The 'Manage Stock' interface allows an entrepreneur or secretary to view stock"+ 
                "levels or modify the stock of equipment. It also enables the deletion of equipment that is"+
                 "no longer in use." },
        { src: '../images/solar-app-image-9.png', desc: "Clicking the 'Add' button in the 'View Materials List' interface navigates to"+ 
               " the 'Add Solar Panel' interface, where an entrepreneur or secretary can enter information"+ 
                "about a solar panel and save it in the system." },
        { src: '../images/solar-app-image-10.png', desc: "The 'View Projects List' interface allows an entrepreneur or manager to view"+ 
               "the list of projects. From this list, they can create, print, and send an invoice for a"+ 
                "specific project or delete it. Additionally, by clicking the 'Materials' icon, the"+ 
                "entrepreneur can track the materials used in the project. Finally, by clicking the"+ 
                "'Amendments' icon, they can manage amendments (i.e., materials not specified in the quote)."},
        { src: '../images/solar-app-image-11.png', desc: "Clicking the 'Construction' button in the 'View Quotes List' interface takes"+
                 "you to the 'Add Project' interface. From there, the entrepreneur or manager can enter"+
                  "project details, associate a client with the project, and save it to the database." },
        { src: '../images/solar-app-image-12.png', desc: "The 'Schedule Project Activities' interface allows an entrepreneur or"+ 
                "manager to view activities in a calendar format. From the calendar, they can select"+
                 "start and end dates, assign the necessary technicians and the project to an activity,"+ 
                 "and modify or delete activities."},
        { src: '../images/solar-app-image-13.png', desc:"The 'Manage Quotes' interface allows an entrepreneur or manager to view quotes."+
                "From this list, they can modify, delete, print, and email a quote. Additionally,"+
                  "by clicking the 'Construction' button, the entrepreneur or manager can create a project from a specific quote."}
    ];

    let currentIndex = 0;

    // Show modal with the first image
    viewProjectBtn.addEventListener('click', () => {
        modal.classList.add('active');
        currentIndex = 0; // Reset to the first image
        updateModalImage();
    });

    // Close modal
    closeButton.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    // Update modal image and description based on the current index
    function updateModalImage() {
        modalImage.src = images[currentIndex].src; // Set the image source
        modalDescription.textContent = images[currentIndex].desc; // Set the description text
    }

    // Navigate to the previous image
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateModalImage();
    });

    // Navigate to the next image
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateModalImage();
    });
});