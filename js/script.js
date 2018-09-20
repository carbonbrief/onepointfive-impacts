// Instantiation
$(function(){

    // variables
    var $intro = $('.intro')
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

    var enterEvents = function (ev, item) {
        
        if(item.index === 0){

            
            
        } else if (item.index === 1) {
            // play video after the second background enters
            playVid();

            // STICKY SIDE NAV
            $sideNav.removeClass('nav-fixed').addClass('nav-moving');
            
        } else if (item.index === 3) {
            // do nothing
            
        } else {
            // item.el.css('background-color', '#333333');
            // $map.css( "background-image", "url('img/" + item.data.map + ".svg')");
        }

        // console.log(item);
    }

    var exitEvents = function (ev, item) {

        if(item.index === 0){

        } else if (item.index === 1) {

            // STICKY SIDE NAV
            $sideNav.removeClass('nav-moving').addClass('nav-fixed');

            // pause video after the second background exits
            pauseVid();
            
        } else {
            // item.el.css('background-color', '#333333');
        }
    }

    var focusEvents = function (ev, item) {

        // SIDE NAV STYLING
        // remove previous styling
        $('li', $sideNav).removeClass('nav-active');

        // as don't need any styling on first story
        if(item.index > 1){
            // the .eq() method reduces the set of matched elements to the one at the specified index.
            $('li', $sideNav).eq(item.index - 2).addClass('nav-active');
        }

        // hide top arrow when at top
        if (item.index < 3) {
            $arrowUp.css("visibility", "hidden");
        } else {
            $arrowUp.css("visibility", "visible");
        }

        // hide down arrow when at bottom
        if (item.index > 3) {
            $arrowDown.css("visibility", "hidden");
        } else {
            $arrowDown.css("visibility", "visible");
        }
        
        console.log(item.data.name + ", is now active!");

        // UPDATE MAP
        if (item.index < 5 && item.index > 1) {
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

        if(item.index > 1 && item.index < 6){

            triggerTableUpdate();

        }

        // SHOW EXTRA INFO ON MOUSEOVER

        $("p .fa-info-circle").on("mouseover", function(event) {

            var x = function () {
                if (windowWidth > 750) {
                    return event.pageX - 150;
                } else if (windowWidth < 749 && windowWidth > 650) {
                    return event.pageX - 85;
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
                // item.el.height("500").css("min-height", "300px");
            } else if (item.index === 1) {
                // don't append anything
                item.el.addClass("story-intro2");
                // item.el.height("300").css("min-height", "300px");
            } else if (item.index > 1 && item.index < 6) {

                item.el.addClass("story-middle");
 
                // build impacts from data
                item.el.append(
                    "<div class='story-mask'><div class='story-content main'><h2><span class='title-span'>"
                    + item.data.icon +
                    "   " 
                    + item.data.title 
                    + "</span></h2><p>" 
                    + item.data.text 
                    + " <i class='fas fa-info-circle'></i></p></div></div>"
                );

                // add their background images
                // might be better to do as a div so a mask can be added
                item.el.css({
                    "background-image": "url('" + item.data.background + "')",
                    "background-repeat": "no-repeat",
                    "background-size": "cover"
                });
            } else if (item.index === 6) {

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
                // +2 since not counting title and first background
                that.index($('li', $droplinks).index($(this)) + 2);
            });

            // SET UP SIDE NAV
            $sideNav.on('click', 'li', function() {
                // +1 since not counting title
                that.index($('li', $sideNav).index($(this)) + 2);
            });


            $arrowUp.on('click', function() {

                // find which nav circle is active
                var active = $('li.nav-active').index();

                // move the scrolly up one
                // don't need to subtract since not counting title
                that.index(active + 1);

            });

            $arrowDown.on('click', function() {

                // find which nav circle is active
                var active = $('li.nav-active').index();

                // move the scrolly down one
                that.index(active + 3);

            });



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
    var text = "Interactive: How the world will look at 1.5C and 2C of warming";
    var encoded = encodeURI(text);
    var customTweet = baseTweet += encoded;

    $('#twitter > a').attr('href', customTweet);

});