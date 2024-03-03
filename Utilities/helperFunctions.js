//navbar function for scrolling to certain elements
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');

    //event for all nav-links to work on click
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            let targetSelector = link.getAttribute('href');
            scrollToDiv(targetSelector);
        });
    });
    //scrollTo function for selected elements
    function scrollToDiv(selector) {
        let targetDiv = document.querySelector(selector);
        if (targetDiv) {
            window.scrollTo({
                top: targetDiv.offsetTop,
                behavior: 'smooth'
            });
        }
    }
});


// custom img button to show video menu on click
function toggleVideo() {
    let video = document.querySelector('.musicVideo');
    if (video) {
        if (video.paused) {
            video.play();
            video.controls = true;
        } else {
            video.pause();
        }
    }
}
// hide this img when clickced
function hideButton() {
    let button = document.querySelector('.play_toggle');
    if (button) {
        button.style.display = 'none';
    }
}

//used to short the text in custom elements so it wont exceed the max length
function textShorten(selector, maxLength) {
    const customElementCards = document.querySelectorAll('custom-element-card');

    //access the shadow element and make a const for the text
    customElementCards.forEach(card => {
        const part1 = card.shadowRoot.querySelector('.header-content');
        const originalText = part1.innerText;
        let truncatedText;

        //when exceed 10 chars truncate
        if (originalText.length > 10) {
            truncatedText = originalText.substring(0, 10) + " ...";
            part1.innerText = truncatedText;
        }

        //change on mouseover
        part1.addEventListener('mouseover', function () {
            part1.innerText = originalText;

            //go back when mouseout
            part1.addEventListener('mouseout', function () {
                part1.innerText = truncatedText;
            });
        });
    });
};

export { toggleVideo, hideButton, textShorten };