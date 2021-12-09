// scroll to top feature
// get button
const scrollButton = document.getElementById("scrollButton");

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

  if ((rootElement.scrollTop / scrollTotal) > 0.20){
    // show button
    scrollButton.classList.add("showButton");
  }else {
    // hide button
    scrollButton.classList.remove("showButton");
  }
})

// FORM SUBMIT
// form submitted via formspree.io
// clear form on submit

// get form element
const formEl = document.getElementById("commentForm");


//on page reload, clear the form
window.onload = () => {
  formEl.reset();
}


// HAMBURGER MENU
// when user clicks on hamburger menu icon, show hidden menu
// when user clicks on x hide menu

//add event listener
const listenForHamburgerMenuButton = () => {
  const navEl = document.getElementById("hamburger");
  const buttonEl = document.getElementById("hamburgerButton");

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
  })
}
listenForHamburgerMenuButton();