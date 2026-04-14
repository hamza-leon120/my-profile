const sections = document.querySelectorAll("section .container")
const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1
        }
    })
}, {
    threshold: 0.25
})
sections.forEach(function (section) {
    observer.observe(section)
})
const ber = document.querySelector('.fa-solid.fa-bars')
const nav = document.querySelector("nav")
ber.addEventListener("click", function () {
    if (window.getComputedStyle(nav).height === "0px") {
        nav.style.cssText = "height: 415px;"
    } else {
        nav.style.cssText = "height: 0px;"
    }
})
const ul = document.querySelectorAll("ul li")
ul.forEach(function (ele) {
    ele.addEventListener('click', function () {
        let section
        if (this.innerText.includes(" ")) {
            section = document.querySelector(`.${this.innerText.replace(" ", "-")}`)
        } else {
            section = document.querySelector(`.${this.innerText}`)
        }
        window.scrollTo({
            top: section.offsetTop,
            behavior: "smooth"
        })
    })
})
const slide = document.querySelector(".slide")
const project = document.querySelectorAll(".slide .print")
const left = document.querySelector(".arrow.left")
const right = document.querySelector(".arrow.right")
let num = 0
function toTheLeft() {
    num--
    project.forEach(function (ele) {
        if (num < 0) {
            ele.style.cssText = `transform: translateX(-${parseInt(window.getComputedStyle(slide).width) * (project.length - 1)}px);`
            num = project.length - 1
        } else {
            ele.style.cssText = `transform: translateX(-${parseInt(window.getComputedStyle(slide).width) * num}px);`
        }

    })
}
function toTheRight() {
    num++
    project.forEach(function (ele) {
        if (num < project.length) {
            ele.style.cssText = `transform: translateX(-${parseInt(window.getComputedStyle(slide).width) * num}px);`
        } else {
            num = 0
            ele.style.cssText = "transform: translate(0px)"
        }
    })
}
let autoSlide = setInterval(toTheRight, 4000)
right.addEventListener("click", function () {
    clearInterval(autoSlide)
    toTheRight()
    autoSlide = setInterval(toTheRight, 4000)
})
left.addEventListener('click', function () {
    clearInterval(autoSlide)
    toTheLeft()
    autoSlide = setInterval(toTheRight, 4000)
})
const projectImg = document.querySelectorAll(".project-img")
projectImg.forEach(function (img) {
    img.addEventListener("click", function () {
        clearInterval(autoSlide)
        document.body.style.overflow = "hidden"
        const showImg = document.createElement("div")
        showImg.className = "show-img"
        const imgEl = document.createElement("img")
        imgEl.setAttribute("src", this.getAttribute("src"))
        showImg.appendChild(imgEl)
        document.body.appendChild(showImg)
        showImg.style.top = `${window.scrollY}px`
        const x = document.createElement("i")
        x.setAttribute("class", "fa-solid fa-x")
        showImg.appendChild(x)
        showImg.addEventListener("click", function (ev) {
            if (ev.target !== imgEl) {
                showImg.remove()
                autoSlide = setInterval(toTheRight, 4000)
                document.body.style.overflow = ""
            }
        })
    })
})
const linkedin = document.querySelectorAll('.linkedin')
linkedin.forEach(function (ele) {
    ele.addEventListener('click', function () {
        window.open("https://www.linkedin.com/in/hamza-aymen/")
    })
})
const github = document.querySelector(".fa-brands.fa-github")
github.addEventListener("click", function () {
    window.open("https://github.com/hamza-leon120")
})
const email = document.querySelectorAll(".email")
email.forEach(function (ele) {
    ele.addEventListener("click", function () {
        window.location.href = "mailto:haymen20@gmail.com";
    })
})
let instagram = document.querySelectorAll(".instagram")
instagram.forEach(function (ele) {
    ele.addEventListener("click", function () {
        window.open("https://www.instagram.com/hmzdeveloper/")
    })
})
const up = document.querySelector(".up")
const header = document.querySelector("header")
const headerC = document.querySelector("header .container")
up.addEventListener('click', function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
})
const ski = document.querySelectorAll(".ski")
ski.forEach(function (ele) {
    ele.style.cssText = `grid-template-columns: repeat(${ele.children.length},1fr);`
})
const responsiveWebDesign = document.querySelector(".responsive-web-design ")
const JavaScript = document.querySelector(".JavaScript")
responsiveWebDesign.addEventListener("click", function () {
    window.open("https://www.freecodecamp.org/certification/fcc-c23ca8a6-df7b-4e4a-ae5c-ee37a748ed24/responsive-web-design-v9")
})

JavaScript.addEventListener("click", function () {
    window.open("https://www.freecodecamp.org/certification/fcc-c23ca8a6-df7b-4e4a-ae5c-ee37a748ed24/javascript-v9")
})
const percentageEle = document.querySelector(".percentage")
const percentagepara = document.querySelector(".percentage div p")
window.addEventListener("scroll", function () {
    if (window.getComputedStyle(nav).height !== "0px") {
        nav.style.cssText = "height: 0px;"
    }
    if (this.scrollY >= 1550) {
        header.style.cssText = "position: sticky; top: 0 ;height: 95px"
        headerC.style.cssText = "border-bottom: 4px solid #FFFFFF;"
    } else {
        header.style.cssText = "position: none;"
        headerC.style.cssText = "1px solid #43454D;"
    }
    if (this.scrollY > 300) {
        up.style.opacity = 1
        percentageEle.style.opacity = 1
    } else {
        up.style.opacity = 0
        percentageEle.style.opacity = 0
    }
    const pageHeight = document.body.offsetHeight - window.innerHeight
    let percentage = (this.scrollY * 100) / pageHeight
    percentagepara.textContent = `${percentage.toFixed(0)}%`
    if (percentage >= 99) {
        percentageEle.style.background = `conic-gradient(#F9D783 100%, white 100%)`
    } else {
        percentageEle.style.background = `conic-gradient(#12F7D6 ${percentage}%, white ${percentage}%)`
    }
})