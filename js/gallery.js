$(document).ready(function () {
    $('.gallery-item').click(function () {
        var imgUrl = $(this).find('img').attr('src');
        var imgAlt = $(this).find('img').attr('alt');
        showModal(imgUrl, imgAlt);
    });
});

function showModal(url, alt) {
    var modalHtml = `
<div class="modal-overlay">
    <div class="modal">
        <img src="${url}" alt="${alt}">
        <button class="close-btn">&times;</button>
    </div>
</div>
`;
    $('body').append(modalHtml);

    $('.close-btn, .modal-overlay').click(function () {
        $('.modal-overlay').remove();
    });
}

$('.social-icons a').click(function (event) {
    event.preventDefault();
    var url = window.location.href;
    var title = document.title;
    var network = $(this).attr('class');
    var shareUrl;
    switch (network) {
        case 'facebook':
            shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url);
            break;
        case 'twitter':
            shareUrl = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(title);
            break;
        case 'instagram':
            shareUrl = 'https://www.instagram.com/';
            break;
        default:
            shareUrl = '';
    }
    if (shareUrl !== '') {
        window.open(shareUrl, '_blank');
    }
});

/*****/
//Swiper
document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".swiper-container", {
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        effect: "fade",
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});

/*İstatistik*/
function updateGalleryStats(totalImages, totalLikes) {
    document.getElementById('totalImages').textContent = totalImages;
    document.getElementById('totalLikes').textContent = totalLikes;
}

let imagesCount = 50;
let likesCount = 0;

  //like+1
  document.querySelectorAll('.like-btn').forEach(button => {
    button.addEventListener('click', () => {
        // İstatistikteki like sayısını artır
        const likeCountElement = document.getElementById('totalLikes');
        let currentLikes = parseInt(likeCountElement.textContent);
        currentLikes++;
        likeCountElement.textContent = currentLikes;
    });
});
