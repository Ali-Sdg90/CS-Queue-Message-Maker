const convertInputToEditableList = () => {
    inputArray = input.value.split("\n");

    // console.log(inputArray);

    course = inputArray[inputArray.length - 1];

    membersArray = [];
    for (let i = 2; i < inputArray.length - 2; i++) {
        membersArray.push(inputArray[i]);
    }

    // console.log(membersArray);

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
    }

    for (let i = 0; i < memberBits.length; i++) {
        (
            document.querySelector(`.add-to-end-${i}`) as HTMLElement
        ).addEventListener("click", () => {
            console.log(`Move ${i} to End`);

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
