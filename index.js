//import all our modules
import { toggleVideo, hideButton } from './Utilities/helperFunctions.js';
import './Utilities/popupWindows.js';
import './Utilities/fetchRequest.js';
import './Utilities/customElement.js';

document.addEventListener('DOMContentLoaded', () => {
    // Call toggleVideo on click
    document.querySelector('.play_toggle').addEventListener('click', () => {
        toggleVideo();
    });

    // Call hideButton on video play
    document.querySelector('.musicVideo').addEventListener('play', () => {
        hideButton();
    });
});