var currentDay = moment().format('ddd, MMM Do YYYY');
$("#currentDay").html(currentDay);

var workHours = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];
var container = $('#container');
var textArea = $('.textarea');

var textArea9 = document.getElementById("textarea9")
var buttton9 = document.getElementById ("button9")
button9.addEventListener("click", function (event){
console.log(textArea9.value)
})

var textArea10 = document.getElementById("textarea10")
var buttton10 = document.getElementById ("button10")
button10.addEventListener("click", function (event){
console.log(textArea10.value)
})

var textArea11 = document.getElementById("textarea11")
var buttton11 = document.getElementById ("button11")
button11.addEventListener("click", function (event){
console.log(textArea11.value)
})

var textArea12 = document.getElementById("textarea12")
var buttton12 = document.getElementById ("button12")
button12.addEventListener("click", function (event){
console.log(textArea12.value)
})

var textArea1 = document.getElementById("textarea1")
var buttton1 = document.getElementById ("button1")
button1.addEventListener("click", function (event){
console.log(textArea1.value)
})

var textArea2 = document.getElementById("textarea2")
var buttton2 = document.getElementById ("button2")
button2.addEventListener("click", function (event){
console.log(textArea2.value)
})

var textArea3 = document.getElementById("textarea3")
var buttton3 = document.getElementById ("button3")
button3.addEventListener("click", function (event){
console.log(textArea3.value)
})

var textArea4 = document.getElementById("textarea4")
var buttton4 = document.getElementById ("button4")
button4.addEventListener("click", function (event){
console.log(textArea4.value)
})

var textArea5 = document.getElementById("textarea5")
var buttton5 = document.getElementById ("button5")
button5.addEventListener("click", function (event){
console.log(textArea5.value)
})


// GIVEN I am using a daily planner to create a schedule

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar - DONE

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours - DONE

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future - In Progress, Troubleshooting

// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock - DONE


// THEN the text for that event is saved in local storage  - In Progress, Troubleshooting
// WHEN I refresh the page
// THEN the saved events persist








