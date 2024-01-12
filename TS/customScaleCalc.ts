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

    let scale = 0;
    scale = 1 - ((pageHeight / pageWidth) * 0.5) / (900 / 477);

    customScaleDiv.style.transform = `scale(${scale}) rotate(90deg)`;
}
