<br>

# Day Planner


### jQuery is fine, I guess.

---
<br>

## Generating the HTML

It's pretty tough trying to organize a page's layout without planning before-hand.  This goes extra when trying to generate a page via code, rather than actually writing out the HTML.

The only way I was able to tackle this issue was actually build a working HTML row the old-fashioned way, so I'd have an idea of what I'm trying to generate and where to append each element.  A bit of design planning early makes life so much easier in the late-game.

![](../Assets/thisIsTheWay.gif)

This is the UX way.

<br>

---

<br>

## Creating the loop

With each timeblock, it was important to understand that the biggest element being created is the 'row'.  All of our child elements are nestled and organized within this parent.

The next thing was to figure out how to trigger the iteration in generating the rows.  I ended up creating an array with all the times that needed seeing, while also taking the liberty of extending the hours from 9am - 5pm to 8am - 8pm.

```

var busyHours = ["8 am", "9 am", "10 am", "11 am", "12 am"...];

``` 

When I was adding classes, linking the elements to the CSS file, I also made a point to pepper in Bootstrap classes to make sure that page would have proper column structure as well.

```

hourCol.addClass("col-1 hour");
entryCol.addClass("col-10 present");
saveCol.addClass("col-1 saveBtn");

```

<br>

---

<br>

## Displaying the Current Day

Getting the current date is a fairly straight-forward function.  I used the Date( ) method and set it to a variable.  I used that variable in conjunction with other methods to get the year, month, and date.  

For whatever reason, the getMonth( ) method essentially returns an array value.  I added a +1 to my 'month' variable to get the correct string value.

```

var todaysDate = new Date();
var year = todaysDate.getFullYear();
var month = todaysDate.getMonth() + 1;
var day = todaysDate.getDate();

$("#currentDay").text(month + " / " + day + " / " + year);

```

<br>

---

<br>

## Passing a Text Input to Local Storage

This was the hardest part for me and still has not been completely solved.  I created a function that saved the value of the textarea in the same row as the save button clicked.  

I was able to capture this value in local storage, but if I entered another value in a different field, it would overwrite.

I came to conclusion here that I needed to have a way to call a specific row and the only way was to create a unique ID during the loop.  