"use strict";
const addMemberToEnd = (memberIndex) => {
    let selectedMemberIndex = 0;
    for (let i = 0; i < memberBits.length; i++) {
        if (memberBits[i][0] === `${memberIndex + 1}-`) {
            selectedMemberIndex = i;
        }
    }
    if (selectedMemberIndex + 1 != memberBits.length) {
        editList.appendChild(document.querySelector(`.member-row-${memberIndex}`));
        const selectedMember = memberBits[selectedMemberIndex];
        memberBits.splice(selectedMemberIndex, 1);
        memberBits.push(selectedMember);
        setTimeout(() => {
            updateIndexes();
        }, 100);
        rerenderAddMember();
    }
};
const deleteMember = (memberIndex) => {
    let selectedMemberIndex = 0;
    for (let i = 0; i < memberBits.length; i++) {
        if (memberBits[i][0] === `${memberIndex + 1}-`) {
            selectedMemberIndex = i;
        }
    }
    memberBits.splice(selectedMemberIndex, 1);
    document.querySelector(`.member-row-${memberIndex}`)?.remove();
    updateIndexes();
};
//# sourceMappingURL=memberActionBtns.js.map