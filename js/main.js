var vid = document.querySelector('#myVideo');
var width = window.innerWidth


console.log(window.innerWidth)

if (width <= 768) {
    vid.src = '/videos/mob.mp4'
} else {
    vid.src = '/videos/Horizontal.mp4'
}