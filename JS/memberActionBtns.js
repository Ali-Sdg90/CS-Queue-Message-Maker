"use strict";
const addMemberToEnd = (memberIndex) => {
    console.log("memberIndex", memberIndex);
    editList.appendChild(document.querySelector(`.member-row-${memberIndex}`));
    console.log("1.", JSON.stringify(memberBits, null, 2));
    let selectedMemberIndex = 0;
    for (let i = 0; i < memberBits.length; i++) {
        if (memberBits[i][0] === `${memberIndex + 1}-`) {
            selectedMemberIndex = i;
        }
    }
    const selectedMember = memberBits[selectedMemberIndex];
    console.log("::", JSON.stringify(selectedMember, null, 2));
    memberBits.splice(selectedMemberIndex, 1);
    memberBits.push(selectedMember);
    console.log("2.", JSON.stringify(memberBits, null, 2));
    setTimeout(() => {
        updateIndexes();
    }, 100);
    rerenderAddMember();
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
    console.log(JSON.stringify(memberBits, null, 2));
    updateIndexes();
};
//# sourceMappingURL=memberActionBtns.js.map