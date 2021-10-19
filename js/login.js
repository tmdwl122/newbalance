$('.loginForm div p').on('focusin', function(){
    $(this).addClass('on')
})

$('.loginForm div p').on('focusout', function(){
    if(!$(this).find('input').val()) {
        $(this).removeClass('on')
    } 
})

$('.login_wrap .btnonoff_line .switch, .login_wrap .btnonoff_line p').on('click', function(){
    if ( !$(this).parent().hasClass('on') ) {
        $(this).parent().addClass('on')
    } else {
        $(this).parent().removeClass('on')
    }
    return false; 
})


// 로그인폼 입력값 유효성 체크
$('.loginForm').on('submit', function(){

    let userid = $('#userid').val()
    if (!userid) {
        alert('아이디를 입력하세요.')
        $('#userid').focus().addClass('on')
        $('#userid').prev().addClass('on')
        return false;
    }

    let userpwd = $('#userpwd').val()
    if (!userpwd) {
        alert('비밀번호를 입력하세요.')
        $('#userpwd').focus().addClass('on')
        $('#userpwd').prev().addClass('on')
        return false;
    }

    return false  // php연결후 삭제함
})