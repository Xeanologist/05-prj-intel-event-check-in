// grabb the html elements
const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

//Update the actual attendee count, update the prgoress bar and display the welcome message on the page

// Track attendance
let count = 0;
const maxCount = 50;

// Form Submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;

  console.log(name, teamName);

  //Increment count
  count++;
  console.log("Total check-ins: ", count);

  //Update progress bar
  const percentage = Math.round((count / maxCount) * 100) + "%";
  console.log("Progress: " + percentage);
  const progressBar = document.getElementById("progressBar");
  progressBar.style.width = percentage;

  // Update team counter
  const teamCounter = document.getElementById(team + "Count");
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

  //Update the Attendee counter
  const attendeeCounter = document.getElementById("attendeeCount");
  attendeeCounter.textContent = parseInt(attendeeCounter.textContent) + 1;

  //Welcome message
  const welcome = "Welcome, " + name + " from " + teamName + "!";
  const welcomeMessageBox = document.getElementById("greeting");
  welcomeMessageBox.textContent = welcome;
  welcomeMessageBox.style.display = "flex";
  console.log(welcomeMessageBox.textContent);

  form.reset();
});
