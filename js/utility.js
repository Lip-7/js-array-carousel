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
    document.querySelector('.single-img').classList.add('active')
}