
// Step-by-step explanation:

// Define the basic salary and benefits.
// Calculate the gross salary.
// Calculate the PAYE tax.
// Calculate the NHIF deduction.
// Calculate the NSSF deduction.
// Calculate the net salary.
// Print the net salary to the console, rounded to two decimal places.
// Rounding to two decimal places ensures that the net salary is accurate to within one cent


// Calculate the net salary of an individual given the basic salary and benefits.
function calculateNetSalary(basicSalary, benefits = 0) {
    const basicSalarySalary = 100000;
    // Calculate the gross salary.
    const grossSalary = basicSalary + benefits;
  
    // Calculate the PAYE (Pay As You Earn) tax.
    const PAYE = grossSalary * 0.3;
  
    // Calculate the NHIF (National Hospital Insurance Fund) deduction.
    const NHIFDeduction = grossSalary * 0.05;
  
    // Calculate the NSSF (National Social Security Fund) deduction.
    const NSSFDeduction = grossSalary * 0.06;
  
    // Calculate the net salary.
    const netSalary = grossSalary - PAYE - NHIFDeduction - NSSFDeduction;
    //housing levi
    const housinglevi =grossSalary - 0.15;
  
    return netSalary;
  }
  
  // Calculate the net salary with the given basic salary and benefits.
  const netSalary = calculateNetSalary(basicSalary = 100000, benefits = 0);
  
  // Print the net salary.
  console.log("Net salary:", netSalary);
  
  //output 57,500