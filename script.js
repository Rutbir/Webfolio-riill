const menu = document.querySelector('.menu');
const toggle = document.getElementById('toggle');

toggle.addEventListener('click',function(){
    menu.classList.toggle('active');
});