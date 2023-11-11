let cont = document.querySelector(".cont");
let off = document.querySelector(".off");
let ul = document.querySelector(".ul");
let reload = document.querySelector(".reload");
function online(){
    off.innerHTML = 'online now';
    ul.style.display= 'none';
    reload.style.display='none';
    cont.classList.add("bg-white");
    off.style.color ='#84cc52'
}
function offline(){
    off.style.color ='#000'
    off.innerHTML = 'offline now';
    ul.style.display= 'block';
    reload.style.display='block';
    cont.classList.add("bg-slate-500")
}
if (window.navigator.onLine){
    online()
}else{
    offline()
}
window.addEventListener("online", function(){
    online()
})
window.addEventListener("offline", function(){
    offline()
})
reload.onclick = function(){
    window.location.reload()
}
