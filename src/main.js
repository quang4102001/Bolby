const desktopHeaderNavArray = [
    {
        iconClass: "fa-solid fa-house", 
        title:"home",
        to:"#home",
        active:true
    },
    {
        iconClass: "fa-solid fa-address-card", 
        title:"about",
        to:"#about",
        active:false
    },
    {
        iconClass: "fa-solid fa-briefcase", 
        title:"services",
        to:"#services",
        active:false
    },
    {
        iconClass: "fa-solid fa-graduation-cap", 
        title:"experience",
        to:"#experience",
        active:false
    },
    {
        iconClass: "fa-solid fa-layer-group", 
        title:"works",
        to:"#works",
        active:false
    },
    {
        iconClass:"fa-solid fa-coins", 
        title:"price",
        to:"#price",
        active:false
    },
    {
        iconClass:"fa-solid fa-comment", 
        title:"testimonial",
        to:"#testimonial",
        active:false
    },
    {
        iconClass: "fa-solid fa-pen-to-square", 
        title:"blog",
        to:"#blog",
        active:false
    },
    {
        iconClass: "fa-solid fa-comments", 
        title:"contact",
        to:"#contact",
        active:false
    },
]
const homeDescriptionArray = ["Front-end Developer", "UI/UX designer", "Photography lover"]
const homeIconClassArray = ["fa-brands fa-instagram", "fa-brands fa-twitter", "fa-brands fa-behance", "fa-solid fa-basketball", "fa-brands fa-pinterest-p"]
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


// Hiển thị nút scroll to đầu trang
const btnScrollToTop = document.querySelector(".scroll-to-top")


//Hiển thị list nav header
const desktopHeaderNavListHtml  
= desktopHeaderNavArray.map(desktopHeaderNav => 
    `<li class="desktop-header__nav-item">
        <a href="${desktopHeaderNav.to}" class="nav-link header__nav__icon-${desktopHeaderNav.title}${desktopHeaderNav.active ? " active" : ""}">
            <i class="${desktopHeaderNav.iconClass}"></i>
            ${desktopHeaderNav.title}
        </a>
    </li>`).toString().replaceAll(">,<","><")
desktopHeaderNavList.innerHTML = desktopHeaderNavListHtml


//Cho home description chạy tự động
homeDescription.innerHTML = homeDescriptionArray[0]
setInterval(() => {
    homeDescription.innerHTML = homeDescriptionArray[Math.floor(Math.random()*homeDescriptionArray.length)]
}, 10000)


//Hiện thị list icon trong section home
const homeIconListHtml 
= homeIconClassArray.map(homeIconItem => `<li class="home__icon-item"><a href=""><i class="${homeIconItem}"></i></a></li>`).toString().replaceAll(",", "");
homeIconList.innerHTML = homeIconListHtml


// Hiển thị list skill trong sction about
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
let index = 0
setInterval(() => {
    let indexNew
    do{
        indexNew = Math.floor(Math.random()*testimonialItemArray.length)
    }while(Math.abs(indexNew - index) > 2)
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
    inputContactForm.addEventListener("focus", () => {
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