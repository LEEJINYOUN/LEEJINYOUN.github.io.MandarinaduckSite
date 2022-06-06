const threeBar = document.querySelector('.threebar');
const xBar = document.querySelector('.xbar');

const sideBar = document.querySelector('.side_bar');
const sideBarAddMan = document.querySelector('.side_bar_add_man');
const sideBarAddLadies = document.querySelector('.side_bar_add_ladies');

const man = document.querySelector('.man');
const ladies = document.querySelector('.ladies');
const acc = document.querySelector('.acc');
const newArrival = document.querySelector('.newArrival');
const seasonOff = document.querySelector('.seasonOff');


function SideBarZero(){
    sideBar.style.transform = `translateX(${0}px)`;
}
function SideBarMove(){
    sideBar.style.transform = `translateX(${-400}px)`;
}

function ManZero(){
    sideBarAddMan.style.transform = `translateX(${0}px)`;
}
function ManMove(){
    sideBarAddMan.style.transform = `translateX(${-800}px)`;
}

function LadiesZero(){
    sideBarAddLadies.style.transform = `translateX(${0}px)`;
}
function LadiesMove(){
    sideBarAddLadies.style.transform = `translateX(${-800}px)`
}


threeBar.addEventListener('click', SideBarZero)
xBar.addEventListener('click', function(){
    SideBarMove()
    ManMove()
})

man.addEventListener('mouseover', function(){
    ManZero()
    LadiesMove()
})

ladies.addEventListener('mouseover', function(){
    ManMove()
    LadiesZero()
})

acc.addEventListener('mouseover', function(){
    ManMove()
    LadiesMove()
})

newArrival.addEventListener('mouseover', function(){
    ManMove()
    LadiesMove()
})

seasonOff.addEventListener('mouseover', function(){
    ManMove()
    LadiesMove()
})