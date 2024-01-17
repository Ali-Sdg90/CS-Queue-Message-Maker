const addNewMemberForm = () => {
    const addMemberStructure = `
        <div class="add-member-inputs">
            <input
                type="text"
                class="member-name-input"
                placeholder="Full Name"
                required
                autocomplete="off"
            />
            <input
                type="text"
                class="member-id-input"
                placeholder="Telegram ID"
                required
                autocomplete="off"
            />
        </div>
    
        <button class="add-member-btn">Add</button>
    `;

    const tempDiv = document.createElement("form");
    tempDiv.classList.add("add-member");
    tempDiv.innerHTML = addMemberStructure;
    editList.appendChild(tempDiv);

    (document.querySelector(".add-member") as HTMLElement).addEventListener(
        "submit",
        (event) => {
            event.preventDefault();
        }
    );

    // Add new member to Edit-list
    (document.querySelector(".add-member-btn") as HTMLElement).addEventListener(
        "click",
        () => {
            const memberName = (
                document.querySelector(".member-name-input") as HTMLInputElement
            ).value;

            const memberID = (
                document.querySelector(".member-id-input") as HTMLInputElement
            ).value;

            if (memberName && memberID) {
                const newMemberHTML = `
                    <div class="member-info">
                        <div class="member-index">${memberBits.length + 1}</div>
                        <div>-</div>
                        <div class="member-name">${memberName}</div>
                        <div class="member-id">${memberID}</div>
                    </div>
                
                    <div class="action-btns">
                        <div class="action-btn add-to-end-${memberCounter}"></div>
                        <div class="action-btn delete-member-${memberCounter}"></div>
                    </div>
                `;

                const tempDiv = document.createElement("div");
                tempDiv.classList.add(`member-row-${memberCounter}`);
                tempDiv.innerHTML = newMemberHTML;
                editList.appendChild(tempDiv);

                // New member btn addEventListeners
                const memberNumber = memberCounter;

                (
                    document.querySelector(
                        `.add-to-end-${memberNumber}`
                    ) as HTMLElement
                ).addEventListener("click", () => {
                    addMemberToEnd(memberNumber);
                });

                (
                    document.querySelector(
                        `.delete-member-${memberNumber}`
                    ) as HTMLElement
                ).addEventListener("click", () => {
                    deleteMember(memberNumber);
                });

                memberBits.push([`${memberNumber + 1}-`, memberName, memberID]);

                memberCounter++;
                rerenderAddMember();
                updateIndexes();
            }
        }
    );
};
