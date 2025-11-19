var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
video=this.document.querySelector("#player1")
video.autoplay = false;
video.loop= false;
document.querySelector("#volume").innerHTML = slider.value + "%";
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	document.querySelector("#volume").innerHTML= slider.value+ "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause()
});


document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("New speed: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("New speed: " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
    video.currentTime += 10;
    if (video.currentTime >= video.duration) {
        video.currentTime = 0;
    }
    console.log("Current location " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
    if (!video.muted) {
        video.muted = true;
        this.innerHTML = "Unmute";
        console.log("Muted");
    } else {
        video.muted = false;
        this.innerHTML = "Mute";
        console.log("Unmuted");
    }
});

slider.addEventListener("input", function() {
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = this.value + "%";
	console.log("Volume is " + this.value + "%");
});

document.querySelector("#vintage").addEventListener("click", function() {
    video.classList.add("oldSchool");
    console.log("Old school style on");
});

document.querySelector("#orig").addEventListener("click", function() {
    video.classList.remove("oldSchool");
    console.log("Original style");
});