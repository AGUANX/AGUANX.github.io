$('#login-button').click(function (event) {
    let userName=document.getElementById("userName").value;
    let pwd=document.getElementById("pwd").value;
    //修改密码请改此处
    if(userName=="张大牙" &&  pwd=="19980513"){
        event.preventDefault();
        $('login').fadeOut(500);
        $('.big-box').addClass('form-success');
        //requestFullScreen();  全屏
        setTimeout(function(){
            location.href="index1.html";
        },2000);
    }
    else{
        alert("Wrong Password");
    }
});