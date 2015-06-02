function removejscssfile(filename, filetype){
    var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none" //determine element type to create nodelist from
    var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none" //determine corresponding attribute to test for
    var allsuspects=document.getElementsByTagName(targetelement)
    for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
    if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
        allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
    }
}
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
        ljs.load('css/fullcalendar.min.css', 'css/fullcalendar.print.css', ['//cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.2/moment.min.js'], 'js/fullcalendar.min.js', 'js/gcal.js', function() {
            //Okay, set up the calendar, and we should be done.
            //Now, let's load the calendar.
            $(".container").text("I'm loading right now. If I stay here like this, something's broken.");
            $(".container").load("views/calendar.html", function() {
                $('#calendar').fullCalendar({
                    googleCalendarApiKey: window.atob("QUl6YVN5QXNhX3U1SnBBN0xoSnY0NGdwWWpVRDZST2FoUW83eEhJ"),
                    events: {
                        googleCalendarId: window.atob("aWN1dHY3anAwMmt1dXNlc2c2bThiazA4NHNuZWkxMjJAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20=")
                    }
                });
            });
        });
    } else if (type === "contact") {
        $(".container").text("I'm loading right now. If I stay here like this, something's broken.");
        $(".container").load("views/maps.html", function() {
            gapi.plusone.go();
        });
    } else if (type === "form") {
        $(".container").text("I'm loading right now. If I stay here like this, something's broken.");
        $(".container").load("views/form.html", function() {
            //You can do -- what ever -- you want to do.
        });
    }
}
