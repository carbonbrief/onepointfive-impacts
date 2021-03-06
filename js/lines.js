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

// global lines desktop

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

// global lines laptop

var data1Laptop = [{
    name: "Line 2",
    values: [
        {length: "65", across: "100"},
        {length: "105", across: "100"},
        {length: "125", across: "300"},
        {length: "1955", across: "300"},
        {length: "1975", across: "100"},
        {length: "2000", across: "100"}
    ]
},{
    name: "Line 3",
    values: [
        {length: "65", across: "100"},
        {length: "105", across: "100"},
        {length: "125", across: "400"},
        {length: "1955", across: "400"},
        {length: "1975", across: "100"},
        {length: "2000", across: "100"}
    ]
},{
    name: "Line 4",
    values: [
        {length: "65", across: "100"},
        {length: "105", across: "100"},
        {length: "125", across: "500"},
        {length: "1955", across: "500"},
        {length: "1975", across: "100"},
        {length: "2000", across: "100"}
    ]
}]

// global lines mobile

var data1Mobile = [{
        name: "Line 2",
        values: [
            {length: "95", across: "0"},
            {length: "110", across: "0"},
            {length: "130", across: "100"},
            {length: "1920", across: "100"},
            {length: "1950", across: "0"},
            {length: "2000", across: "0"}
        ]
    },{
        name: "Line 3",
        values: [
            {length: "95", across: "000"},
            {length: "110", across: "000"},
            {length: "130", across: "200"},
            {length: "1920", across: "200"},
            {length: "1950", across: "000"},
            {length: "2000", across: "000"}
        ]
    },{
        name: "Line 4",
        values: [
            {length: "95", across: "000"},
            {length: "110", across: "000"},
            {length: "130", across: "300"},
            {length: "1920", across: "300"},
            {length: "1950", across: "000"},
            {length: "2000", across: "000"}
        ]
}] 

// data for lines below Europe

var data2 = [{
        name: "Line 2",
        values: [
            {length: "0", across: "100"},
            {length: "15", across: "100"},
            {length: "30", across: "300"},
            // americas
            {length: "1315", across: "300"},
            {length: "1330", across: "100"},
            {length: "1360", across: "100"},
            {length: "1375", across: "300"},
            // sids
            {length: "2404", across: "300"},
            {length: "2419", across: "100"},
            {length: "2449", across: "100"},
            {length: "2464", across: "300"},
            // africa
            {length: "2789", across: "300"},
            {length: "2804", across: "100"},
            {length: "2834", across: "100"},
            {length: "2849", across: "300"},
            // asia
            {length: "3492", across: "300"},
            {length: "3507", across: "100"},
            {length: "3537", across: "100"},
            {length: "3552", across: "300"},
            // china
            {length: "4711", across: "300"},
            {length: "4726", across: "100"},
            {length: "4756", across: "100"},
            {length: "4771", across: "300"},
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
            {length: "1315", across: "400"},
            {length: "1330", across: "100"},
            {length: "1360", across: "100"},
            {length: "1375", across: "400"},
            // sids
            {length: "2404", across: "400"},
            {length: "2419", across: "100"},
            {length: "2449", across: "100"},
            {length: "2464", across: "400"},
            // africa
            {length: "2789", across: "400"},
            {length: "2804", across: "100"},
            {length: "2834", across: "100"},
            {length: "2849", across: "400"},
            // asia
            {length: "3492", across: "400"},
            {length: "3507", across: "100"},
            {length: "3537", across: "100"},
            {length: "3552", across: "400"},
            // china
            {length: "4711", across: "400"},
            {length: "4726", across: "100"},
            {length: "4756", across: "100"},
            {length: "4771", across: "400"},
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
            {length: "1315", across: "500"},
            {length: "1330", across: "100"},
            {length: "1360", across: "100"},
            {length: "1375", across: "500"},
            // sids
            {length: "2404", across: "500"},
            {length: "2419", across: "100"},
            {length: "2449", across: "100"},
            {length: "2464", across: "500"},
            // africa
            {length: "2789", across: "500"},
            {length: "2804", across: "100"},
            {length: "2834", across: "100"},
            {length: "2849", across: "500"},
            // asia
            {length: "3492", across: "500"},
            {length: "3507", across: "100"},
            {length: "3537", across: "100"},
            {length: "3552", across: "500"},
            // china
            {length: "4711", across: "500"},
            {length: "4726", across: "100"},
            {length: "4756", across: "100"},
            {length: "4771", across: "500"},
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

var data2Laptop = [{
    name: "Line 2",
    values: [
        {length: "0", across: "100"},
        {length: "15", across: "100"},
        {length: "30", across: "300"},
        // americas
        {length: "1313", across: "300"},
        {length: "1328", across: "100"},
        {length: "1358", across: "100"},
        {length: "1373", across: "300"},
        // sids
        {length: "2402", across: "300"},
        {length: "2417", across: "100"},
        {length: "2447", across: "100"},
        {length: "2462", across: "300"},
        // africa
        {length: "2786", across: "300"},
        {length: "2801", across: "100"},
        {length: "2831", across: "100"},
        {length: "2846", across: "300"},
        // asia
        {length: "3490", across: "300"},
        {length: "3505", across: "100"},
        {length: "3535", across: "100"},
        {length: "3550", across: "300"},
        // china
        {length: "4707", across: "300"},
        {length: "4722", across: "100"},
        {length: "4752", across: "100"},
        {length: "4767", across: "300"},
        // australasia
        {length: "5412", across: "300"},
        {length: "5427", across: "100"},
        {length: "5457", across: "100"},
        {length: "5472", across: "300"},
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
        {length: "1313", across: "400"},
        {length: "1328", across: "100"},
        {length: "1358", across: "100"},
        {length: "1373", across: "400"},
        // sids
        {length: "2402", across: "400"},
        {length: "2417", across: "100"},
        {length: "2447", across: "100"},
        {length: "2462", across: "400"},
        // africa
        {length: "2786", across: "400"},
        {length: "2801", across: "100"},
        {length: "2831", across: "100"},
        {length: "2846", across: "400"},
        // asia
        {length: "3490", across: "400"},
        {length: "3505", across: "100"},
        {length: "3535", across: "100"},
        {length: "3550", across: "400"},
        // china
        {length: "4707", across: "400"},
        {length: "4722", across: "100"},
        {length: "4752", across: "100"},
        {length: "4767", across: "400"},
        // australasia
        {length: "5412", across: "400"},
        {length: "5427", across: "100"},
        {length: "5457", across: "100"},
        {length: "5472", across: "400"},
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
        {length: "1313", across: "500"},
        {length: "1328", across: "100"},
        {length: "1358", across: "100"},
        {length: "1373", across: "500"},
        // sids
        {length: "2402", across: "500"},
        {length: "2417", across: "100"},
        {length: "2447", across: "100"},
        {length: "2462", across: "500"},
        // africa
        {length: "2786", across: "500"},
        {length: "2801", across: "100"},
        {length: "2831", across: "100"},
        {length: "2846", across: "500"},
        // asia
        {length: "3490", across: "500"},
        {length: "3505", across: "100"},
        {length: "3535", across: "100"},
        {length: "3550", across: "500"},
        // china
        {length: "4707", across: "500"},
        {length: "4722", across: "100"},
        {length: "4752", across: "100"},
        {length: "4767", across: "500"},
        // australasia
        {length: "5412", across: "500"},
        {length: "5427", across: "100"},
        {length: "5457", across: "100"},
        {length: "5472", across: "500"},
        // end
        {length: "5985", across: "500"},
        {length: "5995", across: "100"},
        {length: "6000", across: "100"}
    ]
}]

var data2Mobile = [{
    name: "Line 2",
    values: [
        {length: "0", across: "0"},
        {length: "15", across: "0"},
        {length: "30", across: "100"},
        // americas
        {length: "1308", across: "100"},
        {length: "1323", across: "0"},
        {length: "1353", across: "0"},
        {length: "1368", across: "100"},
        // sids
        {length: "2395", across: "100"},
        {length: "2410", across: "0"},
        {length: "2440", across: "0"},
        {length: "2455", across: "100"},
        // africa
        {length: "2778", across: "100"},
        {length: "2793", across: "0"},
        {length: "2823", across: "0"},
        {length: "2838", across: "100"},
        // asia
        {length: "3482", across: "100"},
        {length: "3497", across: "0"},
        {length: "3527", across: "0"},
        {length: "3542", across: "100"},
        // china
        {length: "4697", across: "100"},
        {length: "4712", across: "0"},
        {length: "4742", across: "0"},
        {length: "4757", across: "100"},
        // australasia
        {length: "5401", across: "100"},
        {length: "5416", across: "0"},
        {length: "5446", across: "0"},
        {length: "5461", across: "100"},
        // end
        {length: "5980", across: "100"},
        {length: "5990", across: "0"}
        // {length: "6000", across: "100"}
    ]
},{
    name: "Line 3",
    values: [
        {length: "0", across: "0"},
        {length: "15", across: "0"},
        {length: "30", across: "200"},
        // americas
        {length: "1308", across: "200"},
        {length: "1323", across: "0"},
        {length: "1353", across: "0"},
        {length: "1368", across: "200"},
        // sids
        {length: "2395", across: "200"},
        {length: "2410", across: "0"},
        {length: "2440", across: "0"},
        {length: "2455", across: "200"},
        // africa
        {length: "2778", across: "200"},
        {length: "2793", across: "0"},
        {length: "2823", across: "0"},
        {length: "2838", across: "200"},
        // asia
        {length: "3482", across: "200"},
        {length: "3497", across: "0"},
        {length: "3527", across: "0"},
        {length: "3542", across: "200"},
        // china
        {length: "4697", across: "200"},
        {length: "4712", across: "0"},
        {length: "4742", across: "0"},
        {length: "4757", across: "200"},
        // australasia
        {length: "5401", across: "200"},
        {length: "5416", across: "0"},
        {length: "5446", across: "0"},
        {length: "5461", across: "200"},
        // end
        {length: "5980", across: "200"},
        {length: "5990", across: "0"}
        // {length: "6000", across: "100"}
    ]
},{
    name: "Line 4",
    values: [
        {length: "0", across: "0"},
        {length: "15", across: "0"},
        {length: "30", across: "300"},
        // americas
        {length: "1308", across: "300"},
        {length: "1323", across: "0"},
        {length: "1353", across: "0"},
        {length: "1368", across: "300"},
        // sids
        {length: "2395", across: "300"},
        {length: "2410", across: "0"},
        {length: "2440", across: "0"},
        {length: "2455", across: "300"},
        // africa
        {length: "2778", across: "300"},
        {length: "2793", across: "0"},
        {length: "2823", across: "0"},
        {length: "2838", across: "300"},
        // asia
        {length: "3482", across: "300"},
        {length: "3497", across: "0"},
        {length: "3527", across: "0"},
        {length: "3542", across: "300"},
        // china
        {length: "4697", across: "300"},
        {length: "4712", across: "0"},
        {length: "4742", across: "0"},
        {length: "4757", across: "300"},
        // australasia
        {length: "5401", across: "300"},
        {length: "5416", across: "0"},
        {length: "5446", across: "0"},
        {length: "5461", across: "300"},
        // end
        {length: "5980", across: "300"},
        {length: "5990", across: "0"}
        // {length: "6000", across: "100"}
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

function drawLines1Desktop () {

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

function drawLines1Laptop () {

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
    .data(data1Laptop).enter()
    .append('g')
    .attr('class', 'line-group')
    .append('path')
    .attr('class', 'line')  
    .attr("d", function(d) { return line(d.values); })
    .style('stroke', "#f3f3f3")
    .call(transition);

}

function drawLines1Mobile () {

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

    x2.domain([0, 400]);
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
    .data(data1Mobile).enter()
    .append('g')
    .attr('class', 'line-group')
    .append('path')
    .attr('class', 'line')  
    .attr("d", function(d) { return line2(d.values); })
    .style('stroke', "#f3f3f3")
    .call(transition);

}

function drawLines2Desktop () {

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
    .data(data2).enter()
    .append('g')
    .attr('class', 'line-group')
    .append('path')
    .attr('class', 'line')  
    .attr("d", function(d) { return line3(d.values); })
    .style('stroke', "#f3f3f3")
    .call(transition);

}

function drawLines2Laptop () {

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
    .data(data2Laptop).enter()
    .append('g')
    .attr('class', 'line-group')
    .append('path')
    .attr('class', 'line')  
    .attr("d", function(d) { return line3(d.values); })
    .style('stroke', "#f3f3f3")
    .call(transition);

}

function drawLines2Mobile () {

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

    x3.domain([0, 400]);
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
    .data(data2Mobile).enter()
    .append('g')
    .attr('class', 'line-group')
    .append('path')
    .attr('class', 'line')  
    .attr("d", function(d) { return line3(d.values); })
    .style('stroke', "#f3f3f3")
    .call(transition);

}

setTimeout(function(){
    
    if (screenWidth > 1150) {
        drawLines1Desktop();
        drawLines2Desktop();
    } else if (screenWidth < 1150 && screenWidth > 650) {
        drawLines1Laptop();
        drawLines2Laptop();
    } else {
        drawLines1Mobile();
        drawLines2Mobile();
    }

}, 1000);

window.addEventListener('resize', function() {
    if (screenWidth > 1150) {
        drawLines1Desktop();
        drawLines2Desktop();
    } else if (screenWidth < 1150 && screenWidth > 650) {
        drawLines1Laptop();
        drawLines2Laptop();
    } else {
        drawLines1Mobile();
        drawLines2Mobile();
    }
});