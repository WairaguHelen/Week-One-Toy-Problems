// Function to calculate PAYE (Tax)
function calculatePAYE(grossSalary) {
    if (grossSalary <= 24000) {
      return grossSalary * 0.1; // 10%
    } else if (grossSalary <= 32333) {
      return grossSalary * 0.25; // 25%
    } else {
      return grossSalary * 0.3; // 30%
    }
  }
  
  // Function to calculate NHIF Deduction
  function calculateNHIF(grossSalary) {
    if (grossSalary <= 5999) return 150;
    if (grossSalary <= 7999) return 300;
    if (grossSalary <= 11999) return 400;
    if (grossSalary <= 14999) return 500;
    if (grossSalary <= 19999) return 600;
    if (grossSalary <= 24999) return 750;
    if (grossSalary <= 29999) return 850;
    if (grossSalary <= 34999) return 900;
    if (grossSalary <= 39999) return 950;
    if (grossSalary <= 44999) return 1000;
    if (grossSalary <= 49999) return 1100;
    if (grossSalary <= 59999) return 1200;
    if (grossSalary <= 69999) return 1300;
    if (grossSalary <= 79999) return 1400;
    if (grossSalary <= 89999) return 1500;
    if (grossSalary <= 99999) return 1600;
    return 1700;
  }
  
  // Function to calculate NSSF Deduction
  function calculateNSSF(grossSalary) {
    return Math.min(grossSalary * 0.06, 1800); // 6% capped at 1800
  }
  
  // Main Function to Calculate Net Salary
  function calculateNetSalary() {
    // Collect user inputs
    let basicSalary = parseFloat(prompt("Enter your basic salary (KES):"));
    let benefits = parseFloat(prompt("Enter your benefits (KES):"));
  
    // Validate inputs
    if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
      alert("Please enter valid numeric values for salary and benefits.");
      return;
    }
  
    // Calculate Gross Salary
    let grossSalary = basicSalary + benefits;
  
    // Calculate Deductions
    let payeTax = calculatePAYE(grossSalary);
    let nhifDeduction = calculateNHIF(grossSalary);
    let nssfDeduction = calculateNSSF(grossSalary);
  
    // Calculate Net Salary
    let netSalary = grossSalary - (payeTax + nhifDeduction + nssfDeduction);
  
    // Display Results
    alert(`Salary Breakdown:
      Gross Salary: KES ${grossSalary.toFixed(2)}
      PAYE (Tax): KES ${payeTax.toFixed(2)}
      NHIF Deduction: KES ${nhifDeduction.toFixed(2)}
      NSSF Deduction: KES ${nssfDeduction.toFixed(2)}
      Net Salary: KES ${netSalary.toFixed(2)}`);
  }
  
  // Run the program
  calculateNetSalary();
  