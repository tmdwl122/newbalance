// 햄버거메뉴 클릭 시 메뉴박스 오픈하기
$('.ham').on('click', function(){
    $('.menu').addClass('on')
})


// 햄버거 메뉴박스 닫기
$('.closet').on('click', function(){
    $('.menu').removeClass('on')
    $('.depth1 li').removeClass('on')
})

$('.depth1 li').on('click', function(){
    if ($(this).hasClass('on')) {
        $(this).removeClass('on') 
    } else {
        $(this).addClass('on')
        $(this).siblings().removeClass('on')
    }
})