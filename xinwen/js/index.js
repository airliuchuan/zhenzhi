var bol = true;
$('.btn').click(function() {
    $('.menu').slideToggle(200);
    if (bol) {
        $(this).children().attr('src', 'img/btn_back.png');
        bol = false;
    } else {
        $(this).children().attr('src', 'img/nav_btn.png');
        bol = true;
    }
})
