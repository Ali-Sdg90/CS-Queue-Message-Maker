"use strict";
const customScaleDiv = document.querySelector(".custom-scale-div");
const customScaleCalc = () => {
    const pageWidth = window.innerWidth;
    const pageHeight = window.innerHeight;
    if (pageWidth > 270) {
        if (pageHeight > pageWidth) {
            customScaleDiv.classList.add("custom-scale-calc");
            let scaleValue = 0;
            if (pageHeight / pageWidth > 1130 / 780) {
                scaleValue = (1 * pageWidth) / 695;
            }
            else {
                scaleValue = (0.7 * pageWidth) / 695;
            }
            customScaleDiv.style.transform = `scale(${scaleValue}) rotate(90deg)`;
            customScaleDiv.style.display = "block";
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