"use strict";
console.log("HELLO");
const input = document.querySelector(".input-list");
const output = document.querySelector(".output-list");
input.value = `آپدیت صف #وب 👇🏻

1- فاطمه رضایی @Rezaie_f98 
2- فرشاد دولت‌ یاری @Farshad_80_1 
3-  سلام یوهو کمک شایان رجبی @Shayan_rajaby
4- ریحانه روحی @reyh_an
5- علی قاسم‌پور @AliAkbar00100
6- ارشیا مردانی @mozadvaj
7- سعید محمدی @saeed7797
8- سارا محمدی @pciou
9- ابولفضل حصارکی @Abolfazl_hsr
10- مبینا وجدی @M0bio
11- الیاس اسماعیلی @elias_esm
12-  آرش ثانی @Arashsani
13- محمد شفیعی @mshafiei1
14-  امیرحسین بشیری @Amirhosseinshonam
15- مبین صالحی @Mwbi_slh
16-  آریا شریف @TSN963
17- فاطمه امینی @Fatemeh_amini13
18- محدثه قهرمانی @M_ghahremaniii7
19- معصومه دادبخش @Masoomeh_dadbakhsh
20- علیرضا فتحی @ItsAlirezzz
21-  آیدا پیمائی @aida_ap7
22- محمد چنانی @developer_codee
23-  آرزو روحی @Wish1375
24- مهیار سعدی @There_is_no_user
25- مهدی ملکی @M_maleki1370
26- مرضیه بیرانوند @MGityB
27- علی رفیعی @ART91128LJ
28-  سپهر ملکی @smplo
29-  اسحاق ترابی @kafipasargad
30- عرفان اکبری @Erfan25974
31- محدثه شیخ‌ اویسی @Mohisho
32- حسام مظلوم @hesam_0101
33- امیرحسین ارندان @AmirhoseinArandan

#وب`;
const submitInput = document.querySelector(".submit-input");
submitInput.addEventListener("click", () => {
    console.log("submit");
    convertInputToEditableList();
});
let inputArray = [];
let membersArray = [];
let course = "";
const editList = document.querySelector(".edit-list");
const convertInputToEditableList = () => {
    inputArray = input.value.split("\n");
    course = inputArray[inputArray.length - 1];
    for (let i = 2; i < inputArray.length - 2; i++) {
        membersArray.push(inputArray[i]);
    }
    let memberBits = membersArray.map((memberArray) => {
        return memberArray.split(" ");
    });
    console.log(memberBits);
    editList.innerHTML = "";
    for (let i = 0; i < memberBits.length; i++) {
        editList.innerHTML += `
            <div class="member-row">
                <div class="member-info">
                    <div class="member-index">1</div>
                    <div>-</div>
                    <div class="member-name">${nameFinder(memberBits[i])}</div>
                    <div class="member-id">${IDFinder(memberBits[i])}</div>
                </div>
        
                <div class="action-btns">
                    <div class="action-btn add-to-end(${i})">E</div>
                    <div class="action-btn delete-member${i}">D</div>
                </div>
            </div>
        `;
    }
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
//# sourceMappingURL=index.js.map