
// let target = 0;
// let current = 0;

// let ease = 0.075;
// const slider = document.querySelector(".slider");
// const sliderWrapper = document.querySelector(".slider-wrapper");
// const markerWrapper = document.querySelector(".marker-wrapper");
// const activeSlide = document.querySelector(".active-slide");

// let maxScroll = sliderWrapper.offsetWidth - window.innerWidth;

// console.log(maxScroll);
// function lerp(start, end, factor) {
//     return start + (end - start) * factor;
// }



// function isMobileView() {
//     return window.innerWidth <= 768; // Adjust the width threshold as needed
// }




// function updateActiveSliderNumber(markerMove, markerMaxMove) {
//     const partWidth = markerMaxMove / 15;
//     // let currentPart = Math.round((markerMove - 70) / partWidth) + 1;

//     let currentPart;
//     if (isMobileView()) {
//         currentPart = Math.round((markerMove - 10) / partWidth) + 1;
//     } else {
//         currentPart = Math.round((markerMove - 70) / partWidth) + 1;
//     }

//     currentPart = Math.min(15, currentPart);
//     activeSlide.textContent = `${currentPart} /15 `;
// }

// function update() {
//     current = lerp(current, target, ease);
//     gsap.set(".slider-wrapper", {
//         x: -current,
//     });
//     let moveRatio = current / maxScroll;
//     // let markerMaxMove = window.innerWidth - markerWrapper.offsetWidth - 200;
//     let markerMaxMove;
//     if (isMobileView()) {
//         markerMaxMove = window.innerWidth - markerWrapper.offsetWidth - 200;
//     } else {
//         markerMaxMove = window.innerWidth - markerWrapper.offsetWidth - 410;
//     }
//     // 170

//     // let markerMove = 70 + moveRatio * markerMaxMove;
//     let markerMove;
//     if (isMobileView()) {
//         markerMove = 10 + moveRatio * markerMaxMove;
//     } else {
//         markerMove = 70 + moveRatio * markerMaxMove;
//     }


//     gsap.set(".marker-wrapper", {
//         x: markerMove,
//     });
//     console.log(markerMove);
//     updateActiveSliderNumber(markerMove, markerMaxMove);

//     requestAnimationFrame(update)
// }




// window.addEventListener("resize", () => {
//     maxScroll = sliderWrapper.offsetWidth - window.innerWidth;
// });
// window.addEventListener("wheel", (e) => {
//     target += e.deltaY;
//     target = Math.max(0, target);
//     target = Math.min(maxScroll, target);
// });

// update()










let target = 0;
let current = 0;
let ease = 0.075;

const slider = document.querySelector(".slider");
const sliderWrapper = document.querySelector(".slider-wrapper");
const markerWrapper = document.querySelector(".marker-wrapper");
const activeSlide = document.querySelector(".active-slide");

let maxScroll = sliderWrapper.offsetWidth - window.innerWidth;

function lerp(start, end, factor) {
    return start + (end - start) * factor;
}

function isMobileView() {
    return window.innerWidth <= 768; // Adjust the width threshold as needed
}

function updateActiveSliderNumber(markerMove, markerMaxMove) {
    const partWidth = markerMaxMove / 3;
    let currentPart;
    if (isMobileView()) {
        currentPart = Math.round((markerMove - 10) / partWidth) + 1;
    } else {
        currentPart = Math.round((markerMove - 70) / partWidth) + 1;
    }
    currentPart = Math.min(3, currentPart);
    activeSlide.textContent = `${currentPart} / 3`;
}

function update() {
    current = lerp(current, target, ease);
    gsap.set(".slider-wrapper", {
        x: -current,
    });
    let moveRatio = current / maxScroll;
    let markerMaxMove;
    if (isMobileView()) {
        markerMaxMove = window.innerWidth - markerWrapper.offsetWidth - 200;
    } else {

        // marker line adjustment
        markerMaxMove = window.innerWidth - markerWrapper.offsetWidth - 510;
    }

    let markerMove;
    if (isMobileView()) {
        markerMove = 10 + moveRatio * markerMaxMove;
    } else {
        markerMove = 70 + moveRatio * markerMaxMove;
    }

    gsap.set(".marker-wrapper", {
        x: markerMove,
    });
    updateActiveSliderNumber(markerMove, markerMaxMove);

    requestAnimationFrame(update);
}

window.addEventListener("resize", () => {
    maxScroll = sliderWrapper.offsetWidth - window.innerWidth;
});

window.addEventListener("wheel", (e) => {
    target += e.deltaY;
    target = Math.max(0, target);
    target = Math.min(maxScroll, target);
});

slider.addEventListener("touchstart", (e) => {
    this.touchStartX = e.touches[0].clientX;
    this.touchStartY = e.touches[0].clientY;
});

slider.addEventListener("touchmove", (e) => {
    const touchEndX = e.touches[0].clientX;
    const touchEndY = e.touches[0].clientY;
    const touchDiffX = this.touchStartX - touchEndX;
    const touchDiffY = this.touchStartY - touchEndY;

    if (Math.abs(touchDiffX) > Math.abs(touchDiffY)) {
        target += touchDiffX;
        target = Math.max(0, target);
        target = Math.min(maxScroll, target);
    }
    this.touchStartX = touchEndX;
    this.touchStartY = touchEndY;
});

update();

