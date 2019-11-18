$(function(){
    for (let i = 0; i < $('.index-list').find('li').length; i++) {
        $('.index-list').find('li').eq(i).fadeIn(1500);
    }
    for (let i = 0; i < $('.contact-list').find('li').length; i++) {
        $('.contact-list').find('li').eq(i).fadeIn(2500);
    }
    $('.scroll-link').click(function(){
        var id=$(this).attr('href');
        var position=$(id).offset().top;
        $('html,body').animate({
            'scrollTop':position
        },500);
    });

    $('.work').click(function(){
        var id=$(this).attr('href');
        open(id);
    });
    $('.min-header-menu').click(function(){
        if($(this).hasClass('open')){
            $(this).removeClass('open');
            $(this).html('<span class="menu-bar fa fa-bars"></span>');
            $('.pull-down-menu').slideUp();
        }
        else{
            $(this).addClass('open');
            $(this).html('<span class="menu-bar fas fa-times"></span>');
            $('.pull-down-menu').slideDown();
        }
    });
});
