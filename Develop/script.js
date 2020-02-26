

// Display timeblocks for standard business hours (9am to 5pm)
$(document).ready(function() {
    var busyHours = ["9 am", "10 am", "11 am", "12 am", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"];

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
        var saveP = $("<p>");
        var saveIcon = $("<i>");
        saveIcon.addClass("fas fa-save");
         

        // Apply the labels
        hourCol.text(busyHours[i]);
        textSpot.text("");
        saveP.text("Save");

        // Append all that good shit
        $(".container").append(newRow);
        $(newRow).append(hourCol, entryCol, saveCol);
        $(saveCol).append(saveP, saveIcon);
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


