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

var getHeader10 = {
    "name": "",
    "1.5C": "1.5C",
    "2C": "2C",
    "3C": "4.2C"
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
        } else if (dataName =="placeholder")  {
            return getHeader8[column];
        // global headers
        } else if (dataName =="sealevel")  {
            return getHeader2[column];
        } else if (dataName =="marineheatwaves")  {
            return getHeader3[column];
        } else if (dataName =="ice" || dataName =="drought")  {
            return getHeader4[column];
        } else if (dataName =="snow" || dataName =="temperature" || dataName =="heatwaves" || dataName =="rainfall" || dataName =="rivers" || dataName =="storms" || dataName =="crops1" || dataName =="crops2" || dataName =="health")  {
            return getHeader5[column];
        } else if (dataName =="nature")  {
            return getHeader6[column];
        } else if (dataName =="economy")  {
            return getHeader7[column];
        // europe headers
        } else if (dataName =="europeHotDays" || dataName =="europeHotNights" || dataName =="europeTemp" || dataName =="europeFrost" || dataName =="europeWinterTemp" || dataName =="europeHeatwave" || dataName =="europeRainfallWinterMaxDaily" || dataName =="europeRainfallSummerMaxDaily" || dataName =="europeDryDays" || dataName =="europeDrought" || dataName =="europeRivers1")  {
            return getHeader4[column];
        } else if (dataName =="europeHeatwave" || dataName =="europeColdwave" || dataName =="europeRainIntensity" || dataName =="europeCrops" || dataName =="europeHealth" || dataName =="europeRivers3")  {
            return getHeader5[column];
        } else if (dataName =="europeRivers2" || dataName =="europeEconomy")  {
            return getHeader7[column];
        // americas headers
        } else if (dataName =="americasTemp" || dataName =="americasMaxTemp" || dataName =="americasWarmSpell" || dataName =="americasWarmExtremes" || dataName =="americasColdExtremes" || dataName =="americasRainfall" || dataName =="americasDrySpell" || dataName =="americasRainIntensity" || dataName =="americasRainExtremes" || dataName =="americasRainSeason" || dataName =="americasStorms" || dataName =="americasCrops")  {
            return getHeader5[column];
        } else if (dataName =="americasDrought1" || dataName =="americasDrought2")  {
            return getHeader4[column];
        } else if (dataName =="americasHealth")  {
            return getHeader9[column];
        // sids headers
        } else if (dataName =="sidsTemp" || dataName =="sidsRain" || dataName =="sidsDrought1")  {
            return getHeader2[column];
        } else if (dataName =="sidsDrought2" || dataName =="sidsDrought3")  {
            return getHeader4[column];
        // africa headers
        } else if (dataName =="africaTemp" || dataName =="africaTempExtremes" || dataName == "africaHeat" || dataName == "africaRainIntensity" || dataName == "africaStorms" || dataName == "africaCrops")  {
            return getHeader5[column];
        } else if (dataName =="africaRain" || dataName =="africaDrought")  {
            return getHeader4[column];
        // asia headers
        } else if (dataName =="asiaIce")  {
            return getHeader10[column];
        } else if (dataName == "asiaTemp" || dataName == "asiaStorms" || dataName == "asiaEconomy")  {
            return getHeader7[column];
        } else if (dataName == "asiaWarmSpell" || dataName == "asiaHotExtremes" || dataName == "asiaColdExtremes" || dataName == "asiaIndiaHeatwaves" || dataName == "asiaRainfallIntensities" || dataName == "asiaMonsoon" || dataName == "asiaCrops" || dataName == "asiaNature")  {
            return getHeader5[column];
        } else if (dataName == "asiaRainfallDry" || dataName == "asiaDrought1" || dataName == "asiaDrought2" || dataName == "asiaFlooding")  {
            return getHeader4[column];
        // china headers
        } else if (dataName =="chinaTemp" || dataName =="chinaHeat" || dataName =="chinaHeatExtremes" || dataName =="chinaRain")  {
            return getHeader5[column];
        } else if (dataName =="chinaRainExtremes" || dataName =="chinaCrops" || dataName =="chinaEconomy")  {
            return getHeader7[column];
        // aus headers
        } else if (dataName =="ausOceans" || dataName =="ausHeat" || dataName =="ausHeatExtremes" || dataName =="ausRain" || dataName =="ausStorms" || dataName =="ausCrops")  {
            return getHeader5[column];
        } else if (dataName =="ausDrought")  {
            return getHeader4[column];
        }
    });

    // bold the text of the first column
    myTable.selectAll('td:nth-child(1)')
    .style("width", "33.4%")
    .attr("class", "row-header");

    // change colour of column headers
    myTable.selectAll('th:nth-child(2)')
    .style("color", "#B4C7D1");
    myTable.selectAll('th:nth-child(3)')
    .style("color", "#BCABC6");
    myTable.selectAll('th:nth-child(4)')
    .style("color", "#C6A1AE");

}