  // Step 1: Get the score from the user
  let score = parseInt(prompt("Enter a number between 1 and 100:"));

  // Step 2: Validate the score is in range
  if (score < 1) {
      console.log("Only numbers between 1 and 100 are accepted.");
  } else if (score > 100) {
      console.log("Only numbers between 1 and 100 are accepted.");
  } else if (score >= 90) {
      console.log("You received an A");
  } else if (score >= 80) {
      console.log("You received a B");
  } else if (score >= 70) {
      console.log("You received a C");
  } else if (score >= 60) {
      console.log("You received a D");
  } else {
      console.log("You received an F");
  }