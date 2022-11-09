const app = {};

// typed.js initialization for typing effect in intro
app.typing = () => {
  const typed = new Typed('#typed', {
    stringsElement: '#typedStrings',
    typeSpeed: 80,
    smartBackspace: true,
    // backDelay: 20,
    showCursor: false,
    backSpeed: 80,
  });
}

// function will listen for scroll for both showing the scroll to top button and for animating the intro image
app.listenForScroll = () => {
  // get scroll to top button
  const scrollButton = document.getElementById("scrollButton");

  // get root of document
  const rootElement = document.documentElement;

  // get animation container
  const animationContainerDiv = document.querySelector(".animationContainer");
  
  // add event listener for scroll
  document.addEventListener("scroll", () => {
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  
    // conditions for animating image
     {
       (rootElement.scrollTop / scrollTotal) > 0.02

      ? animationContainerDiv.classList.add("scrollActivate")
    
      : animationContainerDiv.classList.remove("scrollActivate")
    }


    // conditions for scroll to top button
    {
      (rootElement.scrollTop / scrollTotal) > 0.15
      // show scroll to top button
      ? scrollButton.classList.add("showButton")
    
      // hide scroll to top button
      :scrollButton.classList.remove("showButton")
    }
  })
}

app.slideImages = () => {
  // decreases number of times function is called on scroll
  const debounce = (func, wait = 20, immediate = true) => {
    let timeout;
     return function() {
        let context = this, args = arguments;
        let later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
  };
  
  // get image containers that will slide in
  const sliderImages = document.querySelectorAll(".slideIn");

  const checkslide = () => {
  
    sliderImages.forEach(sliderImage => {
      // half way through the image
      const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.offsetHeight / 2;

      // bottom of the image
      const imageBottom = sliderImage.offsetTop + sliderImage.offsetHeight;
      
      const isHalfShown = slideInAt > sliderImage.offsetTop;
      
      const isNotScrolledPast = window.scrollY < imageBottom;
      
      // condition to add or remove class 
      
       if( isHalfShown && isNotScrolledPast){
         sliderImage.classList.add("active")
       }else {
         sliderImage.classList.remove("active")
       }
      
    })

  }
  
  window.addEventListener("scroll", debounce(checkslide));
  

}

app.closeHamburgerMenuOnLiClick = () => {
  // when user moves away form hamburger menu it closes
  // get hamburger nav, lis and hamburger button
  const navEl = document.getElementById("hamburgerNav");
  const hamburgerButton = document.getElementById("hamburgerButton");
  const hamLis = document.querySelectorAll(".hamburger li");

  hamLis.forEach((listItem) => {
    listItem.addEventListener("click", () => {
      navEl.style.display = "none";
      hamburgerButton.style.display = "flex";
    })
  })

}


// clear form on submit
// form submitted via formspree.io
app.formSubmit = () => {
  // get form element
  const formEl = document.getElementById("commentForm");
  
  //on page reload, clear the form
  window.onload = () => {
    formEl.reset();
  }
}


// function will listen for button click events to show or hide the hamburger menue, as well as the button to scroll to top of page
app.listenForButtonClickEvents = () => {
  // get hamburger nav
  const navEl = document.getElementById("hamburgerNav");

  // get all button elements
  const buttonEls = document.querySelectorAll("button");

  // get hamburger button
  const hamburgerButton = document.getElementById("hamburgerButton");

  // get root of document
  const rootElement = document.documentElement;
  
  //add event listener to all buttons
  buttonEls.forEach((button) => {
    button.addEventListener("click", function(event){
    
        if (event.target.className === "fas fa-bars"){
          // if the hamburger button is clicked, show the nav and hide the hamburger button
          navEl.style.display = "block";
          hamburgerButton.style.display = "none";
        }else if (event.target.className === "fas fa-times") {
          // if the close button is clicked, hide the nav and show the hamburger button
          navEl.style.display = "none";
          hamburgerButton.style.display = "flex";
        }else if (event.target.className === "scroll"){
          // if the scroll button is clicked, go to top of page
          rootElement.scrollTo({
            top: 0,
            behavior: "smooth"
          })
        }
    })
  })
}

app.hideHamburgerNavOnWindowResize = () => {
  // close hamburger menu if user expands window while hamburger menu still open
  const navEl = document.getElementById("hamburgerNav");

  const hamburgerButton = document.getElementById("hamburgerButton");

    window.onresize = () => {
      // get window width
      const width = window.innerWidth;

      if (width > 482){
        hamburgerButton.style.display = "none";
      }else {
        hamburgerButton.style.display = "flex";
      }
    }
    
}


// event listener for keyboard press to open and close hamburger button
app.listenForKeyActivatedHamburger = () => {
  // get hamburger nav
  const navEl = document.getElementById("hamburgerNav");

  // get hamburger button
  const hamburgerButton = document.getElementById("hamburgerButton");
  
  // listen for any key press
  document.addEventListener("keyup", (event) =>{
    // check if it was the space bar or enter that was pressed
    if (event.keyCode === 13 || event.keyCode === 32) {
      // check that the hamburger icon was the target when the key press happened
      if (event.target.classList.contains("hamburger")){
        
        if (event.target.children[0].className === "fas fa-bars"){
          // if the icon is the bars(hamburger), show the nav and hide hamburger button
          navEl.style.display = "block";
          hamburgerButton.style.display  = "none";
        }else {
          // hide the hamburger nav and show hamburger button
          navEl.style.display = "none";
          hamburgerButton.style.display = "flex";
        }
      }
    }
  })
  
}

// listen for toggle from light to dark mode
app.listenForDarkModeToggle = () => {
  const toggle = document.getElementById("checkbox");
  
  toggle.addEventListener("change", () => {
   
    document.body.classList.toggle("darkMode");
  })
}



app.init = () => {
  app.typing();
  app.listenForScroll();
  app.slideImages();
  app.formSubmit();
  app.listenForButtonClickEvents();
  app.listenForDarkModeToggle();
  app.listenForKeyActivatedHamburger();
  app.hideHamburgerNavOnWindowResize();
  app.closeHamburgerMenuOnLiClick ();
}

app.init();