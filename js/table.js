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

var getHeader6 = {
    "name": "",
    "1.5C": "1.5C",
    "2C": "2C",
    "3C": "4.5C"
}

var getHeader7 = {
    "name": "",
    "1.5C": "1.5C",
    "2C": "2C",
    "3C": "4C"
}

var getHeader8 = {
    "name": "",
    "1.5C": "",
    "2C": "",
    "3C": ""
}

var getHeader9 = {
    "name": "",
    "1.5C": "1.5C",
    "2C": "2C",
    "3C": "3.7C"
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
        // could shorten the way writing this but making it chronological for now
        if (dataName =="instructions") {
            return getHeader1[column];
        } else if (dataName =="placeholder")  {
            return getHeader8[column];
        } else if (dataName =="sealevel")  {
            return getHeader2[column];
        } else if (dataName =="marineheatwaves")  {
            return getHeader3[column];
        } else if (dataName =="ice")  {
            return getHeader4[column];
        } else if (dataName =="snow")  {
            return getHeader5[column];
        } else if (dataName =="temperature")  {
            return getHeader5[column];
        } else if (dataName =="heatwaves")  {
            return getHeader5[column];
        } else if (dataName =="rainfall")  {
            return getHeader5[column];
        } else if (dataName =="rivers")  {
            return getHeader5[column];
        } else if (dataName =="drought")  {
            return getHeader4[column];
        } else if (dataName =="storms")  {
            return getHeader5[column];
        } else if (dataName =="crops1")  {
            return getHeader5[column];
        } else if (dataName =="crops2")  {
            return getHeader5[column];
        } else if (dataName =="nature")  {
            return getHeader6[column];
        } else if (dataName =="economy")  {
            return getHeader7[column];
        } else if (dataName =="health")  {
            return getHeader5[column];
        } else if (dataName =="europeHotDays")  {
            return getHeader4[column];
        } else if (dataName =="europeHotNights")  {
            return getHeader4[column];
        } else if (dataName =="europeTemp")  {
            return getHeader4[column];
        } else if (dataName =="europeFrost")  {
            return getHeader4[column];
        } else if (dataName =="europeWinterTemp")  {
            return getHeader4[column];
        } else if (dataName =="europeHeatwave")  {
            return getHeader5[column];
        } else if (dataName =="europeColdwave")  {
            return getHeader5[column];
        } else if (dataName =="europeRainfallWinterMaxDaily")  {
            return getHeader4[column];
        } else if (dataName =="europeRainfallSummerMaxDaily")  {
            return getHeader4[column];
        } else if (dataName =="europeDryDays")  {
            return getHeader4[column];
        } else if (dataName =="europeRainIntensity")  {
            return getHeader5[column];
        } else if (dataName =="europeDrought")  {
            return getHeader4[column];
        } else if (dataName =="europeRivers1")  {
            return getHeader4[column];
        } else if (dataName =="europeRivers2")  {
            return getHeader7[column];
        } else if (dataName =="europeCrops")  {
            return getHeader5[column];
        } else if (dataName =="europeEconomy")  {
            return getHeader7[column];
        } else if (dataName =="europeHealth")  {
            return getHeader5[column];
        } else if (dataName =="americasTemp")  {
            return getHeader5[column];
        } else if (dataName =="americasMaxTemp")  {
            return getHeader5[column];
        } else if (dataName =="americasWarmSpell")  {
            return getHeader5[column];
        } else if (dataName =="americasWarmExtremes")  {
            return getHeader5[column];
        } else if (dataName =="americasColdExtremes")  {
            return getHeader5[column];
        } else if (dataName =="americasRainfall")  {
            return getHeader5[column];
        } else if (dataName =="americasDrySpell")  {
            return getHeader5[column];
        } else if (dataName =="americasRainIntensity")  {
            return getHeader5[column];
        } else if (dataName =="americasRainExtremes")  {
            return getHeader5[column];
        } else if (dataName =="americasRainSeason")  {
            return getHeader5[column];
        } else if (dataName =="americasDrought")  {
            return getHeader4[column];
        } else if (dataName =="americasStorms")  {
            return getHeader5[column];
        } else if (dataName =="americasCrops")  {
            return getHeader5[column];
        } else if (dataName =="americasHealth")  {
            return getHeader9[column];
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