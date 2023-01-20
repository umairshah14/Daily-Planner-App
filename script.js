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
  var divEl = $("<div>");
  var textareaEl = $("<textarea>");
  var buttonEl = $("<button>");
  var imgEl = $("<i>");
  var time = moment().hour(i + 9).format("h A");
  var now = moment().format("h A");
  var tempNow = moment().set('hour', 2);

  $(row).append(divEl);
  $(divEl).addClass("time-block col-1");
  $(divEl).text(time);

  $(row).append(textareaEl);
  $(textareaEl).addClass("description col-10");

  $(row).append(buttonEl);
  $(buttonEl).addClass("saveBtn col-1");
  $(buttonEl).append(imgEl);
  $(imgEl).addClass("fas fa-save");

  if ( time !== tempNow) {
    textareaEl.addClass("past");
    console.log("IN THE PAST");
  } else if ( time === tempNow){
    textareaEl.addClass("present")
    console.log("RIGHT NOW");

  } else {
    textareaEl.addClass("future")
    console.log("IN THE FUTURE");

  }

}
// function to make future hours green

// function to make current hour red
