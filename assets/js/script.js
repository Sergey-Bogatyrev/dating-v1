"use strict";

/* window.addEventListener("resize", changeFontSize); */

/* function changeFontSize() {
  const containerWidth1 = document.querySelector(".container").clientWidth;
  const font1Size = (58 * containerWidth1) / 1292 + "px";
  const getWho = document.querySelector(".get__who");
  getWho.style.fontSize = font1Size;
  console.log(containerWidth1);
  console.log(font1Size);
} */

const chin = document.querySelector(".chin");
const chinUse = document.querySelector(".chin-use");
chin.addEventListener("mouseenter", addHoverChin);
function addHoverChin() {
  chin.classList.add("hover");
  chinUse.classList.add("hover");
}
chin.addEventListener("mouseleave", removeHoverChin);
function removeHoverChin() {
  chin.classList.remove("hover");
  chinUse.classList.remove("hover");
}

const ringstone = document.querySelector(".ringstone");
const ringstoneUse = document.querySelector(".ringstone-use");
ringstone.addEventListener("mouseenter", addHoverRingstone);
function addHoverRingstone() {
  ringstone.classList.add("hover");
  ringstoneUse.classList.add("hover");
}
ringstone.addEventListener("mouseleave", removeHoverRingstone);
function removeHoverRingstone() {
  ringstone.classList.remove("hover");
  ringstoneUse.classList.remove("hover");
}

const thumbup = document.querySelector(".thumbup");
const thumbupUse = document.querySelector(".thumbup-use");
thumbup.addEventListener("mouseenter", addHoverThumbup);
function addHoverThumbup() {
  thumbup.classList.add("hover");
  thumbupUse.classList.add("hover");
}
thumbup.addEventListener("mouseleave", removeHoverThumbup);
function removeHoverThumbup() {
  thumbup.classList.remove("hover");
  thumbupUse.classList.remove("hover");
}

const heart = document.querySelector(".heart");
const heartUse = document.querySelector(".heart-use");
heart.addEventListener("mouseenter", addHoverHeart);
function addHoverHeart() {
  heart.classList.add("hover");
  heartUse.classList.add("hover");
}
heart.addEventListener("mouseleave", removeHoverHeart);
function removeHoverHeart() {
  heart.classList.remove("hover");
  heartUse.classList.remove("hover");
}

const calendar = document.querySelector(".calendar");
const calendarUse = document.querySelector(".calendar-use");
calendar.addEventListener("mouseenter", addHoverCalendar);
function addHoverCalendar() {
  calendar.classList.add("hover");
  calendarUse.classList.add("hover");
}
calendar.addEventListener("mouseleave", removeHoverCalendar);
function removeHoverCalendar() {
  calendar.classList.remove("hover");
  calendarUse.classList.remove("hover");
}

let bur = document.querySelector(".burger");
let nm = document.querySelector(".nav-mob");
let bd = document.querySelector("body");

bur.addEventListener("click", activateBurger);
function activateBurger() {
  bur.classList.toggle("burgerChange");
  nm.classList.toggle("active");
  bd.classList.toggle("active");
}
