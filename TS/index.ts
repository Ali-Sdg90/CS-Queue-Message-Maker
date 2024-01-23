const input = document.querySelector(".input-list") as HTMLInputElement;
const submitInput = document.querySelector(".submit-input") as HTMLElement;
const editList = document.querySelector(".edit-list") as HTMLElement;
const output = document.querySelector(".output-list") as HTMLInputElement;
const demoListBtn = document.querySelector(".how-to-use-btn") as HTMLElement;

let inputArray: string[] = [];
let membersArray: string[] = [];
let memberBits: string[][] = [];
let memberCounter: number = 0;
let course: string = "";

const liveLink = "https://cs-internship.github.io/CS-Queue-Message-Maker/";

submitInput.addEventListener("click", () => {
    if (input.value) {
        memberCounter = 0;
        convertInputToEditableList();
        updateIndexes();
    } else {
        submitInput.classList.add("shake-animation");

        setTimeout(() => {
            submitInput.classList.remove("shake-animation");
        }, 300);
    }
});

const rerenderAddMember = () => {
    document.querySelector(".add-member")?.remove();
    addNewMemberForm();
};

const updateIndexes = (): void => {
    const indexElements = document.querySelectorAll(".member-index");
    const actionBtns = document.querySelectorAll(
        ".action-btn"
    ) as NodeListOf<HTMLElement>;

    for (let i = 0; i < memberBits.length; i++) {
        if (indexElements[i]) {
            indexElements[i].textContent = (i + 1).toString();
        }
    }

    Array.from(actionBtns).map((actionBtn) => {
        actionBtn.classList.remove("disable-btn");
    });

    const lastDownBtn = actionBtns[actionBtns.length - 2] as HTMLElement;
    if (lastDownBtn) {
        lastDownBtn.classList.add("disable-btn");
    }

    updateOutput();
};

// Find memberBits between member index and Tel ID
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

demoListBtn.addEventListener("click", () => {
    addDemoList();
});

// ICARUS Easter Egg :)
const ICARUSs = document.querySelectorAll(".ICARUS") as NodeListOf<HTMLElement>;

ICARUSs.forEach((ICARUS) => {
    ICARUS.addEventListener("click", () => {
        if (ICARUS.classList.contains("ICARUS")) {
            console.log("Aloha!");

            ICARUS.setAttribute("href", "./Assets/ICARUS.mp3");
            ICARUS.classList.remove("ICARUS");

            setTimeout(() => {
                ICARUS.removeAttribute("href");
            }, 0);
        }
    });
});
