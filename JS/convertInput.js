"use strict";
const convertInputToEditableList = () => {
    inputArray = input.value.split("\n");
    course = inputArray[inputArray.length - 5];
    membersArray = [];
    for (let i = 2; i < inputArray.length - 6; i++) {
        membersArray.push(inputArray[i]);
    }
    memberBits = membersArray.map((memberArray) => {
        return memberArray.split(" ");
    });
    console.log(JSON.stringify(memberBits, null, 2));
    editList.innerHTML = "";
    for (let i = 0; i < memberBits.length; i++) {
        editList.innerHTML += `
            <div class="member-row-${i}">
                <div class="member-info">
                    <div class="member-index">${i + 1}</div>
                    <div>-</div>
                    <div class="member-name">${nameFinder(memberBits[i])}</div>
                    <div class="member-id">${IDFinder(memberBits[i])}</div>
                </div>
        
                <div class="action-btns">
                    <div class="action-btn add-to-end-${i}"></div>
                    <div class="action-btn delete-member-${i}"></div>
                </div>
            </div>
        `;
        memberCounter++;
    }
    for (let i = 0; i < memberBits.length; i++) {
        document.querySelector(`.add-to-end-${i}`).addEventListener("click", () => {
            addMemberToEnd(i);
        });
        document.querySelector(`.delete-member-${i}`).addEventListener("click", () => {
            deleteMember(i);
        });
    }
    addNewMemberForm();
};
//# sourceMappingURL=convertInput.js.map