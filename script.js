// navbar
const menu= document.querySelector(".menu")
const navbar = document.querySelector(".navbar")

menu.addEventListener("click", ()=>{
    navbar.classList.toggle("change")
    menu.classList.toggle("change")
})
// end of navbar

// section 2 video
const video = document.querySelector(".video")
const btn = document.querySelector(".buttons i")
const bar = document.querySelector(".video-bar")

const playPause = () => {
    if(video.paused){
        video.play()
        btn.className = "far fa-pause-circle"
        video.style.opacity = ".7"
    }else{
        video.pause()
        btn.className = "far fa-play-circle"
        video.style.opacity = ".3"
    }
}
btn.addEventListener("click", ()=>{
    playPause()
})
video.addEventListener("timeupdate", () => {
    const barWidth = (video.currentTime / video.duration) * 100;
    bar.style.width = `${barWidth}%`;
    if(video.ended){
        btn.className = "far fa-play-circle"
        video.style.opacity = ".3"
    }
});
// end of section 2 video

// section 3 swiper cards
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 700,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  });
  // end of section 3 swiper cards