class Job {
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

var myJobs = [
    new Job(
        1,
        "Apr 2017",
        "Feb 2022",
        "Administrator at the Institute of Computer Science",
        "Maria Curie-Sklodowska University",
        "Lublin | Poland",
        "My duties included taking care of computer hardware and software at the Institute of Computer Science of UMCS, consisting in:• receiving reports about breakdowns, helpdesk,• servicing and installation of computer hardware (computers, peripherals, software),• installation, update and repair of software,• connecting, configuring, diagnosing and repairing computer and office devices,• ongoing repair and diagnosis of computer hardware (hardware / software), • provision of maintenance services for the end user: installation of operating systems, applications, client software,• maintenance and damage assessment as well as repair of workstations,"),
    new Job(
        2,
        "Feb 2018",
        "Sep 2018",
        "Lecturer",
        "The University College of Enterprise and Administration",
        "Lublin | Poland",
        "My duties included preparing and conducting classes in the field of computer science in the following subjects:• Advanced programming in C #;• Modeling and simulation of systems;• Computer graphics;• Animated 2D and 3D graphics;• Artificial Intelligence;• Basics of Java programming;"),
    new Job(
        3,
        "Jul 2016",
        "Sep 2016",
        "Trainee .Net",
        "Comarch SA",
        "Lublin | Poland"
    ),
    new Job(
        4,
        "Apr 2014",
        "May 2014",
        "Software Tester",
        "Microsoft",
        "Remote"
    )
];

function getJobs() {
    let list = document.getElementById("jobs");

    let h2 = document.createElement("h2");
    h2.classList.add("header-primary");
    h2.innerText = "Work Experience";
    list.appendChild(h2);

    let d = document.createElement("div");

    myJobs.forEach((item) => {
        let h3 = document.createElement("h3");
        h3.classList.add("job-name");
        h3.innerText = item.position + "\n";

        let sp = document.createElement("span");
        sp.classList.add("highlight");
        sp.innerText = item.concern;

        h3.appendChild(sp);
        d.appendChild(h3);

        let p = document.createElement("p");
        p.classList.add("job-date");
        p.innerText = item.dateStart + " - " + item.dateEnd + " | " + item.place;
        d.appendChild(p);

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