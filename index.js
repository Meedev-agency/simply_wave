const waveCallback = (options) => {
    document.querySelectorAll(`#${options.target} span`).forEach((letter) => {
        letter.style.display = "inline-block";
    });

    let mirror = options?.mirror
    let mirrorStyle = options?.mirrorStyle

    if (mirror) {
        // base text
        document.querySelector(`#${options.target}`).style.position = "relative"

        // mirror text
        document.querySelectorAll(`#${options.target}-mirror span`).forEach((letter) => {
            letter.style.display = "inline-block";
        });
    }

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

    const mirrorWaveEffect = [
        {
            transform: `rotateX(180deg) translateY(${mirrorStyle ? "" : "-"}${options?.transform || "100%"})`,
            opacity: options?.opacity ? 0 : 1,
        },
        {
            transform: "rotateX(180deg) translateY(0)",
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

    let mirrorWaveTiming = {
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

        if (mirror) {
            let mirrorSpanLetter = document.getElementById(`${options.target}-mirror`).querySelector(`.${options.target}-mirror.num${index}`);
            const mirrorWaveKeyframe = new KeyframeEffect(
                mirrorSpanLetter,
                mirrorWaveEffect,
                mirrorWaveTiming
            );
            const mirrorWaveAnimation = new Animation(mirrorWaveKeyframe, document.timeline);
            mirrorWaveAnimation.play();
        }

        waveTiming.delay += options?.letterDelay >= 0 ? options.letterDelay : 40 || 40;
        mirrorWaveTiming.delay += options?.letterDelay >= 0 ? options.letterDelay : 40 || 40;
    }
}

// export the function wave
export function wave(options) {
    // wave methode
    let sentence = document.getElementById(`${options.target}-base`) || document.getElementById(`${options.target}`);
    let letters = sentence.innerText.split("");
    let newSentence = "";
    let newMirrorSentence = "";
    let lettersCount = 0;

    let overflow = options?.overflow
    let mirror = options?.mirror

    if (overflow === true) {
        sentence.style.overflow = "hidden";
    } else {
        sentence.style.overflow = "visible";
    }

    letters.forEach((letter) => {
        lettersCount++;
        newSentence += `<span class="${options.target} num${lettersCount}">${letter === " " ? "&thinsp;" : letter}</span>`;

        if (mirror) {
            newMirrorSentence += `<span class="${options.target}-mirror num${lettersCount}">${letter === " " ? "&thinsp;" : letter}</span>`;
        }
    });

    if (mirror) {
        if (sentence.getAttribute('id') === 'wave') {
            sentence.innerHTML = `<div id="${options.target}-base">${newSentence}</div><div id="${options.target}-mirror">${newMirrorSentence}</div>` 
        } else if (sentence.getAttribute('id') === 'wave-base') {
            sentence.innerHTML = newSentence
            document.getElementById(`${options.target}-mirror`).innerHTML = newMirrorSentence
        }
    } else {
        sentence.innerHTML = newSentence;
    }

    waveCallback({ ...options, lettersCount });

}