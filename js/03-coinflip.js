  // Flip the coin (0 = Heads, 1 = Tails)
  let coinFlip = Math.round(Math.random());

  // Ask the user to pick
  let choice = prompt("Heads or Tails?");

  // Did the coin land on heads?
  if (coinFlip === 0) {
      // Yes, it was heads. Did the user also pick heads?
      if (choice === "Heads") {
          alert("The flip was heads and you chose heads...you win!");
      } else {
          alert("The flip was heads but you chose tails...you lose!");
      }
  } else {
      // No, it was tails. Did the user pick heads?
      if (choice === "Heads") {
          alert("The flip was tails but you chose heads...you lose!");
      } else {
          alert("The flip was tails and you chose tails...you win!");
      }
  }