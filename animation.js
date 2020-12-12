window.addEventListener('DOMContentLoaded', ()=>{
  // const sectionOne = document.querySelector('.networking__text'); 

  // const options = {
  //   root: null, //null is defualt setting (is the viewport)
  //   threshold: ".25", // 0 is default (0-1) (amount of item that must be on page to fire)
  //   margin: "0" // 0 is default (margin on viewport if root is null)(pixels or percentages)
  // }

//   const observer =
//     new IntersectionObserver(function
//       (entries, observer) {
//       entries.forEach(entry => {
//         if (!entry.isIntersecting) {
//           return;
//         } else {
//           entry.target.classList.toggle("scroll-from-left")
//           console.log(entry)
//           observer.unobserve(entry.target);
//         }
  
//       });
 
// }, options);

//   observer.observe(sectionOne)


// ---------slide-in-----------------
  const sliders = document.querySelectorAll('.slide-in');
 

  const slideOptions = {
    threshold: .0,
    rootMargin: "300px",
  }

   const slideOnScroll = new IntersectionObserver
   (function(
     entries,
     slideOnScroll
   ){
     entries.forEach(entry => {
       if (!entry.isIntersecting){
         return
       } else {
         entry.target.classList.add('appear');
         slideOnScroll.unobserve(entry.target);
       }
     })
   },
   slideOptions);

   sliders.forEach(slider => {
     slideOnScroll.observe(slider);
   })
// --------fade-in------------------------------
  const appearOptions = {
    threshold: .5,
    rootMargin: "300px",
  }

const faders = document.querySelectorAll('.fade-in');

   const appearOnScroll = new IntersectionObserver
   (function(
     entries,
     appearOnScroll
   ){
     entries.forEach(entry => {
       if (!entry.isIntersecting){
         return
       } else {
         entry.target.classList.add('appear');
         appearOnScroll.unobserve(entry.target);
       }
     })
   },
   appearOptions);

   faders.forEach(fader => {
     appearOnScroll.observe(fader)
   })
 


})





