// start off declaring variables
$(function () {});

// variable for present day
var today = moment().format("dddd MMMM Do, YYYY");

// declare workday hours in a variable (?)
var workday = [
    {time: "9 AM", event: ""},
    {time: "10 AM", event: ""},
    {time: "11 AM", event: ""},
    {time: "12 PM", event: ""},
    {time: "1 PM", event: ""},
    {time: "2 PM", event: ""},
    {time: "3 PM", event: ""},
    {time: "4 PM", event: ""},
    {time: "5 PM", event: ""},
];

var workSchedule = JSON.parse(localStorage.getItem("workday"));
if (workSchedule) {
    workday = workSchedule;
}

// date for current day
$("#currentDay").text(today);

// dynamic rows
