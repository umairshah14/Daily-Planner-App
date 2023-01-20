var descriptionEl = $(".description");
var timeBlockEl = $(".time-block");
var hourEl = $(".hour");
var pastEl = $(".past");
var presentEl = $(".present");
var futureEl = $(".future");
var saveBtnEl = $(".save-btn");
var currentDayEl = $("#currentDay");
var containerEl = $(".container");

var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Mo"));

// function to check if you're past the previous hours

var row = $("<div>");
$(containerEl).append(row);
$(row).addClass("row");

// MAKES THE 8 ROWS
for (let i = 0; i <= 8; i++) {
  var newDiv = $("<div>");
  var newTxtArea = $("<textarea>");
  var newButton = $("<button>");
  var newImg = $("<i>");
  var time = moment().hour(i + 9).format("h A");
  var now = moment().format("h A");
  var tempNow = moment().set({ 'hour': 12, 'minute': 0, 'second': 0 });
  console.log(tempNow);

  $(row).append(newDiv);
  $(newDiv).addClass("hour col-1");
  $(newDiv).text(time);

  $(row).append(newTxtArea);
  $(newTxtArea).addClass("description col-10");

  $(row).append(newButton);
  $(newButton).addClass("saveBtn col-1");
  $(newButton).append(newImg);
  $(newImg).addClass("fas fa-save");

  if (moment(time).isBefore(tempNow)) {
    newTxtArea.addClass("past");
    console.log("IN THE PAST");

  } else if (moment(time).isAfter(tempNow)){
    newTxtArea.addClass("future")
    console.log("IN THE FUTURE");

  } else {
    newTxtArea.addClass("present")
    console.log("IN THE PRESENT");
  }

}
// function to make future hours green

// function to make current hour red
