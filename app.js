const app = {};



// function will listen for scroll for both showing the scroll to top button, for animating the intro image, as well as hiding the hamburger nav
app.listenForScroll = () => {
  // get scroll to top button
  const scrollButton = document.getElementById("scrollButton");

  // get root of document
  const rootElement = document.documentElement;

  // get animation container
  const animationContainerDiv = document.querySelector(".animationContainer");

  // get hamburger nav and hamburger button
  const navEl = document.getElementById("hamburgerNav");
  const hamburgerButton = document.getElementById("hamburgerButton");
  
  
  // add event listener for scroll
  document.addEventListener("scroll", () => {
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  
    // conditions for animating image
    if ((rootElement.scrollTop / scrollTotal) > 0.04){
      animationContainerDiv.classList.add("scrollActivate");
    }else {
      animationContainerDiv.classList.remove("scrollActivate");
    }

    // conditions for hiding hamburger menu and showing hamburger button
    if ((rootElement.scrollTop / scrollTotal) > 0.1){
      navEl.style.display = "none";
      hamburgerButton.style.display = "flex";
    }

    // conditions for scroll to top button
    if ((rootElement.scrollTop / scrollTotal) > 0.15){
      // show scroll to top button
      scrollButton.classList.add("showButton");
    }else {
      // hide scroll to top button
      scrollButton.classList.remove("showButton");
    }
  })
}

// form submit
app.formSubmit = () => {
  // form submitted via formspree.io
  // clear form on submit
  
  // get form element
  const formEl = document.getElementById("commentForm");
  
  //on page reload, clear the form
  window.onload = () => {
    formEl.reset();
  }
}


// function will listen for button click events to show or hide the hamburger menue, as well as the button to scroll to top of page
app.listenForClickEvents = () => {
  
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

      if (width < 482 && hamburgerButton.style.display === "none"){
        navEl.style.display = "block";
      } else {
        navEl.style.display = "none";
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
  app.listenForScroll();
  app.formSubmit();
  app.listenForClickEvents();
  app.listenForDarkModeToggle();
  app.listenForKeyActivatedHamburger();
  app.hideHamburgerNavOnWindowResize();
}

app.init();