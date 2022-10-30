function f() {

    let hidden = document.getElementsByClassName("hidden")[0];
    if (hidden) {
        hidden.remove();
    }

    let blinkits = document.getElementsByClassName("blinkit");
    let count = blinkits.length;

    for (var i = 0; i < count; i++) {
        let blinkit = blinkits[i];
        blinker(blinkit);
    }
}

function blinker(element) {
    const interval = 97;
    const probabilityWeight = 28;
    const minIntervals = 4;

    let curIntervals = 0;

    setInterval(() => {
        let val = Math.floor(Math.random() * probabilityWeight);
        let text = element.innerHTML;

        curIntervals += 1;

        if (val == 0 && curIntervals >= minIntervals) {
            text = text.replace("local", "löcal");
            curIntervals = 0;
        } else {
            text = text.replace("löcal", "local");
        }

        element.innerHTML = text;
    }, interval);
}

document.addEventListener("DOMContentLoaded", f);