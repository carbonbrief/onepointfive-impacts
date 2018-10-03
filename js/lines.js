// calculate the width of the chart from the width of the line-wrapper
var width = parseInt(d3.select("#lines1").style("width")),
height = parseInt(d3.select("#lines1").style("height"));

var screenWidth = $(window).width();

var svg = d3.select("#lines1").append("svg")
    .attr("id", "svg-1")
    .attr("width", width)
    .attr("height", height)
    .append("g");

var svg2 = d3.select("#lines2").append("svg")
    .attr("id", "svg-2")
    .attr("width", width)
    .attr("height", height)
    .append("g");

var data = [{
    name: "Line 2",
    values: [
        {length: "60", across: "100"},
        {length: "110", across: "100"},
        {length: "130", across: "300"},
        {length: "1955", across: "300"},
        {length: "1975", across: "100"},
        {length: "2000", across: "100"}
    ]
},{
    name: "Line 3",
    values: [
        {length: "60", across: "100"},
        {length: "110", across: "100"},
        {length: "130", across: "400"},
        {length: "1955", across: "400"},
        {length: "1975", across: "100"},
        {length: "2000", across: "100"}
    ]
},{
    name: "Line 4",
    values: [
        {length: "60", across: "100"},
        {length: "110", across: "100"},
        {length: "130", across: "500"},
        {length: "1955", across: "500"},
        {length: "1975", across: "100"},
        {length: "2000", across: "100"}
    ]
}]

// alterntive layout for smaller screens

var data2 = [{
        name: "Line 2",
        values: [
            {length: "25", across: "100"},
            {length: "80", across: "100"},
            {length: "100", across: "200"},
            {length: "1920", across: "200"},
            {length: "1950", across: "100"},
            {length: "2000", across: "100"}
        ]
    },{
        name: "Line 3",
        values: [
            {length: "25", across: "100"},
            {length: "80", across: "100"},
            {length: "100", across: "300"},
            {length: "1920", across: "300"},
            {length: "1950", across: "100"},
            {length: "2000", across: "100"}
        ]
    },{
        name: "Line 4",
        values: [
            {length: "25", across: "100"},
            {length: "80", across: "100"},
            {length: "100", across: "400"},
            {length: "1920", across: "400"},
            {length: "1950", across: "100"},
            {length: "2000", across: "100"}
        ]
}] 

// data for lines below Europe

var data3 = [{
        name: "Line 2",
        values: [
            {length: "0", across: "100"},
            {length: "15", across: "100"},
            {length: "30", across: "300"},
            // americas
            {length: "1350", across: "300"},
            {length: "1365", across: "100"},
            {length: "1395", across: "100"},
            {length: "1410", across: "300"},
            // sids
            {length: "2511", across: "300"},
            {length: "2526", across: "100"},
            {length: "2556", across: "100"},
            {length: "2571", across: "300"},
            // africa
            {length: "2947", across: "300"},
            {length: "2962", across: "100"},
            {length: "2992", across: "100"},
            {length: "3007", across: "300"},
            // asia
            {length: "3528", across: "300"},
            {length: "3543", across: "100"},
            {length: "3573", across: "100"},
            {length: "3588", across: "300"},
            // china
            {length: "4762", across: "300"},
            {length: "4777", across: "100"},
            {length: "4807", across: "100"},
            {length: "4822", across: "300"},
            // australasia
            {length: "5415", across: "300"},
            {length: "5430", across: "100"},
            {length: "5460", across: "100"},
            {length: "5475", across: "300"},
            // end
            {length: "5985", across: "300"},
            {length: "5995", across: "100"},
            {length: "6000", across: "100"}
        ]
    },{
        name: "Line 3",
        values: [
            {length: "0", across: "100"},
            {length: "15", across: "100"},
            {length: "30", across: "400"},
            // americas
            {length: "1350", across: "400"},
            {length: "1365", across: "100"},
            {length: "1395", across: "100"},
            {length: "1410", across: "400"},
            // sids
            {length: "2511", across: "400"},
            {length: "2526", across: "100"},
            {length: "2556", across: "100"},
            {length: "2571", across: "400"},
            // africa
            {length: "2947", across: "400"},
            {length: "2962", across: "100"},
            {length: "2992", across: "100"},
            {length: "3007", across: "400"},
            // asia
            {length: "3528", across: "400"},
            {length: "3543", across: "100"},
            {length: "3573", across: "100"},
            {length: "3588", across: "400"},
            // china
            {length: "4762", across: "400"},
            {length: "4777", across: "100"},
            {length: "4807", across: "100"},
            {length: "4822", across: "400"},
            // australasia
            {length: "5415", across: "400"},
            {length: "5430", across: "100"},
            {length: "5460", across: "100"},
            {length: "5475", across: "400"},
            // end
            {length: "5985", across: "400"},
            {length: "5995", across: "100"},
            {length: "6000", across: "100"}
        ]
    },{
        name: "Line 4",
        values: [
            {length: "0", across: "100"},
            {length: "15", across: "100"},
            {length: "30", across: "500"},
            // americas
            {length: "1350", across: "500"},
            {length: "1365", across: "100"},
            {length: "1395", across: "100"},
            {length: "1410", across: "500"},
            // sids
            {length: "2511", across: "500"},
            {length: "2526", across: "100"},
            {length: "2556", across: "100"},
            {length: "2571", across: "500"},
            // africa
            {length: "2947", across: "500"},
            {length: "2962", across: "100"},
            {length: "2992", across: "100"},
            {length: "3007", across: "500"},
            // asia
            {length: "3528", across: "500"},
            {length: "3543", across: "100"},
            {length: "3573", across: "100"},
            {length: "3588", across: "500"},
            // china
            {length: "4762", across: "500"},
            {length: "4777", across: "100"},
            {length: "4807", across: "100"},
            {length: "4822", across: "500"},
            // australasia
            {length: "5415", across: "500"},
            {length: "5430", across: "100"},
            {length: "5460", across: "100"},
            {length: "5475", across: "500"},
            // end
            {length: "5985", across: "500"},
            {length: "5995", across: "100"},
            {length: "6000", across: "100"}
        ]
}]

// format data

data.forEach(function(d) { 
    d.values.forEach(function(d) {
      d.length = d.length;
      d.across = +d.across;    
    });
});

// from https://bl.ocks.org/mbostock/5649592

function transition(path) {
    path.transition()
        .duration(5000)
        .attrTween("stroke-dasharray", tweenDash);
}
    
function tweenDash() {
    var l = this.getTotalLength(),
        i = d3.interpolateString("0," + l, l + "," + l);
    return function(t) { return i(t); };
}

// function to trigger at particular scroll point

function drawLines () {

    // get variables again
    
    width = parseInt(d3.select("#lines1").style("width")),
    height = parseInt(d3.select("#lines1").style("height"));

    // change dimensions of svg if window is resized
    
    d3.select("#svg-1")
    .attr("width", width)
    .attr("height", height);

    // set scales again

    var x = d3.scaleLinear()
    .range([0, width]);

    var y = d3.scaleLinear()
    .range([0, height]);

    x.domain([0, 600]);
    y.domain([0, 2000]);

    // define the line
    var line = d3.line()
    .curve(d3.curveLinear)
    .x(function(d) { return x(d.across); })
    .y(function(d) { return y(d.length); });

    // remove old group
    svg.selectAll('g').remove();

    let lines = svg.append('g')
    .attr('class', 'lines');

    lines.selectAll('.line-group')
    .data(data).enter()
    .append('g')
    .attr('class', 'line-group')
    .append('path')
    .attr('class', 'line')  
    .attr("d", function(d) { return line(d.values); })
    .style('stroke', "#f3f3f3")
    .call(transition);

}

function drawLinesMobile () {

    // get variables again

    width = parseInt(d3.select("#lines1").style("width")),
    height = parseInt(d3.select("#lines1").style("height"));

    // change dimensions of svg if window is resized
    
    d3.select("#svg-1")
    .attr("width", width)
    .attr("height", height);

    // second scale for smaller screen

    var x2 = d3.scaleLinear()
    .range([0, width]);

    var y2 = d3.scaleLinear()
    .range([0, height]);

    x2.domain([0, 500]);
    y2.domain([0, 2000]);


    // second lines for smaller screens

    var line2 = d3.line()
    .curve(d3.curveLinear)
    .x(function(d) { return x2(d.across); })
    .y(function(d) { return y2(d.length); });

    // remove old group
    svg.selectAll('g').remove();

    let lines = svg.append('g')
    .attr('class', 'lines');

    lines.selectAll('.line-group')
    .data(data2).enter()
    .append('g')
    .attr('class', 'line-group')
    .append('path')
    .attr('class', 'line')  
    .attr("d", function(d) { return line2(d.values); })
    .style('stroke', "#f3f3f3")
    .call(transition);

}

function drawLines2 () {

    // get variables again
    
    width = parseInt(d3.select("#lines2").style("width")),
    height = parseInt(d3.select("#lines2").style("height"));

    // change dimensions of svg if window is resized
    
    d3.select("#svg-2")
    .attr("width", width)
    .attr("height", height);

    // set scales again

    var x3 = d3.scaleLinear()
    .range([0, width]);

    var y3 = d3.scaleLinear()
    .range([0, height]);

    x3.domain([0, 600]);
    y3.domain([0, 6000]);

    // define the line
    var line3 = d3.line()
    .curve(d3.curveLinear)
    .x(function(d) { return x3(d.across); })
    .y(function(d) { return y3(d.length); });

    // remove old group
    svg2.selectAll('g').remove();

    let lines = svg2.append('g')
    .attr('class', 'lines');

    lines.selectAll('.line-group')
    .data(data3).enter()
    .append('g')
    .attr('class', 'line-group')
    .append('path')
    .attr('class', 'line')  
    .attr("d", function(d) { return line3(d.values); })
    .style('stroke', "#f3f3f3")
    .call(transition);

}

setTimeout(function(){
    
    if (screenWidth > 440) {
        drawLines();
        drawLines2();
    } else {
        drawLinesMobile();
    }
    
}, 1000);

window.addEventListener('resize', function() {
    if (screenWidth > 440) {
        drawLines();
    } else {
        drawLinesMobile();
    }
});