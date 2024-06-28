"use strict";
const customScaleDiv = document.querySelector(".custom-scale-div");
const customScaleCalc = () => {
    const pageWidth = window.innerWidth;
    const pageHeight = window.innerHeight;
    if (pageWidth > 270) {
        if (pageHeight > pageWidth) {
            console.log(pageWidth, pageHeight);
            customScaleDiv.classList.add("custom-scale-calc");
            let scale = 1 - ((pageHeight / pageWidth) * 0.5) / (900 / 477);
            customScaleDiv.style.transform = `scale(${scale}) rotate(90deg)`;
        }
        else {
            customScaleDiv.classList.remove("custom-scale-calc");
            const scaleValue = (1 * pageHeight) / 695;
            customScaleDiv.style.transform = `scale(${scaleValue})`;
            customScaleDiv.style.display = "block";
            customScaleDiv.style.transformOrigin = "top";
        }
    }
};
customScaleCalc();
window.addEventListener("resize", customScaleCalc);
//# sourceMappingURL=customScaleCalc.js.map