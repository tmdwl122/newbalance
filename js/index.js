
// $('html,body').stop().animate({
//     scrollTop : 0
// }, 1000)

$('.slideInner1').slick({
    autoplay:true,
    slidesToShow:1,
    autoplaySpeed: 2000,
    pauseOnHover:false,
    slidesToScroll:1,
    // nextArrow: '<a href=""><img src="./img/next.png" alt=""></a href="">',
    // prevArrow: '<a href=""><img src="./img/prev.png" alt=""></a href="">',
    arrows: false,
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

$(window).on('scroll', function(){ 
    // var wh = $(this).height()
    var sct = $(this).scrollTop()
    if(sct>=sDic3) {
        $('.gotop').addClass('on')
    } else if(sct<sDic3) {
        $('.gotop').removeClass('on')
    }

    
    

    if (sct>=sDic0 && sct<sDic1) {
        $('#nav').css({
            backgroundColor: 'transparent',
            borderBottom: 'none'
        })
    } else if (sct>=sDic1 && sct<sDic2) {
        $('#nav').css({
            backgroundColor: '#eff0f2',
            borderBottom: '1px solid #555'
        })
        $('#sect2').addClass('on') 
    }  else if (sct>=sDic2 && sct<sDic3) { 
        $('#sect3').addClass('on')
        
    }  else if ( sct>=sDic3) {
        $('#sect4').addClass('on')
    }  
})




// 질문) gotop버튼을 누른후 생기는 오류
$('.gotop').on('click', function(){
    $('html, body').animate({
        scrollTop:0
    }, 600)
    return false
})









