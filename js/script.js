/* declare our variables */
const imglist = ['src="./img/01.webp" alt="spiderman"', 'src="./img/02.webp" alt="racket and clank"', 'src="./img/03.webp" alt="fortnite"', 'src="./img/04.webp" alt="stray"', 'src="./img/05.webp" alt="avengers"'];
let mainImgs = '';
let thumbImgs = '';
const mainImgWrap = document.getElementById('mainImgWrap')
const thumbnails = document.getElementById('thumbnails')

/* generate imgs */
imgsGenerator()

