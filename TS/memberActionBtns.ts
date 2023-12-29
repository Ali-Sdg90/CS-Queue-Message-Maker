const addMemberToEnd = (memberIndex: number): void => {
    let selectedMemberIndex = 0;
    for (let i = 0; i < memberBits.length; i++) {
        if (memberBits[i][0] === `${memberIndex + 1}-`) {
            selectedMemberIndex = i;
        }
    }

    if (selectedMemberIndex + 1 != memberBits.length) {
        // console.log("memberIndex", memberIndex);

        editList.appendChild(
            document.querySelector(`.member-row-${memberIndex}`) as HTMLElement
        );

        // console.log("1.", JSON.stringify(memberBits, null, 2));

        const selectedMember = memberBits[selectedMemberIndex];
        console.log("::", JSON.stringify(selectedMember, null, 2));

        memberBits.splice(selectedMemberIndex, 1);
        memberBits.push(selectedMember);

        // console.log("2.", JSON.stringify(memberBits, null, 2));

        setTimeout(() => {
            updateIndexes();
        }, 100);

        rerenderAddMember();
    }
};

const deleteMember = (memberIndex: number): void => {
    let selectedMemberIndex = 0;
    for (let i = 0; i < memberBits.length; i++) {
        if (memberBits[i][0] === `${memberIndex + 1}-`) {
            selectedMemberIndex = i;
        }
    }

    memberBits.splice(selectedMemberIndex, 1);
    document.querySelector(`.member-row-${memberIndex}`)?.remove();

    // console.log(JSON.stringify(memberBits, null, 2));

    updateIndexes();
};
