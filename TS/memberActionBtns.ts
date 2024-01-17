const findMemberIndex = (memberIndex: number): number => {
    let index = 0;
    for (let i = 0; i < memberBits.length; i++) {
        if (memberBits[i][0] === `${memberIndex + 1}-`) {
            index = i;
        }
    }

    return index;
};

const addMemberToEnd = (memberIndex: number): void => {
    let selectedMemberIndex = findMemberIndex(memberIndex);

    // console.log(memberIndex, selectedMemberIndex);

    if (selectedMemberIndex + 1 != memberBits.length) {
        editList.appendChild(
            document.querySelector(`.member-row-${memberIndex}`) as HTMLElement
        );

        const selectedMember = memberBits[selectedMemberIndex];

        memberBits.splice(selectedMemberIndex, 1);
        memberBits.push(selectedMember);

        setTimeout(() => {
            updateIndexes();
        }, 100);

        rerenderAddMember();
    }
};

const deleteMember = (memberIndex: number): void => {
    let selectedMemberIndex = findMemberIndex(memberIndex);

    memberBits.splice(selectedMemberIndex, 1);
    document.querySelector(`.member-row-${memberIndex}`)?.remove();

    updateIndexes();
};
