class Education {
    constructor(id, dateStart = "", dateEnd = "", position = "", concern = "", place = "", description = "") {
        this.id = id;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.position = position;
        this.concern = concern;
        this.place = place;
        this.description = description;
    }
}

var myEducation = [
    new Education(
        1,
        "2012",
        "2015",
        "Bachelor of Computer Science",
        "Maria Curie-Sklodowska University",
        "Lublin | Poland"
        ),
        new Education(
            2,
            "2015",
            "2017",
            "Master of Computer Science",
            "Maria Curie-Sklodowska University",
            "Lublin | Poland"
            )
    ];

function getSchools() {
    let list = document.getElementById("education");

    let h2 = document.createElement("h2");
    h2.classList.add("header-primary");
    h2.innerText = "Education";
    list.appendChild(h2);

    let d = document.createElement("div");

    myEducation.forEach((item) => {
        let h3 = document.createElement("h3");
        h3.classList.add("name");
        h3.innerText = item.position + "\n";

        let sp = document.createElement("span");
        sp.classList.add("highlight");
        sp.innerText = item.concern;

        h3.appendChild(sp);

        let sp2 = document.createElement("span");
        h3.appendChild(document.createElement("br"));
        sp2.classList.add("date");
        sp2.innerText = item.dateStart + " - " + item.dateEnd + " | " + item.place;
        h3.appendChild(sp2);

        d.appendChild(h3);

        let description = item.description.split('•');
        if (description.length > 0 && description[0] !== '') {
            let ul = document.createElement("ul");
            ul.classList.add("job-list");

            let sp = document.createElement("span");
            sp.innerText = description[0];
            ul.appendChild(sp);
            for (let i = 1; i < description.length; i++) {
                let li = document.createElement('li');
                li.innerText=description[i];
                ul.appendChild(li);
            }
            d.appendChild(ul);

        }
    })

    list.appendChild(d);
}