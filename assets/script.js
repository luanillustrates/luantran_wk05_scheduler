$("#currentDay").text(dayjs().format('YYYY MM DD, ddd'));

setTimeframe();

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

function fetchSchedule() {
  var savedSchedule = localStorage.getItem("schedule");
  if (savedSchedule) {
    schedule = JSON.parse(savedSchedule);
  }
}

viewSchedule();

function viewSchedule() {
  fetchSchedule();
  for (let i = 0; i <schedule.length, i++) {
    var scheduleContent = schedule[i];
    if (scheduleContent) {
      var x = scheduleContent.entry;
      textArea.val(x)
    }
  }
}