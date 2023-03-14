/* declare our variables */
const imglist = ['src="./img/01.webp" alt="spiderman"', 'src="./img/02.webp" alt="racket and clank"', 'src="./img/03.webp" alt="fortnite"', 'src="./img/04.webp" alt="stray"', 'src="./img/05.webp" alt="avengers"'];
let mainImgs = '';
let thumbImgs = '';
const mainImgWrap = document.getElementById('mainImgWrap')
const thumbnails = document.getElementById('thumbnails')
let index = 0
/* generate imgs */
imgsGenerator()

function goNext(){
    document.querySelectorAll('#mainImgWrap img')[index].classList.remove('active');
    if (index == imglist.length - 1){
        index = 0
    }else{
        index++;
    }
    document.querySelectorAll('#mainImgWrap img')[index].classList.add('active');
}
function goPrev(){
    document.querySelectorAll('.slide')[index].classList.remove('active');
    if (index == 0){
        index = images.length - 1;
    }else{
        index--;
    }
    document.querySelectorAll('.slide')[index].classList.add('active');
}