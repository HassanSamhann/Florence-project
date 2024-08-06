let dressing = document.querySelector("ul .dressing") ; 
let all = document.querySelector("ul .all")
let kitchen = document.querySelector("ul .kitchen") ; 
let showKit = document.getElementById("kitchen"); 
let showall = document.getElementById("all"); 
let showdressing = document.getElementById("dressing");  
let filter = document.querySelectorAll("ul li")
console.log(filter)
kitchen.addEventListener("click",()=>{
    showKit.style.display= "flex" ; 
    showall.style.display= "none"
    showdressing.style.display= "none"

})
all.addEventListener("click",()=>{
    showKit.style.display= "none" ; 
    showall.style.display= "flex"
    showdressing.style.display= "none"

}) 
dressing.addEventListener("click",()=>{
    showKit.style.display= "none" ; 
    showall.style.display= "none"
    showdressing.style.display= "flex"

}) 

filter.forEach((li)=>{

    li.addEventListener("click",()=>{
        filter.forEach(btn=> btn.classList.remove("active"))
        li.classList.add("active")  
 

    })

})