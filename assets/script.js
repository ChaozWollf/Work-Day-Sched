


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






const dait=$('#currentDay');
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



const time9 = window.setInterval(function () {
  var hours9 = dayjs('09:00:00', 'HH:mm:ss');
  var end9 = dayjs('09:59:59', 'HH:mm:ss');
  if (dayjs(currenthour, 'HH:mm:ss').isAfter(hours9) && dayjs(currenthour, 'HH:mm:ss').isBefore(end9)) {
    $(".hour-9").removeClass("future").addClass("present");
    $(".hour-17").removeClass("past").addClass("future");
  }
}, 1000);

const time10 = window.setInterval(function () {
  var hours10 = dayjs('10:00:00', 'HH:mm:ss');
  var end10 = dayjs('10:59:59', 'HH:mm:ss');
  if (dayjs(currenthour, 'HH:mm:ss').isAfter(hours10) && dayjs(currenthour, 'HH:mm:ss').isBefore(end10)) {
    $(".hour-9").removeClass("present").addClass("past");
    $(".hour-10").removeClass("future").addClass("present");
  }
}, 1000);


const time11 = window.setInterval(function () {
  var hours11 = dayjs('11:00:00', 'HH:mm:ss');
  var end11 = dayjs('11:59:59', 'HH:mm:ss');
  if (dayjs(currenthour, 'HH:mm:ss').isAfter(hours11) && dayjs(currenthour, 'HH:mm:ss').isBefore(end11)) {
    $(".hour-10").removeClass("present").addClass("past");
    $(".hour-11").removeClass("future").addClass("present");
  }
}, 1000);

const time12 = window.setInterval(function () {
  var hours12 = dayjs('12:00:00', 'HH:mm:ss');
  var end12 = dayjs('12:59:59', 'HH:mm:ss');
  if (dayjs(currenthour, 'HH:mm:ss').isAfter(hours12) && dayjs(currenthour, 'HH:mm:ss').isBefore(end12)) {
    $(".hour-11").removeClass("present").addClass("past");
    $(".hour-12").removeClass("future").addClass("present");
  }
}, 1000);

const time13 = window.setInterval(function () {
  var hours13 = dayjs('13:00:00', 'HH:mm:ss');
  var end13 = dayjs('13:59:59', 'HH:mm:ss');
  if (dayjs(currenthour, 'HH:mm:ss').isAfter(hours13) && dayjs(currenthour, 'HH:mm:ss').isBefore(end13)) {
    $(".hour-12").removeClass("present").addClass("past");
    $(".hour-13").removeClass("future").addClass("present");
  }
}, 1000);

const time14 = window.setInterval(function () {
  var hours14 = dayjs('14:00:00', 'HH:mm:ss');
  var end14 = dayjs('14:59:59', 'HH:mm:ss');
  if (dayjs(currenthour, 'HH:mm:ss').isAfter(hours14) && dayjs(currenthour, 'HH:mm:ss').isBefore(end14)) {
    $(".hour-13").removeClass("present").addClass("past");
    $(".hour-14").removeClass("future").addClass("present");
  }
}, 1000);

const time15 = window.setInterval(function () {
  var hours15 = dayjs('15:00:00', 'HH:mm:ss');
  var end15 = dayjs('15:59:59', 'HH:mm:ss');
  if (dayjs(currenthour, 'HH:mm:ss').isAfter(hours15) && dayjs(currenthour, 'HH:mm:ss').isBefore(end15)) {
    $(".hour-14").removeClass("present").addClass("past");
    $(".hour-15").removeClass("future").addClass("present");
  }
}, 1000);

const time16 = window.setInterval(function () {
  var hours16 = dayjs('16:00:00', 'HH:mm:ss');
  var end16 = dayjs('16:59:59', 'HH:mm:ss');
  if (dayjs(currenthour, 'HH:mm:ss').isAfter(hours16) && dayjs(currenthour, 'HH:mm:ss').isBefore(end16)) {
    $(".hour-15").removeClass("present").addClass("past");
    $(".hour-16").removeClass("future").addClass("present");
  }
}, 1000);

const time17 = window.setInterval(function () {
  var hours17 = dayjs('17:00:00', 'HH:mm:ss');
  var end17 = dayjs('17:59:59', 'HH:mm:ss');
  if (dayjs(currenthour, 'HH:mm:ss').isAfter(hours17) && dayjs(currenthour, 'HH:mm:ss').isBefore(end17)) {
    $(".hour-16").removeClass("present").addClass("past");
    $(".hour-17").removeClass("future").addClass("present");
  }
}, 1000);

const time18 = window.setInterval(function () {
  var hours18 = dayjs('18:00:00', 'HH:mm:ss');
  var end18 = dayjs('23:59:59', 'HH:mm:ss');
  if (dayjs(currenthour, 'HH:mm:ss').isAfter(hours18) && dayjs(currenthour, 'HH:mm:ss').isBefore(end18)) {
    $(".hour-17").removeClass("present").addClass("past");
    $(".hour-9").removeClass("past").addClass("future");
    $(".hour-10").removeClass("past").addClass("future");
    $(".hour-11").removeClass("past").addClass("future");
    $(".hour-12").removeClass("past").addClass("future");
    $(".hour-13").removeClass("past").addClass("future");
    $(".hour-14").removeClass("past").addClass("future");
    $(".hour-15").removeClass("past").addClass("future");
    $(".hour-16").removeClass("past").addClass("future");
    

  }
}, 1000);




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