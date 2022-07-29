const threeBar = document.querySelector(".threebar");
const xBar = document.querySelector(".xbar");

const sideBar = document.querySelector(".side_bar");
const sideBarAddMan = document.querySelector(".side_bar_add_man");
const sideBarAddLadies = document.querySelector(".side_bar_add_ladies");

const man = document.querySelector(".man");
const ladies = document.querySelector(".ladies");
const acc = document.querySelector(".acc");
const newArrival = document.querySelector(".newArrival");
const seasonOff = document.querySelector(".seasonOff");

function SideBarZero() {
  sideBar.style.transform = `translateX(${0}px)`;
}
function SideBarMove() {
  sideBar.style.transform = `translateX(${-400}px)`;
}

function ManZero() {
  sideBarAddMan.style.transform = `translateX(${0}px)`;
  sideBarAddMan.style.opacity = 1;
}
function ManMove() {
  sideBarAddMan.style.transform = `translateX(${-800}px)`;
  sideBarAddMan.style.opacity = 0.5;
}

function LadiesZero() {
  sideBarAddLadies.style.transform = `translateX(${0}px)`;
  sideBarAddLadies.style.opacity = 1;
}
function LadiesMove() {
  sideBarAddLadies.style.transform = `translateX(${-800}px)`;
  sideBarAddLadies.style.opacity = 0.5;
}

threeBar.addEventListener("click", SideBarZero);
xBar.addEventListener("click", function () {
  SideBarMove();
  ManMove();
  sideBarAddMan.style.transition = "0.3s";
  LadiesMove();
  sideBarAddLadies.style.transition = "0.3s";
});

man.addEventListener("mouseover", function () {
  ManZero();
  sideBarAddMan.style.transition = "0.7s";
  LadiesMove();
  sideBarAddLadies.style.transition = "0.7s";
});

ladies.addEventListener("mouseover", function () {
  ManMove();
  sideBarAddMan.style.transition = "0.7s";
  LadiesZero();
  sideBarAddLadies.style.transition = "0.7s";
});

acc.addEventListener("mouseover", function () {
  ManMove();
  sideBarAddMan.style.transition = "0.7s";
  LadiesMove();
  sideBarAddLadies.style.transition = "0.7s";
});

newArrival.addEventListener("mouseover", function () {
  ManMove();
  sideBarAddMan.style.transition = "0.7s";
  LadiesMove();
  sideBarAddLadies.style.transition = "0.7s";
});

seasonOff.addEventListener("mouseover", function () {
  ManMove();
  sideBarAddMan.style.transition = "0.7s";
  LadiesMove();
  sideBarAddLadies.style.transition = "0.7s";
});
