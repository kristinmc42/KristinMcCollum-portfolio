
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