const shareBtn = document.querySelector(".article-share-btn");
const articleShare = document.querySelector(".article-share");
const closeShareMobile = document.querySelector('.article-share-close');

shareBtn.addEventListener("mouseover", (e) => {
  shareBtn.classList.add("hover");
  shareBtn.innerHTML = `<img src="images/icon-share-white.svg" alt="share-icon" />`;
});

shareBtn.addEventListener("mouseout", (e) => {
  shareBtn.classList.remove("hover");
  shareBtn.innerHTML = `<img src="images/icon-share.svg" alt="share-icon" />`;
});

shareBtn.addEventListener("click", (e)=>{
    articleShare.classList.toggle("open");
});

closeShareMobile.addEventListener('click', (e)=>{
    articleShare.classList.remove('open');
})