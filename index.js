// Today's day and date
var todayDate = dayjs().format('dddd, MMM D YYYY');
$("#currentDay").html(todayDate);


//w3schhols so make sure it isnt running before the page is loaded
$(document).ready(function () {
  //save button when clicked saves to local storage
    $(".saveBtn").on("click", function () {
        console.log(this);
        var hourKey = $(this).parent().attr("id")
        var activity = $(this).siblings(".description").val()
        console.log(activity)
        localStorage.setItem(hourKey, activity)
    })
    function timeTracker() {
        //loop method and track time correctly
        $(".time-block").each(function(){
            console.log(this)
            var timeNow = dayjs().hour();
            var blockTime = parseInt($(this).attr("id").split("-").pop())
            console.log(blockTime)
            if (blockTime < timeNow) {
                console.log("past")
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                console.log("present")
                $(this).removeClass("future");
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                console.log("future")
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
    
        })

    }


    // local storage 
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

    timeTracker();
})

//call function