
var busHours = ["9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm"];

// Display timeblocks for standard business hours (9am to 5pm)
$(document).ready(function() {
    for (var i = 0; i < busHours.length; i++) {
        // Make a Row
        var newRow = $("<div>");
        newRow.addClass("row");

    // Make 3 columns with classes: col-1, col-10, col-1
        // Hour col-1
        var hourCol = $("<div>");
        hourCol.addClass("col-1");
        // Entry Field col-10
        var entryCol = $("<div>");
        entryCol.addClass("col-10");
        // Save Button col-1
        var saveCol = $("<div>");
        saveCol.addClass("col-1");


        // Apply the text
        hourCol.text(busHours[i]);
        entryCol.text("Lorem ipsum dolor");
        saveCol.text("Save");

        // Append all that good shit
        $(".container").append(newRow);
        $(newRow).append(hourCol);
        $(newRow).append(entryCol);
        $(newRow).append(saveCol);


    };
});

// Each timeblock has input field & save button

// Save button stores input text to localStorage, so it stays even when refreshed.

// Current day displayed at top of calendar

// Timeblock is colored based on Past, Present, or Future