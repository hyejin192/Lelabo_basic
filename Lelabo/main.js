const swiper = new Swiper('.swiper', {
    loop: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
});

// menu bar

function barClick(){
    $('.menu_con').slideToggle();
}