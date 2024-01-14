"use strict";
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
    document.querySelector(".add-member").addEventListener("submit", (event) => {
        event.preventDefault();
    });
    document.querySelector(".add-member-btn").addEventListener("click", () => {
        const memberName = document.querySelector(".member-name-input").value;
        const memberID = document.querySelector(".member-id-input").value;
        if (memberName && memberID) {
            const newMemberIndex = memberBits.length;
            const newMemberHTML = `
                    <div class="member-info">
                        <div class="member-index">${newMemberIndex + 1}</div>
                        <div>-</div>
                        <div class="member-name">${memberName}</div>
                        <div class="member-id">${memberID}</div>
                    </div>
                
                    <div class="action-btns">
                        <div class="action-btn add-to-end-${newMemberIndex}"></div>
                        <div class="action-btn delete-member-${newMemberIndex}"></div>
                    </div>
                `;
            const tempDiv = document.createElement("div");
            tempDiv.classList.add(`member-row-${newMemberIndex}`);
            tempDiv.innerHTML = newMemberHTML;
            editList.appendChild(tempDiv);
            document.querySelector(`.add-to-end-${newMemberIndex}`).addEventListener("click", () => {
                addMemberToEnd(newMemberIndex);
            });
            document.querySelector(`.delete-member-${newMemberIndex}`).addEventListener("click", () => {
                deleteMember(newMemberIndex);
            });
            memberBits.push([
                `${newMemberIndex + 1}-`,
                memberName,
                memberID,
            ]);
            rerenderAddMember();
            updateIndexes();
        }
    });
};
//# sourceMappingURL=addNewMember.js.map