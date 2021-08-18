function joinform_check(){

    // 아이디, 비밀번호, 이름, 생년월일, 이메일, 성별, 전화번호 객체 셋팅
    var id = document.getElementById('user_id');
    var pw1 = document.getElementById('user_pw');
    var pw2 = document.getElementById('userpw_ck');
    var name = document.getElementById('user_name');
    var email = document.getElementById('email_id');
    var male = document.getElementById('male');
    var female = document.getElementById("female");
    var ph = document.getElementById('user_ph');
    var self = document.getElementById('user_self');

    var id_check = /^[a-zA-Z0-9]{8,20}$/; // 아이디 유효성 검사
    
    if (id.value == "") {
        alert("아이디를 입력해 주세요.");
        id.focus();
        return false;
    };

    if(!id_check.test(id.value)) {
        alert("아이디는 영문자 + 숫자 조합으로 8~20자리 사용해야 합니다.");
        id.value = "";
        id.focus();
        return false;
    }

    if (pw1.value == "") {
        alert("비밀번호를 입력해 주세요.");
        pw1.focus();
        return false;
    };

    // 비밀번호 영문자+숫자+특수조합(8~20자리)
    var pwCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;
    
    if (!pwCheck.test(pw1.value)) {
        alert("비밀번호는 영문자 + 숫자 + 특수문자 조합으로 8~20자리 사용해야 합니다.");
        pw1.value = "";
        pw1.focus();
        return false;
    };

    if (pw1.value !== pw2.value) {
        alert("비밀번호가 일치하지 않습니다. 다시 입력해 주세요.");
        pw2.focus();
        return false;
    };

    if (name.value == "") {
        alert("이름을 입력해 주세요.");
        name.focus();
        return false;
    };

    if (!female.checked && !male.checked) {
        alert("성별을 선택해 주세요.");
        male.focus();
        return false;
    }

    if (email.value == "") {
        alert("이메일 주소를 입력해 주세요.");
        email.focus();
        return false;
    };

    

    if (ph.value == "") {
        alert("전화번호를 입력해 주세요.");
        ph.focus();
        return false;
    };

    // 전화번호 숫자만 입력하는 정규식
    var reg = /^[0-9]+/g; 

    if (!reg.test(ph.value)) {
        alert("전화번호는 숫자만 입력할 수 있습니다.");
        ph.focus();
        return false;
    };

    if (self.value == "") {
        alert("자기소개를 입력해 주세요.");
        self.focus();
        return false;
    };

    //입력 값 전송
    document.join_form.submit(); //유효성 검사의 포인트 
};

//이메일 옵션 선택후 주소 자동 완성
function change_email() {
    var email_domain = document.getElementById("email_domain");
    var email_sel = document.getElementById("email_sel");

    //지금 골라진 옵션의 순서와 값 구하기
    var idx = email_sel.options.selectedIndex;
    var val = email_sel.options[idx].value;

    email_domain.value = val;
};