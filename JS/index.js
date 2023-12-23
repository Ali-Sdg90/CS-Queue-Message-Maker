"use strict";
console.log("HELLO");
const input = document.querySelector(".input-list");
const output = document.querySelector(".output-list");
input.value = `آپدیت صف #وب 👇🏻

1- فاطمه رضایی @Rezaie_f98 
2- فرشاد دولت‌ یاری @Farshad_80_1 
3- سلام یوهو کمک شایان رجبی @Shayan_rajaby
4- ریحانه روحی @reyh_an
5- علی قاسم‌پور @AliAkbar00100
6- ارشیا مردانی @mozadvaj
7- سعید محمدی @saeed7797
8- سارا محمدی @pciou
9- ابولفضل حصارکی @Abolfazl_hsr
10- مبینا وجدی @M0bio
11- الیاس اسماعیلی @elias_esm
12- آرش ثانی @Arashsani
13- محمد شفیعی @mshafiei1
14- امیرحسین بشیری @Amirhosseinshonam
15- مبین صالحی @Mwbi_slh
16- آریا شریف @TSN963

#وب`;
const submitInput = document.querySelector(".submit-input");
submitInput.addEventListener("click", () => {
    console.log("submit");
    convertInputToEditableList();
    updateOutput();
});
let inputArray = [];
let membersArray = [];
let memberBits = [];
let course = "";
const editList = document.querySelector(".edit-list");
const convertInputToEditableList = () => {
    inputArray = input.value.split("\n");
    course = inputArray[inputArray.length - 1];
    membersArray = [];
    for (let i = 2; i < inputArray.length - 2; i++) {
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
    }
    for (let i = 0; i < memberBits.length; i++) {
        document.querySelector(`.add-to-end-${i}`).addEventListener("click", () => {
            console.log(`Move ${i} to End`);
            addMemberToEnd(i);
        });
        document.querySelector(`.delete-member-${i}`).addEventListener("click", () => {
            deleteMember(i);
        });
    }
    addNewMemberForm();
};
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
        console.log(event);
    });
    document.querySelector(".add-member-btn").addEventListener("click", () => {
        const memberName = document.querySelector(".member-name-input").value;
        const memberID = document.querySelector(".member-id-input").value;
        if (memberName && memberID) {
            console.log("HI", memberName, memberID);
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
                console.log("CLICK");
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
            console.log(JSON.stringify(memberBits, null, 2));
        }
    });
};
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
const updateOutput = () => {
    let outputText = "";
    outputText += `آپدیت صف ${course} 👇🏻\n\n`;
    for (let i = 0; i < memberBits.length; i++) {
        outputText += `${i + 1}-`;
        for (let j = 1; j < memberBits[i].length; j++) {
            outputText += ` ${memberBits[i][j]}`;
        }
        outputText += "\n";
    }
    outputText += `\n${course}`;
    output.textContent = outputText;
};
const copyBtn = document.querySelector(".copy-output");
copyBtn.addEventListener("click", () => {
    if (output.textContent) {
        navigator.clipboard.writeText(output.textContent).then(() => {
            console.log(`Copied to clipboard`);
            copyBtn.textContent = "Copied";
            setTimeout(() => {
                copyBtn.textContent = "Copy";
            }, 1000);
        });
    }
});
//# sourceMappingURL=index.js.map