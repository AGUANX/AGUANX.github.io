$('#login-button').click(function (event) {
    let userName=hex_md5(document.getElementById("userName").value);
    let pwd=hex_md5(document.getElementById("pwd").value);
    //修改密码请改此处
    if((userName=="1890e08432f12b178e9968c01e0378c1" && pwd=="6aa55ed4232d6476ff27cd6d9bb89689")||(userName=="2e08b66fdf34bc5f1e03b4ba0896b6d5" && pwd=="ecedf007ab0145069fa696ac5fbab47c")){
        event.preventDefault();
        //$('login').fadeOut(500);
        //$('.big-box').addClass('form-success');
        //requestFullScreen();  全屏
        setTimeout(function(){
            location.href="skystar.html";
        },500);
    }
    else{
        alert("Wrong Password");
    }
});