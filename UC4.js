let days = 0;
const wagePerHour = 20;
let totalearning = 0;
let earnings;


//---------------------


/*

UC 1:- Ability to Check Employee is present or Absent- Use Math.Random to check Absent or Present

*/

function attendance() {
    let attendance = Math.floor(Math.random()*2);
    if (attendance) {
        return 1;
    } else {
        return 0;
    }
}


//----------------------------------------------------------


/*
UC3:- function to get work hours
 */

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


//-------------------------------------


/*
    function to calculate wage
*/

function calculateWage() {
    let is_present = attendance()
    let workingHours = getWorkingHours();
    if (is_present) {
        return wagePerHour * workingHours;
    }else{
        return 0;
    }
}


//-------------------------------------


/*

UC4 :- Calculating Wages for a Month assuming 20 Working Days in a Month

*/

while (days <= 20) {
    earnings=calculateWage();
    console.log(`day:- ${days} :: earning:- ${earnings}`);
    totalearning += earnings;
    days++;
}
console.log(`total earnings over 20 days of an emp is ${totalearning}`);