


function create_id () {

const id = document.querySelector('#id');
const pw = document.querySelector('#pw');
const Rpw = document.querySelector('r-pw');

    if(id.value == "" || pw.value == "" || Rpw.value == "") {
        alert ("회원가입을 할 수 없습니다.")
    }
    else{
        if (pw.value !== Rpw.value) {
            alert("비밀번호를 확인해 주세요")
        }
        else {
            location.href = 'login-box.html';
        }
    }
}