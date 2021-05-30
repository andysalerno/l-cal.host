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

function getRandomTagline() {
    const div = document.getElementsByClassName("bonusTagline")[0];
    const tagLinesCount = tagLines.length;
    const randInt = getRndInteger(0, tagLinesCount);

    const selectedTagLine = tagLines[randInt];

    div.innerHTML = ' / ' + selectedTagLine;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

getRandomTagline();