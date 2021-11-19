let token = 0;
let myButtonElement = document.getElementById('counter-1');
let displayElement1 = document.getElementById('display-1');

myButtonElement.addEventListener('click',function(){
    token = token + 1;
    displayElement1.innerHTML = token;    
});
