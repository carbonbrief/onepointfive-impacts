// headers

var getHeader1 = {
    "name": "",
    "1.5C": "1.5C",
    "2C": "2C",
    "3C": "3C+"
}

var getHeader2 = {
    "name": "",
    "1.5C": "1.5C",
    "2C": "2C",
    "3C": "2.5C"
}

var getHeader3 = {
    "name": "",
    "1.5C": "1.5C",
    "2C": "2C",
    "3C": "3.5C"
}

var getHeader3 = {
    "name": "",
    "1.5C": "1.5C",
    "2C": "2C",
    "3C": "3C"
}

// objects

// placeholder text to stop bug where from adding species data twice when scrolling up and down
var instructions = [
    { "name": "", "1.5C": "", "2C": "", "3C": ""},
    { "name": "", "1.5C": "", "2C": "", "3C": ""},
    { "name": "", "1.5C": "", "2C": "", "3C": ""}
];

var sealevel = [
    { "name": "By 2100", "1.5C": "<span class='arrow-up'>&#9650;</span> 48cm <br><span class='uncertainty'>(+28–+82cm)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 56cm <br><span class='uncertainty'>(+28–+96cm)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 58cm <br><span class='uncertainty'>(+37–+93cm)</span>"},
    { "name": "<br><span class='table-subtitle'>Contributions from</span>", "1.5C": "", "2C": "", "3C": ""},
    { "name": "Antarctic ice sheet", "1.5C": "<span class='arrow-up'>&#9650;</span> 6cm <br><span class='uncertainty'>(-8–+35cm)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 6cm <br><span class='uncertainty'>(-8–+34cm)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 6cm <br><span class='uncertainty'>(-8–+34cm)</span>"},
    { "name": "Greenland ice sheet", "1.5C": "<span class='arrow-up'>&#9650;</span> 7cm <br><span class='uncertainty'>(+3–+19cm)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 8cm <br><span class='uncertainty'>(+2–+22cm)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 8cm <br><span class='uncertainty'>(+2–+22cm)</span>"},
    { "name": "Thermal expansion", "1.5C": "<span class='arrow-up'>&#9650;</span> 19cm <br><span class='uncertainty'>(+10–+27cm)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 25cm <br><span class='uncertainty'>(+7–+42cm)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 26cm <br><span class='uncertainty'>(+16–+35cm)</span>"},
    { "name": "Glaciers and ice caps", "1.5C": "<span class='arrow-up'>&#9650;</span> 11cm <br><span class='uncertainty'>(+6–+15cm)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 11cm <br><span class='uncertainty'>(+2–+21cm)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 13cm <br><span class='uncertainty'>(+9–+17cm)</span>"},
    { "name": "Land water storage", "1.5C": "<span class='arrow-up'>&#9650;</span> 5cm <br><span class='uncertainty'>(+2–+8cm)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 5cm <br><span class='uncertainty'>(+2–+8cm)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 5cm <br><span class='uncertainty'>(+2–+8cm)</span>"}
];

var marineheatwaves = [
    { "name": "Extreme precipitation events", "1.5C": "<span class='arrow-up'>&#9650;</span> 20%", "2C": "<span class='arrow-up'>&#9650;</span> 26%", "3C": "<span class='arrow-up'>&#9650;</span> 28%"},
    { "name": "Maximum 5-day rainfall total", "1.5C": "<span class='arrow-up'>&#9650;</span> 11%", "2C": "<span class='arrow-up'>&#9650;</span> 12%", "3C": "<span class='arrow-up'>&#9650;</span> 14%"},
    { "name": "Consecutive dry days", "1.5C": "<span class='arrow-side'>&#9664;&#9654;</span> 0%", "2C": "<span class='arrow-down'>&#9660;</span> -5%", "3C": "<span class='arrow-down'>&#9660;</span> -8%"}
];

var economy = [
    { "name": "Global per capita GDP in 2100", "1.5C": "<span class='arrow-down one'>&#9660;</span> -8%", "2C": "<span class='arrow-down two'>&#9660;</span> -13%", "3C": ""},
];

var newData;
var dataName;

var t = d3.transition()
    .delay(1000)
    .duration(3000)
    .ease(d3.easeLinear);

var columns = ["name", "1.5C", "2C", "3C"];

var table = d3.select(".table").append("table"),
    thead = table.append("thead"),
    tbody = table.append("tbody");

function tabulate(data, columns) {

    // append the header row
    thead.append("tr")
        .selectAll("th")
        .data(columns)
        .enter()
        .append("th")
        .text(function(column) { 
            return getHeader1[column];
        });

    // create a row for each object in the data
    var rows = tbody.selectAll("tr")
        .data(data)
        .enter()
        .append("tr");

    // create a cell in each row for each column
    var cells = rows.selectAll("td")
        .data(function(row) {
            return columns.map(function(column) {
                return {column: column, value: row[column]};
            });
        })
        .enter()
        .append("td")
        .html(function(d) { return d.value; });
    
    return table;
}

// render the table
var myTable = tabulate(instructions, columns);

// bold the text of the first column
myTable.selectAll('td:nth-child(1)')
.style("font-weight", "bold");

function updateTable () {
    
    var rows = tbody.selectAll("tr")
    .data(newData, function (d) {return d.name;});
    
    rows.enter()
    .append("tr")
    .selectAll("td")
    .data(function (d) {return [d.name, d["1.5C"], d["2C"], d["3C"] ];})
    .enter()
    .append("td")
    .style("opacity", 0)
    .html(function(d) { return d; })
    .transition(t)
    .style("opacity", 1);
    
    rows.exit()
    .remove();
    
    var cells = rows.selectAll('td')
    .data(function (d) {return d.name, d["1.5C"], d["2C"], d["3C"];})
    .html(function (d) {return d;});
    
    cells.enter()
    .append("td")
    .style("opacity", 0)
    .html(function(d) { return d; })
    .transition(t)
    .style("opacity", 1);;
    
    cells.exit()
    .remove();

    // update the column headers
    myTable.selectAll("thead th")
    .text(function(column) {
        if (dataName =="instructions") {
            return getHeader1[column];
        } else if (dataName =="sealevel")  {
            return getHeader2[column];
        } else if (dataName =="marineheatwave")  {
            return getHeader3[column];
        } else if (dataName =="economy")  {
            return getHeader4[column];
        }
    });

    // bold the text of the first column
    myTable.selectAll('td:nth-child(1)')
    .attr("class", "row-header");

    // change colour of column headers
    myTable.selectAll('th:nth-child(2)')
    .style("color", "#B4C7D1");
    myTable.selectAll('th:nth-child(3)')
    .style("color", "#BCABC6");
    myTable.selectAll('th:nth-child(4)')
    .style("color", "#C6A1AE");

}