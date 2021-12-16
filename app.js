const app = {};



// function will listen for scroll for both showing the scroll to top button, for animating the intro image, as well as hidinh the hamburger nav
app.listenForScroll = () => {
  // get scroll to top button
  const scrollButton = document.getElementById("scrollButton");

  // get root of document
  const rootElement = document.documentElement;

  // get animation container
  const animationContainerDiv = document.querySelector(".animationContainer");

  // get hamburger nav and hamburger button
  const navEl = document.getElementById("hamburgerNav");
  const buttonEl = document.getElementById("hamburgerButton"); 
  
  // add event listener for to top button click
  scrollButton.addEventListener("click", () => {
    // function for scrolling to top
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  })
  
  // add event listener for scroll
  document.addEventListener("scroll", () => {
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  
    // conditions for animating image
    if ((rootElement.scrollTop / scrollTotal) > 0.04){
      animationContainerDiv.classList.add("scrollActivate");
    }else {
      animationContainerDiv.classList.remove("scrollActivate");
    }

    // conditions for hiding hamburger menu
    if ((rootElement.scrollTop / scrollTotal) > 0.1){
      console.log("nav el is blurred")
      navEl.style.display = "none";
      console.log(buttonEl.children[0].className)
      if (buttonEl.children[0].className === "fas fa-times"){
        buttonEl.children[0].classList.toggle("fa-times");
        buttonEl.children[0].classList.toggle("fa-bars");
      }
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


// hamburger menu
app.showHamburgerMenu = () => {
  // when user clicks on hamburger menu icon, show hidden menu
  // when user clicks on x hide menu
  // get hamburger nav and button
  const navEl = document.getElementById("hamburgerNav");
  const buttonEl = document.getElementById("hamburgerButton");
  // const hamburgerUL = document.getElementById("hamburgerUL");
  
  //add event listener
  buttonEl.addEventListener("click", function(event){
   // check that the icon was clicked
    if (event.target.tagName === "I"){
      if (event.target.className === "fas fa-bars"){
        // if the icon is the bars(hamburger), show the nav
        navEl.style.display = "block";
      }else {
        // if the icon is the times, hide the nav
        navEl.style.display = "none";
      }
      event.target.classList.toggle("fa-bars");
      event.target.classList.toggle("fa-times");
    }
    
    // if user exxpands window while hamburger menu still open
    window.onresize = () => {
      // get window width
      const width = window.innerWidth;

      if (width > 482){
        navEl.style.display = 'none';
      } else {
        if (event.target.className === 'fas fa-bars'){
          navEl.style.display = 'none';
        } else {
          navEl.style.display = 'block';
        }
      }
    }
  })
}


// event listener for keyboard press of hamburger button
app.listenForTabActivateHamburger = () => {
  const buttonEl = document.getElementById("hamburgerButton");

  const navEl = document.getElementById("hamburgerNav");
  
  buttonEl.addEventListener("focus", (event) => {
  
      console.log("button focussed", event)

      document.addEventListener("keyup", (event) =>{
        console.log("key pressed", event)
     
        if (event.keyCode === 13 || event.keyCode === 32) {
          console.log('space bar or enter pressed')
          
          // check that the hamburger icon was clicked
          if (event.target.className === "hamburger"){
            console.log(event.target.children[0].className)
            if (event.target.children[0].className === "fas fa-bars"){
              // if the icon is the bars(hamburger), show the nav
              navEl.style.display = "block";
              console.log("nav is showing")
            }else {
              // if the icon is the times, hide the nav
              navEl.style.display = "none";
              console.log("nav is hidden")
            }
            event.target.children[0].classList.toggle("fa-bars");
            event.target.children[0].classList.toggle("fa-times");
          }
        }
      })
  })
}

// listen for toggle from light to dark mode
app.listenForDarkModeToggle = () => {
  const toggle = document.getElementById("checkbox");
  // console.log(toggle)
  toggle.addEventListener("change", () => {
    // console.log("toggled")
    document.body.classList.toggle("darkMode");
  })
}



app.init = () => {
  app.listenForScroll();
  app.formSubmit();
  app.showHamburgerMenu();
  app.listenForDarkModeToggle();
  app.listenForTabActivateHamburger();
}

app.init();