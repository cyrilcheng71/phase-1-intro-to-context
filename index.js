// Your code here




function createEmployeeRecord(array){
const employeeRecords = {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
}
return employeeRecords
}



function createEmployeeRecords(arrayOfarr){
let newArray = [];
for(let i = 0 ; i < arrayOfarr.length; i++){
    newArray[i] = createEmployeeRecord(arrayOfarr[i])
}
return newArray;
}


function createTimeInEvent(employeeObj , date){
let timeDate = date.split(" ");
let timeObj = {
    type : "TimeIn",
    hour : parseInt(timeDate[1]),
    date : timeDate[0]
}
let update = employeeObj
update.timeInEvents.push(timeObj)
return update;
}


function createTimeOutEvent(employeeObj , date){
let timeDate = date.split(" ");
let timeObj ={
    type : "TimeOut",
    hour : parseInt(timeDate[1]),
    date : timeDate[0]
}
let update = employeeObj
update.timeOutEvents.push(timeObj)
return update;
}


function hoursWorkedOnDate(employeeObj , date){
const timeIn = employeeObj.timeInEvents.find(event => event.date === date).hour
const timeOut = employeeObj.timeOutEvents.find(event => event.date === date).hour

return(timeOut - timeIn) /100
}



function wagesEarnedOnDate(employeeObj, date){
let wage = employeeObj.payPerHour;
let hours = hoursWorkedOnDate(employeeObj, date)
let total = wage * hours;
return total

}


function allWagesFor(employeeObj){
let totals = employeeObj.timeInEvents.reduce((acc, date)=> {
return  acc + wagesEarnedOnDate(employeeObj, date.date)
}, 0)
return totals

}


function calculatePayroll(employeeObj){
let allEmployee = employeeObj.reduce((acc, employee)=> {
    return acc + allWagesFor(employee)
},0)
return allEmployee
}