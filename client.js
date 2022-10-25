// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3,
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4,
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5,
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1,
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1,
  },
];

console.log('array of employee data: ', employees);

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus(anArray) {
  // 1. Conditional to determine what the bonus is based on rating
  let sadEmployees = [];
  let rated3Employees = [];
  let rated4Employees = [];
  let rated5Employees = [];
  let calcBonus = 0;

  for (let object of anArray) {
    //annual salary cap
    if (object.annualSalary >= 65000) {
      console.log('Greater than:', object.name);
      for (let i = 0; i < anArray.length; i++) {
        if (
          anArray[i].reviewRating <= 2 &&
          anArray[i].employeeNumber.length === 4
        ) {
          console.log('2 and length4:', object.name);
          sadEmployees.push(anArray[i].name);
          calcBonus = sadEmployees.push(anArray[i].annualSalary * 0.04);
        } else if (
          anArray[i].reviewRating <= 2 &&
          anArray[i].employeeNumber.length !== 4
        ) {
          console.log('2 and lengthnot4:', object.name);
          sadEmployees.push(anArray[i].name);
          calcBonus = sadEmployees.push(anArray[i].annualSalary * 0);
        } else if (
          anArray[i].reviewRating === 3 &&
          anArray[i].employeeNumber.length === 4
        ) {
          rated3Employees.push(anArray[i].name);
          calcBonus = rated3Employees.push(anArray[i].annualSalary * 0.08);
        } else if (
          anArray[i].reviewRating === 3 &&
          anArray[i].employeeNumber.length !== 4
        ) {
          rated3Employees.push(anArray[i].name);
          calcBonus = rated3Employees.push(anArray[i].annualSalary * 0.03);
        } else if (
          anArray[i].reviewRating === 4 &&
          anArray[i].employeeNumber.length === 4
        ) {
          rated4Employees.push(anArray[i].name);
          calcBonus = rated4Employees.push(anArray[i].annualSalary * 0.1);
        } else if (
          anArray[i].reviewRating === 4 &&
          anArray[i].employeeNumber.length !== 4
        ) {
          rated4Employees.push(anArray[i].name);
          calcBonus = rated4Employees.push(anArray[i].annualSalary * 0.05);
        } else if (
          anArray[i].reviewRating === 5 &&
          anArray[i].employeeNumber.length === 4
        ) {
          rated5Employees.push(anArray[i].name);
          calcBonus = rated5Employees.push(anArray[i].annualSalary * 0.13);
        } else if (
          anArray[i].reviewRating === 5 &&
          anArray[i].employeeNumber.length !== 4
        ) {
          rated5Employees.push(anArray[i].name);
          calcBonus = rated5Employees.push(anArray[i].annualSalary * 0.09);
        }
      }
    } else if (object.annualSalary < 65000) {
      console.log('Less than:', object.name);
      for (let i = 0; i < anArray.length; i++) {
        if (
          anArray[i].reviewRating <= 2 &&
          anArray[i].employeeNumber.length === 4
        ) {
          sadEmployees.push(anArray[i].name);
          calcBonus = sadEmployees.push(anArray[i].annualSalary * 0.05);
        } else if (
          anArray[i].reviewRating <= 2 &&
          anArray[i].employeeNumber.length !== 4
        ) {
          sadEmployees.push(anArray[i].name);
          calcBonus = sadEmployees.push(anArray[i].annualSalary * 0);
        } else if (
          anArray[i].reviewRating === 3 &&
          anArray[i].employeeNumber.length === 4
        ) {
          rated3Employees.push(anArray[i].name);
          calcBonus = rated3Employees.push(anArray[i].annualSalary * 0.09);
        } else if (
          anArray[i].reviewRating === 3 &&
          anArray[i].employeeNumber.length !== 4
        ) {
          rated3Employees.push(anArray[i].name);
          calcBonus = rated3Employees.push(anArray[i].annualSalary * 0.04);
        } else if (
          anArray[i].reviewRating === 4 &&
          anArray[i].employeeNumber.length === 4
        ) {
          rated4Employees.push(anArray[i].name);
          calcBonus = rated4Employees.push(anArray[i].annualSalary * 0.11);
        } else if (
          anArray[i].reviewRating === 4 &&
          anArray[i].employeeNumber.length !== 4
        ) {
          rated4Employees.push(anArray[i].name);
          calcBonus = rated4Employees.push(anArray[i].annualSalary * 0.06);
        } else if (
          anArray[i].reviewRating === 5 &&
          anArray[i].employeeNumber.length === 4
        ) {
          rated5Employees.push(anArray[i].name);
          calcBonus = rated5Employees.push(anArray[i].annualSalary * 0.13);
        } else if (
          anArray[i].reviewRating === 5 &&
          anArray[i].employeeNumber.length !== 4
        ) {
          rated5Employees.push(anArray[i].name);
          calcBonus = rated5Employees.push(anArray[i].annualSalary * 0.1);
        }
      }
    }
  }
  console.log(
    '1:',
    sadEmployees,
    '2:',
    rated3Employees,
    rated4Employees,
    rated5Employees
  );
  return sadEmployees + ' Receive no bonus';
}

// let endingArr = [];
// function calcBonus(anEmployeeArr) {
//   for (let person of anEmployeeArr) {
//     console.log(person);
//   }
// }
// calcBonus(sadEmployees);

// 2. Conditional to determine addition bonus based on years
//of service -employee number
//3. Set parameters on max percent
//4. Check max salaray at 65,000, to 1%

console.log('Individual Bonus: ' + calculateIndividualEmployeeBonus(employees));

// return new object with bonus results
