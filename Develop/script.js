
var busHours = ["9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm"];

// Display timeblocks for standard business hours (9am to 5pm)
$(document).ready(function() {

    // Current day displayed at top of calendar
    var todaysDate = new Date();
    var year = todaysDate.getFullYear();
    var month = todaysDate.getMonth() + 1;
    var day = todaysDate.getDate();
    console.log(month, day, year);
    $("#currentDay").text(month + " / " + day + " / " + year);

    // Each timeblock has input field & save button
    for (var i = 0; i < busHours.length; i++) {
        // Generate a Row
        var newRow = $("<div>");
        newRow.addClass("row");

    // Generate 3 columns with classes: col-1, col-10, col-1
        // Hour col-1
        var hourCol = $("<div>");
        hourCol.addClass("col-1 hour");
        // Entry Field col-10
        var entryCol = $("<div>");
        var textSpot = $("<textarea>");
        entryCol.addClass("col-10");
        // Save Button col-1
        var saveCol = $("<div>");
        saveCol.addClass("col-1 saveBtn");

        // Apply the labels
        hourCol.text(busHours[i]);
        textSpot.text("");
        saveCol.text("Save");

        // Append all that good shit
        $(".container").append(newRow);
        $(newRow).append(hourCol, entryCol, saveCol);
        $(entryCol).append(textSpot);
    };
});



// Save button stores input text to localStorage, so it stays even when refreshed.

// Timeblock is colored based on Past, Present, or Future