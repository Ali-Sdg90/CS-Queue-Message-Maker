const input = document.querySelector(".input-list") as HTMLInputElement;
const submitInput = document.querySelector(".submit-input") as HTMLElement;
const editList = document.querySelector(".edit-list") as HTMLElement;
const output = document.querySelector(".output-list") as HTMLInputElement;

let inputArray: string[] = [];
let membersArray: string[] = [];
let memberBits: string[][] = [];
let course = "";

submitInput.addEventListener("click", () => {
    console.log("submit");
    convertInputToEditableList();
    updateOutput();
});

const rerenderAddMember = () => {
    document.querySelector(".add-member")?.remove();
    addNewMemberForm();
};

const updateIndexes = (): void => {
    const indexElements = document.querySelectorAll(".member-index");

    for (let i = 0; i < memberBits.length; i++) {
        if (indexElements[i]) {
            indexElements[i].textContent = (i + 1).toString();
            // memberBits
        }
    }

    updateOutput();
};

const nameFinder = (memberBit: string[]): string => {
    let memberName = "";

    for (let i = 1; i < memberBit.length; i++) {
        if (memberBit[i].includes("@")) {
            break;
        } else {
            memberName += memberBit[i];
            memberName += " ";
        }
    }

    memberName = memberName.slice(0, -1);
    return memberName;
};

const IDFinder = (memberBit: string[]): string | void => {
    for (let i = 1; i < memberBit.length; i++) {
        if (memberBit[i].includes("@")) {
            return memberBit[i];
        }
    }
};

