// set variable to display current date 
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));

// set container class from div as a variable
var container = $(".container");

// hours into an array
var workHours = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM",];
var currentHour = parseInt(moment().format("H"))


