  // Header
  $(document).ready(function () {
    $('header h1').css({
        'transform': 'translateX(15px)',
        'transition': 'transform 0.5s ease'
    });
});

$('header h1').mouseleave(function () {
    $(this).css({
        'transform': 'translateX(-15px)',
        'transition': 'transform 0.5s ease'
    });
});


// Sosyal medya 
const socialMediaItems = document.querySelectorAll('.social-media ul li');

socialMediaItems.forEach(item => {
    item.addEventListener('click', () => {

        item.style.transition = 'transform 0.5s ease';
        item.style.transform = 'scale(1.2) translateY(-5px)';

        const text = item.querySelector('a');
        text.style.transition = 'transform 0.5s ease';
        text.style.transform = 'scale(1.2) translateY(-5px)';

        setTimeout(() => {
            item.style.transform = 'scale(1) translateY(0)';
            text.style.transform = 'scale(1) translateY(0)';
        }, 500);
    });
});

$('.social-media ul li').mouseenter(function () {
    $(this).css({
        'transform': 'scale(1.2) translateY(-5px)',
        'transition': 'transform 0.5s ease'
    });
    $(this).find('a').css({
        'transform': 'scale(1.2) translateY(-5px)',
        'transition': 'transform 0.5s ease'
    });
});

$('.social-media ul li').mouseleave(function () {
    $(this).css({
        'transform': 'scale(1) translateY(0)',
        'transition': 'transform 0.5s ease'
    });
    $(this).find('a').css({
        'transform': 'scale(1) translateY(0)',
        'transition': 'transform 0.5s ease'
    });
});

// Harita
const map = document.querySelector('.map img');

map.addEventListener('click', () => {
    map.style.transition = 'transform 1s ease';

    map.style.transform = 'scale(1.2)';
    setTimeout(() => {
        map.style.transform = 'scale(1)';
    }, 1000);
});
