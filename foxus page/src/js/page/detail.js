/**
 * Created by SUN on 2017/4/4.
 * base on es6
 */

{
    $('#J_tabs > li').on('click', function () {
        var index = $(this).index();

        if (index > 0) {
            $('#J_tabs').removeClass('move-l')
                .addClass('move-r');
        } else {
            $('#J_tabs').removeClass('move-r')
                .addClass('move-l');
        }

        $('.tabs-list >li').eq(index).show().siblings().hide();
    });



    $('#J_topay').on('click', function () {
        alert('go to pay');
    })

    var swiper = new Swiper('.swiper-container', {
        pagination : '.swiper-pagination',
        paginationType : 'custom',
        paginationCustomRender: function (swiper, current, total) {
            return current + ' / ' + total;
        }
    });
}
