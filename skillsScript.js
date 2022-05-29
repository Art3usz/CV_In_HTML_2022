function getAllSkills() {
    getSkillsList(techSkillsTable, "Tech Skills", "techSkills");
    getSkillsList(softSkillsTable.sort(), "Soft Skills", "softSkills");

}

let techSkillsTable = [
    "C#", "Java", "Python", "C++",
    ".Net",
    "HTML5",
    "CSS3",
    "GIT",
    "JavaScript"
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
    "+48-509-246-806"
]

let mails = [
    "Damian.Pieczykolan@10g.pl",
    "Damian_Pieczykolan@10g.pl"
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
        let sp = document.createElement("span");
        let a = document.createElement("a");
        let link="tel:"+item;
        let br=document.createElement("br");
        sp.classList.add("bold");
        sp.innerText = "C: ";
        a.classList.add("contact-links");
        a.href = link;
        a.innerText = item;
        p.appendChild(sp);
        p.appendChild(a);
        p.appendChild(br);
    })

    mails.forEach((item) => {
        let sp = document.createElement("span");
        let a = document.createElement("a");
        let link="mailto:"+item;
        let br=document.createElement("br");
        sp.classList.add("bold");
        sp.innerText = "E: ";
        a.classList.add("contact-links");
        a.href = link;
        a.innerText = item;
        p.appendChild(sp);
        p.appendChild(a);
        p.appendChild(br);
    })

    list.appendChild(p);
}