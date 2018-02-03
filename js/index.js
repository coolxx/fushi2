$(function () {
    $('.m2-btn li').each(function (index) {
        $(this).click(function () {
            $('.m2-show-box').hide().eq(index).show()
        })
    })
    $('.m2-show-box em').click(function () {
        $(this).parents('.m2-show-box').hide()
    })
})