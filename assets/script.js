


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html. ___Use $(document).ready()____
// $(function () { 
//   console.log() })



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



console.log(window);


const dait = $('#currentDay');
const nine = $('#hour-9');
const description9 = $('.description9');
const description10 = $('.description10');
const description11 = $('.description11');
const description12 = $('.description12');
const description13 = $('.description13');
const description14 = $('.description14');
const description15 = $('.description15');
const description16 = $('.description16');
const description17 = $('.description17');
const today = dayjs();
const currenthour = dayjs().format('HH:mm:ss');


$('#currentDay').text(today.format('MMM D, YYYY'));


//checks time to move into new blocks

const time9 = window.setInterval(function () {
  var hours9 = '09:00:00';
  var end9 = '09:59:59';
  if (currenthour > hours9 && currenthour <=end9) {
    $("#9").addClass("present");
    $("#17").addClass("future");
   
  }
  else if (currenthour > end9){
    $("#9").addClass("past");
}
else {
    $("#9").addClass("future");
}
}, 1000);

const time10 = window.setInterval(function () {
  var hours10 = '10:00:00';
  var end10 = '10:59:59';
  if (currenthour > hours10 && currenthour <=end10) {
    $("#9").addClass("past");
    $("#10").addClass("present");
  }
  else if (currenthour > end10) {
    $("#10").addClass("past");
  }
  else {
    $("#10").addClass("future");
  }

}, 1000);


const time11 = window.setInterval(function () {
  var hours11 = '11:00:00';
  var end11 = '11:59:59';
  if (currenthour > hours11 && currenthour <=end11) {
    $("#10").addClass("past");
    $("#11").addClass("present");
  }
  else if (currenthour > end11) {
    $("#11").addClass("past");
  }
  else {
    $("#11").addClass("future");
  }
}, 1000);

const time12 = window.setInterval(function () {
  var hours12 = '12:00:00';
  var end12 = '12:59:59';
  if (currenthour > hours12 && currenthour <=end12) {
    $("#11").addClass("past");
    $("#12").addClass("present");
  }
  else if (currenthour > end12) {
    $("#12").addClass("past");
  }
  else {
    $("#12").addClass("future");
  }
}, 1000);

const time13 = window.setInterval(function () {
  var hours13 = '13:00:00';
  var end13 = '13:59:59';
  if (currenthour > hours13 && currenthour <=end13) {
    $("#12").addClass("past");
    $("#13").addClass("present");
  }
  else if (currenthour > end13) {
    $("#13").addClass("past");
  }
  else {
    $("#13").addClass("future");
  
  }
}, 1000);

const time14 = window.setInterval(function () {
  var hours14 = '14:00:00';
  var end14 = '14:59:59';
  if (currenthour > hours14 && currenthour < end14) {
    $("#13").addClass("past");
    $("#14").addClass("present");
  }
  else if (currenthour > end14) {
    $("#14").addClass("past");
  }
  else {
    $("#14").addClass("future");

  }


}, 1000);

const time15 = window.setInterval(function () {
  var hours15 = '15:00:00';
  var end15 = '15:59:59';
  if (currenthour > hours15 && currenthour <end15) {
    $("#14").addClass("past");
    $("#15").addClass("present");
  }
  else if (currenthour > end15) {
    $("#15").addClass("past");
  }
  else {
    $("#15").addClass("future");

  }

}, 1000);

const time16 = window.setInterval(function () {
  var hours16 = '16:00:00';
  var end16 = '16:59:59';
  if (currenthour > hours16 && currenthour <end16) {
    $("#15").addClass("past");
    $("#16").addClass("present");
  }
  else if (currenthour > end16) {
    $("#16").addClass("past");
  }
  else {
    $("#16").addClass("future");

  }
}, 1000);

const time17 = window.setInterval(function () {
  var hours17 ='17:00:00';
  var end17 ='17:59:59';
  if (currenthour > hours17 && currenthour < end17) {
    $("#16").addClass("past");
    $("#17").addClass("present");
  }
  else if (currenthour > end17) {
    $("#17").addClass("past");
  }
  else {
    $("#17").addClass("future");
  }
}, 1000);





//buttons to add info into localStorage

$('.saveBtn9').on('click', function () {
  localStorage.setItem('description9', description9.val());
});


$('.saveBtn10').on('click', function () {
  localStorage.setItem('description10', description10.val());
});
$('.saveBtn11').on('click', function () {
  localStorage.setItem('description11', description11.val());
});
$('.saveBtn12').on('click', function () {
  localStorage.setItem('description12', description12.val());
});
$('.saveBtn13').on('click', function () {
  localStorage.setItem('description13', description13.val());
});
$('.saveBtn14').on('click', function () {
  localStorage.setItem('description14', description14.val());
});
$('.saveBtn15').on('click', function () {
  localStorage.setItem('description15', description15.val());
});
$('.saveBtn16').on('click', function () {
  localStorage.setItem('description16', description16.val());
});

$('.saveBtn17').on('click', function () {
  localStorage.setItem('description17', description17.val());
});
;