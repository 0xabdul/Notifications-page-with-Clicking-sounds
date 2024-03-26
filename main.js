let userone = document.getElementById('userone-content');
let usertwo = document.getElementById('usertwo-content');
let userthree = document.getElementById('userthree-content');
let circleone = document.getElementById('dotone');
let circletwo = document.getElementById('dottwo');
let circlethree = document.getElementById('dotthree');
let markpress = document.getElementById('mark');
let numcount = document.getElementById('number');
let audio = document.getElementById('clickSound');
let au = document.getElementById('clickSounds')
userone.style.backgroundColor = '#f7fafd';
userone.style.borderRadius = '0.4rem';
usertwo.style.backgroundColor = '#f7fafd';
usertwo.style.borderRadius = '0.4rem';
userthree.style.backgroundColor = '#f7fafd';
userthree.style.borderRadius = '0.4rem';
circleone.innerHTML = '&#x2B24;';
circletwo.innerHTML = '&#x2B24;';
circlethree.innerHTML = '&#x2B24;';
numcount.innerHTML = 3;
markpress.addEventListener('click',()=>{
circleone.innerHTML = '';
circletwo.innerHTML = '';
circlethree.innerHTML = '';
userone.style.backgroundColor = '';
usertwo.style.backgroundColor = '';
userthree.style.backgroundColor = '';
numcount.innerHTML = 0;
audio.play()
})
userone.addEventListener('click',()=>{
circleone.innerHTML = '';
userone.style.backgroundColor = '';
numcount.innerHTML -=1;
au.play()
setTimeout(()=>{
    location.reload();
},5000)
})
usertwo.addEventListener('click',()=>{
circletwo.innerHTML = '';
usertwo.style.backgroundColor = '';
numcount.innerHTML -=1;
au.play()
setTimeout(()=>{
    location.reload();
},5000)
})
userthree.addEventListener('click',()=>{
circlethree.innerHTML = '';
userthree.style.backgroundColor = '';
numcount.innerHTML -=1;
au.play()
setTimeout(()=>{
    location.reload();
},5000)
})
