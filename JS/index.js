"use strict";
const input = document.querySelector(".input-list");
const submitInput = document.querySelector(".submit-input");
const editList = document.querySelector(".edit-list");
const output = document.querySelector(".output-list");
const demoListBtn = document.querySelector(".how-to-use-btn");
let inputArray = [];
let membersArray = [];
let memberBits = [];
let course = "";
submitInput.addEventListener("click", () => {
    convertInputToEditableList();
    updateIndexes();
});
const rerenderAddMember = () => {
    document.querySelector(".add-member")?.remove();
    addNewMemberForm();
};
const updateIndexes = () => {
    const indexElements = document.querySelectorAll(".member-index");
    const actionBtns = document.querySelectorAll(".action-btn");
    for (let i = 0; i < memberBits.length; i++) {
        if (indexElements[i]) {
            indexElements[i].textContent = (i + 1).toString();
        }
    }
    Array.from(actionBtns).map((actionBtn) => {
        actionBtn.classList.remove("disable-btn");
    });
    const lastDownBtn = actionBtns[actionBtns.length - 2];
    lastDownBtn.classList.add("disable-btn");
    updateOutput();
};
const nameFinder = (memberBit) => {
    let memberName = "";
    for (let i = 1; i < memberBit.length; i++) {
        if (memberBit[i].includes("@")) {
            break;
        }
        else {
            memberName += memberBit[i];
            memberName += " ";
        }
    }
    memberName = memberName.slice(0, -1);
    return memberName;
};
const IDFinder = (memberBit) => {
    for (let i = 1; i < memberBit.length; i++) {
        if (memberBit[i].includes("@")) {
            return memberBit[i];
        }
    }
};
demoListBtn.addEventListener("click", () => {
    addDemoList();
});
//# sourceMappingURL=index.js.map