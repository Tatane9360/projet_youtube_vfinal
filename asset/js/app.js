'use strict';

document.addEventListener("DOMContentLoaded", function() {
    // Scroll Effect
    let h2 = document.querySelectorAll("#text-scroll");
    window.addEventListener("scroll", () => {
        h2[0].style.transform = "translateX(" + window.scrollY + "px)";
        h2[1].style.transform = "translateX(-" + window.scrollY + "px)";
    });

    // Video Play/Pause on Hover
    var videos = document.querySelectorAll('.video-film');
    videos.forEach(function(video) {
        video.addEventListener('mouseover', function() { this.play(); });
        video.addEventListener('mouseout', function() { this.pause(); });
    });

    // Custom Cursor
    const cursorDot = document.querySelector(".cursor-dot");
    const cursorOutline = document.querySelector(".cursor-outline");
    window.addEventListener("mousemove", (e) => {
        const posX = e.clientX;
        const posY = e.clientY;
        cursorDot.style.top = `${posY}px`;
        cursorDot.style.left = `${posX}px`;
        cursorOutline.style.top = `${posY}px`;
        cursorOutline.style.left = `${posX}px`;
    });

    // FAQ Section Toggle
    const faqButtons = document.querySelectorAll('.faq-question button');
    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const faqQuestion = button.closest('.faq-question');
            const faqAnswer = faqQuestion.querySelector('p');
            const icon = button.querySelector('.fa-chevron-down');
            faqButtons.forEach(otherButton => {
                if (otherButton !== button) {
                    const otherFaqQuestion = otherButton.closest('.faq-question');
                    otherFaqQuestion.querySelector('p').classList.remove('show');
                    otherFaqQuestion.querySelector('.fa-chevron-down').classList.remove('rotate');
                }
            });
            faqAnswer.classList.toggle('show');
            icon.classList.toggle('rotate');
        });
    });
});