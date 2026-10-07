/**
 * Portfolio Data Source
 * Centralized data layer for Muhammad Zahoor's portfolio website.
 */

module.exports = {
    profile: {
        name: "Muhammad Zahoor",
        title: "IT Engineer & DevOps",
        shortBio: "IT ENGINEER • DEVOPS • CLOUD",
        statusText: "Available for opportunities",
        bio: "I build and secure modern IT systems with DevOps, cloud, Linux, CI/CD, and cybersecurity. I also have 2+ years of industry experience in App development, with 5+ apps published on the Google Play Store. Available for freelance projects.",
        location: "Pakistan",
        socials: {
            github: "https://github.com/mzahoorims",
            linkedin: "https://www.linkedin.com/in/muhammad-zahoor-1a8252248/",
            upwork: "https://www.upwork.com/freelancers/~013fda8d0a415b5524"
        }
    },

    stats: [
        { value: "2+", label: "Years Experience" },
        { value: "20+", label: "Projects Built" },
        { value: "5+", label: "Published Apps" },
        { value: "BS", label: "Computer Science" }
    ],

    about: {
        heading: "Engineering with a systems mindset.",
        lead: "I am an IT Engineer focused on DevOps, cloud infrastructure, automation, cybersecurity, and mobile app development.",
        description: "My background combines software development, mobile app development, networking, Linux administration, containerization, and cybersecurity. I enjoy building practical systems and improving the way applications are developed, deployed, and maintained. I have 2+ years of industry experience in mobile app development, with 5+ apps published on the Google Play Store.",
        focus: "My current technical focus is on Docker, Kubernetes, AWS, CI/CD, Git, Linux, infrastructure automation, and cybersecurity.",
        tags: ["DevOps", "Cloud", "Linux", "Cybersecurity", "Networking", "Automation", "Mobile App Development"],
        highlights: [
            { number: "01", text: "Infrastructure & Cloud" },
            { number: "02", text: "Containerization" },
            { number: "03", text: "CI/CD Automation" },
            { number: "04", text: "Linux & Networking" },
            { number: "05", text: "Security Mindset" }
        ]
    },

    experience: [
        {
            role: "Flutter Developer",
            company: "Logic Valley Pvt. Ltd.",
            period: "2024 — Present",
            location: "Rawalpindi, Pakistan",
            description: "Developed and maintained mobile applications using Flutter and Dart, working with APIs, databases, authentication and modern application architecture.",
            tags: ["Flutter", "Dart", "Firebase", "REST API", "Git"]
        },
        {
            role: "Flutter Developer",
            company: "Alright Technology Pvt. Ltd.",
            period: "2023 — 2024",
            location: "Pakistan",
            description: "Built responsive mobile applications, integrated backend services and APIs, implemented application features and collaborated on software development workflows.",
            tags: ["Flutter", "Dart", "SQLite", "Firebase", "GitHub"]
        }
    ],

    skills: [
        {
            id: "devops",
            category: "DevOps & Cloud",
            subtitle: "Infrastructure, automation & deployment",
            icon: "⚙",
            featured: true,
            items: ["Docker", "Docker Compose", "Docker Hub", "Kubernetes", "Minikube", "kubectl", "AWS", "EC2", "IAM", "GitHub Actions", "CI/CD", "Build Automation", "Deployment Automation", "GitHub", "Jenkins", "Ansible", "Linux", "SSH", "Cron Jobs", "Firewall"]
        },
        {
            id: "dev",
            category: "Development",
            subtitle: "Application development",
            icon: "</>",
            featured: false,
            items: ["Flutter", "Dart", "API Integration", "Firebase", "Supabase", "SQLite Database", "REST APIs", "State Management", "Payment Integration", "App Deployment", "Ad Integration", "Google Maps Integration", "Custom Widgets", "Localization", "Animation", "Theming"]
        },
        {
            id: "linux",
            category: "Linux & Infrastructure",
            subtitle: "Systems & server management",
            icon: "$",
            featured: false,
            items: ["Linux", "Ubuntu", "Bash", "Nginx", "SSH", "Networking", "Automation", "Shell Scripting", "File Permissions", "Group Management"]
        },
        {
            id: "security",
            category: "Security & Networking",
            subtitle: "Security testing & network fundamentals",
            icon: "◈",
            featured: false,
            items: ["Nmap", "Metasploit", "Gobuster", "Feroxbuster", "Vulnerability Assessment", "Firewalls", "Web Security", "Network Security", "SQL Injection Testing", "Static Malware Analysis", "Penetration Testing", "Metasploit Framework"]
        }
    ],

    pipeline: [
        { number: "01", name: "Git", desc: "Source Control" },
        { number: "02", name: "CI/CD", desc: "Automation" },
        { number: "03", name: "Docker", desc: "Containers" },
        { number: "04", name: "AWS", desc: "Deployment" }
    ],

    projects: [
        {
            id: 1,
            number: "01",
            category: "DEVOPS",
            filterGroup: "devops",
            title: "Dockerized Node.js Application",
            description: "A Node.js and SQLite application containerized with Docker, including persistent storage and deployment configuration.",
            iconClass: "fa-brands fa-docker",
            technologies: ["Node.js", "Express", "SQLite", "Docker"],
            link: null
        },
        {
            id: 2,
            number: "02",
            category: "DEVOPS",
            filterGroup: "devops",
            title: "Docker Compose Application",
            description: "Multi-container application using Docker Compose with Nginx, MySQL, custom networking and persistent volumes.",
            iconClass: "fa-brands fa-docker",
            technologies: ["Docker", "Docker Compose", "Nginx", "MySQL"],
            link: null
        },
        {
            id: 3,
            number: "03",
            category: "DATABASE / DEVOPS",
            filterGroup: "devops",
            title: "MongoDB Container Lab",
            description: "Docker-based MongoDB environment with Mongo Express, custom networking and persistent Docker volumes.",
            iconClass: "fa-solid fa-database",
            technologies: ["MongoDB", "Mongo Express", "Docker", "Volumes"],
            link: null
        },
        {
            id: 4,
            number: "04",
            category: "KUBERNETES",
            filterGroup: "devops",
            title: "Kubernetes Hospital Management System",
            description: "Containerized hospital management application deployed and managed using Kubernetes concepts and tools.",
            iconClass: "fa-solid fa-dharmachakra",
            technologies: ["Kubernetes", "Docker", "Minikube", "kubectl"],
            link: null
        },
        {
            id: 5,
            number: "05",
            category: "LINUX",
            filterGroup: "linux",
            title: "Linux System Monitoring Tool",
            description: "A Linux-based monitoring project for observing system resources and understanding system performance.",
            iconClass: "fa-brands fa-linux",
            technologies: ["Linux", "Bash", "Python", "Monitoring"],
            link: null
        },
        {
            id: 6,
            number: "06",
            category: "NETWORKING",
            filterGroup: "linux",
            title: "Local Office Network Deployment",
            description: "Practical networking setup involving LAN configuration, IP addressing, routing, switching and troubleshooting.",
            iconClass: "fa-solid fa-network-wired",
            technologies: ["Networking", "LAN", "Routing", "Switching"],
            link: null
        },
        {
            id: 7,
            number: "07",
            category: "MOBILE APPLICATION",
            filterGroup: "mobile",
            title: "Student Attendance",
            description: "Student attendance management application designed to manage attendance records efficiently.",
            iconClass: "fa-solid fa-user-check",
            technologies: ["Flutter", "Dart", "Android"],
            link: null
        },
        {
            id: 8,
            number: "08",
            category: "MOBILE APPLICATION",
            filterGroup: "mobile",
            title: "CV Planner",
            description: "A mobile application designed to help users organize and manage their CV and career information.",
            iconClass: "fa-solid fa-file-lines",
            technologies: ["Flutter", "Dart", "Android"],
            link: "https://play.google.com/store/apps/details?id=com.cvplanner.app"
        },
        {
            id: 9,
            number: "09",
            category: "MOBILE APPLICATION",
            filterGroup: "mobile",
            title: "Notes & Reminders",
            description: "Mobile productivity application for creating notes, reminders and managing daily tasks.",
            iconClass: "fa-solid fa-note-sticky",
            technologies: ["Flutter", "Dart", "Android"],
            link: "https://play.google.com/store/apps/details?id=com.notes.reminders.todolist.notepad"
        },
        {
            id: 10,
            number: "10",
            category: "MOBILE APPLICATION",
            filterGroup: "mobile",
            title: "Art Wallpapers",
            description: "Mobile wallpaper application providing a collection of artistic wallpapers for Android users.",
            iconClass: "fa-solid fa-image",
            technologies: ["Flutter", "Dart", "Android"],
            link: "https://play.google.com/store/apps/details?id=com.diverse.artwallpapersapp"
        },
        {
            id: 11,
            number: "11",
            category: "WEB APPLICATION",
            filterGroup: "web",
            title: "SubTracker",
            description: "A subscription tracking application designed to help users manage and monitor their recurring subscriptions.",
            iconClass: "fa-solid fa-globe",
            technologies: ["Web", "Application", "Database"],
            link: "https://subtracker.io/"
        },
        {
            id: 12,
            number: "12",
            category: "MOBILE APPLICATION",
            filterGroup: "mobile",
            title: "Shopify App",
            description: "E-commerce app with product browsing, cart and order management, payments, returns, live chat and location services.",
            iconClass: "fa-solid fa-cart-shopping",
            technologies: ["Flutter", "API Integration", "Payments", "Google Maps", "Real-time Chat"],
            link: null
        },
        {
            id: 13,
            number: "13",
            category: "MOBILE APPLICATION",
            filterGroup: "mobile",
            title: "Travelily",
            description: "All-in-one tourism and travel app featuring hotel bookings, tourist attractions, Google Maps navigation, car rentals, local bus locations, nearby restaurants, mechanic and repair shops, travel companions, weather updates, trip planning, bookings, and travel experiences.",
            iconClass: "fa-solid fa-plane",
            technologies: ["Flutter", "APIs", "Google Maps", "Weather", "Google Sign-In", "Payments Methods", "Hotel Booking", "Car Rentals"],
            link: null
        },
        {
            id: 14,
            number: "14",
            category: "MOBILE APPLICATION",
            filterGroup: "mobile",
            title: "Wealthy Heels",
            description: "Consultation booking app with session management, purchaseable guidance resources, booking history and notifications.",
            iconClass: "fa-solid fa-calendar-check",
            technologies: ["Flutter", "Stripe", "Booking Management", "Push Notifications"],
            link: null
        },
        {
            id: 15,
            number: "15",
            category: "MOBILE APPLICATION",
            filterGroup: "mobile",
            title: "Beard Friend",
            description: "Barber booking app featuring style and price listings, in-app payments, shop offers and a visit-based loyalty reward.",
            iconClass: "fa-solid fa-scissors",
            technologies: ["Flutter", "Booking", "Payments", "Loyalty Program"],
            link: null
        },
        {
            id: 16,
            number: "16",
            category: "MOBILE APPLICATION",
            filterGroup: "mobile",
            title: "Invitation App",
            description: "Customizable invitation creator with editable templates, saved designs, image and PDF exports, and sharing.",
            iconClass: "fa-solid fa-envelope-open-text",
            technologies: ["Flutter", "Image Export", "PDF", "Social Sharing"],
            link: null
        },
        {
            id: 17,
            number: "17",
            category: "MOBILE APPLICATION",
            filterGroup: "mobile",
            title: "Tresorley",
            description: "Fast-food restaurant app featuring pizzas, burgers, snacks, drinks, menus, online food ordering, delivery, and restaurant discovery.",
            iconClass: "fa-solid fa-mobile-screen-button",
            technologies: ["Flutter", "Dart", "API Integration"],
            link: null
        },
        {
            id: 18,
            number: "18",
            category: "MOBILE APPLICATION",
            filterGroup: "mobile",
            title: "Ecoms App",
            description: "E-commerce mobile application developed to support online product browsing and shopping.",
            iconClass: "fa-solid fa-bag-shopping",
            technologies: ["Flutter", "Dart", "Payment Methods", "API Integration"],
            link: null
        },
        {
            id: 19,
            number: "19",
            category: "MOBILE APPLICATION",
            filterGroup: "mobile",
            title: "EntryPro App",
            description: "Mobile application developed for the Data Entry platform. Save user all detail which is submitted by users.",
            iconClass: "fa-solid fa-id-card",
            technologies: ["Flutter", "Dart", "API Integration"],
            link: null
        }
    ]
};
