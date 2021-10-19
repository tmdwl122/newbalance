var data = [];

$.ajax({
    type:'GET',
    url:'data.json',
    dataType:'json',
    success:function(getdata){
        data = getdata
        useData(data,"new")
    },
    error:function(xhp){
        alert(xhp.status + ' 오류발생')
    }
})

function useData(rdata,keyvalue){
    $('.product').remove()
    var newCont = '<ul class="product">';
    for (let i in rdata[keyvalue]) {
        var price = rdata[keyvalue][i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        newCont += `<li><a href="javascript:;"><img src="${rdata[keyvalue][i].images}" onmouseover="this.src='${rdata[keyvalue][i].imageson}'" onmouseout="this.src='${rdata[keyvalue][i].images}'">`;
        newCont += `<div class="desp"><p class="name">${rdata[keyvalue][i].name}</p>`;
        newCont += `<p class="price">${price}원</p>`;
        newCont += `<p class="color">${rdata[keyvalue][i].color}</p></div></a></li>`;
    }
    newCont += `</ul>`

    $('.wrap').append(newCont)
}

$('.sub_menu li a').on('click', function(){
    var cate = $(this).attr('data-cate')
    useData(data,cate)
    return false
})






$('.wrap').on('mouseover', '.product li', function(){
    $(this).find('.desp').addClass('on')
})

$('.wrap').on('mouseout', '.product li', function(){
    $(this).find('.desp').removeClass('on')
})