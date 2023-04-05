// Get references to the HTML elements
const progress = document.querySelector("#progress");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const circles = document.querySelectorAll(".circle");

// Initialize the active step to 1
let activeStep = 1;

// Add a click event listener to the next button
next.addEventListener("click", () => {
  // Go the the next step
  activeStep++;

  // Set the last active step to the total number of steps
  if (activeStep > circles.length) {
    activeStep = circles.length;
  }

  // Update the progress tracker
  update();
});

// Add a click event listener to the previous button
prev.addEventListener("click", () => {
  // Go to the previous step
  activeStep--;

  // Set the first active step to 1
  if (activeStep < 1) {
    activeStep = 1;
  }

  // Update the progress tracker
  update();
});

// Update function to update the progress tracker based on the active step
function update() {
  // For each step, add the "active" class if index is less than or equal to the active step
  // Else, remove the "active class"
  circles.forEach((circle, index) => {
    if (index < activeStep) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  //   Get all the active steps
  const activeSteps = document.querySelectorAll(".active");

  // Calculate and set the width of the progress bar based on the number of completed steps
  progress.style.width =
    ((activeSteps.length - 1) / (circles.length - 1)) * 100 + "%";

  // Disable the previous button if the active step is 1
  // Disable the next button if the active step is the last one
  // Otherwise, enable both buttons
  if (activeStep === 1) {
    prev.disabled = true;
  } else if (activeStep === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
