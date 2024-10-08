let techSkillsTable = [
    "Powershell",
    "Linux",
    "Windows"
]

let softSkillsTable = [
    "Adaptability",
    "Work ethic",
    "Teamwork",
    "Time management",
    "Motivation",
    "Listening",
    "Patience"
]
let toolsTable = [
    "Visual Studio Code",
    "Unity"
]

let languageTable = [
    "English  - B2", 
    "German - A1",
    "Polish    - native"
]

function getAllSkills() {
    getSkillsList(techSkillsTable.sort(), "Technologies", "techSkills");
    getSkillsList(toolsTable.sort(), "Tools", "toolsSkills");
    getSkillsList(softSkillsTable.sort(), "Soft Skills", "softSkills");
    getSkillsList(languageTable, "Languages", "language");
}


function getSkillsList(tableName, tableTittle, id) {
    let list = document.getElementById(id);
    let ul = document.createElement("ul");
    ul.classList.add("list-secondary");

    let h2 = document.createElement("h2");
    h2.classList.add("header-secondary");
    h2.innerText = tableTittle;

    tableName.forEach((item) => {
        let li = document.createElement("li");
        let sp = document.createElement("span");
        sp.classList.add("list-secondary-item");
        sp.innerText = item;
        li.appendChild(sp);
        ul.appendChild(li);
    })

    list.appendChild(h2);
    list.appendChild(ul);
}

let phones = [
    " +48-509-246-806"
]

let mails = [
   // "Damian.Pieczykolan@10g.pl"
  //  ,
   // "Damian_Pieczykolan@10g.pl",
    "pieczykolandamian@gmail.com"
]

function getContacts() {
    let list = document.getElementById("contacts");
    let h2 = document.createElement("h2");
    h2.classList.add("header-secondary");
    h2.innerText = "Contacts";
    list.appendChild(h2);
    let p = document.createElement("p");
    p.classList.add("contact-links");

    phones.forEach((item) => {
        let img = document.createElement("img");
        let a = document.createElement("a");
        let link = "tel:" + item;
        let br = document.createElement("br");
        img.classList.add("icon");
        img.src = "icons/phone-call.png";
        a.classList.add("contact-links");
        a.href = link;
        a.innerText = item;
        p.appendChild(img);
        p.appendChild(a);
        p.appendChild(br);
    })

    mails.forEach((item) => {
        let img = document.createElement("img");
        let a = document.createElement("a");
        let link = "mailto:" + item;
        let br = document.createElement("br");
        img.classList.add("icon");
        img.src = "icons/mail-icon.png";
        a.classList.add("contact-links");
        a.href = link;
        a.innerText = item;
        p.appendChild(img);
        p.appendChild(a);
        p.appendChild(br);
    })

    list.appendChild(p);
}
