    // build DOM from data

    // add <br> to end of 'text' (except for intro and credit)
    // to ensure that the intro is on a separate line to avoid formatting issues
    
    var impacts=[{
        name: "background1",
    },{
        name: "background2"
    },{
        name: "instructions",
        title: "",
        icon: "<i class='fas fa-info-circle'></i>",
        text: "All the research presented below compares impacts at 1.5C and 2C of warming above pre-industrial levels – the Paris Agreement’s temperature goals. These are shown in the first two columns, respectively.<br><br>If the research also includes a higher temperature level, such as 2.5C, 3C or 4C, this will be shown in a third column. But this will change from one impact to the next, depending on the study.<br>",
        background: "https://www.carbonbrief.org/wp-content/uploads/2018/01/C5T9H7-rainfall.jpg",
    },{
        name: "sealevel",
        title: "OCEANS",
        icon: "<img class='title-icon' src='../img/ocean.svg'>",
        info: "Relative to 2000; median and 5th-95th percentile range",
        background: "https://www.carbonbrief.org/wp-content/uploads/2018/04/Turtle-and-bleached-coral-on-Heron-Island-2.jpeg",
        map: "global",
        location: "Global"
    },{
        name: "marineheatwaves",
        title: "OCEANS",
        icon: "<img class='title-icon' src='../img/ocean.svg'>",
        info: "Marine heatwaves: Relative to pre-industrial levels.<br>Ocean pH: Relative to 1986-2005; median and 5th-95th percentile range.<br>AMOC: Relative to pre-industrial levels.",
        background: "https://www.carbonbrief.org/wp-content/uploads/2018/01/C5T9H7-rainfall.jpg",
        map: "Global",
        location: "Global"
    },{
        name: "ice",
        title: "ICE",
        icon: "<i class='fas fa-snowflake'></i>",
        info: " Arctic sea ice: 'Ice-free' is defined as an average September sea ice extent of less than one million km2.<br>Permafrost: Relative to 1961-90; uncertainty is a one standard deviation range",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        map: "Global",
        location: "Global"
    },{
        name: "snow",
        title: "ICE",
        icon: "<i class='fas fa-snowflake'></i>",
        info: "Snow extent: Relative to 1971-2000. <br>Snow storage: Percent of global land area (exc. Antarctica and Greenland) seeing changes in maximum monthly snow storage in calendar month with maximum storage in historical decade.",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        map: "Global",
        location: "Global"
    },{
        name: "temperature",
        title: "HEAT EXTREMES",
        icon: "<i class='fas fa-sun'></i>",
        info: "Annual maximum daily temperature: Relative to 1981–2010; ensemble mean (min–max).<br> Hot days: Percentage of days above the 90th percentile of daily maximum temperature in the 1981–2010 average; ensemble mean (min–max).<br>Warm spell duration: Defined as the length of the longest streak of six or more days with the maximum temperature exceeding the 90th percentile of the baseline period (days); by 2081-2100; relative to 1996–2015; ensemble mean (min–max).",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        map: "Global",
        location: "Global"
    },{
        name: "heatwaves",
        title: "HEAT EXTREMES",
        icon: "<i class='fas fa-sun'></i>",
        info: "Global exposure to heatwaves: Defined as a level of >20 on the Heat Wave Magnitude Index daily; mean and interquartile range, Defined as a level of >20 on the Heat Wave Magnitude Index daily; mean and interquartile range, Defined as a level of >40 on the Heat Wave Magnitude Index daily; median and interquartile range.<br> Warm extremes: Defined as annual maximum daily maximum that would be a 1-in-20 year event in current climate.<br>Cold extremes: Defined as annual minimum daily maximum that would be a 1-in-20 year event in current climate.",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        map: "Global",
        location: "Global"
    },{
        name: "rainfall",
        title: "RAINFALL",
        icon: "<i class='fas fa-tint'></i>",
        info: "Rainfall: Relative to 1981–2010; ensemble mean (min–max).<br>Rainfall intensity: Defined as the total annual precipitation divided by the number of wet days in the year; by 2081-2100; relative to 1996–2015; ensemble mean (min–max).<br>Rainfall extremes: Frequency of rainfall extremes (annual maximum 1-day precipitation that would be a 1-in-20 year event in current climate)",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        map: "Global",
        location: "Global"
    },{
        name: "rivers",
        title: "RAINFALL",
        icon: "<i class='fas fa-tint'></i>",
        info: "Percentage of global land area seeing changes in average streamflows.",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        map: "Global",
        location: "Global"
    },{
        name: "drought",
        title: "DROUGHT",
        icon: "<img class='title-icon' src='../img/drought.svg'>",
        info: "Drought length: Defined as a Standardized Precipitation Index for 12 months of <-0.5; relative to 1976-2005.<br>Water scarcity: Change in freshwater availability in below normal conditions (Q20); water demand threshold: 1000 m3 person-1 yr-1; population held constant at 2015 levels; relative to 2006-2015.<br>Severe drought: Defined as a month where the Palmer Drought Severity Index drops below -3; relative to 1985-2005; uses SSP1 socioeconomic pathway.",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        map: "Global",
        location: "Global"
    },{
        name: "storms",
        title: "STORMS AND FLOODING",
        icon: "<img class='title-icon' src='../img/cyclone.svg'>",
        info: "Tropical cyclones: Relative to 1996–2015; baseline number = 73.4.<br>Coastal flooding: Millions per year; populations constant after 2100; defences constant at 1995 levels.",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        map: "Global",
        location: "Global"
    },{
        name: "crops1",
        title: "CROPS",
        icon: "<img class='title-icon' src='../img/wheat.svg'>",
        info: "Crop yield change: Relative to 1995-2014; includes CO2 fertilisation effect.<br>Growing season length: Defined as the maximum number of days between frost days; by 2081-2100; relative to 1996–2015; ensemble mean (min–max).",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        map: "Global",
        location: "Global"
    },{
        name: "crops2",
        title: "CROPS",
        icon: "<img class='title-icon' src='../img/wheat.svg'>",
        info: "Relative to 1986-2005; includes CO2 fertilisation effect.",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        map: "Global",
        location: "Global"
    },{
        name: "nature",
        title: "NATURE",
        icon: "<i class='fas fa-frog'></i>",
        info: "Proportions of taxa projected to lose over 50% of their climatic range in 2100 where species disperse at realistic rates to track their geographically shifting climate envelope; data indicate the mean and 10-90% range.<br>Drylands defined as areas where mean annual rainfall is <600 mm and ratio of mean rainfall to potential evapotranspiration is <0.65; relative to pre-industrial.<br>Humid lands defined as areas where mean annual rainfall is >600 mm and ratio of mean rainfall to potential evapotranspiration is >0.65; relative to pre-industrial.",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        map: "Global",
        location: "Global"
    },{
        name: "economy",
        title: "ECONOMY",
        icon: "<i class='fas fa-dollar-sign'></i>",
        info: "GDP: Relative to no additional warming.<br>Flood damage: Annual flood damage losses from SLR by 2100; relative to 1986-2005; without adaptation.<br>Energy demand: In 2100; assumes SSP2; relative to no climate change.",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        map: "Global",
        location: "Global"
    },{
        name: "health",
        title: "HEALTH",
        icon: "<i class='fas fa-briefcase-medical'></i>",
        info: "Under SSP3.<br>Drylands defined as areas where mean annual rainfall is <600 mm and ratio of mean rainfall to potential evapotranspiration is <0.65; relative to pre-industrial.<br>Humid lands defined as areas where mean annual rainfall is >600 mm and ratio of mean rainfall to potential evapotranspiration is >0.65; relative to pre-industrial.",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        map: "Global",
        location: "Global"
    },{
        icon: "fas fa-info-circle",
        text: "Extra info here.<br><br>Data compiled by <a href='https://www.carbonbrief.org/author/robertmcsweeney'target='_blank'>Robert McSweeney.</a> Interactive by <a href='https://www.carbonbrief.org/author/rospearce' >Rosamund Pearce</a> with help from Tom Prater. Licensed under <a href='https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode'>Creative Commons.</a>",
    }];