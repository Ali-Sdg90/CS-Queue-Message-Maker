const customScaleDiv = document.querySelector(
    ".custom-scale-div"
) as HTMLElement;
const scaleWarning = document.querySelector(".scale-warning") as HTMLElement;

const pageWidth = customScaleDiv.scrollWidth;
const pageHeight = customScaleDiv.scrollHeight;

if (pageHeight > pageWidth) {
    console.log(">>", pageHeight);
    console.log("Mobile View");

    customScaleDiv.classList.add("custom-scale-calc");

    let scale = 1 - ((pageHeight / pageWidth) * 0.5) / (900 / 477);

    customScaleDiv.style.transform = `scale(${scale}) rotate(90deg)`;
}

// Description: This is a method I created myself, and I find it very
// interesting. I named it customScaleCalc. What it does is, when the
// height of the screen is greater than the width (as in the case of some
// smartphones), it rotates the screen by 90 degrees and scales down the
// content with a certain ratio. Ultimately, in the mobile device's
// browser,the application is correctly displayed with a 90-degree
// rotation, allowing devices with different sizes to use the program.
// This calculation of how to display the screen is performed with the
// initial page load.
