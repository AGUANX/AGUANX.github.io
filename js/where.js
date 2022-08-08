function removeActiveClasses() {
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}

function active(panel){
    removeActiveClasses();
    panel.classList.add('active');
}

const sky = document.getElementById('sky');
sky.addEventListener('click',function (){
    setTimeout(function(){
        location.href="skystar.html";
    },500);
})

const cat = document.getElementById('cat');
cat.addEventListener('click',function (){
    setTimeout(function(){
        location.href="cat/第一节/第一节.html";
    },500);
})
