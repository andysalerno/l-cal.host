const tagLines = [
    'Cautiously optimistic',
    'Brewer of coffee ☕',
    'Breaker of email chains',
    'Occasionally overeager',
    'Beatle person',
    'Prone to rambling',
    'Long time reader first time blogger',
    'Shameless procrastinator',
    'Talks while muted',
    'Seeking validation',
    'Pronounces it "jiff"',
    'Night owl',
    'Probably humming somewhere'
];

function setRandomTagline() {
    const div = document.getElementsByClassName("bonusTagline")[0];
    const tagLinesCount = tagLines.length;
    const randInt = getRndInteger(0, tagLinesCount);

    const selectedTagLine = tagLines[randInt];

    div.innerHTML = ' / ' + selectedTagLine;
}

function typeRandomTagline() {
    const div = document.getElementsByClassName("bonusTagline")[0];
    const tagLinesCount = tagLines.length;
    const randInt = getRndInteger(0, tagLinesCount);

    const selectedTagLine = tagLines[randInt];

    const charArray = Array.from(selectedTagLine);

    div.innerHTML += ' / ';

    charArray.forEach((s, i) => {
        setTimeout(() => {
            div.innerHTML += s.toString();
        }, i * 60);
    });
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// setRandomTagline();
typeRandomTagline();