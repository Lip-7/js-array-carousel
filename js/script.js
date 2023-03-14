/* declare our variables */
const imglist = ['src="./img/01.webp" alt="spiderman', 'src="./img/02.webp" alt="racket and clank"', 'src="./img/03.webp" alt="fortnite"', 'src="./img/04.webp" alt="stray"', 'src="./img/05.webp" alt="avengers"'];
let mainImgs = '';
let thumbImgs = '';
const mainImgWrap = document.getElementById('mainImgWrap')


for (i = 0; i < imglist.length; i++){
    let newMainImg =`<img class="w-100 h-100 object-fit-cover" ${imglist[i]}>`;
    let newThumbImg = `<div class="single-img rounded-4 w-100"><img class="w-100 h-100" ${imglist[i]}></div>`;
    mainImgs += newMainImg;
    thumbImgs += newThumbImg;
    console.log(newMainImg)
}
mainImgWrap.innerHTML += mainImgs