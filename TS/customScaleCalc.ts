const customScaleDiv = document.querySelector(
    ".custom-scale-div"
) as HTMLElement;

const customScaleCalc = () => {
    const pageWidth = window.innerWidth;
    const pageHeight = window.innerHeight;

    if (pageWidth > 270) {
        if (pageHeight > pageWidth) {
            // console.log(pageWidth, pageHeight);

            customScaleDiv.classList.add("custom-scale-calc");

            // let scale = 1 - ((pageHeight / pageWidth) * 0.2) / (900 / 477);

            // customScaleDiv.style.transform = `scale(${scale}) rotate(90deg)`;

            // customScaleDiv.classList.remove("custom-scale-calc");
            // customScaleDiv.style.transform = "";

            let scaleValue = 0;

            if (pageHeight / pageWidth > 1130 / 780) {
                scaleValue = (1 * pageWidth) / 695;
            } else {
                scaleValue = (0.7 * pageWidth) / 695;
            }

            customScaleDiv.style.transform = `scale(${scaleValue}) rotate(90deg)`;
            customScaleDiv.style.display = "block";

            // customScaleDiv.style.top = `${(pageHeight - 920 * scaleValue)/2}px`;

            // customScaleDiv.style.transformOrigin = "top";

            // console.log("scale", scale);
        } else {
            customScaleDiv.classList.remove("custom-scale-calc");
            // customScaleDiv.style.transform = "";
            const scaleValue = (1 * pageHeight) / 695;

            customScaleDiv.style.transform = `scale(${scaleValue})`;
            customScaleDiv.style.display = "block";
            customScaleDiv.style.transformOrigin = "top";
        }
    }
};

customScaleCalc();
window.addEventListener("resize", customScaleCalc);

// Description: This is a method I created myself, and I find it very
// interesting. I named it customScaleCalc. What it does is, when the
// height of the screen is greater than the width (as in the case of some
// smartphones), it rotates the screen by 90 degrees and scales down the
// content with a certain ratio. Ultimately, in the mobile device's
// browser,the application is correctly displayed with a 90-degree
// rotation, allowing devices with different sizes to use the program.
// This calculation of how to display the screen is performed.
