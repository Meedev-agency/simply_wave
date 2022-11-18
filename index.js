const waveCallback = (options) => {
    document.querySelectorAll(`#${options.target} span`).forEach((letter) => {
        letter.style.display = "inline-block";
    });

    const waveEffect = [
        {
            transform: `translateY(${options?.transform || "100%"})`,
            opacity: options?.opacity ? 0 : 1,
        },
        {
            transform: "translateY(0px)",
            opacity: options?.opacity ? 1 : 1,
        },
    ];

    let waveTiming = {
        duration: options?.duration || 500,
        delay: options?.animationDelay || 0,
        easing: options?.easing || "linear",
        iterations: options?.iterations || 1,
        fill: options?.fill || "both",
        direction: options?.direction || "normal",
    };

    for (let index = 1; index <= options.lettersCount; index++) {
        let spanLetter = document.getElementById(`${options.target}`).querySelector(`.${options.target}.num${index}`);
        const waveKeyframe = new KeyframeEffect(
            spanLetter,
            waveEffect,
            waveTiming
        );
        const waveAnimation = new Animation(waveKeyframe, document.timeline);
        waveAnimation.play();
        waveTiming.delay += options?.letterDelay >= 0 ? options.letterDelay : 40 || 40;
    }
}

// export the function wave
export function wave(options) {
    // wave methode
    let sentence = document.getElementById(options.target);
    let letters = sentence.innerText.split("");
    let newSentence = "";
    let lettersCount = 0;

    if ((options?.overflow) === undefined ? false : options.overflow) {
        sentence.style.overflow = "hidden";
    }

    letters.forEach((letter) => {
        lettersCount++;
        newSentence = newSentence += `<span class="${options.target} num${lettersCount}">${letter === " " ? "&thinsp;" : letter
            }</span>`;

        if (letters.length === lettersCount) {
            sentence.innerHTML = newSentence;
            waveCallback({...options, lettersCount});
        }
    });
}