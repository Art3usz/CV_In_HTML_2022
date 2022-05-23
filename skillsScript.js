function getAllSkills() {
    getTechSkills();
    getSoftSkills()

}

let techSkillsTable = [
    "HTML5", "CSS3", "GIT", "WebPack", "JavaScript", "ReactJS", "NodeJS"
]

let softSkillsTable = ["Scrum", "Agile", "GTD", "Teamwork"
]

function getTechSkills() {
    getList(techSkillsTable, "techSkills");
}

function getSoftSkills() {
    getList(softSkillsTable, "softSkills");
}

function getList(tableName, id) {
    let list = document.getElementById(id);

    tableName.forEach((item) => {
        let li = document.createElement("li");
        let sp = document.createElement("span");
        sp.classList.add("list-secondary-item");
        sp.innerText = item;
        li.appendChild(sp);
        list.appendChild(li);
    })
}