function imgsGenerator(){
    for (i = 0; i < imglist.length; i++){
        let newMainImg =`<img class="w-100 h-100 object-fit-cover" ${imglist[i]}>`;
        let newThumbImg = `<div class="single-img rounded-4 w-100"><img class="w-100 h-100" ${imglist[i]}></div>`;
        mainImgs += newMainImg;
        thumbImgs += newThumbImg;
    }
    mainImgWrap.innerHTML += mainImgs
    thumbnails.innerHTML += thumbImgs
    document.querySelector('#mainImgWrap img').classList.add('active')
    document.querySelector('#mainImgWrap img.active').style.opacity = 1 ;
    document.querySelector('.single-img').classList.add('active')
}
function goNext(){
    document.querySelectorAll('#mainImgWrap img')[index].classList.remove('active');
    document.querySelectorAll('.single-img')[index].classList.remove('active');
    document.querySelectorAll('#mainImgWrap img')[index].style.opacity = 0 ;

    if (index == imglist.length - 1){
        index = 0
    }else{
        index++;
    }
    document.querySelectorAll('#mainImgWrap img')[index].classList.add('active');
    document.querySelectorAll('.single-img')[index].classList.add('active');
    setTimeout(() => {
    document.querySelectorAll('#mainImgWrap img')[index].style.opacity = 1 ;
    },100)
}
function goPrev(){
    document.querySelectorAll('#mainImgWrap img')[index].classList.remove('active');
    document.querySelectorAll('.single-img')[index].classList.remove('active');
    document.querySelectorAll('#mainImgWrap img')[index].style.opacity = 0 ;

    if (index == 0){
        index = imglist.length - 1;
    }else{
        index--;
    }
    document.querySelectorAll('#mainImgWrap img')[index].classList.add('active');
    setTimeout(() => {
        document.querySelectorAll('#mainImgWrap img')[index].style.opacity = 1 ;
        },100)
    document.querySelectorAll('.single-img')[index].classList.add('active');
}