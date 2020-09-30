
$(document).ready(function() {
    $(".saveBtn").on("click", function(){
        // Pull value from the textare of chosen save button. This will serve as the value for out setItem
        var value = $(this).siblings(".description").val();
        
        // Pull the id of the clicked element to serve as the id
        var time = $(this).parent().attr("id");
    
        // This is where you will save the data to local storage
        localStorage.setItem(time, value)
    });
    
    
    // Function to update the color of the time display
    function hourUpdater() {
        var currentTime = moment().hours();
        
        // pull the id from each id within the time columns
        // take the value frome each id and setting to the variable block. HINT parseInt
        $(".time-block").each(function() {
            var blockHour = parseInt($(this).attr("id").split("-")[1]);
    
    
    // in each if statement you will need to add a class and remove a class
            if(block < currentTime) {
                $(this).addClass("past");
            } 
            else if (blockHour === currentHour) {
              $(this).removeClass("past");
              $(this).addClass("present");
            } 
            else {
              $(this).removeClass("past");
              $(this).removeClass("present");
              $(this).addClass("future");
    
            }   
        })
    
    }
    
    hourUpdater();
    
    //setting interval to check time if it needs to be updated
    var interval = setInterval(hourUpdater, 15000);
    
    
    // here we need to access the values from localstorage and GET the times to display them on screen
    $("#text-entry1 .description").val(localStorage.getItem("text-entry1"));
    $("text-entry2 .description").val(localStorage.getItem("text-entry2"));
    $("text-entry3 .description").val(localStorage.getItem("text-entry3"));
    $("text-entry4 .description").val(localStorage.getItem("text-entry4"));
    $("text-entry5 .description").val(localStorage.getItem("text-entry5"));
    $("text-entry6 .description").val(localStorage.getItem("text-entry6"));
    $("text-entry7 .description").val(localStorage.getItem("text-entry7"));
    $("#text-entry8 .description").val(localStorage.getItem("text-entry8"));
    $("#text-entry9 .description").val(localStorage.getItem("text-entry9"));
    $("#text-entry10 .description").val(localStorage.getItem("text-entry10"));
    
    //  Displaying the current time on the page
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
        
});

