let playBtn = document.getElementById("play"),
    pauseBtn = document.getElementById("pause"),
    f10Btn = document.getElementById("f10"),
    b10Btn = document.getElementById("b10"),
    volumeBtn = document.getElementById("volume"),
    volumeInputEle = document.getElementById("volume-slider")
    downloadBtn = document.getElementById("download"),
    swapBtn = document.getElementById("swap"),
    fullscreenBtn = document.getElementById("full-screen"),
    video = document.getElementById("main-video");
 
function play(){
    console.log("paly the video",video);
    video.play();
}
function pause(){
    console.log("pause the video");
    video.pause();
}
function f10(){
    let cTime = video.currentTime;
    cTime = cTime + 10;
    video.currentTime = cTime;
    video.play();
}
function b10(){
    let cTime = video.currentTime;
    cTime = cTime - 10;
    video.currentTime = cTime;
    video.play();
}
function volumeupdate(){
    let volumeInput = volumeInputEle.Value;
    console.log(volumeInput);
    volumeInput = volumeInput/100;
    console.log(volumeInput);
    video.volume = volumeInput;
}
function download(){
    console.log("download the video");
}
function swap(){
    console.log("swap the video quality");
}
function fullscreen(){
    document.body.requestFullscreen();
    console.log("view full screen");
}

playBtn.addEventListener("click",play);
pauseBtn.addEventListener("click",pause);
f10Btn.addEventListener("click",f10);
b10Btn.addEventListener("click",b10);
volumeBtn.addEventListener("click",volumeupdate);
downloadBtn.addEventListener("click",download);
swapBtn.addEventListener("click",swap);
fullscreenBtn.addEventListener("click",fullscreen);

