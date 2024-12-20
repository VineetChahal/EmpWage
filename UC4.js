let days = 0;
const wagePerHour = 20;
let totalearning = 0;
let earnings;
const emp = "Snow";

//---------------------


/*

UC 1:- Ability to Check Employee is present or Absent- Use Math.Random to check Absent or Present

*/

function attendance() {
    let attendance = Math.floor(Math.random()*2);
    if (attendance) {
        console.log(`Employee ${emp} is Present`);
        return 1;
    } else {
        console.log(`Employee ${emp} is Absent`);
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
            console.log(`${emp} did'nt work at all today`);
            return 0;           
        case 2:
            console.log(`${emp} did a Half day`);
            return 4;            
        case 3:
            console.log(`${emp} did a Full day`);
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
    if (is_present) {
        let workingHours = getWorkingHours();
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
    console.log(`Day ${days}`);
    
    earnings=calculateWage();
    console.log(`Earning of the day:- ${earnings}`);
    console.log();
    
    totalearning += earnings;
    days++;
}
console.log(`total earnings over 20 days of an emp is ${totalearning}`);