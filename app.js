const app = {};



// scroll to top feature
app.listenForScroll = () => {
  // get button
  const scrollButton = document.getElementById("scrollButton");

  // get root of document
  const rootElement = document.documentElement;
  
  // add event listener for button click
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
  
    if ((rootElement.scrollTop / scrollTotal) > 0.15){
      // show button
      scrollButton.classList.add("showButton");
    }else {
      // hide button
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
  
  //add event listener
  buttonEl.addEventListener('click', function(event){
   // check that the icon was clicked
    if (event.target.tagName === "I"){
      // if the icon is the bars(hamburger), show the nav
      // if the icon is the times, hide the nav
      if (event.target.className === 'fas fa-bars'){
        navEl.style.display = 'block';
      }else {
        navEl.style.display = 'none';
      }
      event.target.classList.toggle('fa-bars');
      event.target.classList.toggle('fa-times');
    }
    
    // if user exxpands window while hamburger menu still open
    window.onresize = () => {
      // get window width
      const width = window.innerWidth;

      if (width > 408){
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

// listen for toggle from light to dark mode
app.listenForDarkModeToggle = () => {
  const toggle = document.getElementById("checkbox");
  console.log(toggle)
  toggle.addEventListener("change", () => {
    console.log("toggled")
    document.body.classList.toggle("darkMode");
  })
}



app.init = () => {
  app.listenForScroll();
  app.formSubmit();
  app.showHamburgerMenu();
  app.listenForDarkModeToggle();
}

app.init();