var audioPlayer = document.getElementById("music-player");
audioPlayer.volume = 0.5; // set volume 50%


document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var floatingWindow = document.getElementById("floating-window");
        floatingWindow.style.display = "block";
    }, 2000); // 3000 milliseconds
});


document.addEventListener("DOMContentLoaded", function() {
    const openChatLinks = document.querySelectorAll(".openChat");
    openChatLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Evitar que el enlace se comporte como un enlace normal
            // Oculta el floating-window
            const floatingWindow = document.getElementById("floating-window");
            floatingWindow.style.display = "none";
            // Abre el chat flotante
            const chatContainer = document.getElementById("chatContainer");
            chatContainer.style.display = "block";
        });
    });
});