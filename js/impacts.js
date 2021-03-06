// build DOM from data

// add <br><br> to end of 'text' (except for intro and credit)
// to ensure that the intro is on a separate line to avoid formatting issues

var impacts=[{
    name: "placeholder"
},{
    name: "placeholder"
},{
    name: "instructions",
    title: "",
    icon: "<i class='fas fa-info-circle'></i>",
    text: "<p id='first-instruction'>All the research presented below compares impacts at 1.5C and 2C of warming above pre-industrial levels – the Paris Agreement’s temperature limits. These are shown in the first two columns, respectively.</p><p>If the research also includes a higher temperature level, such as 2.5C, 3C or 4C, this is shown in a third column. But this changes from one impact to the next, depending on the study.</p><p>Click or mouse over the <i class='fas fa-info-circle'></i> on each section to see more information about each study, including any baseline period, which can differ between studies.</p><p>The reference for each metric can be found in square brackets beside the data – clicking on the number will link to the list of references at the end of the article. This is also where the methodology and link to the underlying data can be found.</p><br>",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/BK8H7X-2.jpg",
    credit: "imageBROKER/Alamy Stock Photo"
},{
    name: "sealevel",
    title: "OCEANS",
    icon: "<img class='title-icon' src='./img/ocean.svg'>",
    info: "Relative to 2000; median and 5th-95th percentile range",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/09/F7HYFH.jpg",
    credit: "Jan Wlodarczyk/Alamy Stock Photo",
    reference: "[19]",
    map: "global",
    location: "Global"
},{
    name: "marineheatwaves",
    title: "OCEANS",
    icon: "<img class='title-icon' src='./img/ocean.svg'>",
    info: "Marine heatwaves: relative to pre-industrial levels.<br><br>Ocean acidity: percentage relates to change in concentration of hydrogen ions; relative to 1986-2005; median and 5th-95th percentile range.<br><br>AMOC: relative to pre-industrial levels.",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/09/JYDNWH.jpg",
    credit: "Seaphotoart/Alamy Stock Photo",
    reference: "[18], [60], [20]",
    map: "global",
    location: "Global"
},{
    name: "ice",
    title: "ICE",
    icon: "<i class='fas fa-snowflake'></i>",
    info: " Arctic sea ice: 'Ice-free' is defined as an average September sea ice extent of less than one million km<sup>2</sup>.<br><br>Permafrost: Relative to 1961-90; uncertainty is a one standard deviation range; for context, global permafrost area = ~15m km2.<br><br>Glacier mass lost: in sea level equivalent, from present day to 2100.",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/09/D7Y7F8.jpg",
    credit: "Vicki Beaver/Alamy Stock Photo",
    reference: "[3], [4], [55]",
    map: "global",
    location: "Global"
},{
    name: "snow",
    title: "ICE",
    icon: "<i class='fas fa-snowflake'></i>",
    info: "Snow extent: relative to 1971-2000. <br><br>Snow storage: percent of global land area (exc. Antarctica and Greenland) seeing changes in maximum monthly snow storage in calendar month with maximum storage in historical decade; ensemble mean (min-max); note: means are not always between min and max values because averaging the model combinations can prevent extreme values.",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/09/M3N9MC.jpg",
    credit: "shoults/Alamy Stock Photo",
    reference: "[14], [16]",
    map: "global",
    location: "Global"
},{
    name: "temperature",
    title: "TEMPERATURE",
    icon: "<i class='fas fa-thermometer'></i>",
    info: "Annual maximum daily temperature: relative to 1981–2010; ensemble mean (min–max).<br><br>Hot days: percentage of days above the 90th percentile of daily maximum temperature in the 1981–2010 average; ensemble mean (min–max).<br><br>Warm spell duration: defined as the length of the longest streak of six or more days with the maximum temperature exceeding the 90th percentile of the baseline period (days); by 2081-2100; relative to 1996–2015; ensemble mean (min–max).",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/09/FJBXTK.jpg",
    credit: "imageBROKER/Alamy Stock Photo",
    reference: "[39], [37]",
    map: "global",
    location: "Global"
},{
    name: "heatwaves",
    title: "TEMPERATURE",
    icon: "<i class='fas fa-thermometer'></i>",
    info: "Global exposure to heatwaves: defined as a level of >20 on the Heat Wave Magnitude Index daily; mean and interquartile range, Defined as a level of >20 on the Heat Wave Magnitude Index daily; mean and interquartile range, Defined as a level of >40 on the Heat Wave Magnitude Index daily; median and interquartile range.<br><br> Warm extremes: defined as annual daily maximum that would be a 1-in-20 year event in current climate.<br><br>Cold extremes: Defined as annual daily minimum that would be a 1-in-20 year event in current climate.",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/09/KCKNJH.jpg",
    credit: "Olaf Schuelke/Alamy Stock Photo",
    reference: "[41], [59]",
    map: "global",
    location: "Global"
},{
    name: "rainfall",
    title: "RAINFALL",
    icon: "<i class='fas fa-tint'></i>",
    info: "Rainfall: relative to 1981–2010; ensemble mean (min–max).<br><br>Rainfall intensity: defined as the total annual precipitation divided by the number of wet days in the year; by 2081-2100; relative to 1996–2015; ensemble mean (min–max).<br><br>Rainfall extremes: frequency of rainfall extremes (annual maximum 1-day precipitation that would be a 1-in-20 year event in current climate)",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/09/C5T9H7.jpg",
    credit: "David Chapman/Alamy Stock Photo",
    reference: "[37], [39]",
    map: "global",
    location: "Global"
},{
    name: "rivers",
    title: "RAINFALL",
    icon: "<i class='fas fa-tint'></i>",
    info: "Percentage of global land area seeing changes in average streamflows.",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/09/F061GJ.jpg",
    credit: "rudi1976/Alamy Stock Photo",
    reference: "[16]",
    map: "global",
    location: "Global"
},{
    name: "drought",
    title: "DROUGHT",
    icon: "<img class='title-icon' src='./img/drought.svg'>",
    info: "Drought length: defined as a Standardized Precipitation Index for 12 months of <-0.5; relative to 1976-2005.<br><br>Water scarcity: Change in freshwater availability in below normal conditions (Q20); water demand threshold: 1000m3 per person per year; population held constant at 2015 levels; relative to 2006-2015.<br><br>Severe drought: defined as a month where the Palmer Drought Severity Index drops below -3; relative to 1985-2005; uses SSP1 socioeconomic pathway.",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/09/KHF95W.jpg",
    credit: "Ken Welsh/Alamy Stock Photo",
    reference: "[45], [47], [17]",
    map: "global",
    location: "Global"
},{
    name: "storms",
    title: "STORMS AND FLOODING",
    icon: "<img class='title-icon' src='./img/cyclone.svg'>",
    info: "Tropical cyclones: Relative to 1996–2015; baseline number = 73.4.<br><br>Coastal flooding: millions per year; populations constant after 2100; defences constant at 1995 levels.",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/09/HG9FMD.jpg",
    credit: "John Sirlin/Alamy Stock Photo",
    reference: "[38], [60]",
    map: "global",
    location: "Global"
},{
    name: "crops1",
    title: "CROPS",
    icon: "<img class='title-icon' src='./img/wheat.svg'>",
    info: "Crop yield change: relative to 1995-2014; includes CO2 fertilisation effect.<br><br>Growing season length: defined as the maximum number of days between frost days; by 2081-2100; relative to 1996–2015; ensemble mean (min–max).",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/09/EYYFM6.jpg",
    credit: "blickwinkel/Alamy Stock Photo",
    reference: "[8], [39]",
    map: "global",
    location: "Global"
},{
    name: "crops2",
    title: "CROPS",
    icon: "<img class='title-icon' src='./img/wheat.svg'>",
    info: "Relative to 1986-2005; includes CO2 fertilisation effect.",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/09/ERMH69.jpg",
    credit: "David Wall/Alamy Stock Photo",
    reference: "[64]",
    map: "global",
    location: "Global"
},{
    name: "nature",
    title: "NATURE",
    icon: "<i class='fas fa-frog'></i>",
    info: "Proportions of taxa projected to lose over 50% of their climatic range in 2100 where species disperse at realistic rates to track their geographically shifting climate envelope; data indicate the mean and 10-90% range.<br><br>Drylands defined as areas where mean annual rainfall is <600 mm and ratio of mean rainfall to potential evapotranspiration is <0.65; relative to pre-industrial.<br><br>Humid lands defined as areas where mean annual rainfall is >600 mm and ratio of mean rainfall to potential evapotranspiration is >0.65; relative to pre-industrial.",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/09/C03JDD.jpg",
    credit: "imageBROKER/Alamy Stock Photo",
    reference: "[1], [40]",
    map: "global",
    location: "Global"
},{
    name: "economy",
    title: "ECONOMY",
    icon: "<i class='fas fa-dollar-sign'></i>",
    info: "GDP: relative to no additional warming.<br><br>Flood damage: annual flood damage losses from SLR by 2100; relative to 1986-2005; without adaptation.<br><br>Energy demand: in 2100; assumes SSP2; relative to no climate change.",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/09/wall-street-595458_1920.jpg",
    credit: "grz3s/CC0 Creative Commons",
    reference: "[6], [10], [35]",
    map: "global",
    location: "Global"
},{
    name: "health",
    title: "HEALTH",
    icon: "<i class='fas fa-briefcase-medical'></i>",
    info: "Drylands defined as areas where mean annual rainfall is <600 mm and ratio of mean rainfall to potential evapotranspiration is <0.65; relative to pre-industrial.<br><br>Humid lands defined as areas where mean annual rainfall is >600 mm and ratio of mean rainfall to potential evapotranspiration is >0.65; relative to pre-industrial.",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/09/M696YE.jpg",
    credit: "Наталья Владимировна/Alamy Stock Photo",
    reference: "[40]",
    map: "global",
    location: "Global"
},{
    name: "placeholder",
    title: "",
    icon: "",
    credit: "",
    map: "europe",
    location: "Europe"
},{
    name: "europeHotDays",
    title: "TEMPERATURE",
    icon: "<i class='fas fa-thermometer'></i>",
    info: "Defined as days per year where average max temp > 30C; relative to 1971-2000; ensemble mean (min–max).",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/F586WP.jpg",
    credit: "Anna Berkut/Alamy Stock Photo",
    reference: "[36]",
    map: "europe",
    location: "Europe"
},{
    name: "europeHotNights",
    title: "TEMPERATURE",
    icon: "<i class='fas fa-thermometer'></i>",
    info: "Defined as nights per year where average min temp > 20C; relative to 1971-2000; ensemble mean (min–max).",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/GN872H.jpg",
    credit: "Yegorovnick/Alamy Stock Photo",
    reference: "[36]",
    map: "europe",
    location: "Europe"
},{
    name: "europeTemp",
    title: "TEMPERATURE",
    icon: "<i class='fas fa-thermometer'></i>",
    info: "Relative to 1981-2010; ensemble mean (min–max).",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/JDKXM3.jpg",
    credit: "Guy Corbishley/Alamy Stock Photo",
    reference: "[65]",
    map: "europe",
    location: "Europe"
},{
    name: "europeFrost",
    title: "TEMPERATURE",
    icon: "<i class='fas fa-thermometer'></i>",
    info: "Number of days where min temp <0C; relative to 1981-2010; ensemble mean (min–max).",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/CE55GD.jpg",
    credit: "Rostislav Glinsky/Alamy Stock Photo",
    reference: "[65]",
    map: "europe",
    location: "Europe"
},{
    name: "europeWinterTemp",
    title: "TEMPERATURE",
    icon: "<i class='fas fa-thermometer'></i>",
    info: "Relative to 1981-2010; ensemble mean (min–max).",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/EEWH3H.jpg",
    credit: "Mieczyslaw Wieliczko/Alamy Stock Photo",
    reference: "[65]",
    map: "europe",
    location: "Europe"
},{
    name: "europeHeatwave",
    title: "TEMPERATURE",
    icon: "<i class='fas fa-thermometer'></i>",
    info: "'Unprecedented' summer heat: experienced by >100m people; relative to 1950-2017 observed record. Warm spell duration: defined as the length of the longest streak of six or more days with the maximum temperature exceeding the 90th percentile of the baseline period (days); by 2081-2100; relative to 1996–2015; ensemble mean (min–max). Frequency of warm extremes: Defined as annual daily maximum that would be a 1-in-20 year event in current climate",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/E5ECHM.jpg",
    credit: "Radharc Images/Alamy Stock Photo",
    reference: "[12], [58], [39], [59]",
    map: "europe",
    location: "Europe"
},{
    name: "europeColdwave",
    title: "TEMPERATURE",
    icon: "<i class='fas fa-thermometer'></i>",
    info: "Defined as annual daily minimum that would be a 1-in-20 year event in current climate.",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/K7P0FD.jpg",
    credit: "Zelma Brezinska/Alamy Stock Photo",
    reference: "[59]",
    map: "europe",
    location: "Europe"
},{
    name: "europeRainfallWinterMaxDaily",
    title: "RAINFALL",
    icon: "<i class='fas fa-tint'></i>",
    info: "Relative to 1981-2010; ensemble mean (min–max).",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/GDKYWD.jpg",
    credit: "Mark Waugh/Alamy Stock Photo",
    reference: "[65]",
    map: "europe",
    location: "Europe"
},{
    name: "europeRainfallSummerMaxDaily",
    title: "RAINFALL",
    icon: "<i class='fas fa-tint'></i>",
    info: "Relative to 1981-2010; ensemble mean (min–max).",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/E80BXA.jpg",
    credit: "Arnau Ramos Oviedo/Alamy Stock Photo",
    reference: "[65]",
    map: "europe",
    location: "Europe"
},{
    name: "europeDryDays",
    title: "RAINFALL",
    icon: "<i class='fas fa-tint'></i>",
    info: "Largest number of consecutive days where precipitation <1mm; relative to 1981-2010; ensemble mean (min–max)",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/DTNEJD.jpg",
    credit: "Martin A. Doe/Alamy Stock Photo",
    reference: "[65]",
    map: "europe",
    location: "Europe"
},{
    name: "europeRainIntensity",
    title: "RAINFALL",
    icon: "<i class='fas fa-tint'></i>",
    info: "Precipitation intensity: defined as the total annual precipitation divided by the number of wet days in the year; by 2081-2100; relative to 1996–2015; ensemble mean (min–max).<br><br>Rainfall extremes: defined as annual maximum 1-day precipitation that would be a 1-in-20 year event in current climate.",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/GRCW33.jpg",
    credit: "CHROMORANGE/Ralph Peters/Alamy Stock Photo",
    reference: "[39], [59]",
    map: "europe",
    location: "Europe"
},{
    name: "europeDrought",
    title: "DROUGHT",
    icon: "<img class='title-icon' src='./img/drought.svg'>",
    info: "Average drought length: Defined as a Standardized Precipitation Index for 12 months of <-0.5; relative to 1976-2005.<br><br>Population exposed to water scarcity: Change in freshwater availability in below normal conditions (Q20); water demand threshold: 1000m3 per person per year; population held constant at 2015 levels; relative to 2006-2015.",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/CF2TTT.jpg",
    credit: "Granville Davies/Alamy Stock Photo",
    reference: "[45], [47]",
    map: "europe",
    location: "Europe"
},{
    name: "europeRivers1",
    title: "STORMS AND FLOODING",
    icon: "<img class='title-icon' src='./img/cyclone.svg'>",
    info: "High river flows: defined as the streamflow exceeded 10% of the time (Q10); relative to 1971-2000.<br><br>River floods: defined as the annual maximum streamflow (Qmax); relative to 1971-2000.",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/D31CFB.jpg",
    credit: "paul weston/Alamy Stock Photo",
    reference: "[13]",
    map: "europe",
    location: "Europe"
},{
    name: "europeRivers3",
    title: "STORMS AND FLOODING",
    icon: "<img class='title-icon' src='./img/cyclone.svg'>",
    info: "Return period for a 1-in-100 year extreme high flows in 2006-15.",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/DAMCGN.jpg",
    credit: "blickwinkel/Alamy Stock Photo",
    reference: "[48]",
    map: "europe",
    location: "Europe"
},{
    name: "europeCrops",
    title: "CROPS",
    icon: "<img class='title-icon' src='./img/wheat.svg'>",
    info: "Defined as the maximum number of days between frost days; by 2081-2100; relative to 1996–2015; ensemble mean (min–max).",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/DF6KC6.jpg",
    credit: "Luis Dafos/Alamy Stock Photo",
    reference: "[39]",
    map: "europe",
    location: "Europe"
},{
    name: "europeNature",
    title: "NATURE",
    icon: "<i class='fas fa-frog'></i>",
    info: "Relative to 1971-2000; ensemble median (25-75th percentile range)",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/BK8H7X-2.jpg",
    credit: "imageBROKER/Alamy Stock Photo",
    reference: "[70]",
    map: "europe",
    location: "Europe"
},{
    name: "europeEconomy",
    title: "ECONOMY",
    icon: "<i class='fas fa-dollar-sign'></i>",
    info: "Damage in euros at Purchasing Power Parity in 2010 values; relative to 1976-2005; ; assumes no change in population, GDP, land use or flood protection",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/BCDAKD.jpg",
    credit: "Alex Segre/Alamy Stock Photo",
    reference: "[49]",
    map: "europe",
    location: "Europe"
},{
    name: "europeHealth",
    title: "HEALTH",
    icon: "<i class='fas fa-briefcase-medical'></i>",
    info: "Likelihood of London summer without heat-related deaths: currently 10%.<br><br>Average number of excess summer heatwave deaths: relative to 2006-2015.",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/E4B398.jpg",
    credit: "Islandstock/Alamy Stock Photo",
    reference: "[42]",
    map: "europe",
    location: "Europe"
},{
    name: "europeHeatDeath",
    title: "HEALTH",
    icon: "<i class='fas fa-briefcase-medical'></i>",
    info: "The change, in percentage points, of excess deaths due to heat; relative to 1986-2005; ensemble mean (min-max)",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/JCF7X8.jpg",
    credit: "Credit: M.Ramirez/Alamy Live News",
    reference: "[67]",
    map: "europe",
    location: "Europe"
},{
    name: "europeColdDeath",
    title: "HEALTH",
    icon: "<i class='fas fa-briefcase-medical'></i>",
    info: "The change, in percentage points, of excess deaths due to cold; relative to 1986-2005; ensemble mean (min-max)",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/AB2JHY.jpg",
    credit: "Profimedia.CZ a.s./Alamy Stock Photo",
    reference: "[67]",
    map: "europe",
    location: "Europe"
},{
    name: "placeholder",
    title: "",
    icon: "",
    credit: "",
    map: "americas",
    location: "Americas"
},{
    name: "americasTemp",
    title: "TEMPERATURE",
    icon: "<i class='fas fa-thermometer'></i>",
    info: "Relative to a 1901-30 baseline; future time periods are 2020-2039 for 1.5C and 2036-2055 for 2C; ensemble mean (min-max).",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/J7B83H.jpg",
    credit: "JG Photography/Alamy Stock Photo",
    reference: "[50]",
    map: "americas",
    location: "Americas"
},{
    name: "americasMaxTemp",
    title: "TEMPERATURE",
    icon: "<i class='fas fa-thermometer'></i>",
    info: "By 2081-2100; relative to 1996–2015; ensemble mean (min–max)",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/PDG80G.jpg",
    credit: "Richard Levine/Alamy Stock Photo",
    reference: "[39]",
    map: "americas",
    location: "Americas"
},{
    name: "americasWarmSpell",
    title: "TEMPERATURE",
    icon: "<i class='fas fa-thermometer'></i>",
    info: "Defined as the length of the longest streak of six or more days with the maximum temperature exceeding the 90th percentile of the baseline period (days); by 2081-2100; relative to 1996–2015; ensemble mean (min–max)",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/F4XTPE.jpg",
    credit: "imageBROKER/Alamy Stock Photo",
    reference: "[39]",
    map: "americas",
    location: "Americas"
},{
    name: "americasWarmExtremes",
    title: "TEMPERATURE",
    icon: "<i class='fas fa-thermometer'></i>",
    info: "Defined as annual daily maximum that would be a 1-in-20 year event in current climate",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/AFG4WN.jpg",
    credit: "Daniel Crowe/Alamy Stock Photo",
    reference: "[59]",
    map: "americas",
    location: "Americas"
},{
    name: "americasColdExtremes",
    title: "TEMPERATURE",
    icon: "<i class='fas fa-thermometer'></i>",
    info: "Defined as annual daily minimum that would be a 1-in-20 year event in current climate.",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/FE8196.jpg",
    credit: "Michele Cornelius/Alamy Stock Photo",
    reference: "[59]",
    map: "americas",
    location: "Americas"
},{
    name: "americasRainfall",
    title: "RAINFALL",
    icon: "<i class='fas fa-tint'></i>",
    info: "Relative to a 1901-30 baseline; future time periods are 2020-2039 for 1.5C and 2036-2055 for 2C; ensemble mean (min-max).",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/G400MY.jpg",
    credit: "John Sirlin/Alamy Stock Photo",
    reference: "[50]",
    map: "americas",
    location: "Americas"
},{
    name: "americasDrySpell",
    title: "RAINFALL",
    icon: "<i class='fas fa-tint'></i>",
    info: "Defined as number of consecutive days with less than 1 mm of rainfall; by 2081-2100; relative to 1996–2015; ensemble mean (min–max)",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/BY3P63.jpg",
    credit: "Witold Skrypczak/Alamy Stock Photo",
    reference: "[39]",
    map: "americas",
    location: "Americas"
},{
    name: "americasRainIntensity",
    title: "RAINFALL",
    icon: "<i class='fas fa-tint'></i>",
    info: "Defined as the total annual precipitation divided by the number of wet days in the year; by 2081-2100; relative to 1996–2015; ensemble mean (min–max)",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/F1APHM.jpg",
    credit: "CrowdSpark/Alamy Stock Photo",
    reference: "[39]",
    map: "americas",
    location: "Americas"
},{
    name: "americasRainExtremes",
    title: "RAINFALL",
    icon: "<i class='fas fa-tint'></i>",
    info: "Defined as annual maximum 1-day precipitation that would be a 1-in-20 year event in current climate",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/AHJD19.jpg",
    credit: "Alex Cunningham/Alamy Stock Photo",
    reference: "[59]",
    map: "americas",
    location: "Americas"
},{
    name: "americasRainSeason",
    title: "RAINFALL",
    icon: "<i class='fas fa-tint'></i>",
    info: "Relative to 2006–2015",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/B2G3W6.jpg",
    credit: "Amazon-Images/Alamy Stock Photo",
    reference: "[7]",
    map: "americas",
    location: "Americas"
},{
    name: "americasDrought1",
    title: "DROUGHT",
    icon: "<img class='title-icon' src='./img/drought.svg'>",
    info: "Defined as a Standardized Precipitation Index for 12 months of <-0.5; relative to 1976-2005.",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/BF83F0.jpg",
    credit: "Frans Lanting Studio/Alamy Stock Photo",
    reference: "[45]",
    map: "americas",
    location: "Americas"
},{
    name: "americasDrought2",
    title: "DROUGHT",
    icon: "<img class='title-icon' src='./img/drought.svg'>",
    info: "Change in freshwater availability in below normal conditions (Q20); water demand threshold: 1000m3 per person per year; population held constant at 2015 levels; relative to 2006-2015.",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/EM2292.jpg",
    credit: "Tom Fox / Alamy Stock Photo",
    reference: "[47]",
    map: "americas",
    location: "Americas"
},{
    name: "americasStorms",
    title: "STORMS AND FLOODING",
    icon: "<img class='title-icon' src='./img/cyclone.svg'>",
    info: "Return period for a 1-in-100 year extreme high flows in 2006-15",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/PCMKG8.jpg",
    credit: "Tribune Content Agency LLC/Alamy Stock Photo",
    reference: "[48]",
    map: "americas",
    location: "Americas"
},{
    name: "americasCrops",
    title: "CROPS",
    icon: "<img class='title-icon' src='./img/wheat.svg'>",
    info: "US maize yields reference period: 1986–2005.<br><br>Growing season length: defined as the maximum number of days between frost days; by 2081-2100; relative to 1996–2015; ensemble mean (min–max).",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/HWMMJ6.jpg",
    credit: "inga spence/Alamy Stock Photo",
    reference: "[54], [39]",
    map: "americas",
    location: "Americas"
},{
    name: "americasHealth",
    title: "HEALTH",
    icon: "<i class='fas fa-briefcase-medical'></i>",
    info: "Relative to 1961-90",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/DEMNET.jpg",
    credit: "Nacho Calonge/Alamy Stock Photo",
    reference: "[9]",
    map: "americas",
    location: "Americas"
},{
    name: "americasHeatDeath",
    title: "HEALTH",
    icon: "<i class='fas fa-briefcase-medical'></i>",
    info: "Relative to 1961-90",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/KC9584.jpg",
    credit: "dbimages/Alamy Stock Photo",
    reference: "[67]",
    map: "americas",
    location: "Americas"
},{
    name: "placeholder",
    title: "",
    icon: "",
    credit: "",
    map: "caribbean",
    location: "Caribbean and small island states"
},{
    name: "sidsTemp",
    title: "TEMPERATURE",
    icon: "<i class='fas fa-thermometer'></i>",
    info: "Average temperature: relative to pre-industrial.<br><br>Warm spell duration: annual count of days with at least 6 consecutive days when max temperature > 90th percentile; relative to 1971-2000.",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/E62DCF.jpg",
    credit: "Torontonian/Alamy Stock Photo",
    reference: "[44]",
    map: "caribbean",
    location: "Caribbean and small island states"
},{
    name: "sidsRain",
    title: "RAINFALL",
    icon: "<i class='fas fa-tint'></i>",
    info: "Average annual rainfall: relative to 1971–2000.<br><br>Annual count of days when rainfall >10 mm; relative to 1971-2000.",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/CPN689.jpg",
    credit: "BSIP SA/Alamy Stock Photo",
    reference: "[44]",
    map: "caribbean",
    location: "Caribbean and small island states"
},{
    name: "sidsDrought1",
    title: "DROUGHT",
    icon: "<img class='title-icon' src='./img/drought.svg'>",
    info: "Defined as a Standardized Precipitation Index for 12 months of < -1 (moderate drought or worse)",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/B69PWP.jpg",
    credit: "WorldFoto/Alamy Stock Photo",
    reference: "[44]",
    map: "caribbean",
    location: "Caribbean and small island states"
},{
    name: "sidsDrought2",
    title: "DROUGHT",
    icon: "<img class='title-icon' src='./img/drought.svg'>",
    info: "Drought length: defined as a Standardized Precipitation Index for 12 months of <-0.5; relative to 1976-2005.",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/ACBTN2.jpg",
    credit: "mediacolor's/Alamy Stock Photo",
    reference: "[45], [43]",
    map: "caribbean",
    location: "Caribbean and small island states"
},{
    name: "sidsDrought3",
    title: "DROUGHT",
    icon: "<img class='title-icon' src='./img/drought.svg'>",
    info: "Drought length: defined as a Standardized Precipitation Index for 12 months of <-0.5; relative to 1976-2005.",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/ECJ549.jpg",
    credit: "Hilke Maunder/Alamy Stock Photo",
    reference: "[43]",
    map: "caribbean",
    location: "Caribbean and small island states"
},{
    name: "placeholder",
    title: "",
    icon: "",
    credit: "",
    map: "africa",
    location: "Africa"
},{
    name: "africaTemp",
    title: "TEMPERATURE",
    icon: "<i class='fas fa-thermometer'></i>",
    info: "By 2081-2100; relative to 1996–2015; ensemble mean (min–max).<br><br>Warm spell duration: defined as the length of the longest streak of six or more days with the maximum temperature exceeding the 90th percentile of the baseline period (days); by 2081-2100; relative to 1996–2015; ensemble mean (min–max).",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/CF3FX2.jpg",
    credit: "Egypt Herrnstadt/Alamy Stock Photo",
    reference: "[39]",
    map: "africa",
    location: "Africa"
},{
    name: "africaHotNights",
    title: "TEMPERATURE",
    icon: "<i class='fas fa-thermometer'></i>",
    info: "Annual hot nights: Defined as 90th percentile of daily minimum temperature in 1971–2000; ensemble median (min–max).<br><br>Defined as number of periods of 3 or more consecutive days with daily max temperature above the 95th percentile in 1971–2000 (but with at least 25C); ensemble median (min–max).",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/F45XEB.jpg",
    credit: "Nature Picture Library/Alamy Stock Photo",
    reference: "[66]",
    map: "africa",
    location: "Africa"
},{
    name: "africaTempExtremes",
    title: "TEMPERATURE",
    icon: "<i class='fas fa-thermometer'></i>",
    info: "Warm extremes: defined as annual daily maximum that would be a 1-in-20 year event in current climate.<br><br>Cold extremes: defined as annual daily minimum that would be a 1-in-20 year event in current climate.",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/HGEJJR.jpg",
    credit: "Cathy Withers-Clarke/Alamy Stock Photo",
    reference: "[59]",
    map: "africa",
    location: "Africa"
},{
    name: "africaHeat",
    title: "TEMPERATURE",
    icon: "<i class='fas fa-thermometer'></i>",
    info: "Range is 10-90th percentile",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/AFEXXG.jpg",
    credit: "Jennifer Chen/Alamy Stock Photo",
    reference: "[61]",
    map: "africa",
    location: "Africa"
},{
    name: "africaRainSeason1",
    title: "RAINFALL",
    icon: "<i class='fas fa-tint'></i>",
    info: "Rain season length: Relative to 1971–2000 (in days); ensemble median (min–max).<br><br>Total rainfall in rain season: Average sum of rainfall during wet seasons; relative to 1971–2000 (in %); ensemble median (min–max).",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/HFJE6X.jpg",
    credit: "Mike Goldwater/Alamy Stock Photo",
    reference: "[66]",
    map: "africa",
    location: "Africa"
},{
    name: "africaRainSeason2",
    title: "RAINFALL",
    icon: "<i class='fas fa-tint'></i>",
    info: "Dry days during rain season: Defined as days with rainfall <1 mm within rainy season; relative to 1971–2000; ensemble median (min–max).<br><br>Rainfall total on extremely wet days: Defined as 99th percentile daily rainfall; relative to 1971–2000 (in mm/day); ensemble median (min–max).",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/09/C5T9H7.jpg",
    credit: "David Chapman/Alamy Stock Photo",
    reference: "[66]",
    map: "africa",
    location: "Africa"
},{
    name: "africaRain",
    title: "RAINFALL",
    icon: "<i class='fas fa-tint'></i>",
    info: "Length of tropical rain season: relative to 2006–2015.<br><br>Dry spell duration: defined as number of consecutive days with less than 1 mm of rainfall; by 2081-2100; relative to 1996–2015; ensemble mean (min–max).",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/BXTC9T.jpg",
    credit: "WorldFoto/Alamy Stock Photo",
    reference: "[39]",
    map: "africa",
    location: "Africa"
},{
    name: "africaRainIntensity",
    title: "RAINFALL",
    icon: "<i class='fas fa-tint'></i>",
    info: "Rainfall intensity: defined as the total annual precipitation divided by the number of wet days in the year; by 2081-2100; relative to 1996–2015; ensemble mean (min–max).<br><br>Rainfall extremes: defined as annual maximum 1-day precipitation that would be a 1-in-20 year event in current climate.",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/J8335X.jpg",
    credit: "Pierre Steenberg/Alamy Stock Photo",
    reference: "[39], [59]",
    map: "africa",
    location: "Africa"
},{
    name: "africaDrought",
    title: "DROUGHT",
    icon: "<img class='title-icon' src='./img/drought.svg'>",
    info: "Defined as a Standardized Precipitation Index for 12 months of <-0.5; relative to 1976-2005.<br><br>Water scarcity: change in freshwater availability in below normal conditions (Q20); water demand threshold: 1000m3 per person per year; population held constant at 2015 levels; relative to 2006-2015.",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/CP6WMY.jpg",
    credit: "Ashley Cooper/Alamy Stock Photo",
    reference: "[45], [47]",
    map: "africa",
    location: "Africa"
},{
    name: "africaStorms",
    title: "STORMS AND FLOODING",
    icon: "<img class='title-icon' src='./img/cyclone.svg'>",
    info: "Return period for a 1-in-100 year extreme high flows in 2006-15",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/A48RBD.jpg",
    credit: "Roger Hutchings/Alamy Stock Photo",
    reference: "[48]",
    map: "africa",
    location: "Africa"
},{
    name: "placeholder",
    title: "",
    icon: "",
    credit: "",
    map: "asia",
    location: "Asia"
},{
    name: "asiaIce",
    title: "ICE",
    icon: "<i class='fas fa-snowflake'></i>",
    info: "Relative to 1996–2015; ensemble mean and standard deviation",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/D1FDYE.jpg",
    credit: "robertharding/Alamy Stock Photo",
    reference: "[51]",
    map: "asia",
    location: "Asia"
},{
    name: "asiaTemp",
    title: "TEMPERATURE",
    icon: "<i class='fas fa-thermometer'></i>",
    info: "Average temperature: relative to 1861-1900.<br><br>Annual highest maximum temperature: by 2081-2100; relative to 1996–2015; ensemble mean (min–max).",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/PGT1ME.jpg",
    credit: "Perry Svensson/Alamy Stock Photo",
    reference: "[24], [39]",
    map: "asia",
    location: "Asia"
},{
    name: "asiaWarmSpell",
    title: "TEMPERATURE",
    icon: "<i class='fas fa-thermometer'></i>",
    info: "Defined as the length of the longest streak of six or more days with the maximum temperature exceeding the 90th percentile of the baseline period (days); by 2081-2100; relative to 1996–2015; ensemble mean (min–max)",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/M20JK4.jpg",
    credit: "Ivan Rwatschew/Alamy Stock Photo",
    reference: "[39]",
    map: "asia",
    location: "Asia"
},{
    name: "asiaHotExtremes",
    title: "TEMPERATURE",
    icon: "<i class='fas fa-thermometer'></i>",
    info: "Defined as annual daily maximum that would be a 1-in-20 year event in current climate.",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/DMNH6T.jpg",
    credit: "manjeet & yograj jadeja/Alamy Stock Photo",
    reference: "[59]",
    map: "asia",
    location: "Asia"
},{
    name: "asiaColdExtremes",
    title: "TEMPERATURE",
    icon: "<i class='fas fa-thermometer'></i>",
    info: "Defined as annual daily minimum that would be a 1-in-20 year event in current climate.",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/FB3YTK.jpg",
    credit: "Keren Su/China Span/Alamy Stock Photo",
    reference: "[59]",
    map: "asia",
    location: "Asia"
},{
    name: "asiaIndiaHeatwaves",
    title: "TEMPERATURE",
    icon: "<i class='fas fa-thermometer'></i>",
    info: "Mid-century: by 2021−2050; relative to 1986−2015.<br><br>End of century: by 2071−2100; relative to 1986−2015.",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/DCC1T6.jpg",
    credit: "Jack Hoyle/Alamy Stock Photo",
    reference: "[15]",
    map: "asia",
    location: "Asia"
},{
    name: "asiaRainfallDry",
    title: "RAINFALL",
    icon: "<i class='fas fa-tint'></i>",
    info: "Average rainfall: relative to 1861-1900.<br><br>Dry spell duration: Defined as number of consecutive days with less than 1 mm of rainfall; by 2081-2100; relative to 1996–2015; ensemble mean (min–max).",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/P7KX77.jpg",
    credit: "mauritius images GmbH/Alamy Stock Photo",
    reference: "[24], [39]",
    map: "asia",
    location: "Asia"
},{
    name: "asiaRainfallIntensities",
    title: "RAINFALL",
    icon: "<i class='fas fa-tint'></i>",
    info: "Rainfall intensity: defined as the total annual precipitation divided by the number of wet days in the year; by 2081-2100; relative to 1996–2015; ensemble mean (min–max).<br><br>Rainfall extremes: Defined as annual maximum 1-day precipitation that would be a 1-in-20 year event in current climate.",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/FCM323.jpg",
    credit: "Reynold Sumayku/Alamy Stock Photo",
    reference: "[39], [59]",
    map: "asia",
    location: "Asia"
},{
    name: "asiaMonsoon",
    title: "RAINFALL",
    icon: "<i class='fas fa-tint'></i>",
    info: "Indian monsoon extreme rainfall: 3-day rainfall total in a 1-in-100 year event; relative to a baseline of 1969-2005.<br><br>Asian monsoon: relative to 2006–2015.<br><br>Length of tropical rain season: relative to 2006–2015.",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/ET18DF.jpg",
    credit: "Dinodia Photos/Alamy Stock Photo",
    reference: "[52], [53], [7]",
    map: "asia",
    location: "Asia"
},{
    name: "asiaDrought1",
    title: "DROUGHT",
    icon: "<img class='title-icon' src='./img/drought.svg'>",
    info: "Defined as a Standardized Precipitation Index for 12 months of <-0.5; relative to 1976-2005.",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/DTHD0G.jpg",
    credit: "Florian Blümm/Alamy Stock Photo",
    reference: "[45]",
    map: "asia",
    location: "Asia"
},{
    name: "asiaDrought2",
    title: "DROUGHT",
    icon: "<img class='title-icon' src='./img/drought.svg'>",
    info: "Change in freshwater availability in below normal conditions (Q20); water demand threshold: 1000m3 per person per year; population held constant at 2015 levels; relative to 2006-2015.",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/B69PWP.jpg",
    credit: "WorldFoto / Alamy Stock Photo",
    reference: "[47]",
    map: "asia",
    location: "Asia"
},{
    name: "asiaStorms",
    title: "STORMS AND FLOODING",
    icon: "<img class='title-icon' src='./img/cyclone.svg'>",
    info: "Population held constant at 2015 levels; relative to 1976-2005; assumes no change in GDP, land use or flood protection.",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/EA1EGT.jpg",
    credit: "Zoonar GmbH/Alamy Stock Photo",
    reference: "[49]",
    map: "asia",
    location: "Asia"
},{
    name: "asiaFlooding",
    title: "STORMS AND FLOODING",
    icon: "<img class='title-icon' src='./img/cyclone.svg'>",
    info: "Area inundated during an average flood, without flood defences, excluding cyclones.<br><br>Frequency of extreme high flows: return period for a 1-in-100 year extreme high flows in 2006-15.",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/MPFH5A.jpg",
    credit: "Rehman Asad/Alamy Stock Photo",
    reference: "[21], [48]",
    map: "asia",
    location: "Asia"
},{
    name: "asiaFlooding2",
    title: "STORMS AND FLOODING",
    icon: "<img class='title-icon' src='./img/cyclone.svg'>",
    info: "Change in 100-year return period flood flows; relative to 1986-2005",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/DHFRXN.jpg",
    credit: "Daniel J. Rao/Alamy Stock Photo",
    reference: "[68]",
    map: "asia",
    location: "Asia"
},{
    name: "asiaCrops",
    title: "CROPS",
    icon: "<img class='title-icon' src='./img/wheat.svg'>",
    info: "Defined as the maximum number of days between frost days; by 2081-2100; relative to 1996–2015; ensemble mean (min–max)",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/E4P05T.jpg",
    credit: "Jose More/VWPics/Alamy Stock Photo",
    reference: "[39]",
    map: "asia",
    location: "Asia"
},{
    name: "asiaNature",
    title: "NATURE",
    icon: "<i class='fas fa-frog'></i>",
    info: "Relative to 1986-2005",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/BPWK07.jpg",
    credit: "Aurora Photos/Alamy Stock Photo",
    reference: "[29]",
    map: "asia",
    location: "Asia"
},{
    name: "asiaEconomy",
    title: "ECONOMY",
    icon: "<i class='fas fa-dollar-sign'></i>",
    info: "Damage in euros at Purchasing Power Parity in 2010 values; relative to 1976-2005; ; assumes no change in population, GDP, land use or flood protection.",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/A5EKDW.jpg",
    credit: "NORMA JOSEPH/Alamy Stock Photo",
    reference: "[49]",
    map: "asia",
    location: "Asia"
},{
    name: "asiaHealth",
    title: "HEALTH",
    icon: "<i class='fas fa-briefcase-medical'></i>",
    info: "The change, in percentage points, of excess deaths due to heat/cold; relative to 1986-2005; ensemble mean (min-max).",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/PH5XJ3.jpg",
    credit: "Prasit Rodphan/Alamy Stock Photo",
    reference: "[67]",
    map: "asia",
    location: "Asia"
},{
    name: "placeholder",
    title: "",
    icon: "",
    credit: "",
    map: "china",
    location: "China"
},{
    name: "chinaTemp",
    title: "TEMPERATURE",
    icon: "<i class='fas fa-thermometer'></i>",
    info: "Relative to pre-industrial levels; ensemble mean (5th-95th percentile)",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/C5TH78.jpg",
    credit: "Tom Salyer/Alamy Stock Photo",
    reference: "[33]",
    map: "china",
    location: "China"
},{
    name: "chinaHeat",
    title: "TEMPERATURE",
    icon: "<i class='fas fa-thermometer'></i>",
    info: "Heat events: likelihood of 3% in 1976-2005; likelihood of 0% in 1976-2005.<br><br>Extreme maximum temperature events: population exposed to 5-day periods where temperatures >30C; relative to 1986-2005. Population at 2010 levels.",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/AFEXXG.jpg",
    credit: "ARISTIDIS VAFEIADAKIS/Alamy Stock Photo",
    reference: "[22], [26]",
    map: "china",
    location: "China"
},{
    name: "chinaHeatExtremes",
    title: "TEMPERATURE",
    icon: "<i class='fas fa-thermometer'></i>",
    info: "Hottest day and coldest night: relative to 1986-2005.<br><br>Annual warm days: percentage of days when maximum temperature >90th percentile; relative to 1986-2005.<br><br>Annual warm spell duration: Count of days with at least 6 consecutive days when maximum temperature >90th percentile; relative 1986-2005.",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/E19M0X.jpg",
    credit: "Xinhua/Alamy Stock Photo",
    reference: "[26]",
    map: "china",
    location: "China"
},{
    name: "chinaRain",
    title: "RAINFALL",
    icon: "<i class='fas fa-tint'></i>",
    info: "Annual rainfall: relative to no model runs with no climate warming; ensemble mean (5th-95th percentile).<br><br>Trace rainfall: Defined as rainy days with <0.1mm of rain; relative to 1980–2009.<br><br>Light rainfall: days with <10mm of rain; relative to 1980–2009.<br><br>Moderate rainfall: days with <25mm of rain; relative to 1980–2009.<br><br>Heavy rainfall: days with <50mm of rain; relative to 1980–2009.<br><br>Intense rainfall: days with >50mm of rain; relative to 1980–2009.",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/CTTYKN.jpg",
    credit: "Shanghai/Alamy Stock Photo",
    reference: "[33]",
    map: "china",
    location: "China"
},{
    name: "chinaRainExtremes",
    title: "RAINFALL",
    icon: "<i class='fas fa-tint'></i>",
    info: "Relative to 1986-2005; ensemble median (min-max).<br><br>'Very wet day' = exceeds the 95th percentile of the period 1971–2000.<br><br>'Extremely wet day' = exceeds the 99th percentile of the period 1971–2000.",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/JFKRN4.jpg",
    credit: "Xinhua/Alamy Stock Photo",
    reference: "[28], [57]",
    map: "china",
    location: "China"
},{
    name: "chinaDrought",
    title: "DROUGHT",
    icon: "<img class='title-icon' src='./img/drought.svg'>",
    info: "Drought defined as Standardized Precipitation Evapotranspiration Index (SPEI) < -1 or Palmer Drought Severity Index (PDSI) < -2; relative to 1986-2005; range encompasses SPEI and PDSI mean results.",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/BKF4BN.jpg",
    credit: "Ashley Cooper pics/Alamy Stock Photo",
    reference: "[69]",
    map: "china",
    location: "China"
},{
    name: "chinaStorms",
    title: "STORMS AND FLOODING",
    icon: "<img class='title-icon' src='./img/cyclone.svg'>",
    info: "Population held constant at 2015 levels; relative to 1976-2005.<br><br>Likelihood of 8% in 1976-2005.<br><br>Yangtze river: return period for a 1-in-100 year extreme high flows in 2006-15.",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/F247K9.jpg",
    credit: "Xinhua/Alamy Stock Photo",
    reference: "[49], [22], [48]",
    map: "china",
    location: "China"
},{
    name: "chinaCrops",
    title: "CROPS",
    icon: "<img class='title-icon' src='./img/wheat.svg'>",
    info: "Relative to 2006-2015",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/KC9XYX.jpg",
    credit: "Roberto Fumagalli/Alamy Stock Photo",
    reference: "[31]",
    map: "china",
    location: "China"
},{
    name: "chinaEconomy",
    title: "ECONOMY",
    icon: "<i class='fas fa-dollar-sign'></i>",
    info: "Economic damages from river flooding: population held constant at 2015 levels; relative to 1976-2005.<br><br>Increase in annual economic damages caused by tropical cyclones in China, relative to 1986-2005.<br><br>Annual days of temperature-related weight restrictions on flights: relative to 2006-2015.",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/HKCB6J.jpg",
    credit: "Design Pics Inc/Alamy Stock Photo",
    reference: "[49], [63], [30]",
    map: "china",
    location: "China"
},{
    name: "chinaHealth",
    title: "HEALTH",
    icon: "<i class='fas fa-briefcase-medical'></i>",
    info: "The change, in percentage points, of excess deaths due to heat/cold; relative to 1986-2005; ensemble mean (min-max).",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/H47FEN.jpg",
    credit: "Bob Henry/Alamy Stock Photo",
    reference: "[67]",
    map: "china",
    location: "China"
},{
    name: "placeholder",
    title: "",
    icon: "",
    credit: "",
    map: "australasia",
    location: "Australasia"
},{
    name: "ausOceans",
    title: "OCEANS",
    icon: "<img class='title-icon' src='./img/ocean.svg'>",
    info: "Likelihood = 0% without climate change",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/EDBCPB.jpg",
    credit: "imageBROKER/Alamy Stock Photo",
    reference: "[34]",
    map: "australasia",
    location: "Australasia"
},{
    name: "ausHeat",
    title: "TEMPERATURE",
    icon: "<i class='fas fa-thermometer'></i>",
    info: "Extreme events: likelihood = 3% without climate change; likelihood = 1% without climate change.<br><br>Annual highest maximum temperature: by 2081-2100; relative to 1996–2015; ensemble mean (min–max).<br><br>Warm spell duration: defined as the length of the longest streak of six or more days with the maximum temperature exceeding the 90th percentile of the baseline period (days); by 2081-2100; relative to 1996–2015; ensemble mean (min–max).",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/G3DT9P.jpg",
    credit: "Taras Vyshnya/Alamy Stock Photo",
    reference: "[34], [39]",
    map: "australasia",
    location: "Australasia"
},{
    name: "ausHeatExtremes",
    title: "TEMPERATURE",
    icon: "<i class='fas fa-thermometer'></i>",
    info: "Warm extremes: defined as annual daily maximum that would be a 1-in-20 year event in current climate.<br><br>Cold extremes: defined as annual daily minimum that would be a 1-in-20 year event in current climate.",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/BDJFDR.jpg",
    credit: "Radius Images/Alamy Stock Photo",
    reference: "[59]",
    map: "australasia",
    location: "Australasia"
},{
    name: "ausRain",
    title: "RAINFALL",
    icon: "<i class='fas fa-tint'></i>",
    info: "Length of tropical rain season: relative to 2006–2015.<br><br>Dry spell duration: defined as number of consecutive days with less than 1 mm of rainfall; by 2081-2100; relative to 1996–2015; ensemble mean (min–max).<br><br>Rainfall intensity: Defined as the total annual precipitation divided by the number of wet days in the year; by 2081-2100; relative to 1996–2015; ensemble mean (min–max).",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/EYHY6H.jpg",
    credit: "Sue Cunningham Photographic/Alamy Stock Photo",
    reference: "[7], [39], [59]",
    map: "australasia",
    location: "Australasia"
},{
    name: "ausDrought",
    title: "DROUGHT",
    icon: "<img class='title-icon' src='./img/drought.svg'>",
    info: "Likelihood = 1% without climate change.<br><br>Average drought length in Oceania: defined as a Standardized Precipitation Index for 12 months of <-0.5; relative to 1976-2005.<br><br>Water scarcity: change in freshwater availability in below normal conditions (Q20); water demand threshold: 1000m3 per person per year; population held constant at 2015 levels; relative to 2006-2015.",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/HHCKF1.jpg",
    credit: "Excitations/Alamy Stock Photo",
    reference: "[34], [45], [47]",
    map: "australasia",
    location: "Australasia"
},{
    name: "ausStorms",
    title: "STORMS AND FLOODING",
    icon: "<img class='title-icon' src='./img/cyclone.svg'>",
    info: "Return period for a 1-in-100 year extreme high flows in 2006-15.",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/KBDT66.jpg",
    credit: "Auscape International Pty Ltd/Alamy Stock Photo",
    reference: "[48]",
    map: "australasia",
    location: "Australasia"
},{
    name: "ausCrops",
    title: "CROPS",
    icon: "<img class='title-icon' src='./img/wheat.svg'>",
    info: "Defined as the maximum number of days between frost days; by 2081-2100; relative to 1996–2015; ensemble mean (min–max).",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/CN6B8D.jpg",
    credit: "John White Photos/Alamy Stock Photo",
    reference: "[39]",
    map: "australasia",
    location: "Australasia"
},{
    name: "ausHealth",
    title: "HEALTH",
    icon: "<i class='fas fa-briefcase-medical'></i>",
    info: "The change, in percentage points, of excess deaths due to heat/cold; relative to 1986-2005; ensemble mean (min-max).",
    background: "https://www.carbonbrief.org/wp-content/uploads/2018/10/EXB0DY.jpg",
    credit: "martin berry/Alamy Stock Photo",
    reference: "[67]",
    map: "australasia",
    location: "Australasia"
},{
    name: "placeholder",
    icon: "fas fa-info-circle",
    text: "Data compiled by <a href='https://www.carbonbrief.org/author/robertmcsweeney'target='_blank'>Robert McSweeney.</a> Interactive by <a href='https://www.carbonbrief.org/author/rospearce' >Rosamund Pearce</a> with help from Tom Prater. Licensed under <a href='https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode'>Creative Commons.</a> Videos courtesy of Getty Images. Article published on 4 October 2018.<br><h2>Methodology</h2><p class='credit'>Relevant peer-reviewed journal papers were initially identified and collated by including those from Carbon Brief <a href='https://www.carbonbrief.org/tag/1-5c' target='_blank'>articles</a> and <a href='https://www.carbonbrief.org/daily-weekly-briefing-sign-up' target='_blank'>Daily Briefings</a>. This was then extended by identifying special journal issues and collections focused on 1.5C. Next, using Scopus – the world’s <a href='https://www.elsevier.com/solutions/scopus' target='_blank'>largest abstract and citation database</a> of peer-reviewed literature – a search was carried out for any journal paper that mentions “1.5” in its title, abstract or keywords.</p><p class='credit'>In total, around 150 journal papers were identified. The vast majority were published in 2018, but some were also from 2017 and 2016.</p><p class='credit'>These were then read to extract useful data. Not all studies could be used. For example, the basic requirements to include a study in this article is that it considers at least one impact of climate change at 1.5C and 2C of warming. Some papers, for example, only looked at 1.5C. If a study also included an additional temperature level, that information is also used. If more than one study covered the same impact, then the study that covered the widest range of regions and/or warming levels was used. In total, results were used from just under half of the papers identified.</p><p class='credit'>To be used in this article, each impact of climate change needed to be able to be summarised as numbers – rather than, say, charts or maps. If numbers were not available in a paper or its supplementary data then Carbon Brief contacted the corresponding author to ask for the data directly. If an uncertainty range is given, then this was used as well and presented in the article (in brackets alongside the main result).</p><p class='credit'>All the findings were then divided up across 10 categories and seven regions of the world, plus global data. China was given its own category because there were a number of studies specific to the country.</p><p class='credit'>The data presented in this article can also be accessed in this <a href='https://docs.google.com/spreadsheets/d/1X86iRUekuaUVmMv1MeyC6wne-23ebgjilqM7eenqR50/edit#gid=885161542' target='_blank'>spreadsheet</a>.</p>"
},{
    text: getReferences()

}];

function getReferences() {
    return "<a name='reference-list' target='_blank'></a><h2>References</h2><p class='credit' target='_blank'><ol class='references' target='_blank'>" 
    + "<li>Warren, R. et al. (2018) The projected effect on insects, vertebrates, and plants of limiting global warming to 1.5C rather than 2C, <a href='http://science.sciencemag.org/content/360/6390/791' target='_blank'>Science</a></li>" 
    + "<li>Jahn, A. (2018) Reduced probability of ice-free summers for 1.5C compared to 2C warming, <a href='https://www.nature.com/articles/s41558-018-0127-8' target='_blank'>Nature Climate Change</a></li>" 
    + "<li>Sigmond, M. et al. (2018) Ice-free Arctic projections under the Paris Agreement, <a href='https://www.nature.com/articles/s41558-018-0124-y' target='_blank'>Nature Climate Change</a></li>" 
    + "<li>Chadburn, S. E. et al. (2017) An observation-based constraint on permafrost loss as a function of global warming, <a href='https://www.nature.com/articles/nclimate3262' target='_blank'>Nature Climate Change</a></li>" 
    + "<li>Burke, E. J. et al. (2018) CO2 loss by permafrost thawing implies additional emissions reductions to limit warming to 1.5 or 2C, <a href='http://iopscience.iop.org/article/10.1088/1748-9326/aaa138' target='_blank'>Environmental Research Letters</a></li>" 
    + "<li>Pretis, F. et al. (2018) Uncertain Impacts on Economic Growth When Stabilizing Global Temperatures at 1.5C or 2C Warming, Philosophical Transactions of the <a href='http://rsta.royalsocietypublishing.org/content/376/2119/20160460' target='_blank'>Royal Society A</a></li>" 
    + "<li>Saeed, F. et al. (2018) Robust changes in tropical rainy season length at 1.5C and 2C, <a href='http://iopscience.iop.org/article/10.1088/1748-9326/aab797' target='_blank'>Environmental Research Letters</a></li>" 
    + "<li>Tebaldi, C. & Lobell, D. (2018) Differences, or lack thereof, in wheat and maize yields under three low-warming scenarios, <a href='http://iopscience.iop.org/article/10.1088/1748-9326/aaba48' target='_blank'>Environmental Research Letters</a>.Data provided by Claudia Tebaldi of the <a href='https://ncar.ucar.edu/' target='_blank'>National Center for Atmospheric Research</a></li>" 
    + "<li>Colón-González, F. J. et al. (2018) Limiting global-mean temperature increase to 1.5–2C could reduce the incidence and spatial spread of dengue fever in Latin America, <a href='http://www.pnas.org/content/115/24/6243' target='_blank'>PNAS</a></li>" 
    + "<li>Jevrejeva, S. et al. (2018) Flood damage costs under the sea level rise with warming of 1.5C and 2C, <a href='http://iopscience.iop.org/article/10.1088/1748-9326/aacc76/meta' target='_blank'>Environmental Research Letters</a></li>" 
    + "<li>Bittermann, K. et al. (2017) Global mean sea-level rise in a world agreed upon in Paris, <a href='ttp://iopscience.iop.org/article/10.1088/1748-9326/aa9def' target='_blank'>Environmental Research Letters</a></li>" 
    + "<li>King, A. D. & Karoly, D. J. (2017) Climate extremes in Europe at 1.5 and 2 degrees of global warming, <a href='http://iopscience.iop.org/article/10.1088/1748-9326/aa8e2c' target='_blank'>Environmental Research Letters</a></li>" 
    + "<li>Thober, S. et al. (2018) Multi-model ensemble projections of European river floods and high flows at 1.5, 2, and 3 degrees global warming, <a href='http://iopscience.iop.org/article/10.1088/1748-9326/aa9e35' target='_blank'>Environmental Research Letters</a></li>" 
    + "<li>Wang, A. et al. (2018) Assessments of the Northern Hemisphere snow cover response to 1.5 and 2.0C warming, <a href='https://www.earth-syst-dynam.net/9/865/2018/' target='_blank'>Earth System Dynamics</a></li>" 
    + "<li>Mishra, V. et al. (2017) Heat wave exposure in India in current, 1.5C, and 2.0C worlds, <a href='http://iopscience.iop.org/article/10.1088/1748-9326/aa9388' target='_blank'>Environmental Research Letters</a></li>" 
    + "<li>Döll, P. et al. (2018) Risks for the global freshwater system at 1.5C and 2C global warming, <a href='http://iopscience.iop.org/article/10.1088/1748-9326/aab792' target='_blank'>Environmental Research Letters</a></li>" 
    + "<li>Liu, W. et al. (2018) Global drought and severe drought-Affected populations in 1.5 and 2C warmer worlds, <a href='https://www.earth-syst-dynam.net/9/267/2018/' target='_blank'>Earth System Dynamics</a></li>" 
    + "<li>Frölicher, T. L. et al. (2018) Marine heatwaves under global warming, <a href='https://www.nature.com/articles/s41586-018-0383-9' target='_blank'>Nature</a></li>" 
    + "<li>Rasmussen, D. J. et al. (2018) Extreme sea level implications of 1.5C, 2.0C, and 2.5C temperature stabilization targets in the 21st and 22nd centuries, <a href='http://iopscience.iop.org/article/10.1088/1748-9326/aaac87' target='_blank'>Environmental Research Letters</a></li>" 
    + "<li>Palter, J. B. et al. (2018) Climate, ocean circulation, and sea level changes under stabilization and overshoot pathways to 1.5 K warming, <a href='https://www.earth-syst-dynam.net/9/817/2018/esd-9-817-2018.html' target='_blank'>Earth System Dynamics</a></li>" 
    + "<li>Brown, S. et al. (2018) What are the implications of sea-level rise for a 1.5, 2 and 3C rise in global mean temperatures in the Ganges-Brahmaputra-Meghna and other vulnerable deltas?, <a href='https://link.springer.com/article/10.1007/s10113-018-1311-0' target='_blank'>Regional Environmental Change</a></li>" 
    + "<li>Lin, L. et al. (2018) Additional Intensification of Seasonal Heat and Flooding Extreme Over China in a 2C Warmer World Compared to 1.5C, <a href='https://agupubs.onlinelibrary.wiley.com/doi/abs/10.1029/2018EF000862' target='_blank'>Earth's Future</a></li>" 
    + "<li>Li, W. et al. (2018) Additional risk in extreme precipitation in China from 1.5C to 2.0C global warming levels, <a href='https://www.sciencedirect.com/science/article/pii/S2095927317306400' target='_blank'>Science Bulletin</a></li>" 
    + "<li>Xu, Y. et al. (2017) Asian climate change under 1.5–4C warming targets, <a href='https://www.sciencedirect.com/science/article/pii/S1674927817300333' target='_blank'>Advances in Climate Change Research</a></li>" 
    + "<li>Zhan, M. et al. (2018) Changes in Extreme Maximum Temperature Events and Population Exposure in China under Global Warming Scenarios of 1.5 and 2.0C: Analysis Using the Regional Climate Model COSMO-CLM, <a href='https://link.springer.com/article/10.1007/s13351-018-7016-y' target='_blank'>Journal of Meteorological Research</a></li>" 
    + "<li>Shi, C. et al. (2018) Changes in temperature extremes over China under 1.5C and 2C global warming targets, <a href='https://www.sciencedirect.com/science/article/pii/S167492781730103X' target='_blank'>Advances in Climate Change Research</a></li>" 
    + "<li>Fu, Y-H. et al. (2018) Changes in surface air temperature over China under the 1.5 and 2.0C global warming targets, <a href='https://www.sciencedirect.com/science/article/pii/S1674927817301156' target='_blank'>Advances in Climate Change Research</a></li>" 
    + "<li>Li, H. et al. (2018) Future precipitation changes over China under 1.5C and 2.0C global warming targets by using CORDEX regional climate models, <a href='https://www.sciencedirect.com/science/article/pii/S0048969718319764' target='_blank'>Science of the Total Environment</a></li>" 
    + "<li>Su, B. et al. (2017) Projection of actual evapotranspiration using the COSMO-CLM regional climate model under global warming scenarios of 1.5C and 2.0C in the Tarim River basin, China <a href='https://www.sciencedirect.com/science/article/pii/S0169809517302326' target='_blank'>Atmospheric Research</a></li>" 
    + "<li>Zhou, T. et al. (2018) Impact of 1.5C and 2.0C global warming on aircraft takeoff performance in China, <a href='https://www.sciencedirect.com/science/article/pii/S2095927318301695' target='_blank'>Science Bulletin</a></li>" 
    + "<li>Chen, Y. et al. (2018) Impacts of climate change and climate extremes on major crops productivity in China at a global warming of 1.5 and 2.0C, <a href='https://www.earth-syst-dynam.net/9/543/2018/' target='_blank'>Earth System Dynamics</a></li>" 
    + "<li>Sun, H. et al. (2018) Impacts of global warming of 1.5C and 2.0C on precipitation patterns in China by regional climate model (COSMO-CLM), <a href='https://www.sciencedirect.com/science/article/pii/S0169809517301138' target='_blank'>Atmospheric Research</a></li>" 
    + "<li>Chen, H. & Sun, J. (2018) Projected changes in climate extremes in China in a 1.5C warmer world, <a href='https://rmets.onlinelibrary.wiley.com/doi/10.1002/joc.5521' target='_blank'>International Journal of Climatology</a></li>" 
    + "<li>King, A. D. et al. (2017) Australian climate extremes at 1.5C and 2C of global warming, <a href='https://www.nature.com/articles/nclimate3296' target='_blank'>Nature Climate Change</a></li>" 
    + "<li>Park, C. et al. (2018) Avoided economic impacts of energy demand changes by 1.5 and 2c climate stabilization, <a href='http://iopscience.iop.org/article/10.1088/1748-9326/aab724/meta' target='_blank'>Environmental Research Letters.</a> Data provided by Chan Park of the <a href='http://www.uos.ac.kr/en/main.do' target='_blank'>University of Seoul</a></li>" 
    + "<li>Teichmann, C, et al. (2018) Avoiding extremes: Benefits of staying below +1.5C compared to +2.0C and +3.0C global warming, <a href='http://www.mdpi.com/2073-4433/9/4/115' target='_blank'>Atmosphere</a></li>" 
    + "<li>Betts, R. A. et al. (2018) Changes in climate extremes, fresh water availability and vulnerability to food insecurity projected at 1.5C and 2C global warming with a higher-resolution global climate model, <a href='http://rsta.royalsocietypublishing.org/content/376/2119/20160452' target='_blank'>Philosophical Transactions of the Royal Society A</a></li>" 
    + "<li>Werner, M. F. et al. (2018) Changes in tropical cyclones under stabilized 1.5 and 2.0C global warming scenarios as simulated by the Community Atmospheric Model under the HAPPI protocols, <a href='https://www.earth-syst-dynam.net/9/187/2018/esd-9-187-2018.html' target='_blank'>Earth System Dynamics</a></li>" 
    + "<li>Aerenson, T. et al. (2018) Changes in a suite of indicators of extreme temperature and precipitation under 1.5 and 2 degrees warming, <a href='http://iopscience.iop.org/article/10.1088/1748-9326/aaafd6' target='_blank'>Environmental Research Letters</a>. Data provided by Claudia Tebaldi of the <a href='https://ncar.ucar.edu/' target='_blank'>National Center for Atmospheric Research.</a></li>" 
    + "<li>Huang, J. et al. (2017) Drylands face potential threat under 2C global warming target, <a href='https://www.nature.com/articles/nclimate3275' target='_blank'>Nature Climate Change</a>. Data provided by Jianping Huang of <a href='http://en.lzu.edu.cn/' target='_blank'>Lanzhou University</a></li>" 
    + "<li>Dosio, A. et al. (2018) Extreme heat waves under 1.5C and 2C global warming, <a href='http://iopscience.iop.org/article/10.1088/1748-9326/aab827' target='_blank'>Environmental Research Letters</a></li>" 
    + "<li>Mitchell, D. et al. (2018) Extreme heat-related mortality avoided under Paris Agreement goals, <a href='https://www.nature.com/articles/s41558-018-0210-1' target='_blank'>Nature Climate Change</a></li>" 
    + "<li>Karnauskas, K. B. et al. (2018) Freshwater stress on small island developing states: population projections and aridity changes at 1.5 and 2C, <a href='https://link.springer.com/article/10.1007/s10113-018-1331-9' target='_blank'>Regional Environmental Change</a></li>" 
    + "<li>Taylor, M. A. & Clarke, L. A. (2018) Future Caribbean climates in a world of rising temperatures: The 1.5 vs 2.0 Dilemma, <a href='https://journals.ametsoc.org/doi/10.1175/JCLI-D-17-0074.1' target='_blank'>Journal of Climate</a></li>" 
    + "<li>Naumann, G. et al. (2018) Global Changes in Drought Conditions Under Different Levels of Warming, <a href='https://agupubs.onlinelibrary.wiley.com/doi/10.1002/2017GL076521' target='_blank'>Geophysical Research Letters</a></li>" 
    + "<li>Byers, E. et al. (2018) Global exposure and vulnerability to multi-sector development and climate change hotspots, <a href='http://iopscience.iop.org/article/10.1088/1748-9326/aabf45' target='_blank'>Environmental Research Letters</a></li>" 
    + "<li>Liu, W. et al. (2018) Global Freshwater availability below normal conditions and population impact under 1.5C and 2C stabilization scenarios, <a href='https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2018GL078789' target='_blank'>Geophysical Research Letters</a></li>" 
    + "<li>Paltan, H. et al. (2018) Global implications of 1.5C and 2C warmer worlds on extreme river flows, <a href='http://iopscience.iop.org/article/10.1088/1748-9326/aad985/meta' target='_blank'>Environmental Research Letters</a></li>" 
    + "<li>Alfieri, L. et al. (2016) Global projections of river flood risk in a warmer world, <a href='https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2016EF000485' target='_blank'>Earth's Future</a></li>" 
    + "<li>Karmalkar, A. V. & Bradley, R. S. (2017) Consequences of global warming of 1.5C and 2C for regional temperature and precipitation changes in the contiguous United States, <a href='http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0168697' target='_blank'>PLOS One</a>. Data provided by Ambarish Karmalkar of the <a href='http://www.umass.edu/' target='_blank'>University of Massachusetts Amherst</a>.</li>" 
    + "<li>Kraaijenbrink, P. D. A. et al. (2018) Impact of a global temperature rise of 1.5 degrees Celsius on Asia's glaciers, <a href='https://www.nature.com/articles/nature23878' target='_blank'>Nature</a></li>" 
    + "<li>Ali, H. & Mishra, V. (2018) Increase in Subdaily Precipitation Extremes in India Under 1.5 and 2.0C Warming Worlds, <a href='https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2018GL078689' target='_blank'>Geophysical Research Letters</a></li>" 
    + "<li>Lee, D. et al. (2018) Impacts of half a degree additional warming on the Asian summer monsoon rainfall characteristics, <a href='http://iopscience.iop.org/article/10.1088/1748-9326/aab55d' target='_blank'>Environmental Research Letters</a>. Data provided by Donghyun Lee of <a href='http://www.postech.ac.kr/eng/' target='_blank'>Pohang University of Science and Technology</a></li>" 
    + "<li>Leng, G. (2018) Keeping global warming within 1.5C reduces future risk of yield loss in the United States: A probabilistic modeling approach, <a href='https://www.sciencedirect.com/science/article/pii/S0048969718324203' target='_blank'>Science of the Total Environment</a>. Data provided by Guoyong Leng of <a href='http://www.postech.ac.kr/eng/' target='_blank'>Pohang University of Science and Technology</a>.</li>" 
    + "<li>Marzeion, B. et al. (2018) Limited influence of climate change mitigation on short-term glacier mass loss, <a href='https://www.nature.com/articles/s41558-018-0093-1' target='_blank'>Nature Climate Change</a></li>" 
    + "<li>Burke, M. et al. (2018) Large potential reduction in economic damages under UN mitigation targets, <a href='https://www.nature.com/articles/s41586-018-0071-9' target='_blank'>Nature</a></li>" 
    + "<li>Guo, X. et al. (2016) Projection of precipitation extremes for eight global warming targets by 17 CMIP5 models, <a href='https://link.springer.com/article/10.1007/s11069-016-2553-0' target='_blank'>Natural Hazards</a></li>" 
    + "<li>King, A. D. et al. (2018) Reduced heat exposure by limiting global warming to 1.5C, <a href='https://www.nature.com/articles/s41558-018-0191-0' target='_blank'>Nature Climate Change</a></li>" 
    + "<li>Kharin, V. V. et al. (2018) Risks from Climate Extremes Change Differently from 1.5C to 2.0C Depending on Rarity, <a href='https://agupubs.onlinelibrary.wiley.com/doi/abs/10.1002/2018EF000813' target='_blank'>Earth's Future</a></li>" 
    + "<li>Nicholls, R. J. et al. (2018) Stabilization of global temperature at 1.5C and 2.0C: Implications for coastal areas, <a href='http://rsta.royalsocietypublishing.org/content/376/2119/20160448' target='_blank'>Philosophical Transactions of the Royal Society A</a></li>" 
    + "<li>Nangombe, S. et al. (2018) Record-breaking climate extremes in Africa under stabilized 1.5C and 2C global warming scenarios, <a href='https://www.nature.com/articles/s41558-018-0145-6' target='_blank'>Nature Climate Change</a></li>" 
    + "<li>Ebi, K. L. et al. (2018) Health risks of warming of 1.5c, 2c, and higher, above pre-industrial temperatures, <a href='http://iopscience.iop.org/article/10.1088/1748-9326/aac4bd/meta' target='_blank'>Environmental Research Letters</a></li>" 
    + "<li>Wen, S. et al. (2018) Estimation of economic losses from tropical cyclones in China at 1.5C and 2.0C warming using the regional climate model COSMO‐CLM, <a href='https://rmets.onlinelibrary.wiley.com/doi/abs/10.1002/joc.5838?af=R' target='_blank'>International Journal of Climatology</a></li>" 
    + "<li>Schleussner, C-F. et al. (2016) Differential climate impacts for policy-relevant limits to global warming: the case of 1.5C and 2C, <a href='https://www.earth-syst-dynam.net/7/327/2016/esd-7-327-2016.html' target='_blank'>Earth System Dynamics</a></li>" 
    + "<li>Dosio, A. & Fischer, E. M. (2017) Will Half a Degree Make a Difference? Robust Projections of Indices of Mean and Extreme Climate in Europe Under 1.5C, 2C, and 3C Global Warming, <a href='https://agupubs.onlinelibrary.wiley.com/doi/abs/10.1002/2017GL076222' target='_blank'>Geophysical Research Letters</a></li>" 
    + "<li>Weber, T. et al. (2018) Analyzing Regional Climate Change in Africa in a 1.5, 2, and 3C Global Warming World, <a href='https://agupubs.onlinelibrary.wiley.com/doi/abs/10.1002/2017EF000714' target='_blank'>Earth's Future</a>. Data provided by Torsten Weber of the <a href='https://www.climate-service-center.de/index.php.en' target='_blank'>Climate Service Center Germany</a> (GERICS)</li>" 
    + "<li>Vicedo-Cabrera, A. M. et al. (2018) Temperature-related mortality impacts under and beyond Paris Agreement climate change scenarios, <a href='https://link.springer.com/article/10.1007%2Fs10584-018-2274-3' target='_blank'>Climatic Change Letters</a>. Data provided by Ana Maria Vicedo-Cabrera of the <a href='https://www.lshtm.ac.uk/' target='_blank'>London School of Hygiene & Tropical Medicine</a></li>" 
    + "<li>Mohammed, K. et al. (2018) Future Floods in Bangladesh under 1.5C, 2C, and 4C Global Warming Scenarios, <a href='https://ascelibrary.org/doi/pdf/10.1061/%28ASCE%29HE.1943-5584.0001705' target='_blank'>Journal of Hydrologic Engineering</a></li><li>Su, B. et al. (2018) Drought losses in China might double between the 1.5C and 2.0C warming, <a href='http://www.pnas.org/cgi/doi/10.1073/pnas.1802129115' target='_blank'>PNAS</a></li>" 
    + "<li>Turco, M. et al. (2018) Exacerbated fires in Mediterranean Europe due to anthropogenic warming projected with nonstationary climate-fire models, <a href='https://www.nature.com/articles/s41467-018-06358-z' target='_blank'>Nature Communications</a>. Data provided by Marco Turco of the  <a href='https://www.ub.edu/web/ub/en/' target='_blank'>University of Barcelona</a></li></p>";
}
