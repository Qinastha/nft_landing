//listener to show the content on domload + consts for all fuctions
document.addEventListener("DOMContentLoaded", function () {
    const openButton = document.querySelector('.openHidden');
    const initialItemsContainer = document.querySelector('.fetchedItemsContainer');
    let isItemsExpanded = false;
    const addedItemIds = new Set();


    //creating structure for items
    function createGemElement(gem) {
        const gemItem = document.createElement('div');
        gemItem.classList.add('col-12', 'col-md-6', 'col-lg-4', 'gemsItem');
        gemItem.innerHTML = `
              <div class="card">
                <img class="gem_img" src="${gem.image}" alt="Avatar">
                <div class="card-body">
                  <h6 class="card-title">${gem.name} &nbsp; ${gem.verified ? '<img class="verify" src="assets/verify.svg">' : ''}</h6>
                  <p class="card-text">Created by &nbsp; <span class="gradienText"> ${gem.creator}</span></p>
                  <p class="card-general">${gem.description}</p>
                </div>
              </div>
            `;
        return gemItem;
    }

    //set localStorage
    function saveItemsToLocalStorage(items) {
        localStorage.setItem('gems', JSON.stringify(items));
    }

    //fetching the json to recieve info
    function fetchItems() {
        return fetch('project.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .catch(error => {
                console.error('Error fetching hidden gems data:', error);
            });
    }

    //load items from localStorage
    function loadItemsFromLocalStorage() {
        return JSON.parse(localStorage.getItem('gems')) || [];
    }

    //append items to the dom
    function appendItems(items) {
        items.forEach(gem => {
            if (!addedItemIds.has(gem.id)) {
                const gemItem = createGemElement(gem);
                initialItemsContainer.appendChild(gemItem);
                addedItemIds.add(gem.id);
            }
        });
    }

    //show only 3 items at the beginning
    function handleItemsVisibility(isExpanded) {
        const allGems = Array.from(document.querySelectorAll('.gemsItem'));
        allGems.forEach((item, index) => {
            if (!isExpanded && index > 2) {
                item.style.display = 'none';
            } else {
                item.style.display = 'block';
            }
        });
    }

    //check if items are in LocalStorage if not fetch them
    let gemsData = loadItemsFromLocalStorage();
    if (gemsData?.length === 0) {
        fetchItems()
            .then(data => {
                gemsData = data || [];
                saveItemsToLocalStorage(gemsData);
                appendItems(gemsData);
                handleItemsVisibility(isItemsExpanded);
            });
    } else {
        appendItems(gemsData);
        handleItemsVisibility(isItemsExpanded);
    }

    //to show all fetched items
    openButton.addEventListener('click', function () {
        isItemsExpanded = !isItemsExpanded;
        handleItemsVisibility(isItemsExpanded);
    });
});