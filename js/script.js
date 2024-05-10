var audioPlayer = document.getElementById("music-player");
audioPlayer.volume = 0.5; // set volume 50%


document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var floatingWindow = document.getElementById("floating-window");
        floatingWindow.style.display = "block";
    }, 2000); // 3000 milliseconds
});