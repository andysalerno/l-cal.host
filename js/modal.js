//  Will track currently enlarged
let enlargedImgIndex = 0;

let _imgsCount;
function imgsCount() {
    if (_imgsCount === undefined) {
        const images = document.getElementsByClassName("photo");
        _imgsCount = images.length;
    }

    return _imgsCount;
}

function closeModal() {
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
    window.location.hash = '';
}

document.onkeydown = function (e) {
    if (e.keyCode === 37) {
        // Left arrow
        const index = Math.max(0, enlargedImgIndex - 1);
        enlargeImgWithIndex(index);

    } else if (e.keyCode === 39) {
        // Right arrow
        const index = Math.min(imgsCount() - 1, enlargedImgIndex + 1);
        enlargeImgWithIndex(index);
    } else {
        closeModal();
    }
};

function enlargeImgWithIndex(index) {
    enlargedImgIndex = index;
    const images = document.getElementsByClassName("photo");
    const img = images[index];

    const modalCountDisplay = document.getElementById("modal-count");
    modalCountDisplay.innerText = (index + 1) + "/" + images.length;

    enlarge(img);

    window.location.hash = index;
}

function enlarge(img) {
    // Get the modal
    let modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    let modalImg = document.getElementById("modal-img");

    const largeSrc = img.src.replace('/tiny/', '/large/');

    modal.style.display = "flex";
    modalImg.src = '';
    modalImg.src = largeSrc;
    enlarged = img;
}

window.addEventListener("load", function () {
    if (window.location.hash.length > 1) {
        const i = parseInt(window.location.hash.substr(1));
        enlargeImgWithIndex(i);
    }
});