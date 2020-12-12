window.addEventListener('DOMContentLoaded', ()=>{
  const sectionOne = document.querySelector('.networking__text');
  const sliders = document.querySelectorAll('.slide-in');
  console.log('sectionOne', sectionOne)

  const options = {
    root: null, //null is defualt setting (is the viewport)
    threshold: ".25", // 0 is default (0-1) (amount of item that must be on page to fire)
    margin: "0" // 0 is default (margin on viewport if root is null)(pixels or percentages)
  }

  const observer =
    new IntersectionObserver(function
      (entries, observer) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.toggle("scroll-from-left")
          console.log(entry)
          observer.unobserve(entry.target);
        }
  
      });
 
}, options);

  observer.observe(sectionOne)



  const faders = document.querySelectorAll('.fade-in');

  const appearOptions = {
    threshold: 0,
    rootMargin: "300px",
  }

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

   sliders.forEach(slider => {
     appearOnScroll.observe(slider);
   })

   
 


})





