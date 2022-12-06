const desktopHeaderNavArray = [
    {
        id:1,
        iconClass: "fa-solid fa-house", 
        title:"home",
        to:"#home",
        active:true
    },
    {
        id:2,
        iconClass: "fa-solid fa-address-card", 
        title:"about",
        to:"#about",
        active:false
    },
    {
        id:3,
        iconClass: "fa-solid fa-briefcase", 
        title:"services",
        to:"#services",
        active:false
    },
    {
        id:4,
        iconClass: "fa-solid fa-graduation-cap", 
        title:"experience",
        to:"#experience",
        active:false
    },
    {
        id:5,
        iconClass: "fa-solid fa-layer-group", 
        title:"works",
        to:"#works",
        active:false
    },
    {
        id:6,
        iconClass:"fa-solid fa-coins", 
        title:"price",
        to:"#price",
        active:false
    },
    {
        id:7,
        iconClass:"fa-solid fa-comment", 
        title:"testimonial",
        to:"#testimonial",
        active:false
    },
    {
        id:8,
        iconClass: "fa-solid fa-pen-to-square", 
        title:"blog",
        to:"#blog",
        active:false
    },
    {
        id:9,
        iconClass: "fa-solid fa-comments", 
        title:"contact",
        to:"#contact",
        active:false
    },
]
const homeDescriptionArray = ["Front-end Developer", "UI/UX designer", "Photography lover"]
const homeIconClassArray = ["fa-brands fa-instagram", "fa-brands fa-twitter", "fa-brands fa-behance", "fa-solid fa-basketball", "fa-brands fa-pinterest-p"]
const homeLayerArray = [
    {
        id:1,
        iconElement: '<svg width="27" height="29" data-depth="0.3" class="layer p1" xmlns="http://www.w3.org/2000/svg" style="left: 10%;top: 10%; transform-style: preserve-3d; backface-visibility: hidden; position: relative; display: block;"><path d="M21.15625.60099c4.37954 3.67487 6.46544 9.40612 5.47254 15.03526-.9929 5.62915-4.91339 10.30141-10.2846 12.25672-5.37122 1.9553-11.3776.89631-15.75715-2.77856l2.05692-2.45134c3.50315 2.93948 8.3087 3.78663 12.60572 2.22284 4.297-1.5638 7.43381-5.30209 8.22768-9.80537.79387-4.50328-.8749-9.08872-4.37803-12.02821L21.15625.60099z" fill="#FFD15C" fill-rule="evenodd"></path></svg>'
    },
    {
        id:2,
        iconElement: '<svg width="26" height="26" data-depth="0.2" class="layer p2" xmlns="http://www.w3.org/2000/svg" style="left: 25%;top: 30%; transform-style: preserve-3d; backface-visibility: hidden; position: absolute; display: block;"><path d="M13 3.3541L2.42705 24.5h21.1459L13 3.3541z" stroke="#FF4C60" stroke-width="3" fill="none" fill-rule="evenodd"></path></svg>'
    },
    {
        id:3,
        iconElement: '<svg width="30" height="25" data-depth="0.3" class="layer p3" xmlns="http://www.w3.org/2000/svg" style="left: 15%;top: 30%; transform-style: preserve-3d; backface-visibility: hidden; position: absolute; display: block;"><path d="M.1436 8.9282C3.00213 3.97706 8.2841.92763 14.00013.92796c5.71605.00032 10.9981 3.04992 13.85641 8 2.8583 4.95007 2.8584 11.0491-.00014 16.00024l-2.77128-1.6c2.28651-3.96036 2.28631-8.84002.00011-12.8002-2.2862-3.96017-6.5124-6.40017-11.08513-6.4-4.57271.00018-8.79872 2.43984-11.08524 6.4002l-2.77128-1.6z" fill="#44D7B6" fill-rule="evenodd"></path></svg>'
    },
    {
        id:4,
        iconElement: '<svg width="15" height="23" data-depth="0.6" class="layer p4" xmlns="http://www.w3.org/2000/svg" style="left: 10%;bottom: 10%; transform-style: preserve-3d; backface-visibility: hidden; position: absolute; display: block;"><rect transform="rotate(30 9.86603 10.13397)" x="7" width="3" height="25" rx="1.5" fill="#FFD15C" fill-rule="evenodd"></rect></svg>'
    },
    {
        id:5,
        iconElement: '<svg width="15" height="23" data-depth="0.2" class="layer p5" xmlns="http://www.w3.org/2000/svg" style="left: 45%;top: 10%; transform-style: preserve-3d; backface-visibility: hidden; position: absolute; display: block;"><rect transform="rotate(30 9.86603 10.13397)" x="7" width="3" height="25" rx="1.5" fill="#6C6CE5" fill-rule="evenodd"></rect></svg>'
    },
    {
        id:6,
        iconElement: '<svg width="49" height="17" data-depth="0.5" class="layer p6" xmlns="http://www.w3.org/2000/svg" style="left: 40%;bottom: 10%; transform-style: preserve-3d; backface-visibility: hidden; position: absolute; display: block;"><g fill="#FF4C60" fill-rule="evenodd"><path d="M.5 16.5c0-5.71709 2.3825-10.99895 6.25-13.8567 3.8675-2.85774 8.6325-2.85774 12.5 0C23.1175 5.50106 25.5 10.78292 25.5 16.5H23c0-4.57303-1.90625-8.79884-5-11.08535-3.09375-2.28652-6.90625-2.28652-10 0C4.90625 7.70116 3 11.92697 3 16.5H.5z"></path><path d="M23.5 16.5c0-5.71709 2.3825-10.99895 6.25-13.8567 3.8675-2.85774 8.6325-2.85774 12.5 0C46.1175 5.50106 48.5 10.78292 48.5 16.5H46c0-4.57303-1.90625-8.79884-5-11.08535-3.09375-2.28652-6.90625-2.28652-10 0-3.09375 2.28651-5 6.51232-5 11.08535h-2.5z"></path></g></svg>'
    },
    {
        id:7,
        iconElement: '<svg width="26" height="26" data-depth="0.4" class="layer p7" xmlns="http://www.w3.org/2000/svg" style="left: 70%%;top: 20%; transform-style: preserve-3d; backface-visibility: hidden; position: absolute; display: block;"><path d="M13 22.6459L2.42705 1.5h21.1459L13 22.6459z" stroke="#FFD15C" stroke-width="3" fill="none" fill-rule="evenodd"></path></svg>'
    },
    {
        id:8,
        iconElement: '<svg width="19" height="21" data-depth="0.3" class="layer p8" xmlns="http://www.w3.org/2000/svg" style="left: 90%;top: 10%; transform-style: preserve-3d; backface-visibility: hidden; position: absolute; display: block;"><rect transform="rotate(-40 6.25252 10.12626)" x="7" width="3" height="25" rx="1.5" fill="#6C6CE5" fill-rule="evenodd"></rect></svg>'
    },
    {
        id:9,
        iconElement: '<svg width="30" height="25" data-depth="0.3" data-depth-y="-1.30" class="layer p9" xmlns="http://www.w3.org/2000/svg" style="left: 80%;top: 45%; transform-style: preserve-3d; backface-visibility: hidden; position: absolute; display: block;"><path d="M29.8564 16.0718c-2.85854 4.95114-8.1405 8.00057-13.85654 8.00024-5.71605-.00032-10.9981-3.04992-13.85641-8-2.8583-4.95007-2.8584-11.0491.00014-16.00024l2.77128 1.6c-2.28651 3.96036-2.28631 8.84002-.00011 12.8002 2.2862 3.96017 6.5124 6.40017 11.08513 6.4 4.57271-.00018 8.79872-2.43984 11.08524-6.4002l2.77128 1.6z" fill="#6C6CE5" fill-rule="evenodd"></path></svg>'
    },
    {
        id:10,
        iconElement: '<svg width="47" height="29" data-depth="0.2" class="layer p10" xmlns="http://www.w3.org/2000/svg" style="left: 90%;top: 90%; transform-style: preserve-3d; backface-visibility: hidden; position: absolute; display: block;"><g fill="#44D7B6" fill-rule="evenodd"><path d="M46.78878 17.19094c-1.95535 5.3723-6.00068 9.52077-10.61234 10.8834-4.61167 1.36265-9.0893-.26708-11.74616-4.27524-2.65686-4.00817-3.08917-9.78636-1.13381-15.15866l2.34923.85505c-1.56407 4.29724-1.2181 8.92018.90705 12.12693 2.12514 3.20674 5.70772 4.5107 9.39692 3.4202 3.68921-1.0905 6.92581-4.40949 8.48988-8.70673l2.34923.85505z"></path><path d="M25.17585 9.32448c-1.95535 5.3723-6.00068 9.52077-10.61234 10.8834-4.61167 1.36264-9.0893-.26708-11.74616-4.27525C.16049 11.92447-.27182 6.14628 1.68354.77398l2.34923.85505c-1.56407 4.29724-1.2181 8.92018.90705 12.12692 2.12514 3.20675 5.70772 4.5107 9.39692 3.4202 3.68921-1.0905 6.92581-4.40948 8.48988-8.70672l2.34923.85505z"></path></g></svg>'
    },
    {
        id:11,
        iconElement: '<svg width="33" height="20" data-depth="0.5" class="layer p11" xmlns="http://www.w3.org/2000/svg" style="left: 70%;top: 80%; transform-style: preserve-3d; backface-visibility: hidden; position: absolute; display: block;"><path d="M32.36774.34317c.99276 5.63023-1.09332 11.3614-5.47227 15.03536-4.37895 3.67396-10.3855 4.73307-15.75693 2.77837C5.76711 16.2022 1.84665 11.53014.8539 5.8999l3.15139-.55567c.7941 4.50356 3.93083 8.24147 8.22772 9.8056 4.29688 1.56413 9.10275.71673 12.60554-2.2227C28.34133 9.98771 30.01045 5.4024 29.21635.89884l3.15139-.55567z" fill="#FFD15C" fill-rule="evenodd"></path></svg>'
    },
    {
        id:12,
        iconElement: '<svg width="30" height="25" data-depth="0.3" class="layer p12" xmlns="http://www.w3.org/2000/svg" style="left: 55%;top: 5%; transform-style: preserve-3d; backface-visibility: hidden; position: absolute; display: block;"><path d="M.1436 8.9282C3.00213 3.97706 8.2841.92763 14.00013.92796c5.71605.00032 10.9981 3.04992 13.85641 8 2.8583 4.95007 2.8584 11.0491-.00014 16.00024l-2.77128-1.6c2.28651-3.96036 2.28631-8.84002.00011-12.8002-2.2862-3.96017-6.5124-6.40017-11.08513-6.4-4.57271.00018-8.79872 2.43984-11.08524 6.4002l-2.77128-1.6z" fill="#44D7B6" fill-rule="evenodd"></path></svg>'
    },
    {
        id:13,
        iconElement: '<svg width="15" height="23" data-depth="0.6" class="layer p13" xmlns="http://www.w3.org/2000/svg" style="left: 10%;bottom: 10%; transform-style: preserve-3d; backface-visibility: hidden; position: absolute; display: block;"><rect transform="rotate(30 9.86603 10.13397)" x="7" width="3" height="25" rx="1.5" fill="#FFD15C" fill-rule="evenodd"></rect></svg>'
    },
    {
        id:14,
        iconElement: '<svg width="15" height="23" data-depth="0.2" class="layer p14" xmlns="http://www.w3.org/2000/svg" style="left: 25%;top: 60%; transform-style: preserve-3d; backface-visibility: hidden; position: absolute; display: block;"><rect transform="rotate(30 9.86603 10.13397)" x="7" width="3" height="25" rx="1.5" fill="#6C6CE5" fill-rule="evenodd"></rect></svg>'
    },
    {
        id:15,
        iconElement: '<svg width="49" height="17" data-depth="0.5" class="layer p15" xmlns="http://www.w3.org/2000/svg" style="left: 10%;bottom: 60%; transform-style: preserve-3d; backface-visibility: hidden; position: absolute; display: block;"><g fill="#FF4C60" fill-rule="evenodd"><path d="M.5 16.5c0-5.71709 2.3825-10.99895 6.25-13.8567 3.8675-2.85774 8.6325-2.85774 12.5 0C23.1175 5.50106 25.5 10.78292 25.5 16.5H23c0-4.57303-1.90625-8.79884-5-11.08535-3.09375-2.28652-6.90625-2.28652-10 0C4.90625 7.70116 3 11.92697 3 16.5H.5z"></path><path d="M23.5 16.5c0-5.71709 2.3825-10.99895 6.25-13.8567 3.8675-2.85774 8.6325-2.85774 12.5 0C46.1175 5.50106 48.5 10.78292 48.5 16.5H46c0-4.57303-1.90625-8.79884-5-11.08535-3.09375-2.28652-6.90625-2.28652-10 0-3.09375 2.28651-5 6.51232-5 11.08535h-2.5z"></path></g></svg>'
    },
    {
        id:16,
        iconElement: '<svg width="26" height="26" data-depth="0.4" class="layer p16" xmlns="http://www.w3.org/2000/svg" style="left: 70%%;top: 70%; transform-style: preserve-3d; backface-visibility: hidden; position: absolute; display: block;"><path d="M13 22.6459L2.42705 1.5h21.1459L13 22.6459z" stroke="#FFD15C" stroke-width="3" fill="none" fill-rule="evenodd"></path></svg>'
    },
    {
        id:17,
        iconElement: '<svg width="19" height="21" data-depth="0.3" class="layer p17" xmlns="http://www.w3.org/2000/svg" style="left: 90%;top: 90%; transform-style: preserve-3d; backface-visibility: hidden; position: absolute; display: block;"><rect transform="rotate(-40 6.25252 10.12626)" x="7" width="3" height="25" rx="1.5" fill="#6C6CE5" fill-rule="evenodd"></rect></svg>'
    },
    {
        id:18,
        iconElement: '<svg width="30" height="25" data-depth="0.3" data-depth-y="-1.30" class="layer p18" xmlns="http://www.w3.org/2000/svg" style="left: 40%;top: 75%; transform-style: preserve-3d; backface-visibility: hidden; position: absolute; display: block;"><path d="M29.8564 16.0718c-2.85854 4.95114-8.1405 8.00057-13.85654 8.00024-5.71605-.00032-10.9981-3.04992-13.85641-8-2.8583-4.95007-2.8584-11.0491.00014-16.00024l2.77128 1.6c-2.28651 3.96036-2.28631 8.84002-.00011 12.8002 2.2862 3.96017 6.5124 6.40017 11.08513 6.4 4.57271-.00018 8.79872-2.43984 11.08524-6.4002l2.77128 1.6z" fill="#6C6CE5" fill-rule="evenodd"></path></svg>'
    },
    {
        id:19,
        iconElement: '<svg width="47" height="29" data-depth="0.2" class="layer p19" xmlns="http://www.w3.org/2000/svg" style="left: 30%;top: 60%; transform-style: preserve-3d; backface-visibility: hidden; position: absolute; display: block;"><g fill="#44D7B6" fill-rule="evenodd"><path d="M46.78878 17.19094c-1.95535 5.3723-6.00068 9.52077-10.61234 10.8834-4.61167 1.36265-9.0893-.26708-11.74616-4.27524-2.65686-4.00817-3.08917-9.78636-1.13381-15.15866l2.34923.85505c-1.56407 4.29724-1.2181 8.92018.90705 12.12693 2.12514 3.20674 5.70772 4.5107 9.39692 3.4202 3.68921-1.0905 6.92581-4.40949 8.48988-8.70673l2.34923.85505z"></path><path d="M25.17585 9.32448c-1.95535 5.3723-6.00068 9.52077-10.61234 10.8834-4.61167 1.36264-9.0893-.26708-11.74616-4.27525C.16049 11.92447-.27182 6.14628 1.68354.77398l2.34923.85505c-1.56407 4.29724-1.2181 8.92018.90705 12.12692 2.12514 3.20675 5.70772 4.5107 9.39692 3.4202 3.68921-1.0905 6.92581-4.40948 8.48988-8.70672l2.34923.85505z"></path></g></svg>'
    },
    {
        id:20,
        iconElement: '<svg width="33" height="20" data-depth="0.5" class="layer p20" xmlns="http://www.w3.org/2000/svg" style="left: 50%;top: 80%; transform-style: preserve-3d; backface-visibility: hidden; position: absolute; display: block;"><path d="M32.36774.34317c.99276 5.63023-1.09332 11.3614-5.47227 15.03536-4.37895 3.67396-10.3855 4.73307-15.75693 2.77837C5.76711 16.2022 1.84665 11.53014.8539 5.8999l3.15139-.55567c.7941 4.50356 3.93083 8.24147 8.22772 9.8056 4.29688 1.56413 9.10275.71673 12.60554-2.2227C28.34133 9.98771 30.01045 5.4024 29.21635.89884l3.15139-.55567z" fill="#FFD15C" fill-rule="evenodd"></path></svg>'
    },
]
const aboutInfoSkillArray = [
    {
        id:1,
        name: "Development",
        percent: 85,
        color: "#ffd15c"
    },
    {
        id:2,
        name: "UI/UX design",
        percent: 95,
        color: "#ff4c60"
    },
    {
        id:3,
        name: "Photography",
        percent: 70,
        color: "#6c6ce5"
    },
]
const servicesBoxArray = [
    {
        id:1,
        imgUrl: "./src/img/service-1.svg",
        title: "UI/UX design",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur temporibus maiores perspiciatis!",
        bgColor: "#6c6ce5",
        textColor: "#fff",
    },
    {
        id:2,
        imgUrl: "./src/img/service-2.svg",
        title: "Web Development",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur temporibus maiores perspiciatis!",
        bgColor: "#f9d74c",
        textColor: "#000",
    },
    {
        id:3,
        imgUrl: "./src/img/service-3.svg",
        title: "Photography",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur temporibus maiores perspiciatis!",
        bgColor: "#f97b8b",
        textColor: "#fff",
    },
]
const experienceBoxArray = [
    {
        id:1,
        iconClass: "fa-solid fa-graduation-cap",
        items: [
            {
                id:1,
                year:"2019 - Present",
                title: "Academic Degree",
                description: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
            },
            {
                id:2,
                year:"2017 - 2013",
                title: "Bachelor’s Degree",
                description: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
            },
            {
                id:3,
                year:"2013 - 2009",
                title: "Honours Degree",
                description: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
            },
        ],
    },
    {
        id:2,
        iconClass: "fa-solid fa-briefcase",
        items: [
            {
                id:1,
                year:"2019 - Present",
                title: "Web Designer",
                description: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
            },
            {
                id:2,
                year:"2017 - 2013",
                title: "Front-End Developer",
                description: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
            },
            {
                id:3,
                year:"2013 - 2009",
                title: "Back-End Developer",
                description: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
            },
        ],
    },
]
const worksTypeArray = [
    {
        id:1,
        type: "Everything",
        active: true,
    },
    {
        id:2,
        type: "Creative",
        active: false,
    },
    {
        id:3,
        type: "Art",
        active: false,
    },
    {
        id:4,
        type: "Design",
        active: false,
    },
    {
        id:5,
        type: "Branding",
        active: false,
    },
]
const worksItemArray = [
    {
        id:1,
        imgUrl: "./src/img/works-1.svg",
        types: "Art",
        title: "Project Management Illustration",
        iconClass: "fa-solid fa-magnifying-glass",
        show: true,
    },
    {
        id:2,
        imgUrl: "./src/img/works-2.svg",
        types: "Creative",
        title: "Guest App Walkthrough Screens",
        iconClass: "fa-solid fa-ellipsis",
        show: true,
    },
    {
        id:3,
        imgUrl: "./src/img/works-3.svg",
        types: "Branding",
        title: "Delivery App Wireframe",
        iconClass: "fa-solid fa-video",
        show: true,
    },
    {
        id:4,
        imgUrl: "./src/img/works-4.svg",
        types: "Creative",
        title: "Onbroading Motivation",
        iconClass: "fa-solid fa-music",
        show: true,
    },
    {
        id:5,
        imgUrl: "./src/img/works-5.svg",
        types: "Art, Branding",
        title: "iMac Mockup Design",
        iconClass: "fa-solid fa-image",
        show: true,
    },
    {
        id:6,
        imgUrl: "./src/img/works-6.svg",
        types: "Design, Creative",
        title: "Game Store App Concept",
        iconClass: "fa-solid fa-link",
        show: true,
    },
]
const priceItemArray = [
    {
        id:1,
        imgUrl: "./src/img/price-1.svg",
        title: "Basic",
        description: "A Simple option but powerful to manage your business",
        support: "Email",
        unit: "$",
        number: 9,
        time: "month",
        recommend: false,
    },
    {
        id:2,
        imgUrl: "./src/img/price-2.svg",
        title: "Premium",
        description: "Unlimited product including apps integrations and more features",
        support: "Mon-Fri",
        unit: "$",
        number: 49,
        time: "month",
        recommend: true,
    },
    {
        id:3,
        imgUrl: "./src/img/price-3.svg",
        title: "Ultimate",
        description: "A wise option for large companies and individuals",
        support: "24/7 support",
        unit: "$",
        number: 99,
        time: "month",
        recommend: false,
    },
]
const testimonialItemArray = [
    {
        id:1,
        imgUrl: "./src/img/avatar-1.svg",
    },
    {
        id:2,
        imgUrl: "./src/img/avatar-2.svg",
    },
    {
        id:3,
        imgUrl: "./src/img/avatar-3.svg",
    },
    {
        id:4,
        imgUrl: "./src/img/avatar-3.svg",
    },
    {
        id:5,
        imgUrl: "./src/img/avatar-3.svg",
    },
]
const testimonialClientImgArray = [
    {
        id:1,
        imgUrl: "./src/img/client-1.svg",
    },
    {
        id:2,
        imgUrl: "./src/img/client-2.svg",
    },
    {
        id:3,
        imgUrl: "./src/img/client-3.svg",
    },
    {
        id:4,
        imgUrl: "./src/img/client-4.svg",
    },
    {
        id:5,
        imgUrl: "./src/img/client-5.svg",
    },
    {
        id:6,
        imgUrl: "./src/img/client-6.svg",
    },
    {
        id:7,
        imgUrl: "./src/img/client-7.svg",
    },
    {
        id:8,
        imgUrl: "./src/img/client-8.svg",
    },
]
const blogItemArray = [
    {
        id:1,
        imgUrl: "./src/img/blog-1.svg",
        tag: "Reviews",
        title: "5 Best App Development Tool for Your Project",
        time: "09 February, 2020",
        author: "Bolby",
    },
    {
        id:2,
        imgUrl: "./src/img/blog-2.svg",
        tag: "Tutorial",
        title: "Common Misconceptions About Payment",
        time: "07 February, 2020",
        author: "Bolby",
    },
    {
        id:3,
        imgUrl: "./src/img/blog-3.svg",
        tag: "Business",
        title: "3 Things To Know About Startup Business",
        time: "06 February, 2020",
        author: "Bolby",
    },
]


const desktopHeaderNavList = document.querySelector(".desktop-header__nav-list")
const homeDescription = document.querySelector(".home__description__random")
const homeIconList = document.querySelector(".home__icon-list")
const aboutInfoSkillList = document.querySelector(".skill-list")
const servicesBoxList = document.querySelector(".services .row")
const experienceBoxList = document.querySelector(".experience .row")
const worksTypeList = document.querySelector(".works__type-list")
const worksItemList = document.querySelector(".works .row")
const priceItemList = document.querySelector(".price .row")
const testimonialItemList = document.querySelector(".testimonial__wrapper__slide-list")
const testimonialClientImgList = document.querySelector(".testimonial .testimonial__client .row")
const blogItemList = document.querySelector(".blog .blog-list .row")


const main = document.querySelector(".main")
const sectionArray = Array.from(document.querySelectorAll("section[id]"))
const home = document.querySelector("#home")
// const about = document.querySelector("#about")
// const services = document.querySelector("#services")
// const experience = document.querySelector("#experience")
// const works = document.querySelector("#works")
// const price = document.querySelector("#price")
// const testimonial = document.querySelector("#testimonial")
// const blog = document.querySelector("#blog")
// const contact = document.querySelector("#contact")

// Hiển thị nút scroll to đầu trang và Xử lý nav list header desktop
const btnScrollToTop = document.querySelector(".scroll-to-top")
const sectionArrayNew = sectionArray.slice().reverse()
main.addEventListener("scroll", () => {
    main.scrollTop >= 500 
    ? btnScrollToTop.style.display = "flex"
    : btnScrollToTop.style.display = "none"
    sectionArrayNew.every(section => {
        if(main.scrollTop >= section.offsetTop){
            const navActiveId = sectionArray.indexOf(section)+1
            desktopHeaderNavArray.forEach(desktopHeaderNav => {
                desktopHeaderNav.id === navActiveId 
                ? desktopHeaderNav.active=true
                : desktopHeaderNav.active=false
            })
            loadDesktopHeaderNavList()
            return false
        }
        return true
    })
})


//Hiển thị list nav header
function loadDesktopHeaderNavList() {
    const desktopHeaderNavListHtml = desktopHeaderNavArray.map(desktopHeaderNav => 
        `<li class="desktop-header__nav-item">
            <a href="${desktopHeaderNav.to}" class="nav-link header__nav__icon-${desktopHeaderNav.title}${desktopHeaderNav.active ? " active" : ""}">
                <i class="${desktopHeaderNav.iconClass}"></i>
                ${desktopHeaderNav.title}
            </a>
        </li>`).toString().replaceAll(">,<","><")
    desktopHeaderNavList.innerHTML = desktopHeaderNavListHtml
}
loadDesktopHeaderNavList()


//Cho home description chạy tự động
homeDescription.innerHTML = homeDescriptionArray[0]
setInterval(() => {
    homeDescription.innerHTML = homeDescriptionArray[Math.floor(Math.random()*homeDescriptionArray.length)]
}, 10000)


//Hiện thị list icon trong section home
const homeIconListHtml 
= homeIconClassArray.map(homeIconItem => `<li class="home__icon-item"><a href=""><i class="${homeIconItem}"></i></a></li>`).toString().replaceAll(",", "");
homeIconList.innerHTML = homeIconListHtml


// Hiển thị list skill trong section about
const aboutInfoSkillHtml 
= aboutInfoSkillArray.map(aboutInfoSkill => `<div class="skill-item">
        <div class="skill-item__info">
            <h4 class="skill-item__info__text">${aboutInfoSkill.name}</h4>
            <span class="skill-item__info__percent">${aboutInfoSkill.percent}%</span>
        </div>
        <div class="skill-item__progress">
            <div class="skill-item__progress__bar skill-item__progress__bar--${aboutInfoSkill.id}" style="background-color: ${aboutInfoSkill.color}"></div>
        </div>
    </div>`).toString().replaceAll(">,<","><")
aboutInfoSkillList.innerHTML = aboutInfoSkillHtml
aboutInfoSkillArray.forEach(aboutInfoSkill => {
    const aboutInfoSkillProgressBar = document.querySelector(`.skill-item__progress__bar--${aboutInfoSkill.id}`)
    aboutInfoSkillProgressBar.style.setProperty("--data-width",`${aboutInfoSkill.percent}%`)
})


// Hiển thị list services box
const servicesBoxHtml = servicesBoxArray.map(servicesBox => `<div class="col l-4">
        <div class="services-box services-box--${servicesBox.id}" style="background-color: ${servicesBox.bgColor}; color: ${servicesBox.textColor}; box-shadow: 0 5px 20px ${servicesBox.bgColor}80">
            <img src="${servicesBox.imgUrl}" alt="${servicesBox.title}">
            <h3>${servicesBox.title}</h3>
            <p>${servicesBox.description}</p>
        </div>
    </div>`).toString().replaceAll(">,<","><")
servicesBoxList.innerHTML = servicesBoxHtml


// Hiển thị dòng thời gian học tập và làm việc timeline experience
const experienceBoxHtml = experienceBoxArray.map(experienceBox => `<div class="col l-6">
        <div class="timeline-box">
        ${experienceBox.items.map(item => 
            `<div class="timeline-container">
                <i class="${experienceBox.iconClass} timeline__container-icon"></i>
                <div class="timeline__content">
                    <span class="time">${item.year}</span>
                    <h3 class="title">${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            </div>`)}
        </div>
    </div>`).toString().replaceAll(">,<","><")
experienceBoxList.innerHTML = experienceBoxHtml


//Hiển thị menu type works
function loadWorksTypeList() {
    const worksTypeHtml = worksTypeArray.map(worksType => 
        `<li class="works__type-item${worksType.active ?" active" : ""}" onclick="clickWorksTypeItem(this)">${worksType.type}</li>`).toString().replaceAll(">,<","><")
    worksTypeList.innerHTML = worksTypeHtml
}
loadWorksTypeList()
const worksTypeItem = document.querySelector(".works__type-item.active")


//Hiển thị list works item
function loadWorksItemList() {
    const worksItemHtml = worksItemArray.map(worksItem => `<div class="col l-4" style="display: ${worksItem.show ? "block" : "none"}">
        <div class="works__item">
            <img src="${worksItem.imgUrl}" alt="works__item-${worksItem.id}">
            <div class="works__item__info">
                <span class="works__item__info__type">${worksItem.types}</span>
                <h4 class="works__item__info__text">${worksItem.title}</h4>
                <i class="${worksItem.iconClass} works__item__info__icon"></i>
            </div>
            <div class="works__item__mask"></div>
        </div>
    </div>`).toString().replaceAll(">,<","><")
    worksItemList.innerHTML = worksItemHtml
}
loadWorksItemList()


// Xử lý khi click type trong menu type list works
function clickWorksTypeItem(element) {
    worksTypeArray.forEach(worksType => {
        worksType.type === element.innerHTML ? worksType.active=true : worksType.active=false
    })
    loadWorksTypeList()
    const worksTypeActive = worksTypeArray.filter(worksType => worksType.active === true)
    worksItemArray.forEach(worksItem => {
        worksTypeActive[0].type === "Everything" ? worksItem.show = true : worksItem.types.indexOf(worksTypeActive[0].type) !==-1 ? worksItem.show=true : worksItem.show=false
    })
    loadWorksItemList()
}

// Hiển thị price-box list
const priceItemHtml = priceItemArray.map(priceItem => 
    `<div class="col l-4">
        <div class="price__item${priceItem.recommend ? " recommend" : ""}">
            <img src="${priceItem.imgUrl}" alt="price__item-${priceItem.id}">
            <h4 class="price__item__title">${priceItem.title}</h4>
            <p class="price__item__description">${priceItem.description}</p>
            <p class="price__item__support">${priceItem.support} support</p>
            <span class="price__item__price-box">
                <span class="price__item__price-unit">${priceItem.unit}</span>
                <span class="price__item__price-number">${priceItem.number}</span>
                <span class="price__item__price-time">${priceItem.time}</span>
            </span>
            <a href="#" class="btn btn--price">Get Started</a>
        </div>
    </div>`).toString().replaceAll(">,<","><")
priceItemList.innerHTML = priceItemHtml


//Hiển thị list slide-item trong testimonial 
function loadTestimonialItemList() {
    const testimonialItemHtml = testimonialItemArray.map(testimonialItem =>
        `<div class="testimonial__wrapper__slide-item">
            <img class="testimonial__avatar" src="${testimonialItem.imgUrl}" alt="testimonial__avatar-${testimonialItem.id}">
            <h4 class="testimonial__name">John Doe</h4>
            <span class="testimonial__subtitle">Product designer at Dribbble</span>
            <div class="testimonial__comment-box">
                <p class="testimonial__comment-text">I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 🔥</p>
            </div>
        </div>`).toString().replaceAll(">,<","><")
    testimonialItemList.style.width = `calc(700px * ${testimonialItemArray.length})`
    testimonialItemList.innerHTML = testimonialItemHtml
}
loadTestimonialItemList()


// Chạy slide testimonial
let index = 3
setInterval(() => {
    let indexNew
    do{
        indexNew = Math.floor(Math.random()*testimonialItemArray.length)
    }while(Math.abs(indexNew - index) > 2 || indexNew == index)
    index = indexNew    
    loadTestimonialItemList()
    testimonialItemList.style.transform = `translateX(calc(-700px * ${index}))`
},3000)


// Hiển thị list img trong testimonial client
const testimonialClientImgHtml = testimonialClientImgArray.map(testimonialClientImg =>
    `<div class="col l-3">
        <img class="testimonial__client__img" src="${testimonialClientImg.imgUrl}" alt="client-${testimonialClientImg.id}">
    </div>`).toString().replaceAll(">,<","><")
testimonialClientImgList.innerHTML = testimonialClientImgHtml


// Hiển thị list trong blog
const blogItemHtml = blogItemArray.map(blogItem =>
    `<div class="col l-4">
        <div class="blog-item blog-item--${blogItem.id}">
            <a href="#" class="blog-item__img-box">
                <img src="${blogItem.imgUrl}" alt="blog__img-${blogItem.id}" class="blog-item__img-img">
            </a>
            <div class="blog-item__container">
                <a href="#" class="blog-item__title">${blogItem.title}</a>
                <span class="blog-item__info">
                    <span class="blog-item__info__time">${blogItem.time}</span>
                    <span class="blog-item__info__author">${blogItem.author}</span>
                </span>
            </div>
        </div>
    </div>`).toString().replaceAll(">,<","><")
blogItemList.innerHTML = blogItemHtml 
blogItemArray.forEach(blogItem => {
    const blogItemElement = document.querySelector(`.blog-item--${blogItem.id}`)
    blogItemElement.style.setProperty("--data-content", `"${blogItem.tag}"`)
})


// Xử lý contact form
const btnContactForm = document.querySelector(".btn.btn--contact")
const inputContactFormArray = document.querySelectorAll(".contact__form__input")
btnContactForm.addEventListener("click", (e) => {
    e.preventDefault()
    validate()
})
inputContactFormArray.forEach(inputContactForm => {
    inputContactForm.addEventListener("blur", () => {
        setInterval(validate())
    })
})
function validate() {
    inputContactFormArray.forEach(inputContactForm => {
        const nameInputContactForm = inputContactForm.name
        const nameInputContactFormNew = nameInputContactForm.charAt(0).toUpperCase() + nameInputContactForm.slice(1)
        const showErr = inputContactForm.parentElement.querySelector(".contact__form__err")
        nameInputContactFormNew === "Email" 
        ? /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputContactForm.value) ? showErr.innerHTML="" : showErr.innerHTML=`${nameInputContactFormNew} is required.` 
        : !!inputContactForm.value.trim() == true ? showErr.innerHTML="" : showErr.innerHTML=`${nameInputContactFormNew} is required.`
    })
}



// Hiển thị các layer và Chuyển động các layer trong section home
const homeLayerHtml = homeLayerArray.forEach(homeLayer => {
    home.innerHTML += `${homeLayer.iconElement}`
})

setTimeout(() => {
    const homeLayerArr = Array.from(home.querySelectorAll(".layer"))
    homeLayerArr.map(homeLayer => {
        let x = Math.floor(Math.random() * home.offsetWidth)/50
        let y = Math.floor(Math.random() * home.offsetHeight)/50
        homeLayer.style.transform = `translate3d(${x}px,${y}px,0px)`
    })
})

setInterval(() => {
    const homeLayerArr = Array.from(home.querySelectorAll(".layer"))
    homeLayerArr.map(homeLayer => {
        let x = Math.floor(Math.random() * home.offsetWidth)/10
        let y = Math.floor(Math.random() * home.offsetHeight)/10
        homeLayer.style.transform = `translate3d(${x}px,${y}px,0px)`
    })
}, 3000)



     