function getStudentGrade() {
    // Prompt user for marks
    let marks = parseFloat(prompt("Enter student marks (0-100):"));
  
    // Validate input
    if (isNaN(marks) || marks < 0 || marks > 100) {
      alert("Please enter a valid number between 0 and 100.");
      return;
    }
  
    // Determine the grade
    let grade;
    if (marks > 79) {
      grade = "A";
    } else if (marks >= 60) {
      grade = "B";
    } else if (marks >= 50) {
      grade = "C";
    } else if (marks >= 40) {
      grade = "D";
    } else {
      grade = "E";
    }
  
    // Display the grade
    alert(`The grade for marks ${marks} is: ${grade}`);
  }
  
  // Run the program
  getStudentGrade();
  