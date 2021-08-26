
// $('html,body').stop().animate({
//     scrollTop : 0
// }, 1000)

$('.slideInner1').slick({
    autoplay:true,
    slidesToShow:1,
    autoplaySpeed: 3000,
    slidesToScroll:1,
    nextArrow: '<a href=""><img src="./img/next.png" alt=""></a href="">',
    prevArrow: '<a href=""><img src="./img/prev.png" alt=""></a href="">',
    arrows: true,
    responsive:[{
        breakpoint:801,
        settings:{
            slidesToShow:1,
            centerMode:false,
        }
    }]
})

$('.slideInner2').slick({
    autoplay:true,
    slidesToShow:1,
    autoplaySpeed: 3000,
    slidesToScroll:1,
    nextArrow: '<a href=""><img src="./img/next.png" alt=""></a href="">',
    prevArrow: '<a href=""><img src="./img/prev.png" alt=""></a href="">',
    responsive:[{
        breakpoint:801,
        settings:{
            slidesToShow:1,
            centerMode:false,
        }
    }]
})


var sDic0 = $('#sect1').offset().top
var sDic1 = $('#sect2').offset().top
var sDic2 = $('#sect3').offset().top
var sDic3 = $('#sect4').offset().top
var sDic4 = $('#sect5').offset().top
               
var lastSect = $('body').height() - $(window).height()

$(window).on('scroll', function(){ 
    // var wh = $(this).height()
    var sct = $(this).scrollTop()
    if(sct>=100) {
        $('.gotop').addClass('on')
    } else if(sct<100) {
        $('.gotop').removeClass('on')
    }

    $('.gotop a').on('click', function(e){
        e.preventDefault()
        $('html, body').animate({
            scrollTop:0
        }, 600)
    })

    if (sct>=sDic0 && sct<sDic1) {
        $('#nav').css({
            backgroundColor: 'transparent'
        })
    } else if (sct>=sDic1 && sct<sDic2) {
        $('#nav').css({
            backgroundColor: '#eff0f2',
        })
        $('#sect2').addClass('on') 
    }  else if ( sct>=sDic2 && sct<sDic3) { 
        $('#sect3').addClass('on')
        
    }  else if ( sct>=sDic3 && sct<sDic4) {
        $('#sect4').addClass('on')
    }  else if ( sct>=sDic4 && sct<lastSect) {
        $('#sect5').addClass('on')
      
    }  else if ( sct>=lastSect) {
        $('#sect6').addClass('on')
        
    }
})


// $('section').on('mousewheel', function(event,delta){
//     if (delta>0) {    // 마우스휠을 위로 굴리면 양수
//        $('html,body').stop().animate({
//            scrollTop: $(this).prev().offset().top
//        },700)
//     } else if(delta<0) {   // 마우스휠을 아래로 굴리면 음수
//         $('html,body').stop().animate({
//             scrollTop: $(this).next().offset().top
//         },700)
//     }
// })


$('.depth1 li').on('click', function(e){
    e.preventDefault()
    if ($(this).hasClass('on')) {
        $(this).removeClass('on') 
    } else {
        $(this).addClass('on')
        $(this).siblings().removeClass('on')
    }
})

// 햄버거 메뉴 질문
// 햄버거메뉴 클릭 시 메뉴박스 오픈하기
$('.open').on('click', function(){

   if($(this).hasClass('on')) {
    $(this).removeClass('on') 
   } else {                        
       $(this).addClass('on')
       $('#nav').css({
           backgroundColor: '#fff',
       })
       $(".open .bar ").css({
        backgroundColor: '#555'
       })
       $(" #mypage li").css({          
           color: "#555"      
       })
       $('h1').removeClass('on')
   }
})


// 햄버거 메뉴박스 닫기
$('.openlist li a').on('click', function(e){
    e.preventDefault()
    $('.open').removeClass('on')
    var num = $(this).parent().index()
    let opensct =  $("section").eq(num).offset().left
    $('html, body').animate({
        scrollLeft:opensct
    }, 800)
})


