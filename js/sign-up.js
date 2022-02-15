
function Validation(){
    const RegExp = /^[a-zA-Z0-9]{4,12}$/;
    const ERegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    const id = document.querySelector("#id");
    const pw = document.querySelector("#pw");
    const RPw = document.querySelector("#r-pw");



    if(ERegExp.value == ''){ 
        alert("이메일을 입력해주세요.");
        return false;
    }
    
    if(!ERegExp.test(id.value)){
        alert("올바른 이메일 형식이 아닙니다.");
        return false;
    }
    

    if(id.value==''){
        alert("ID를 입력해주세요.");
        return false;
    }
    if(!RegExp.test(id.value)){ 
        alert("ID는 4~12자의 영문 대소문자와 숫자로만 입력하여 주세요.");        
        return false;
    }
    

    if(pw.value==''){
        alert("Password를 입력해주세요.");
        return false;
    }
    if(!RegExp.test(pw.value)){ 
        alert("Password는 4~12자의 영문 대소문자와 숫자로만 입력하여 주세요.");
        return false;
    }
    if(pw.value==id.value){ 
        alert("Password는 ID와 동일하면 안됩니다.");
        return false;
    }
    
    if(RPw.value!=pw.value){ 
        alert("비밀번호가 틀립니다. 다시 확인하여 입력해주세요.");
        return false;
    }
    
}


