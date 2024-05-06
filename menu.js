function addToFavorites(menuItem) {
    var favoritesList = document.querySelector('.favorites-list');

    var listItem = document.createElement('li');
    listItem.innerHTML = `
<h3>${menuItem.querySelector('.menu-item-name').textContent}</h3>
<p>${menuItem.querySelector('.menu-item-description').textContent}</p>
<button class="remove-button">Remove from favorites</button>
`;

    favoritesList.appendChild(listItem);

    listItem.querySelector('.remove-button').addEventListener('click', function () {
        listItem.remove();
    });
}

function clearFavorites() {
    var favoritesList = document.querySelector('.favorites-list');
    favoritesList.innerHTML = '';
}

var menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(function (menuItem) {
    menuItem.addEventListener('click', function () {
        addToFavorites(menuItem);
    });
});

var clearFavoritesButton = document.querySelector('.clear-favorites');

clearFavoritesButton.addEventListener('click', clearFavorites);

document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        const addToFavoriteText = item.querySelector('.add-to-favorite-text');
        if (addToFavoriteText) {
            addToFavoriteText.style.opacity = '1';
        }
    });

    item.addEventListener('mouseleave', () => {
        const addToFavoriteText = item.querySelector('.add-to-favorite-text');
        if (addToFavoriteText) {
            addToFavoriteText.style.opacity = '0';
        }
    });
});
