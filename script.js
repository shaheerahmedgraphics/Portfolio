// ======================for auto type========================//


const text = document.querySelector(".soc-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Creator";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Designer";
    }, 8000); //1s = 1000 milliseconds
}

textLoad();
setInterval(textLoad, 12000);

const socText = document.querySelector(".sec-text");

const socTextLoad = () => {
  setTimeout(() => {
    socText.textContent = "Developer";
  }, 0);
  setTimeout(() => {
    socText.textContent = "Designer";
  }, 4000);
  setTimeout(() => {
    socText.textContent = "Creator";
  }, 8000); //1s = 1000 milliseconds
}

socTextLoad();
setInterval(socTextLoad, 12000);

// ======================for auto type========================//

//=====================active links===========================//
  // Get the navbar links and sections
  const navbarLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');
  
  // Add an event listener to the window to detect scroll position
  window.addEventListener('scroll', () => {
    // Get the current scroll position
    const scrollPosition = window.scrollY;
  
    // Loop through the sections and check if they are in view
    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
  
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        // Add the active class to the corresponding navbar link
        navbarLinks[index].classList.add('active');
      } else {
        navbarLinks[index].classList.remove('active');
      }
    });
  });
