"use strict";
const updateOutput = () => {
    let outputText = "";
    outputText += `آپدیت صف ${course} 👇🏻\n\n`;
    for (let i = 0; i < memberBits.length; i++) {
        outputText += `${i + 1}-`;
        for (let j = 1; j < memberBits[i].length; j++) {
            outputText += ` ${memberBits[i][j]}`;
        }
        outputText += "\n";
    }
    outputText += `\n${course}`;
    output.textContent = outputText;
    const addMembers = document.querySelectorAll(".add-member");
    if (addMembers.length > 2) {
        console.log("REMOVE");
        addMembers[addMembers.length - 2].remove();
    }
};
const copyBtn = document.querySelector(".copy-output");
copyBtn.addEventListener("click", () => {
    if (output.textContent) {
        navigator.clipboard.writeText(output.textContent).then(() => {
            console.log(`Copied to clipboard`);
            copyBtn.textContent = "Copied";
            setTimeout(() => {
                copyBtn.textContent = "Copy";
            }, 1000);
        });
    }
    else {
        copyBtn.classList.add("shake-animation");
        setTimeout(() => {
            copyBtn.classList.remove("shake-animation");
        }, 300);
    }
});
//# sourceMappingURL=output.js.map