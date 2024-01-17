const convertInputToEditableList = () => {
    inputArray = input.value.split("\n");

    course = inputArray[inputArray.length - 1];

    membersArray = [];

    // Store elements from line 2 to length - 2 in membersArray
    for (let i = 2; i < inputArray.length - 2; i++) {
        membersArray.push(inputArray[i]);
    }

    // Create an array of objects where each array is for a member and inside it is member's info
    memberBits = membersArray.map((memberArray) => {
        return memberArray.split(" ");
    });

    console.log(JSON.stringify(memberBits, null, 2));

    // Clear How-to or old queue-list
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

    // Add eventListener to each btn
    for (let i = 0; i < memberBits.length; i++) {
        (
            document.querySelector(`.add-to-end-${i}`) as HTMLElement
        ).addEventListener("click", () => {
            addMemberToEnd(i);
        });

        (
            document.querySelector(`.delete-member-${i}`) as HTMLElement
        ).addEventListener("click", () => {
            deleteMember(i);
        });
    }

    addNewMemberForm();
};
