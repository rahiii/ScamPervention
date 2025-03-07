document.addEventListener("DOMContentLoaded", function () {
    const messages = [
        ">> INITIALIZING SYSTEM SCAN...",
        ">> ANALYZING SECURITY PROTOCOLS...",
        ">> DETECTED: PHISHING ATTEMPT [BLOCKED]"
    ];
    const scanContainer = document.getElementById("scan-messages");
    const finalTitle = document.getElementById("final-title");

    function typeText(element, text, speed, callback) {
        let i = 0;
        function typing() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typing, speed);
            } else if (callback) {
                setTimeout(callback, 800);
            }
        }
        typing();
    }

    function displayMessages(index) {
        if (index < messages.length) {
            const p = document.createElement("p");
            p.classList.add("code-text");
            scanContainer.appendChild(p);
            typeText(p, messages[index], 50, () => displayMessages(index + 1));
        } else {
            setTimeout(() => {
                scanContainer.style.opacity = "0";
                setTimeout(() => {
                    scanContainer.style.display = "none";
                    finalTitle.style.display = "block";
                    finalTitle.style.opacity = "1";
                }, 1000);
            }, 2000);
        }
    }

    setTimeout(() => displayMessages(0), 500);
});