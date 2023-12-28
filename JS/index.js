"use strict";
const input = document.querySelector(".input-list");
const submitInput = document.querySelector(".submit-input");
const editList = document.querySelector(".edit-list");
const output = document.querySelector(".output-list");
let inputArray = [];
let membersArray = [];
let memberBits = [];
let course = "";
submitInput.addEventListener("click", () => {
    console.log("submit");
    convertInputToEditableList();
    updateOutput();
});
const rerenderAddMember = () => {
    document.querySelector(".add-member")?.remove();
    addNewMemberForm();
};
const updateIndexes = () => {
    const indexElements = document.querySelectorAll(".member-index");
    for (let i = 0; i < memberBits.length; i++) {
        if (indexElements[i]) {
            indexElements[i].textContent = (i + 1).toString();
        }
    }
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
//# sourceMappingURL=index.js.map