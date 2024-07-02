const customScaleDiv = document.querySelector(
    ".custom-scale-div"
) as HTMLElement;

// CustomScaleCalc
// This is a method I created myself, and I find it very interesting. I named it customScaleCalc.
// Adjusts the scale and rotation of the element based on the window size.
// For landscape displays, scales the element by height for optimal viewing.
// For portrait displays, rotates the element 90 degrees and scales down for mobile compatibility.
// Ultimately, in the mobile device's browser, the application is correctly displayed with a 90-degree rotation,
// allowing devices with different sizes to use the program. Ensures the app looks good on any screen size by recalculating on window resize.

const customScaleCalc = () => {
    const pageWidth = window.innerWidth;
    const pageHeight = window.innerHeight;

    if (pageWidth > 270) {
        if (pageHeight > pageWidth) {
            customScaleDiv.classList.add("custom-scale-calc");

            let scaleValue = 0;
            if (pageHeight / pageWidth > 1130 / 780) {
                scaleValue = (1 * pageWidth) / 695;
            } else {
                scaleValue = (0.7 * pageWidth) / 695;
            }

            customScaleDiv.style.transform = `scale(${scaleValue}) rotate(90deg) translate(50%, -50%)`;
            customScaleDiv.style.top = `${
                (pageHeight - 1000 * scaleValue) / 2
            }px`;
        } else {
            customScaleDiv.classList.remove("custom-scale-calc");

            const scaleValue = (1 * pageHeight) / 695;

            customScaleDiv.style.transform = `scale(${scaleValue})`;
            customScaleDiv.style.width = `${pageWidth / scaleValue}px`;
        }
    }
};

customScaleCalc();
window.addEventListener("resize", customScaleCalc);
