$('input[type=radio] + label, input[type=checkbox] + label').attr({
    tabindex:'0'
})

$('.appForm').on('submit', function(){
    $('.appForm input').css({
        borderColor:'#ccc'
    })

    // 아이디칸이 빈칸이면 경고창 띄우고, 전송안되게 하세요.
    let userid = $('#userid').val()
    if ( !userid ) {
        alert('아이디를 입력해주세요.')
        $('#userid').focus().css({
            borderColor:'red'
        })
        return false
    }

    let pwdLbl = $('#pwd_lbl').val()
    // 영문, 숫자, 특수문자 중 3가지 이상 조합. 첫글자는 영어만 허용
    let pwdLblCheck = /^(?=[a-zA-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).*$/
    // . 임의의문자(숫자,문자,특수문자 포함한 모든 문자)
    // * 앞의 글자가 0번 이상 나옴
    // [^ ] 대괄호 안의 ^는 not 
    if ( !pwdLblCheck.test(pwdLbl) ) {
        alert('비밀번호는 영문, 숫자, 특수문자 중 3가지 이상 조합. 첫글자는 영어만 허용')
        $('#pwd_lbl').focus().css({
            borderColor:'red'
        })
        return false
    }

    let pwd2Lbl = $('#pwd2_lbl').val()
    if ( !pwd2Lbl ) {
        alert('비밀번호확인을 입력해주세요.')
        $('#pwd2_lbl').focus().css({
            borderColor:'red'
        })
        return false
    } else {
        if ( pwdLbl!==pwd2Lbl ) {
            alert('비밀번호가 맞지 않습니다.')
            $('#pwd2_lbl').focus().css({
                borderColor:'red'
            })
            return false
        }
    }

    let nameLbl = $('#name_lbl').val()
    let nameLblCheck = /^[가-힣]+$/
    if ( !nameLblCheck.test(nameLbl) ) {
        alert('이름은 한글만 입력하세요.')
        $('#name_lbl').focus().css({
            borderColor:'red'
        })
        return false
    }

    let email = $('#email_lbl').val()
    let emailCheck = /^[a-zA-Z0-9]+$/
    // p.398~p.400 정규표현식 참고
    // ^ 첫 문자 일치, $ 끝 문자 일치
    // + 한번 이상 나옴
    
    if ( !emailCheck.test(email) ) {
        alert('특수문자는 포함하지 않으며, 한글자 이상 입력')
        $('#email_lbl').focus().css({
            borderColor:'red'
        })
        return false
    } 
    
    let emailDomain = $('#email_domain').val()
    let emailDomainCheck = /^[a-zA-Z]+[\.][a-z]+([\.][a-z]+)*$/
    // ?= 조건확인후 처음으로 돌아감
    // . 임의의문자(숫자,문자,특수문자 포함한 모든 문자)
    // * 앞의 글자가 0번 이상 나옴
    if ( !emailDomainCheck.test(emailDomain) ) {
        alert('정확한 도메인을 입력해주세요.')
        $('#email_domain').focus().css({
            borderColor:'red'
        })
        return false
    }

    let phoneLbl = $('#phone_lbl').val()
    if ( !phoneLbl ) {
        alert('전화번호를 입력해주세요.')
        $('#phone_lbl').focus().css({
            borderColor:'red'
        })
        return false
    }

    return false  // 유효성체크 프로그램 완료후 삭제할 것
})






// 이메일리스트 선택 이벤트
// 선택옵션의 value가 'title'도 아니고 'self'도 아닌 경우에는 
// #email_domain 입력상자에 그 value 값을 써라.
$('#email_list').on('change', function(){
    let opt = $(this).find('option:selected').val()
    // console.log(opt)
    if ( opt !== 'title' && opt !== 'self') {
        $('#email_domain').val(opt).css({
            backgroundColor:'#f2f2f2'
        }).attr({ disabled:true })
    } else if (opt==='self') {
        $('#email_domain').val('').css({
            backgroundColor:'#fff'
        }).attr({ disabled:false })
    } else {
        $('#email_domain').val('').css({
            backgroundColor:'#f2f2f2'
        }).attr({ disabled:true })
    }
})


// 체크박스들 전체선택으로 제어하기
$('#hobby_all').on('click', function(){
    let check = $(this).prop("checked")
    // console.log(check)
    $('input[id^="hobby"]').prop('checked', check)
})

$('#content_lbl').on('keydown', function(){
    let maxlen = 10
    let currentText = $(this).val().length
    // console.log(currentText)
    let remainText = maxlen - currentText
    $('.appForm .remain span').text(remainText)
})

// 생년월일 칸에 datepicker 연결하기
$.datepicker.setDefaults({
    dateFormat: 'yy-mm-dd',
    prevText: '이전 달',
    nextText: '다음 달',
    monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    dayNames: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
    showMonthAfterYear: true,
    yearSuffix: '년'
})
$('#birthday').datepicker({
    changeMonth:true,     // 월 선택
    changeYear:true,      // 연도 선택
    yearRange:'1900:2021'   // 연도 범위
}).attr({
    autocomplete:'off'
})


// $('#pwdarea .pwdhint').on('click', function(){
//     $(this).prev().focus()
// })

// $('#pwdarea input').on('keyup', function(){
//     let txtLen = $(this).val().length
//     if (txtLen) {
//         $(this).next().css({
//             display:'none'
//         })
//     } else {
//         $(this).next().css({
//             display:'block'
//         })
//     }
// })






