var windowWidth = $(window).width();

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
        } else if (item.index > 17 && item.index < 39) {
            $('#europe-nav').addClass('nav-active');
        } else if (item.index > 38 && item.index < 56) {
            $('#americas-nav').addClass('nav-active');
        } else if (item.index > 55 && item.index < 62) {
            $('#sids-nav').addClass('nav-active');
        } else if (item.index > 61 && item.index < 73) {
            $('#africa-nav').addClass('nav-active');
        } else if (item.index > 72 && item.index < 92) {
            $('#asia-nav').addClass('nav-active');
        } else if (item.index > 91 && item.index < 103) {
            $('#china-nav').addClass('nav-active');
        } else if (item.index > 102 && item.index < 112) {
            $('#australasia-nav').addClass('nav-active');
        } else if (item.index > 111) {
            $('#footer-nav').addClass('nav-active');
        } else if (item.index == 2) {
            $('#home-nav').addClass('nav-active');
        }

        // hide top arrow when at top
        if (item.index < 4) {
            $arrowUp.css("visibility", "hidden");
        } else {
            $arrowUp.css("visibility", "visible");
        }

        // hide down arrow when at bottom
        if (item.index > 111) {
            $arrowDown.css("visibility", "hidden");
        } else {
            $arrowDown.css("visibility", "visible");
        }
        

        // UPDATE MAP
        if (item.index < 112 && item.index > 2) {
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

        if(item.index > 0 && item.index < 113){

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

        if (item.index == 39) {
            vid2.play();
        } else {
            vid2.pause();
        }

        if (item.index == 56) {
            vid3.play();
        } else {
            vid3.pause();
        }

        if (item.index == 62) {
            vid4.play();
        } else {
            vid4.pause();
        }

        if (item.index == 73) {
            vid5.play();
        } else {
            vid5.pause();
        }

        if (item.index == 92) {
            vid6.play();
        } else {
            vid6.pause();
        }

        if (item.index == 103) {
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
                    "<div class='story-mask'><div class='story-content' style='opacity: 1;'><p>"
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
            } else if (item.index > 2 && item.index < 112) {

                item.el.addClass("story-middle");
 
                // build from data
                item.el.append(
                    "<div class='story-mask'><div class='story-content main'><h2><span class='title-span'>"
                    + item.data.icon +
                    "   " 
                    + item.data.title 
                    + "</span></h2><p><i class='fas fa-info-circle'></i></p><p><span class='reference-span'><a href='#reference-list'>"
                    + item.data.reference
                    + "</a></span></p><p id='image-credit' class='image-credit-main'>Image credit: "
                    + item.data.credit
                    +"</p></div></div>"
                );

                if (windowWidth > 650) {
                    // add their background images
                    item.el.css({
                        "background-image": "url('" + item.data.background + "')",
                        "background-repeat": "no-repeat",
                        "background-size": "cover"
                    });
                } else {
                    // do nothing
                }


            } else if (item.index === 112) {

                // change style via class so can make responsive
                item.el.addClass("methodology");

                // build methodology
                item.el.append(
                    "<div class='story-mask'><div class='story-content footer' style='margin-top: 180px !important;'><h2><span class='title-span'><i class='"
                    + item.data.icon +
                    "'></i></span></h2><p class='credit'>" 
                    + item.data.text 
                    + "</p></div></div>"
                );

            } else if (item.index === 113) {

                item.el.addClass("story-end");

                // build methodology
                item.el.append(
                    "<div class='story-mask'><div class='story-content footer'>" 
                    + item.data.text 
                    + "</div></div>"
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
                    that.index(73);
                } else if (id =="china") {
                    that.index(92);
                } else if (id =="americas") {
                    that.index(39);
                } else if (id =="africa") {
                    that.index(62);
                } else if (id =="australasia") {
                    that.index(103);
                } else if (id =="sids") {
                    that.index(56);
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
                    that.index(73);
                } else if (id =="china-nav") {
                    that.index(92);
                } else if (id =="americas-nav") {
                    that.index(39);
                } else if (id =="africa-nav") {
                    that.index(62);
                } else if (id =="australasia-nav") {
                    that.index(103);
                } else if (id =="sids-nav") {
                    that.index(56);
                } else if (id =="footer-nav") {
                    that.index(112);
                } else if (id =="home-nav") {
                    that.index(2);
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

// POPULATE VIDEOS DEPENDING ON WINDOW WIDTH

var desktopPath = "video/large/";

var laptopPath = "video/medium/";

var mobilePath = "video/small/";

var introVid = "GettyImages-474551988.mp4";

var europeVid = "GettyImages-664979740.mp4";

var americasVid = "GettyImages-457295236.mp4";

var sidsVid = "GettyImages-638715874.mp4";

var africaVid = "GettyImages-473313525.mp4";

var asiaVid = "GettyImages-473204581.mp4";

var chinaVid = "GettyImages-162980082.mp4";

var australasiaVid = "GettyImages-473300279.mp4";

if (windowWidth > 1200) {

    $('#intro-vid source').attr('src', desktopPath + introVid);
    $("#intro-vid")[0].load();

    $("#europe-vid source").attr("src", desktopPath + europeVid);
    $("#europe-vid")[0].load();

    $("#americas-vid source").attr("src", desktopPath + americasVid);
    $("#americas-vid")[0].load();

    $("#sids-vid source").attr("src", desktopPath + sidsVid);
    $("#sids-vid")[0].load();

    $("#africa-vid source").attr("src", desktopPath + africaVid);
    $("#africa-vid")[0].load();

    $("#asia-vid source").attr("src", desktopPath + asiaVid);
    $("#asia-vid")[0].load();

    $("#china-vid source").attr("src", desktopPath + chinaVid);
    $("#china-vid")[0].load();

    $("#australasia-vid source").attr("src", desktopPath + australasiaVid);
    $("#australasia-vid")[0].load();

} else if (windowWidth < 1201 && windowWidth > 555) {

    $('#intro-vid source').attr('src', desktopPath + introVid);
    $("#intro-vid")[0].load();

    $("#europe-vid source").attr("src", laptopPath + europeVid);
    $("#europe-vid")[0].load();

    $("#americas-vid source").attr("src", laptopPath + americasVid);
    $("#americas-vid")[0].load();

    $("#sids-vid source").attr("src", laptopPath + sidsVid);
    $("#sids-vid")[0].load();

    $("#africa-vid source").attr("src", laptopPath + africaVid);
    $("#africa-vid")[0].load();

    $("#asia-vid source").attr("src", laptopPath + asiaVid);
    $("#asia-vid")[0].load();

    $("#china-vid source").attr("src", laptopPath + chinaVid);
    $("#china-vid")[0].load();

    $("#australasia-vid source").attr("src", laptopPath + australasiaVid);
    $("#australasia-vid")[0].load();

} else {

    $('#intro-vid source').attr('src', laptopPath + introVid);
    $("#intro-vid")[0].load();

    $("#europe-vid source").attr("src", mobilePath + europeVid);
    $("#europe-vid")[0].load();

    $("#americas-vid source").attr("src", mobilePath + americasVid);
    $("#americas-vid")[0].load();

    $("#sids-vid source").attr("src", mobilePath + sidsVid);
    $("#sids-vid")[0].load();

    $("#africa-vid source").attr("src", mobilePath + africaVid);
    $("#africa-vid")[0].load();

    $("#asia-vid source").attr("src", mobilePath + asiaVid);
    $("#asia-vid")[0].load();

    $("#china-vid source").attr("src", mobilePath + chinaVid);
    $("#china-vid")[0].load();

    $("#australasia-vid source").attr("src", mobilePath + australasiaVid);
    $("#australasia-vid")[0].load();

}

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

    var credit = "%20—%20via%20@CarbonBrief";

    var baseTweet = "https://twitter.com/intent/tweet?url=https%3A%2F%2Finteractive.carbonbrief.org/impacts-climate-change-one-point-five-degrees-two-degrees/?utm_source=ShareIconTwitter&utm_campaign=megagraphic&text=";
    var text = "Interactive: The impacts of climate change at 1.5C, 2C and beyond";
    var encoded = encodeURI(text);
    var customTweet = baseTweet += encoded += credit;

    $('#twitter > a').attr('href', customTweet);

});