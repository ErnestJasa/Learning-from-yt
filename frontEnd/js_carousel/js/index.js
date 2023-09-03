const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const track = document.querySelector(".track");
const card = document.querySelector(".card");

const carouselWidth = document.querySelector(".carousel-container").offsetWidth;

next.addEventListener("click", () => {
  track.style.transform = `translateX(-${259}px)`;
});
prev.addEventListener("click", () => {
  track.style.transform = `translateX(${0}px)`;
});

//// for mobile swiping
/// not working well

// let moving = false;
// let mouseLastPosition = 0;
// let transform = 0;
// let lastPageX = 0;
// let transformValue = 0;
// window.addEventListener("mousedown", (e) => {
//   moving = true;
//   mouseLastPosition = e.pageX;
//   transform =
//     window.getComputedStyle(track).getPropertyValue("transform") !== "none"
//       ? window
//           .getComputedStyle(track)
//           .getPropertyValue("transform")
//           .split(",")[4]
//           .trim()
//       : 0;
// });

// window.addEventListener("mousemove", (e) => {
//   if (moving) {
//     const diffX = e.pageX - mouseLastPosition;
//     if (e.pageX - lastPageX > 0) {
//       if (transformValue > 0) {
//         return;
//       }
//     } else {
//       if (Math.abs(transformValue) > track.offsetWidth - 440) {
//         return;
//       }
//     }
//     transformValue = parseInt(transform) + diffX;
//     track.style.transform = `translateX(${transformValue}px)`;
//   }
//   lastPageX = e.pageX;
// });

// window.addEventListener("mouseup", () => {
//   moving = false;
// });
