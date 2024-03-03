// navModal constants
const navOpenModalButtons = document.querySelectorAll('[data-modal-target-nav]');
const navCloseModalButtons = document.querySelectorAll('[data-close-button-nav]');
const navOverlay = document.getElementById('navOverlay');

//Event listeners for modal opening and overlay
navOpenModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const navModal = document.querySelector(button.dataset.modalTargetNav);
        navOpenModal(navModal)
    })
    navOverlay.addEventListener('click', () => {
        const navModals = document.querySelectorAll('.navModalDiv.active');
        navModals.forEach(navModal => {
            navCloseModal(navModal)
        });
    })
})

//event listener for modal closing
navCloseModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const navModal = button.closest('.navModalDiv')
        navCloseModal(navModal)
    });
})

//to show the navModal by adding class active that change properties in css
function navOpenModal(navModal) {
    if (navModal == null) return
    navModal.classList.add('active');
    navOverlay.classList.add('active');
}

//to disable the navModal 
function navCloseModal(navModal) {
    if (navModal == null) return
    navModal.classList.remove('active');
    navOverlay.classList.remove('active');
}

//homeModal constants
const homeOpenModalButtons = document.querySelectorAll('[data-modal-target-home]');
const homeCloseModalButtons = document.querySelectorAll('[data-close-button-home]');
const homeOverlay = document.getElementById('homeOverlay');

// Event listeners for modal opening and overlay
homeOpenModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const homeModalId = button.getAttribute('data-modal-target-home');
        const homeModal = document.getElementById(homeModalId);
        homeOpenModal(homeModal);
    });
});

homeOverlay.addEventListener('click', () => {
    const homeModals = document.querySelectorAll('.homeModalDiv.active');
    homeModals.forEach(homeModal => {
        homeCloseModal(homeModal);
    });
});

// Event listener for modal closing
homeCloseModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const homeModalId = button.getAttribute('data-close-button-home');
        const homeModal = document.getElementById(homeModalId);
        homeCloseModal(homeModal);
    });
});

// Function to show the modal by adding class active that changes properties in CSS
function homeOpenModal(homeModal) {
    if (homeModal == null) return;
    homeModal.classList.add('active');
    homeOverlay.classList.add('active');
}

// Function to close the modal
function homeCloseModal(homeModal) {
    if (homeModal == null) return;
    homeModal.classList.remove('active');
    homeOverlay.classList.remove('active');
}

export { navOpenModal, navCloseModal, homeOpenModal, homeCloseModal };