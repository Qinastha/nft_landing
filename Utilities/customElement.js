// custom element creation
class CustomElementCard extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        //creating and styling it
        const card = document.createElement('div');
        card.classList.add('custom-card');
        card.innerHTML =
            `<style>
        .custom-card {
            border: 1.5px solid rgb(255, 165, 0);;
            border-radius: 40px;
            font-family:"Ikntrap", sans-serif;
        }
        
        .card-image {
            width: 100%;
            height: 250px;
            border-radius: 40px 40px 0 0;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
        }

        .allCard {
            display: grid ;
            padding-bottom: 20px;
        }

        .header {
            display: flex;
            justify-content: space-start;
            width:100%;
            border-bottom:1.5px solid;
            border-image: linear-gradient(90.71deg, #73E0A9 40%, #5B68DF 100%);
            border-image-slice: 1;
            align-items: center;
            word-break: keep-all;
        }

        .logo {
            width: 4rem;
            height: 4rem;
            padding-right:1rem;
            padding-left:1rem;
        }

        .card-content {
            background-color: #252836;
            width:90%;
            margin:0 auto;
        }

        .title, .priceSum {
            font-size:1rem;
        }
        .author, .price {
            font-size:0.8rem;
        }
        
        .title, .author {
            padding-bottom:1rem;
        }

        .body-content {
            padding-left: 2rem;
        }

        .priceSum {
            font-weight: bold;
        }

        .check {
            width: 1.5rem;
            height: 1.5rem;
        }
        </style>`

        //custom element structure
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('card-image');
        imageContainer.style.backgroundImage = `url(${this.getAttribute('image-src')})`;

        const content = document.createElement('div');
        content.classList.add('card-content');

        const logo = document.createElement('img');
        logo.classList.add('logo');
        logo.src = this.getAttribute('logo-src');
        content.appendChild(logo);

        const part1 = document.createElement('div');
        part1.classList.add('header-content');
        part1.innerHTML = `<p class="title">${this.getAttribute('part1text1')}</p><p class="author">
        ${this.getAttribute('part1text2')} 
        <img style="width:1rem; height:1rem" class="check" src="assets/kk.svg"></p>`;

        const card_header = document.createElement('div');
        card_header.classList.add('header');

        const part2 = document.createElement('div');
        part2.classList.add('body-content');
        part2.innerHTML = `<p class="price">${this.getAttribute('part2text1')}</p><p class="priceSum">
        ${this.getAttribute('part2text2')}</p>`;

        const allCard = document.createElement('div');
        allCard.classList.add('allCard');

        //appending all created elements to the html
        content.appendChild(card_header);
        card_header.appendChild(logo);
        card_header.appendChild(part1);

        content.appendChild(part2);

        allCard.appendChild(imageContainer)
        allCard.appendChild(content);

        card.appendChild(allCard);

        shadow.appendChild(card);

        this.part1 = part1;
    }
}
customElements.define('custom-element-card', CustomElementCard);

//used for text shorten if max.length exceed 10 
import { textShorten } from './helperFunctions.js';
textShorten('.header-content', 10);
