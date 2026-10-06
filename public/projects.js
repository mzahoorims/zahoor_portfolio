/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [

    {
        number: "01",
        icon: "DO",
        category: "DEVOPS",
        title: "Dockerized Node.js Application",
        description:
            "A containerized Node.js and SQLite application with Docker, persistent storage and a production-style deployment workflow.",
        technologies: [
            "Node.js",
            "Docker",
            "SQLite",
            "Docker Volume",
            "Linux"
        ],
        link: null
    },


    {
        number: "02",
        icon: "DC",
        category: "DEVOPS",
        title: "Docker Compose Application",
        description:
            "Multi-container application using Docker Compose with Nginx, MySQL, custom networking and persistent volumes.",
        technologies: [
            "Docker Compose",
            "Nginx",
            "MySQL",
            "Linux",
            "AWS"
        ],
        link: null
    },


    {
        number: "03",
        icon: "MG",
        category: "DEVOPS / DATABASE",
        title: "MongoDB Container Lab",
        description:
            "Containerized MongoDB and Mongo Express environment demonstrating Docker networking, volumes and persistent database storage.",
        technologies: [
            "MongoDB",
            "Docker",
            "Docker Compose",
            "Volumes",
            "Networking"
        ],
        link: null
    },


    {
        number: "04",
        icon: "KU",
        category: "KUBERNETES",
        title: "Kubernetes Hospital Management System",
        description:
            "A Kubernetes-based application deployment project demonstrating containers, services, pods and cluster management.",
        technologies: [
            "Kubernetes",
            "Minikube",
            "kubectl",
            "Docker"
        ],
        link: null
    },


    {
        number: "05",
        icon: "LN",
        category: "LINUX",
        title: "Linux System Monitoring Tool",
        description:
            "A Linux-focused monitoring project designed to observe system resources and understand server-level performance.",
        technologies: [
            "Linux",
            "Bash",
            "Python",
            "Monitoring"
        ],
        link: null
    },


    {
        number: "06",
        icon: "NW",
        category: "NETWORKING",
        title: "Local Office Network Deployment",
        description:
            "Practical networking project covering LAN configuration, routing, switching, connectivity and network troubleshooting.",
        technologies: [
            "LAN",
            "TCP/IP",
            "Routing",
            "Switching",
            "Troubleshooting"
        ],
        link: null
    },


    {
        number: "07",
        icon: "CV",
        category: "MOBILE APPLICATION",
        title: "CV Planner",
        description:
            "A mobile application for creating and managing professional CV information.",
        technologies: [
            "Flutter",
            "Dart",
            "Android"
        ],
        link: "https://play.google.com/store/apps/details?id=com.cvplanner.app"
    },


    {
        number: "08",
        icon: "NR",
        category: "MOBILE APPLICATION",
        title: "Notes & Reminders",
        description:
            "A productivity application for managing notes, tasks and reminders.",
        technologies: [
            "Flutter",
            "Dart",
            "Android"
        ],
        link: "https://play.google.com/store/apps/details?id=com.notes.reminders.todolist.notepad"
    },


    {
        number: "09",
        icon: "AW",
        category: "MOBILE APPLICATION",
        title: "Art Wallpapers",
        description:
            "A mobile wallpaper application providing a collection of artistic wallpapers for Android devices.",
        technologies: [
            "Flutter",
            "Dart",
            "Android"
        ],
        link: "https://play.google.com/store/apps/details?id=com.diverse.artwallpapersapp"
    },


    {
        number: "10",
        icon: "ST",
        category: "WEB APPLICATION",
        title: "SubTracker",
        description:
            "A subscription tracking web application designed to help users manage and monitor subscriptions.",
        technologies: [
            "Web",
            "Application",
            "Database"
        ],
        link: "https://subtracker.io/"
    }

];


/* =========================================================
   RENDER PROJECTS
========================================================= */

function renderProjects() {

    const projectsGrid =
        document.getElementById("projectsGrid");


    if (!projectsGrid) {

        console.error(
            "ERROR: #projectsGrid was not found in index.html"
        );

        return;
    }


    projectsGrid.innerHTML = "";


    projects.forEach((project) => {

        const article =
            document.createElement("article");


        article.className =
            "project-card";


        const technologiesHTML =
            project.technologies
                .map(
                    (technology) =>
                        `<span>${technology}</span>`
                )
                .join("");


        let linkHTML = "";


        if (project.link) {

            linkHTML = `
                <a
                    href="${project.link}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="project-link"
                >
                    View Project
                    <span>↗</span>
                </a>
            `;

        } else {

            linkHTML = `
                <span class="project-no-link">
                    No public link
                </span>
            `;
        }


        article.innerHTML = `

            <div class="project-top">

                <span class="project-number">
                    ${project.number}
                </span>

                <div class="project-icon">
                    ${project.icon}
                </div>

            </div>


            <div class="project-content">

                <p class="project-category">
                    ${project.category}
                </p>

                <h3>
                    ${project.title}
                </h3>

                <p class="project-description">
                    ${project.description}
                </p>

            </div>


            <div class="project-tech">

                ${technologiesHTML}

            </div>


            <div class="project-footer">

                ${linkHTML}

            </div>

        `;


        projectsGrid.appendChild(article);

    });


    console.log(
        `${projects.length} projects loaded successfully.`
    );
}


/* =========================================================
   START
========================================================= */

if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        renderProjects
    );

} else {

    renderProjects();

}