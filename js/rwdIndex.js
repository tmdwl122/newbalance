@media screen and (max-width:800px) {
$('.slideInner1').slick({
    autoplay:true,
    slidesToShow:1,
    autoplaySpeed: 2000,
    slidesToScroll:1,
    // centerMode:true,
    // centerPadding:"10px",
    arrows: false,
    responsive:[{
        breakpoint:801,
        settings:{
            slidesToShow:1,
            centerMode:false,
        }
    }]
})
}