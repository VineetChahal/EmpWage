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
        return "yes";
        // return 1;
    } else {
        return "no";
        // return 0;
    }
}
console.log(attendance());