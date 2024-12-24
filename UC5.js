let days = 1;
const wagePerHour = 20;
let totalEarnings = 0;
let totalHours = 0;
const maxWorkingHours = 160;
const maxWorkingDays = 20;
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

UC 4 and 5: Calculate wages for a month or until max hours/days 

*/

while (totalHours < maxWorkingHours && days < maxWorkingDays) {
    console.log(`Day ${days}`);
    
    if (attendance()) {
        let dailyHours = getWorkingHours();
        
        // Check if adding today's hours exceeds maxWorkingHours
        if (totalHours + dailyHours > maxWorkingHours) {
            dailyHours = maxWorkingHours - totalHours; // claculating the max allowable hours
            console.log(`${emp} worked only ${dailyHours} hours to reach the max limit.`);
        }

        totalHours += dailyHours;
        let dailyWage = wagePerHour * dailyHours;
        totalEarnings += dailyWage;

        console.log(`Daily Earnings: $${dailyWage}`);
    } else {
        console.log("No earnings today.");
    }

    days++;
    console.log(`Total Hours Worked: ${totalHours}`);
    console.log();

    if (totalHours >= maxWorkingHours) {
        console.log(`Maximum working hours (${maxWorkingHours}) reached.`);
        break;
    }
}

console.log(`Total earnings over ${days} days is $${totalEarnings}`);
console.log(`Total hours worked: ${totalHours}`);
