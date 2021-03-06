// set variable to display current date 
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));

// set container class from div as a variable
var container = $(".container");
var saveToLocal = $(".saveBtn");

// hours into an array
var workHours = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM",];
var currentHour = parseInt(moment().format("H"))

// function to show the hour schedule log on the page
function buildWorkSchedule(hour) {
    // for loop to create hour rows, task input field, save button (dynamic elements)
    for (var i = 0; i < hour.length; i++) {
        
        let hourRow = $("<div></div>");
        let workHour = $("<div></div>");
        let tasks = $("<textarea>");
        let save = $("<button>");
        let timeValue = localStorage.getItem(`Task${i}`);
        let saveIcon = $("<i>");

        // set class & id attributes for previous created element
        hourRow.attr("class", "row time-block");
        workHour.attr("id", "hour-" + (9 + i));
        workHour.attr("class", "col-12 col-md-1 hour");
        workHour.text(hour[i]);

        tasks.attr("id", "text-" + i);
        tasks.attr("class", "col-12 col-md-10 past");

        tasks.val(timeValue);

        save.attr("id", "save-" + i);
        save.attr("class", "col-12 col-md-1 saveBtn");

        // refer to bootstrap for icon
        saveIcon.attr("class", "bi bi-lock-fill");

        container.append(hourRow);
        hourRow.append(workHour, tasks, save);
        save.append(saveIcon);
    }

    thisHour();

}

// function to adapt to the time of day  
function thisHour() {
    for (var t = 0; t < 9; t++) {
        let workID = $("#hour-" + (9 + t));
        let singleHour = parseInt(workID[0].id.replace("hour-", " "));
        let taskEdit = $("#text-" + t);

        if (currentHour === singleHour) {
            taskEdit.addClass("present");
        } else if (currentHour < singleHour) {
            taskEdit.addClass("future");
        } else {
            taskEdit.addClass("past");
        };
    };
};

// saving task in local storage
function saveTask(event) {
    console.log(event)
    let index = event.target.id.replace("save-", "")
    let textInput = $(`#text-${index}`).val();
    localStorage.setItem(`Task${index}`, textInput);
}

$(".saveBtn").click(saveTask);


buildWorkSchedule(workHours);


