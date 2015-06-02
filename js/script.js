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
        ljs.load('css/fullcalendar.min.css', 'css/fullcalendar.print.css', [
            '//cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.2/moment.min.js'
        ], 'js/fullcalendar.min.js', 'js/gcal.js', function() {
            //Okay, set up the calendar, and we should be done.
            //Now, let's load the calendar.
            $(".container").text(
                "I'm loading right now. If I stay here like this, something's broken."
            );
            $(".container").load("views/calendar.html", function() {
                $('#calendar').fullCalendar({
                    googleCalendarApiKey: window.atob(
                        "QUl6YVN5QXNhX3U1SnBBN0xoSnY0NGdwWWpVRDZST2FoUW83eEhJ"
                    ),
                    events: {
                        googleCalendarId: window.atob(
                            "aWN1dHY3anAwMmt1dXNlc2c2bThiazA4NHNuZWkxMjJAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20="
                        )
                    }
                });
            });
        });
    } else if (type === "contact") {
        $(".container").text(
            "I'm loading right now. If I stay here like this, something's broken."
        );
        $(".container").load("views/maps.html", function() {
            //I choose you, Google+!
            gapi.plusone.go();
            //Go, Facebook!
            var facebookLoad = function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src =
                    "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3";
                fjs.parentNode.insertBefore(js, fjs);
            };
            facebookLoad(document, 'script', 'facebook-jssdk');
        });
    } else if (type === "form") {
        $(".container").text(
            "I'm loading right now. If I stay here like this, something's broken."
        );
        $(".container").load("views/form.html", function() {
            //You can do -- what ever -- you want to do.
            //Insert code here.
        });
    } else if (type === "home") {
        //Load all the files!
        ljs.load('css/fullcalendar.min.css', 'css/fullcalendar.print.css', [
            '//cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.2/moment.min.js'
        ], 'js/fullcalendar.min.js', 'js/gcal.js', function() {
            //Okay, set up the calendar, and we should be done.
            //Now, let's load the calendar.
            $(".container").text(
                "I'm loading right now. If I stay here like this, something's broken."
            );
            $(".container").load("views/home.html", function() {
                $('#calendar').fullCalendar({
                    googleCalendarApiKey: window.atob(
                        "QUl6YVN5QXNhX3U1SnBBN0xoSnY0NGdwWWpVRDZST2FoUW83eEhJ"
                    ),
                    events: {
                        googleCalendarId: window.atob(
                            "aWN1dHY3anAwMmt1dXNlc2c2bThiazA4NHNuZWkxMjJAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20="
                        )
                    },
                    header: {
                        title = 'Week view',
                        prevYear='',
                        nextYear='',
                        basicWeek   
                    }
                });
            });
        });
    }
}
