function checkSpeed() {
    // Collect user input
    let speed = parseFloat(prompt("Enter the speed of the car (km/h):"));
  
    // Validate input
    if (isNaN(speed) || speed < 0) {
      alert("Please enter a valid positive number for speed.");
      return;
    }
  
    // Speed limit
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
  
    // Check speed
    if (speed <= speedLimit) {
      alert("Ok");
    } else {
      // Calculate demerit points
      let demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
      if (demeritPoints > 12) {
        alert("License suspended");
      } else {
        alert(`Points: ${demeritPoints}`);
      }
    }
  }
  
  // Run the program
  checkSpeed();
      