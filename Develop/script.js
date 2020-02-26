

// Display timeblocks for standard business hours (9am to 5pm)
$(document).ready(function() {
    var busyHours = ["9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm"];

    // Current day displayed at top of calendar
    var todaysDate = new Date();
    var year = todaysDate.getFullYear();
    var month = todaysDate.getMonth() + 1;
    var day = todaysDate.getDate();
    // console.log(month, day, year);
    $("#currentDay").text(month + " / " + day + " / " + year);

    // Each timeblock has input field & save button
    for (var i = 0; i < busyHours.length; i++) {
        // Generate a Row
        var newRow = $("<div>");
        newRow.addClass("row");

    // Generate 3 columns with classes: col-1, col-10, col-1
        // Hour col-1
        var hourCol = $("<div>");
        hourCol.addClass("col-1 hour");
        // Entry Field col-10
        var entryCol = $("<div>");
        entryCol.addClass("col-10 present");
        // Textarea child 
        var textSpot = $("<textarea>");
        textSpot.attr("id", i+1);
        console.log(textSpot);
       
    // IF - ELSE for col-10 Timeblock color
        // IF - hour is earlier than present, remove present & add past
        // ELSE - hour is later than present, remove present & add future

        // Save Button col-1
        var saveCol = $("<div>");
        saveCol.addClass("col-1 saveBtn");

        // Apply the labels
        hourCol.text(busyHours[i]);
        textSpot.text("");
        saveCol.text("Save");

        // Append all that good shit
        $(".container").append(newRow);
        $(newRow).append(hourCol, entryCol, saveCol);
        $(entryCol).append(textSpot);
    };

    // Save button stores input text to localStorage, so it stays even when refreshed.
    var genericArea = $("textarea");

    var onRefresh = localStorage.getItem("input");
    genericArea.textContent = onRefresh;

    $(".saveBtn").click(function() {
        var thisTextArea = $(this).siblings(".col-10").find(genericArea);
        var textVal = thisTextArea.val();
        console.log(textVal);
        thisTextArea.textContent = onRefresh;

        localStorage.setItem("input", textVal);
    });
});


