const nav = document.querySelector(".list_container")
const openn = document.querySelector(".open")
const close = document.querySelector(".close")
const blur = document.querySelector(".blur")

openn.addEventListener('click', ()=>{ openMenu(nav, openn, close, blur) })
close.addEventListener('click', ()=>{ closeMenu(nav, openn, close, blur) })

function openMenu(nav, openIcon, closeIcon, blur){
    nav.classList.add("opened")
    openIcon.classList.add("hide")
    closeIcon.classList.add("show")
    blur.classList.add("show")
    document.querySelector("body").style.overflow="hidden"
}

function closeMenu(nav, openIcon, closeIcon, blur){
    nav.classList.remove("opened")
    openIcon.classList.remove("hide")
    closeIcon.classList.remove("show")
    blur.classList.remove("show")
    document.querySelector("body").style.overflow="unset"
}