/**
 * Created by SUN on 2017/4/4.
 * base on es6
 */

{
    // City search switch
    $('#J_city-sel-bar').on('click', () => {
        $('#J_city-select').hide();
        $('#J_city-search').show();
    });
    $('#J_search-cancel').on('click', () => {
        $('#J_city-select').show();
        $('#J_city-search').hide();
    });

    // City search button
    $('#J_search-btn').on('click', () => {

    })
}

