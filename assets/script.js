


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html. ___Use $(document).ready()____
$(function () { 
  console.log() })
  
  
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? answer:__ But functions added with addEventListener will reference the bound element as "this", not the function or object.__How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time____Calling dayjs() without parameters gives us the current date and time....use a timer to get it to update every second_____
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
// });
// dayjs() 
// localTime = getElementById("currentDay").texContent=(dayjs());
//pseudo code:
//need $(document).ready() on parts of jQuery that affect the HTML to prevent loading early

//need to check the div ID to see if it matchs up with current time (Calling dayjs() without parameters gives us the current date and time) to define past,present, and future (joke: so are we going to be going "Back to the Future"?)

//P.S. need to be able to add and remove classes from the time blocks to corrispond with the past/present/future.

//have to use the localStorage.setItem with JSON.stringify to save the notes

//set the local text element to any thing stored in local storage associated with that element
const dait=$('#currentDay')
const nine = $('#hour-9');
const description9 = $('.description9')
function timeset() {}





$(document).ready(function () {
  localStorage.setItem(description9, description9.val());
});

$('.saveBtn9').on('click', function () {
  description9;
})
  

$('.saveBtn10').on('click', function () {
  console.log("it worked!!");
});
$('.saveBtn11').on('click', function () {
  console.log("it worked!!");
});
$('.saveBtn12').on('click', function () {
  console.log("it worked!!");
});
$('.saveBtn13').on('click', function () {
  console.log("it worked!!");
});
$('.saveBtn14').on('click', function () {
  console.log("it worked!!");
});
$('.saveBtn15').on('click', function () {
  console.log("it worked!!");
});
$('.saveBtn16').on('click', function () {
  console.log("it worked!!");
});

$('.saveBtn17').on('click', function () {
  console.log("it worked!!");
});
