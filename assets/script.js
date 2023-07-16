// setting the current date
$("#currentDay").text(dayjs().format('YYYY MM DD, ddd'));

setTimeframe();

// colour coding
function setTimeframe() {
  var hour = dayjs().hour();

  $(".time-block").each(function() {
    var presentHour = parseInt($(this).attr("id"));

    if (presentHour > hour) {
        $(this).addClass("future");
    } else if (presentHour === hour) {
        $(this).addClass("present");
    } else {
        $(this).addClass("past");
      }
    })
}


// click event to log data
$(".saveBtn").on("click", function () {
  var loggedData = $(this).siblings(".description").val();
  var timeStamp = $(this).parent().attr("id");

  localStorage.setItem(timeStamp, loggedData);
});

scheduleLogging();

function scheduleLogging() {
  var divElement = $(".time-block");
  
  for (let x = 0; x < divElement.length; x++) {
      var descElement = divElement[x].children[1];
      xString = divElement[x].id.toString();
      $(descElement).val(localStorage.getItem(xString));
  }
}