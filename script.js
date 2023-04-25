function arlo_tm_animate_text() {
    "use strict";
    var animateSpan = jQuery('.arlo_tm_animation_text_word');
    animateSpan.typed({
        strings: ["Freelancer", "Web Developer", "Photographer"],
        loop: true,
        startDelay: 1e3,
        backDelay: 2e3
    });
}