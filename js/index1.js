const button = document.querySelector('button');

button.onclick = function() {
    let name = prompt('你叫什么名字？');
    if(name == '张大牙')
        alert('Hello ' + name + ', nice to see you!');
    else
        alert('Hello 张大牙, nice to see you!')
}