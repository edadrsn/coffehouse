document.querySelectorAll('.more-button').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        if (content.style.display === 'none') {
            content.style.display = 'block';
            button.textContent = 'Read Less';
            button.classList.add('show-more');
           
            content.style.width = '100vw';
            content.style.height = '100vh';
            content.style.position = 'fixed';
            content.style.top = '0';
            content.style.left = '0';
            content.style.zIndex = '9999';
            content.style.backgroundColor = 'rgba(255, 255, 255, 1)';
        } else {
            content.style.display = 'none';
            button.textContent = 'Read More';
            button.classList.remove('show-more');
           
            content.style.width = 'auto';
            content.style.height = 'auto';
            content.style.position = 'static';
            content.style.zIndex = 'unset';
            content.style.backgroundColor = 'transparent';
        }
    });
});

document.querySelectorAll('.less-button').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.parentElement;
        content.style.display = 'none';
        const moreButton = content.previousElementSibling;
        moreButton.textContent = 'Read More';
        moreButton.classList.remove('show-more');
       
        moreButton.nextElementSibling.style.width = 'auto';
        moreButton.nextElementSibling.style.height = 'auto';
        moreButton.nextElementSibling.style.position = 'static';
        moreButton.nextElementSibling.style.zIndex = 'unset';
        moreButton.nextElementSibling.style.backgroundColor = 'transparent';
    });
});