/**
 * Created by admin on 2018/1/23.
 */
$(function () {
    var oLi = $('.nav').find('li');
    oLi.each(function (i) {
        $(this).click(function () {
            $(this).siblings('li').removeClass('active');
            oLi.eq(i).addClass('active')
        })
    });
    //导航鼠标移入移出
    $('#about').mouseenter(function () {
        $('#aboutLi').fadeIn();
        $('#aboutBox').delay(100).fadeIn()
    });
    $('#about').mouseleave(function () {
        $('#aboutLi').fadeOut();
        $('#aboutBox').fadeOut()
    });
    $('#join').mouseenter(function () {
        $('#joinLi').fadeIn();
        $('#joinBox').delay(100).fadeIn()
    });
    $('#join').mouseleave(function () {
        $('#joinLi').fadeOut();
        $('#joinBox').fadeOut()
    });

    $("img").lazyload({
        effect: "fadeIn",
        placeholder: "js/grey.gif"
    });
    function aLink(classs,id) {
        classs.click(function () {
            $("html,body").animate({scrollTop: id.offset().top}, 1000);
        })
    }
    function top0(classs) {
        classs.click(function () {
            $("html,body").animate({scrollTop: 0}, 1000);
        });
    }
    aLink($('.hope'),$("#system"));
    aLink($('.ubxs'),$("#culture"));
    aLink($('.become-member'),$("#becomeMember"));
    aLink($('.Membershipr'),$("#Membership"));
    top0($('.who'));
    top0($('.joinas'));

    // 滑动滚动条
    $(window).scroll(function () {
// 滚动条距离顶部的距离 大于 200px时
        if ($(window).scrollTop() >= 0) {
            $('#who').siblings('li').removeClass('active');
            $('#who').addClass('active')
        }
        if ($(window).scrollTop() >= 2000) {
            $('#system1').siblings('li').removeClass('active');
            $('#system1').addClass('active')
        }
        if ($(window).scrollTop() >= 2800) {
            $('#culture1').siblings('li').removeClass('active');
            $('#culture1').addClass('active')
        }
    });
});