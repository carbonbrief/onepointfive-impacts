// Instantiation
$(function(){

    // variables
    var $sideNav = $('.side-nav')
    var $arrowUp = $('.up')
    var $arrowDown = $('.down')
    var $droplinks = $('.droplinks')
    var $gradient = $('.story-gradient')
    var $map = $('.map')
    var $mapText = $('#map-text')
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    var viewportHeight = window.innerHeight
    var halfViewportHeight = Math.floor(viewportHeight / 2)
    var activeIndex;

    var enterEvents = function (ev, item) {
        
        if (item.index === 1) {
            // play video after the second background enters
            playVid();
        }
    }

    var exitEvents = function (ev, item) {

        if (item.index === 1) {
            // pause video after the second background exits
            pauseVid();
        }
    }

    var focusEvents = function (ev, item) {

        activeIndex = item.index;

        // console.log(activeIndex);

        // SIDE NAV STYLING
        // remove previous styling
        $('li', $sideNav).removeClass('nav-active');

        if (item.index == 3 || item.index == 4) {
            $('#ocean-nav').addClass('nav-active');
        } else if (item.index == 5 || item.index == 6) {
            $('#ice-nav').addClass('nav-active');
        } else if (item.index == 7 || item.index == 8) {
            $('#heat-nav').addClass('nav-active');
        } else if (item.index == 9 || item.index == 10) {
            $('#rain-nav').addClass('nav-active');
        } else if (item.index == 11) {
            $('#drought-nav').addClass('nav-active');
        } else if (item.index == 12) {
            $('#storm-nav').addClass('nav-active');
        } else if (item.index == 13 || item.index == 14) {
            $('#crops-nav').addClass('nav-active');
        } else if (item.index == 15) {
            $('#nature-nav').addClass('nav-active');
        } else if (item.index == 16) {
            $('#economy-nav').addClass('nav-active');
        } else if (item.index == 17) {
            $('#health-nav').addClass('nav-active');
        } else if (item.index > 17 && item.index < 37) {
            $('#europe-nav').addClass('nav-active');
        } else if (item.index > 36 && item.index < 54) {
            $('#americas-nav').addClass('nav-active');
        } else if (item.index > 53 && item.index < 59) {
            $('#sids-nav').addClass('nav-active');
        } else if (item.index > 58 && item.index < 68) {
            $('#africa-nav').addClass('nav-active');
        } else if (item.index > 67 && item.index < 85) {
            $('#asia-nav').addClass('nav-active');
        } else if (item.index > 84 && item.index < 94) {
            $('#china-nav').addClass('nav-active');
        } else if (item.index > 93 && item.index < 102) {
            $('#australasia-nav').addClass('nav-active');
        }

        // hide top arrow when at top
        if (item.index < 4) {
            $arrowUp.css("visibility", "hidden");
        } else {
            $arrowUp.css("visibility", "visible");
        }

        // hide down arrow when at bottom
        if (item.index > 96) {
            $arrowDown.css("visibility", "hidden");
        } else {
            $arrowDown.css("visibility", "visible");
        }
        
        // console.log(item.data.name + ", is now active!");

        // UPDATE MAP
        if (item.index < 102 && item.index > 2) {
            $map.css( "background-image", "url('img/" + item.data.map + ".svg')");
            $mapText.text(item.data.location);
        }

        // UPDATE TABLE
        function triggerTableUpdate() {

            dataName = item.data.name;

            // change string into variable name
            newData = window[dataName];

            updateTable(newData, dataName);

        }

        if(item.index > 0 && item.index < 102){

            triggerTableUpdate();

        }

        // SHOW EXTRA INFO ON MOUSEOVER

        $("p .fa-info-circle").on("mouseover", function(event) {

            var x = function () {
                if (windowWidth > 750) {
                    return event.pageX - 50;
                } else if (windowWidth < 749 && windowWidth > 650) {
                    return event.pageX - 43;
                } else {
                    return event.pageX - 38;
                }
            }
            var y = event.pageY + 30;
            var info = item.data.info;

            $(".tooltip").html("<p>" + info + "</p>");
            $(".tooltip-wrapper").css({
                "top": y,
                "left": x,
                "visibility": "visible"
            });
        })

        $(".fa-info-circle").on("mouseout", function() {
            $(".tooltip-wrapper").css("visibility", "hidden");
        })

        // play section videos on focus

        var vid1 = document.getElementById("europe-vid");
        var vid2 = document.getElementById("americas-vid");
        var vid3 = document.getElementById("sids-vid");
        var vid4 = document.getElementById("africa-vid");
        var vid5 = document.getElementById("asia-vid");
        var vid6 = document.getElementById("china-vid");
        var vid7 = document.getElementById("australasia-vid");

        if (item.index == 18) {
            vid1.play();
        } else {
            vid1.pause();
        }

        if (item.index == 37) {
            vid2.play();
        } else {
            vid2.pause();
        }

        if (item.index == 53) {
            vid3.play();
        } else {
            vid3.pause();
        }

        if (item.index == 59) {
            vid4.play();
        } else {
            vid4.pause();
        }

        if (item.index == 68) {
            vid5.play();
        } else {
            vid5.pause();
        }

        if (item.index == 85) {
            vid6.play();
        } else {
            vid6.pause();
        }

        if (item.index == 94) {
            vid7.play();
        } else {
            vid7.pause();
        }


    }

    // pass in the data
    // callbacks triggered on instantiation
    $("#container").scrollStory({
        content: impacts,
        itembuild: function(ev, item){
            // add title from data
            // actually better to build all the items in the same way so that can manipulate the behaviour of all?
            if(item.index === 0) {
                item.el.addClass("story-intro1");
            } else if (item.index === 1) {
                // don't append anything
                item.el.addClass("story-intro2");
            } else if (item.index === 2) {
                // don't append anything
                item.el.addClass("story-middle");

                // build from data
                item.el.append(
                    "<div class='story-mask'><div class='story-content main'><h2><span class='title-span'>"
                    + item.data.icon
                    + "</span></h2><p>"
                    + item.data.text
                    + "</p><p id='image-credit'>Image credit: "
                    + item.data.credit
                    + "</p></div></div>"
                );

                // add their background images
                // might be better to do as a div so a mask can be added
                item.el.css({
                    "background-image": "url('" + item.data.background + "')",
                    "background-repeat": "no-repeat",
                    "background-size": "cover"
                });
            } else if (item.index > 2 && item.index < 102) {

                item.el.addClass("story-middle");
 
                // build from data
                item.el.append(
                    "<div class='story-mask'><div class='story-content main'><h2><span class='title-span'>"
                    + item.data.icon +
                    "   " 
                    + item.data.title 
                    + "</span></h2><p><i class='fas fa-info-circle'></i></p><p id='image-credit'>Image credit: "
                    + item.data.credit
                    +"</p></div></div>"
                );

                // add their background images
                // might be better to do as a div so a mask can be added
                item.el.css({
                    "background-image": "url('" + item.data.background + "')",
                    "background-repeat": "no-repeat",
                    "background-size": "cover"
                });
            } else if (item.index === 102) {

                // change style via class so can make responsive
                item.el.addClass("story-end");

                // build credit
                item.el.append(
                    "<div class='story-mask'><div class='story-content footer'><h2><span class='title-span'><i class='"
                    + item.data.icon +
                    "'></i></span></h2><p class='credit'>" 
                    + item.data.text 
                    + "</p></div></div>"
                );

            }
        },
        itemfocus: focusEvents,
        triggerOffset: halfViewportHeight, // seems to set the active story at a more sensible position
        itementerviewport: enterEvents,
        itemexitviewport: exitEvents,
        complete: function() {

            var that = this;

            // SET UP DROPLINKS
            $droplinks.on('click', 'li', function() {

                var id = $(this).attr("id");

                if (id == "heat") {
                    that.index(7);
                } else if (id =="rain") {
                    that.index(9);
                } else if (id =="drought") {
                    that.index(11);
                } else if (id =="storm") {
                    that.index(12);
                } else if (id =="ocean") {
                    that.index(3);
                } else if (id =="ice") {
                    that.index(5);
                } else if (id =="crops") {
                    that.index(13);
                } else if (id =="nature") {
                    that.index(15);
                } else if (id =="economy") {
                    that.index(16);
                } else if (id =="health") {
                    that.index(17);
                } else if (id =="europe") {
                    that.index(18);
                } else if (id =="asia") {
                    that.index(68);
                } else if (id =="china") {
                    that.index(85);
                } else if (id =="americas") {
                    that.index(37);
                } else if (id =="africa") {
                    that.index(59);
                } else if (id =="australasia") {
                    that.index(94);
                } else if (id =="sids") {
                    that.index(53);
                }

            });

            // SET UP SIDE NAV
            $sideNav.on('click', 'li', function() {

                var id = $(this).attr("id");

                if (id == "heat-nav") {
                    that.index(7);
                } else if (id =="rain-nav") {
                    that.index(9);
                } else if (id =="drought-nav") {
                    that.index(11);
                } else if (id =="storm-nav") {
                    that.index(12);
                } else if (id =="ocean-nav") {
                    that.index(3);
                } else if (id =="ice-nav") {
                    that.index(5);
                } else if (id =="crops-nav") {
                    that.index(13);
                } else if (id =="nature-nav") {
                    that.index(15);
                } else if (id =="economy-nav") {
                    that.index(16);
                } else if (id =="health-nav") {
                    that.index(17);
                } else if (id =="europe-nav") {
                    that.index(18);
                } else if (id =="asia-nav") {
                    that.index(68);
                } else if (id =="china-nav") {
                    that.index(85);
                } else if (id =="americas-nav") {
                    that.index(37);
                } else if (id =="africa-nav") {
                    that.index(59);
                } else if (id =="australasia-nav") {
                    that.index(94);
                } else if (id =="sids-nav") {
                    that.index(53);
                }

            });

            // ARROW ACTIONS

            $arrowUp.on('click', function() {
                // move the scrolly up one
                that.index(activeIndex - 1);
            });

            $arrowDown.on('click', function() {
                // move the scrolly down one
                that.index(activeIndex + 1);
            });

            // KEY ACTIONS

            document.onkeydown = checkKey;

            function checkKey(e) {

                console.log("check key");

                e = e || window.event;

                console.log(e.keyCode);

                if (e.keyCode == '38' && activeIndex > 2) {
                    // move the scrolly up one
                    that.index(activeIndex - 1);
                }
                else if (e.keyCode == '40' && activeIndex > 1) {
                    // move the scrolly down one
                    that.index(activeIndex + 1);
                }

            }

            // SCROLL ACTIONS

            var range = 200;
            var range2 = 350;

            $(window).on('scroll', function () {
            
                // might use usewhere so may want to make these variable global
                var scrollTop = $(this).scrollTop(),
                // height = windowHeight.outerHeight(),
                offset = windowHeight / 1.8,
                // for bringing items in
                calc1 = (scrollTop - offset + range2) / range2;
                // for fading items away
                calc2 = 1 - calc1;

                // FADE DROPLINKS

                $droplinks.css({ 'opacity': calc2 });

                if (calc2 > '1') {
                    $droplinks.css({ 'opacity': 1 });
                } else if ( calc2 < '0' ) {
                    $droplinks.css({ 'opacity': 0 });
                } else if (calc2 > '0') {
                    // do nothing
                }

                // FADE STORY CONTENT AT BOTTOM OF PAGE

                var windowBottom = scrollTop + $(this).innerHeight();

                $gradient.each(function() {

                    var range2 = 400;

                     var objectTop = $(this).offset().top;

                    if (objectTop < windowBottom) { //object comes into view (scrolling down)

                        var calc4 = (windowBottom - objectTop) / range2;

                        $(this).css({ 'opacity': calc4 });

                        if (calc4 > '1') {
                            $(this).css({ 'opacity': 1 });
                        } else if ( calc4 < '0' ) {
                            $(this).css({ 'opacity': 0 });
                        } else if (calc4 > '0') {
                            // do nothing
                        }

                    }

                })

                $('.story-content.main').each(function() {

                    var objectBottom = $(this).offset().top + $(this).outerHeight();

                    if (objectBottom < windowBottom) { //object comes into view (scrolling down)

                        var calc3 = (windowBottom - objectBottom) / range;

                        $(this).css({ 'opacity': calc3 });

                        if (calc3 > '1') {
                            $(this).css({ 'opacity': 1 });
                        } else if ( calc3 < '0' ) {
                            $(this).css({ 'opacity': 0 });
                        } else if (calc3 > '0') {
                            // do nothing
                        }

                    }

                })


                // FADE TABLE IN AT BOTTOM OF PAGE

                $('.table').each(function() {

                    // tall object so fade in based on the top of it
                    var objectTop = $(this).offset().top;

                    if (objectTop < windowBottom) { //object comes into view (scrolling down)

                        var calc4 = (windowBottom - objectTop) / range;

                        // console.log(calc4);

                        $(this).css({ 'opacity': calc4 });

                        if (calc4 > '1') {
                            $(this).css({ 'opacity': 1 });
                        } else if ( calc4 < '0' ) {
                            $(this).css({ 'opacity': 0 });
                        } else if (calc4 > '0') {
                            // do nothing
                        }

                    }

                })


            
            });


        }
    });



});

// SCROLL WINDOW TO TOP
// so resets on refresh

$(document).ready(function(){
    $('html').animate({scrollTop:0}, 1);
    $('body').animate({scrollTop:0}, 1);
    // $droplinks.css({ 'visibility': 'visible' });
});

// functions to pause and play the top video - can't use JQuery

var vid = document.getElementById("intro-vid"); 

function playVid() { 
    vid.play(); 
} 

function pauseVid() { 
    vid.pause(); 
}

// TWITTER SHARE ACTIONS

$("#twitter").on("click", function() {

    // Remove existing iframe
    $('#tweet iframe').remove();

    var baseTweet = "https://twitter.com/intent/tweet?url=http%3A%2F%2Fcarbonbrief.org&text=";
    var text = "Interactive: The impacts of climate change at 1.5C, 2C and beyond";
    var encoded = encodeURI(text);
    var customTweet = baseTweet += encoded;

    $('#twitter > a').attr('href', customTweet);

});