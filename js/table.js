

//  TABLE OBJECTS

    // global objects

        var instructions = [
            { "name": "", "1.5C": "", "2C": "", "3C": ""},
            { "name": "", "1.5C": "", "2C": "", "3C": ""},
            { "name": "", "1.5C": "", "2C": "", "3C": ""}
        ];

        var sealevel = [
            { "name": "<span class='table-subtitle'>Sea level rise</span>", "1.5C": "", "2C": "", "3C": ""},
            { "name": "By 2100", "1.5C": "<span class='arrow-up'>&#9650;</span> 48cm <br><span class='uncertainty'>(+28–+82cm)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 56cm <br><span class='uncertainty'>(+28–+96cm)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 58cm <br><span class='uncertainty'>(+37–+93cm)</span>"},
            { "name": "<br><span class='table-subtitle'>Contributions from</span>", "1.5C": "", "2C": "", "3C": ""},
            { "name": "Antarctic ice sheet", "1.5C": "<span class='arrow-up'>&#9650;</span> 6cm <br><span class='uncertainty'>(-8–+35)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 6cm <br><span class='uncertainty'>(-8–+34)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 6cm <br><span class='uncertainty'>(-8–+34)</span>"},
            { "name": "Greenland ice sheet", "1.5C": "<span class='arrow-up'>&#9650;</span> 7cm <br><span class='uncertainty'>(+3–+19)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 8cm <br><span class='uncertainty'>(+2–+22)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 8cm <br><span class='uncertainty'>(+2–+22)</span>"},
            { "name": "Thermal expansion", "1.5C": "<span class='arrow-up'>&#9650;</span> 19cm <br><span class='uncertainty'>(+10–+27)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 25cm <br><span class='uncertainty'>(+7–+42)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 26cm <br><span class='uncertainty'>(+16–+35)</span>"},
            { "name": "Glaciers and ice caps", "1.5C": "<span class='arrow-up'>&#9650;</span> 11cm <br><span class='uncertainty'>(+6–+15)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 11cm <br><span class='uncertainty'>(+2–+21)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 13cm <br><span class='uncertainty'>(+9–+17)</span>"},
            { "name": "Land water storage", "1.5C": "<span class='arrow-up'>&#9650;</span> 5cm <br><span class='uncertainty'>(+2–+8)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 5cm <br><span class='uncertainty'>(+2–+8)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 5cm <br><span class='uncertainty'>(+2–+8)</span>"}
        ];

        var marineheatwaves = [
            { "name": "<span class='table-subtitle'>Marine heatwaves</span>", "1.5C": "", "2C": "", "3C": ""},
            { "name": "Increase in global marine heatwave days per year", "1.5C": "x16", "2C": "x23", "3C": "x41"},
            { "name": "<br><span class='table-subtitle'>Ocean pH</span>", "1.5C": "", "2C": "", "3C": ""},
            { "name": "By 2050", "1.5C": "<span class='arrow-down'>&#9660;</span> 0.07 <br><span class='uncertainty'>(-0.08–+0.04)</span>", "2C": "<span class='arrow-down'>&#9660;</span> 0.11 <br><span class='uncertainty'>(-0.12–-0.01)</span>", "3C": ""},
            { "name": "By 2050", "1.5C": "<span class='arrow-down'>&#9660;</span> 0.04 <br><span class='uncertainty'>(-0.07–+0.05)</span>", "2C": "<span class='arrow-down'>&#9660;</span> 0.09 <br><span class='uncertainty'>(-0.16–-0.02)</span>", "3C": ""},
            { "name": "By 2050", "1.5C": "<span class='arrow-down'>&#9660;</span> 0.02 <br><span class='uncertainty'>(-0.09–+0.04)</span>", "2C": "<span class='arrow-down'>&#9660;</span> 0.06 <br><span class='uncertainty'>(-0.16–-0.02)</span>", "3C": ""},
            { "name": "<br><span class='table-subtitle'>Atlantic meridional overturning circulation</span>", "1.5C": "", "2C": "", "3C": ""},
            { "name": "AMOC strength in 2100", "1.5C": "<span class='arrow-down'>&#9660;</span> 11%", "2C": "<span class='arrow-down'>&#9660;</span> 34%", "3C": ""}
        ];

        var ice = [
            { "name": "<span class='table-subtitle'>Arctic sea ice</span>", "1.5C": "", "2C": "", "3C": ""},
            { "name": "Probability of an ice-free Arctic summer at least once", "1.5C": "10%", "2C": "80%", "3C": "100%"},
            { "name": "Probability of an ice-free Arctic summer in any one year", "1.5C": "3%", "2C": "16%", "3C": "63%"},
            { "name": "<br><span class='table-subtitle'>Permafrost</span>", "1.5C": "", "2C": "", "3C": ""},
            { "name": "Area of thawed permafrost by 2300", "1.5C": "4.8m km2 <br><span class='uncertainty'>(2.6–6.8)</span>", "2C": "6.6m km2 <br><span class='uncertainty'>(4.4–8.6)</span>", "3C": ""}
        ];

        var snow = [
            { "name": "<span class='table-subtitle'>Snow extent</span>", "1.5C": "", "2C": "", "3C": ""},
            { "name": "Northern hemisphere snow extent in 2080s", "1.5C": "", "2C": "", "3C": ""},
            { "name": "Annual", "1.5C": "", "2C": "", "3C": ""},
            { "name": "Winter", "1.5C": "", "2C": "", "3C": ""},
            { "name": "Spring", "1.5C": "", "2C": "", "3C": ""},
            { "name": "Summer", "1.5C": "", "2C": "", "3C": ""},
            { "name": "Autumn", "1.5C": "", "2C": "", "3C": ""},
            { "name": "<br><span class='table-subtitle'>Maximum monthly snow storage</span>", "1.5C": "", "2C": "", "3C": ""},
        ];

        var temperature = [];

        var heatwaves = [];

        var rainfall = [];

        var rivers = [];

        var drought = [];

        var storms = [];

        var crops = [];

        var nature = [];

        var economy = [];

        var health = [];

    // Europe objects

        var europeHotDaysNights = [];

        var europeTemp = [];

        var europeFrost = [];

        var europeWinterTemp = [];

        var europeHeatwave = [];

        var europeColdwave = [];

        var europeRainfallMaxDaily = [];

        var europeDryDays = [];

        var europeRainIntensity = [];

        var europeDrought = [];

        var europeRivers1 = [];

        var europeRivers2 = [];

        var europeCrops = [];

        var europeEconomy = [];

        var europeHealth = [];

    // Americas objects

        var americasTemp = [];

        var americasMaxTemp = [];

        var americasExtremes = [];

        var americasRainfall = [];

        var americasDrySpell = [];

        var americasRainIntensity = [];

        var americasRainExtremes = [];

        var americasRainSeason = [];

        var americasDrought = [];

        var americasStorms = [];

        var americasCrops = [];

        var americasHealth = [];

    // Caribbean objects

        // Create your own objects as above based on the spreadsheet

    // Africa objects

        // Create your own objects as above based on the spreadsheet

    // Asia objects

        // Create your own objects as above based on the spreadsheet

    // Africa objects

        // Create your own objects as above based on the spreadsheet

    // China objects

        // Create your own objects as above based on the spreadsheet

// TABLE OBJECTS END

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

var getHeader4 = {
    "name": "",
    "1.5C": "1.5C",
    "2C": "2C",
    "3C": "3C"
}

var getHeader5 = {
    "name": "",
    "1.5C": "1.5C",
    "2C": "2C",
    "3C": ""
}

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
.style("width", "33.4%")
.attr("class", "row-header");

myTable.selectAll('th:nth-child(1)')
.style("width", "33.4%")

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
        } else if (dataName =="marineheatwaves")  {
            return getHeader3[column];
        } else if (dataName =="ice")  {
            return getHeader4[column];
        } else if (dataName =="snow")  {
            return getHeader5[column];
        } else if (dataName =="economy")  {
            return getHeader4[column];
        }
    });

    // bold the text of the first column
    myTable.selectAll('td:nth-child(1)')
    .style("width", "33.4%")
    .attr("class", "row-header");

    myTable.selectAll('th:nth-child(1)')
    .style("width", "33.4%");

    // change colour of column headers
    myTable.selectAll('th:nth-child(2)')
    .style("color", "#B4C7D1");
    myTable.selectAll('th:nth-child(3)')
    .style("color", "#BCABC6");
    myTable.selectAll('th:nth-child(4)')
    .style("color", "#C6A1AE");

}