/*

UC 1:- Ability to Check Employee is present or Absent- Use Math.Random to check Absent or Present

Use const which signal that the identifier 
won't be reassigned. And use let where the 
variable may be reassigned. Both have Block 
Scope. Traditional var has function scope

*/

function attendance() {
    let attendance = Math.floor(Math.random()*2);
    if (attendance) {
        return 1;
    } else {
        return 0;
    }
}
let is_present = attendance();

//----------------------------------------------------------


/*

UC 2:- Ability to Calculate Daily Employee Wage based on part time or full time work
Use Math.Random to check No Time,Part Time or Full Time 
Assume Part Time is 4 Hrs and Full time is 8 Hrs and per hour wage is $20 
Solve Using Switch Statement

*/

const salaryPerHour = 20;

function getWorkingHours() {
    let empWorkHr = Math.floor(Math.random() * 3) + 1;
    switch (empWorkHr) {
        case 1:
            return 0;           
        case 2:
            return 4;            
        case 3:
            return 8;
        default:
            console.log('error');
            break;
    }
}

if (is_present) {
    let empDaySalary = getWorkingHours() * salaryPerHour;
    console.log(empDaySalary);
} else {
    console.log("Absent");
    
}
