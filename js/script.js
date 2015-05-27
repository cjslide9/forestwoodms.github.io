//This function runs once the page is loaded. Or, rather, when the body tag is loaded.
function onLoad() {
    //site-wrap is the whole text part of the webpage.
    var myElement = document.getElementById('site-wrap');
    //check is a checkmark, which when checked, shows the menu
    var check = document.getElementById('nav-trigger');
    // create a simple instance of Hammer.js
    var mc = new Hammer(myElement);
    // listen to events...
    mc.on("panright", function(v) {
        //If check is not checked, run this function.
        if (check.checked === false) {
            //Check the checkbox.
            check.checked = true;
        }
    });
    mc.on("panleft", function(e) {
        //If check is checked, run this function.
        if (check.checked === true) {
            //Uncheck the checkbox.
            check.checked = false;
        }
    });
}

function container(type) {
    if (type === "calendar") {
        //Load all the files!
        ljs.load('css/fullcalendar.min.css', 'css/fullcalendar.print.css', 'css/selected.calendar.css', ['//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js', '//cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.2/moment.min.js'], 'js/fullcalendar.min.js', 'js/gcal.js', function() {
            //Okay, set up the calendar, and we should be done.
            //Now, let's load the calendar.
			$(".container").text("I'm loading right now. If I stay here like this, something's broken.");
            $(".container").load("views/calendar.html", function() {
                $('#calendar').fullCalendar({
                    googleCalendarApiKey: window.atob("QUl6YVN5Q1NqMkNnbXFlaGZKQ0ZQM1JsUFlZSHVFZ0JoWmJmb2ZR"),
                    events: {
                        googleCalendarId: window.atob("aWN1dHY3anAwMmt1dXNlc2c2bThiazA4NHNuZWkxMjJAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20=")
                    }
                });
            });
            //Good, good. Change it to a close button, just cause.
            $(".calendarButton").attr("href", "javascript:container('none');");
            $(".calendarButton").text("Close Calendar");
            
        });
    }
	    else if (type === "none") {
        //It's nothing.
		var box = document.getElementsByClassName('container');
		while (box.lastChild) {
		  box.removeChild(box.lastChild);
		}		
    }
}
