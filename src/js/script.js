console.log('Hello, World!');

const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


//gsap

let tl = gsap.timeline();

tl.to('.logo',{
  scrollTrigger: {
    trigger: '.logo',
    scrub: 1,
    start: 'top 25%',
    end: 'bottom 25%',
    scrub: true,
    // markers: true,
  },
  scale: 10,
})

tl.to('.logo',{
  scrollTrigger: {
    trigger: '.logo',
    scrub: 1,
    start: 'top 10%',
    end: '50% 8%',
    scrub: true,
    // markers: true,
  },
  opacity: 0,
})


tl.to('.frame .frameImg',{
  scrollTrigger: {
    trigger: '.frame .frameImg',
    scrub: 1,
    start: 'top 30%',
    end: 'bottom 30%',
    scrub: true,
    // markers: true,
  },
  scale: 1.5,
  opacity: 0,
})

tl.to('.second .frameImg',{
  scrollTrigger: {
    trigger: '.second .frameImg',
    scrub: 1,
    start: 'top 50%',
    end: '30% 50%',
    scrub: true,
    markers: true,
  },
  scale: 1.5,
  opacity: 1,
})

let counter = 0;
window.onload = function() {
  gsap.to('.percentImg',{
    right: '80%',
    duration: 7,
  })

  const interval = setInterval(() => {
    if (counter > 100) {
      clearInterval(interval);
    } else {
      document.querySelector('.count').textContent = `${counter}%`;
      counter++;
    }
  }, 50)

  setTimeout(function() {
      var overlay = document.querySelector('.overlay');
      overlay.style.display = 'none';


  }, 5500); // 5000 milliseconds = 5 seconds
}

