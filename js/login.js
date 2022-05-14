$('#login-button').click(function (event) {
    let userName=hex_md5(document.getElementById("userName").value);
    let pwd=hex_md5(document.getElementById("pwd").value);
    //修改密码请改此处
    if(userName=="1890e08432f12b178e9968c01e0378c1" &&  pwd=="6aa55ed4232d6476ff27cd6d9bb89689"){
        event.preventDefault();
        //$('login').fadeOut(500);
        //$('.big-box').addClass('form-success');
        //requestFullScreen();  全屏
        setTimeout(function(){
            location.href="index1.html";
        },500);
    }
    else{
        alert("Wrong Password");
    }
});