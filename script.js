const birthdayDate = new Date("October 26, 2026 20:00:00").getTime();

const countdown = setInterval(function () {

    const now = new Date().getTime();
    const distance = birthdayDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}, 1000);
const musicButton = document.getElementById("musicButton");
const birthdayMusic = document.getElementById("birthdayMusic");

musicButton.addEventListener("click", function () {
    if (birthdayMusic.paused) {
        birthdayMusic.play();
        musicButton.textContent = "Pause Music";
    } else {
        birthdayMusic.pause();
        musicButton.textContent = "Play Music";
    }
});

document.getElementById("detailsButton").onclick = function () {
    document.getElementById("partyDetails").style.display = "block";
};
