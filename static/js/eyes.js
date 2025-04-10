// eyes.js

document.addEventListener('DOMContentLoaded', function() {
    runEyesAnimation();
});

function runEyesAnimation() {
    const eyesAnimation = document.getElementById('eyes-animation');
    const leftEye = document.getElementById('left-eye');
    const rightEye = document.getElementById('right-eye');
    const pupils = document.querySelectorAll('.pupil');
    const messageDiv = document.getElementById('message');
    const eyes = [leftEye, rightEye];

    // Ensure the container is visible
    eyesAnimation.style.display = 'block';

    // Start the sequence:
    setTimeout(() => {
        // 1. First blink.
        blink(eyes, 200, () => {
            // 2. After a short pause, move the pupils.
            setTimeout(() => {
                pupils.forEach(pupil => {
                    pupil.style.left = '10px'; // look left (adjust as needed)
                });
                setTimeout(() => {
                    pupils.forEach(pupil => {
                        pupil.style.left = 'calc(100% - 40px)'; // look right (adjust as needed)
                    });
                    setTimeout(() => {
                        pupils.forEach(pupil => {
                            pupil.style.left = 'calc(50% - 15px)'; // return to center
                        });
                        // 3. Second blink.
                        setTimeout(() => {
                            blink(eyes, 200, () => {
                                // 4. Final blink: eyelids remain down.
                                setTimeout(() => {
                                    finalBlink(eyes, 200, () => {
                                        // Optionally hide the eyes container or its inner elements
                                        leftEye.parentElement.style.display = 'none';
                                        // 5. Begin the typewriter effect.
                                        typeWriter(messageDiv, "Think like the scammer to beat the scammer", 0, 100);
                                    });
                                }, 300);
                            });
                        }, 500);
                    }, 500);
                }, 500);
            }, 300);
        });
    }, 500);
}

function blink(eyes, duration, callback) {
    eyes.forEach(eye => {
        const eyelid = eye.querySelector('.eyelid');
        eyelid.classList.add('blink');
    });
    setTimeout(() => {
        eyes.forEach(eye => {
            const eyelid = eye.querySelector('.eyelid');
            eyelid.classList.remove('blink');
        });
        if (callback) callback();
    }, duration);
}

function finalBlink(eyes, duration, callback) {
    eyes.forEach(eye => {
        const eyelid = eye.querySelector('.eyelid');
        eyelid.classList.add('blink');
    });
    setTimeout(() => {
        eyes.forEach(eye => {
            const eyelid = eye.querySelector('.eyelid');
            eyelid.classList.remove('blink');
            eyelid.classList.add('closed');
        });
        if (callback) callback();
    }, duration);
}

function typeWriter(element, text, index, speed) {
    element.style.opacity = 1; 
    if (index < text.length) {
        element.innerHTML += text.charAt(index);
        setTimeout(() => {
            typeWriter(element, text, index + 1, speed);
        }, speed);
    } else {
        element.style.borderRight = 'none';
    }
}
