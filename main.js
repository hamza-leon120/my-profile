let ber = document.querySelector('.fa-solid.fa-bars')
let nav = document.querySelector("nav")
ber.addEventListener("click",function(){
    if(window.getComputedStyle(nav).height === "0px"){
        nav.style.cssText = "height: 415px;"
    }else {
        nav.style.cssText = "height: 0px;"
    }
})

let ul = document.querySelectorAll("ul li")
ul.forEach(function(ele){
    ele.addEventListener('click',function(){
        let section
        if(this.innerText.includes(" ")){
            section = document.querySelector(`.${this.innerText.replace(" ","-")}`)
        }else {
            section = document.querySelector(`.${this.innerText}`)
        }
        window.scrollTo({
            top: section.offsetTop ,
            behavior: "smooth"
        })
    })
})

let slide = document.querySelector(".slide")
let project = document.querySelectorAll(".slide .print")
let left = document.querySelector(".arrow.left")
let right = document.querySelector(".arrow.right")
let num = 0
right.addEventListener("click",function(){
    num++
    project.forEach(function(ele){
        if(num < project.length) {
            ele.style.cssText = `transform: translateX(-${parseInt(window.getComputedStyle(slide).width)* num}px);`
        }else {
            num = 0
            ele.style.cssText = "transform: translate(0px)"
        }
    })
})
left.addEventListener('click',function(){
    num--
    project.forEach(function(ele){
        if(num < 0) {
            ele.style.cssText = `transform: translateX(-${parseInt(window.getComputedStyle(slide).width) * (project.length - 1)}px);`
            num = project.length - 1
        }else {
            ele.style.cssText = `transform: translateX(-${parseInt(window.getComputedStyle(slide).width)* num}px);`
        }
        
        })
})

let linkedin = document.querySelector('.linkedin')
linkedin.addEventListener('click',function (){
    window.open("https://www.linkedin.com/in/hamza-aymen/")
})
let github = document.querySelector(".fa-brands.fa-github")
github.addEventListener("click",function(){
    window.open("https://github.com/hamza-leon120")
})
let email = document.querySelectorAll(".email")
email.forEach(function(ele){
    ele.addEventListener("click",function(){
        window.location.href = "mailto:haymen20@gmail.com";
    })
})
let instagram = document.querySelectorAll(".instagram")
instagram.forEach(function(ele){
    ele.addEventListener("click",function(){
        window.open("https://www.instagram.com/hmzdeveloper/")
    })
})

let up = document.querySelector(".up")
let header = document.querySelector("header")
let headerC = document.querySelector("header .container")
window.addEventListener("scroll",function(){
    if(window.getComputedStyle(nav).height !== "0px") {
        nav.style.cssText = "height: 0px;"
    }
    if(this.scrollY >= 1550) {
        header.style.cssText = "position: sticky; top: 0 ;height: 95px"
        headerC.style.cssText = "border-bottom: 4px solid #FFFFFF;"
    }else {
        header.style.cssText = "position: none;"
        headerC.style.cssText = "1px solid #43454D;"
    }
    if(this.scrollY > 300) {
        up.style.cssText = "position: fixed;"
    }else {
        up.style.cssText = "display: none;"
    }
})
up.addEventListener('click',function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
})

let ski = document.querySelectorAll(".ski").forEach(function(ele){
    ele.style.cssText = `grid-template-columns: repeat(${ele.children.length},1fr);`
})

let responsiveWebDesign = document.querySelector(".responsive-web-design ")
let JavaScript = document.querySelector(".JavaScript")

responsiveWebDesign.addEventListener("click",function(){
    window.open("https://www.freecodecamp.org/certification/fcc-c23ca8a6-df7b-4e4a-ae5c-ee37a748ed24/responsive-web-design-v9")
})

JavaScript.addEventListener("click",function(){
    window.open("https://www.freecodecamp.org/certification/fcc-c23ca8a6-df7b-4e4a-ae5c-ee37a748ed24/javascript-v9")
})