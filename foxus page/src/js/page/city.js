/**
 * Created by SUN on 2017/4/4.
 * base on es6
 */

{
    $('#J_city-tab > li').on('click', function () {
        if ($(this).index() > 0) {
            $('#J_city-tab').removeClass('move-l')
                .addClass('move-r');
        } else {
            $('#J_city-tab').removeClass('move-r')
                .addClass('move-l');
        }
    })
}
