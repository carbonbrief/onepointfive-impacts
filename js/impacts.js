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
        credit: ""
    },{
        name: "sealevel",
        title: "OCEANS",
        icon: "<img class='title-icon' src='../img/ocean.svg'>",
        info: "Relative to 2000; median and 5th-95th percentile range",
        background: "https://www.carbonbrief.org/wp-content/uploads/2018/04/Turtle-and-bleached-coral-on-Heron-Island-2.jpeg",
        credit: "",
        map: "global",
        location: "Global"
    },{
        name: "marineheatwaves",
        title: "OCEANS",
        icon: "<img class='title-icon' src='../img/ocean.svg'>",
        info: "Marine heatwaves: relative to pre-industrial levels.<br>Ocean pH: relative to 1986-2005; median and 5th-95th percentile range.<br>AMOC: relative to pre-industrial levels.",
        background: "https://www.carbonbrief.org/wp-content/uploads/2018/01/C5T9H7-rainfall.jpg",
        credit: "",
        map: "Global",
        location: "Global"
    },{
        name: "ice",
        title: "ICE",
        icon: "<i class='fas fa-snowflake'></i>",
        info: " Arctic sea ice: 'ice-free' is defined as an average September sea ice extent of less than one million km2.<br>Permafrost: Relative to 1961-90; uncertainty is a one standard deviation range",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "Global",
        location: "Global"
    },{
        name: "snow",
        title: "ICE",
        icon: "<i class='fas fa-snowflake'></i>",
        info: "Snow extent: relative to 1971-2000. <br>Snow storage: percent of global land area (exc. Antarctica and Greenland) seeing changes in maximum monthly snow storage in calendar month with maximum storage in historical decade.",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "Global",
        location: "Global"
    },{
        name: "temperature",
        title: "TEMPERATURE",
        icon: "<i class='fas fa-thermometer'></i>",
        info: "Annual maximum daily temperature: relative to 1981–2010; ensemble mean (min–max).<br> Hot days: percentage of days above the 90th percentile of daily maximum temperature in the 1981–2010 average; ensemble mean (min–max).<br>Warm spell duration: defined as the length of the longest streak of six or more days with the maximum temperature exceeding the 90th percentile of the baseline period (days); by 2081-2100; relative to 1996–2015; ensemble mean (min–max).",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "Global",
        location: "Global"
    },{
        name: "heatwaves",
        title: "TEMPERATURE",
        icon: "<i class='fas fa-thermometer'></i>",
        info: "Global exposure to heatwaves: defined as a level of >20 on the Heat Wave Magnitude Index daily; mean and interquartile range, Defined as a level of >20 on the Heat Wave Magnitude Index daily; mean and interquartile range, Defined as a level of >40 on the Heat Wave Magnitude Index daily; median and interquartile range.<br> Warm extremes: defined as annual maximum daily maximum that would be a 1-in-20 year event in current climate.<br>Cold extremes: Defined as annual minimum daily maximum that would be a 1-in-20 year event in current climate.",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "Global",
        location: "Global"
    },{
        name: "rainfall",
        title: "RAINFALL",
        icon: "<i class='fas fa-tint'></i>",
        info: "Rainfall: relative to 1981–2010; ensemble mean (min–max).<br>Rainfall intensity: defined as the total annual precipitation divided by the number of wet days in the year; by 2081-2100; relative to 1996–2015; ensemble mean (min–max).<br>Rainfall extremes: frequency of rainfall extremes (annual maximum 1-day precipitation that would be a 1-in-20 year event in current climate)",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "Global",
        location: "Global"
    },{
        name: "rivers",
        title: "RAINFALL",
        icon: "<i class='fas fa-tint'></i>",
        info: "Percentage of global land area seeing changes in average streamflows.",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "Global",
        location: "Global"
    },{
        name: "drought",
        title: "DROUGHT",
        icon: "<img class='title-icon' src='../img/drought.svg'>",
        info: "Drought length: defined as a Standardized Precipitation Index for 12 months of <-0.5; relative to 1976-2005.<br>Water scarcity: change in freshwater availability in below normal conditions (Q20); water demand threshold: 1000 m3 person-1 yr-1; population held constant at 2015 levels; relative to 2006-2015.<br>Severe drought: defined as a month where the Palmer Drought Severity Index drops below -3; relative to 1985-2005; uses SSP1 socioeconomic pathway.",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "Global",
        location: "Global"
    },{
        name: "storms",
        title: "STORMS AND FLOODING",
        icon: "<img class='title-icon' src='../img/cyclone.svg'>",
        info: "Tropical cyclones: Relative to 1996–2015; baseline number = 73.4.<br>Coastal flooding: millions per year; populations constant after 2100; defences constant at 1995 levels.",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "Global",
        location: "Global"
    },{
        name: "crops1",
        title: "CROPS",
        icon: "<img class='title-icon' src='../img/wheat.svg'>",
        info: "Crop yield change: relative to 1995-2014; includes CO2 fertilisation effect.<br>Growing season length: defined as the maximum number of days between frost days; by 2081-2100; relative to 1996–2015; ensemble mean (min–max).",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "Global",
        location: "Global"
    },{
        name: "crops2",
        title: "CROPS",
        icon: "<img class='title-icon' src='../img/wheat.svg'>",
        info: "Relative to 1986-2005; includes CO2 fertilisation effect.",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "Global",
        location: "Global"
    },{
        name: "nature",
        title: "NATURE",
        icon: "<i class='fas fa-frog'></i>",
        info: "Proportions of taxa projected to lose over 50% of their climatic range in 2100 where species disperse at realistic rates to track their geographically shifting climate envelope; data indicate the mean and 10-90% range.<br>Drylands defined as areas where mean annual rainfall is <600 mm and ratio of mean rainfall to potential evapotranspiration is <0.65; relative to pre-industrial.<br>Humid lands defined as areas where mean annual rainfall is >600 mm and ratio of mean rainfall to potential evapotranspiration is >0.65; relative to pre-industrial.",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "global",
        location: "Global"
    },{
        name: "economy",
        title: "ECONOMY",
        icon: "<i class='fas fa-dollar-sign'></i>",
        info: "GDP: relative to no additional warming.<br>Flood damage: annual flood damage losses from SLR by 2100; relative to 1986-2005; without adaptation.<br>Energy demand: in 2100; assumes SSP2; relative to no climate change.",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "global",
        location: "Global"
    },{
        name: "health",
        title: "HEALTH",
        icon: "<i class='fas fa-briefcase-medical'></i>",
        info: "Under SSP3.<br>Drylands defined as areas where mean annual rainfall is <600 mm and ratio of mean rainfall to potential evapotranspiration is <0.65; relative to pre-industrial.<br>Humid lands defined as areas where mean annual rainfall is >600 mm and ratio of mean rainfall to potential evapotranspiration is >0.65; relative to pre-industrial.",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "global",
        location: "Global"
    },{
        name: "europeTitle",
        title: "EUROPE",
        icon: "<img class='title-icon' src='/img/europe-icon.svg'>",
        credit: ""
    },{
        name: "europeHotDays",
        title: "TEMPERATURE",
        icon: "<i class='fas fa-thermometer'></i>",
        info: "Defined as days per year where average max temp > 30C; relative to 1971-2000; ensemble mean (min–max).",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "europe",
        location: "Europe"
    },{
        name: "europeHotNights",
        title: "TEMPERATURE",
        icon: "<i class='fas fa-thermometer'></i>",
        info: "Defined as nights per year where average min temp > 20C; relative to 1971-2000; ensemble mean (min–max).",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "europe",
        location: "Europe"
    },{
        name: "europeTemp",
        title: "TEMPERATURE",
        icon: "<i class='fas fa-thermometer'></i>",
        info: "Relative to 1981-2010; ensemble mean (min–max).",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "europe",
        location: "Europe"
    },{
        name: "europeFrost",
        title: "TEMPERATURE",
        icon: "<i class='fas fa-thermometer'></i>",
        info: "Number of days where min temp <0C; relative to 1981-2010; ensemble mean (min–max).",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "europe",
        location: "Europe"
    },{
        name: "europeWinterTemp",
        title: "TEMPERATURE",
        icon: "<i class='fas fa-thermometer'></i>",
        info: "Relative to 1981-2010; ensemble mean (min–max).",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "europe",
        location: "Europe"
    },{
        name: "europeHeatwave",
        title: "TEMPERATURE",
        icon: "<i class='fas fa-thermometer'></i>",
        info: "'Unprecedented' summer heat: experienced by >100m people; relative to 1950-2017 observed record. Warm spell duration: defined as the length of the longest streak of six or more days with the maximum temperature exceeding the 90th percentile of the baseline period (days); by 2081-2100; relative to 1996–2015; ensemble mean (min–max). Frequency of warm extremes: Defined as annual maximum daily maximum that would be a 1-in-20 year event in current climate.",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "europe",
        location: "Europe"
    },{
        name: "europeColdwave",
        title: "TEMPERATURE",
        icon: "<i class='fas fa-thermometer'></i>",
        info: "Defined as annual minimum daily maximum that would be a 1-in-20 year event in current climate.",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "europe",
        location: "Europe"
    },{
        name: "europeRainfallWinterMaxDaily",
        title: "RAINFALL",
        icon: "<i class='fas fa-tint'></i>",
        info: "Relative to 1981-2010; ensemble mean (min–max).",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "europe",
        location: "Europe"
    },{
        name: "europeRainfallSummerMaxDaily",
        title: "RAINFALL",
        icon: "<i class='fas fa-tint'></i>",
        info: "Relative to 1981-2010; ensemble mean (min–max).",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "europe",
        location: "Europe"
    },{
        name: "europeDryDays",
        title: "RAINFALL",
        icon: "<i class='fas fa-tint'></i>",
        info: "Largest number of consecutive days where precipitation <1mm; relative to 1981-2010; ensemble mean (min–max)",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "europe",
        location: "Europe"
    },{
        name: "europeRainIntensity",
        title: "RAINFALL",
        icon: "<i class='fas fa-tint'></i>",
        info: "Precipitation intensity: defined as the total annual precipitation divided by the number of wet days in the year; by 2081-2100; relative to 1996–2015; ensemble mean (min–max).<br>Rainfall extremes: defined as annual maximum 1-day precipitation that would be a 1-in-20 year event in current climate.",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "europe",
        location: "Europe"
    },{
        name: "europeDrought",
        title: "DROUGHT",
        icon: "<img class='title-icon' src='../img/drought.svg'>",
        info: "Defined as a Standardized Precipitation Index for 12 months of <-0.5; relative to 1976-2005.",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "europe",
        location: "Europe"
    },{
        name: "europeRivers1",
        title: "STORMS AND FLOODING",
        icon: "<img class='title-icon' src='../img/cyclone.svg'>",
        info: "High river flows: defined as the streamflow exceeded 10% of the time (Q10); relative to 1971-2000.<br>River floods: defined as the annual maximum streamflow (Qmax); relative to 1971-2000.",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "europe",
        location: "Europe"
    },{
        name: "europeRivers2",
        title: "STORMS AND FLOODING",
        icon: "<img class='title-icon' src='../img/cyclone.svg'>",
        info: "Population held constant at 2015 levels; relative to 1976-2005.<br>Frequency of extreme high flows: return period for a 1-in-100 year extreme high flows in 2006-15.",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "europe",
        location: "Europe"
    },{
        name: "europeCrops",
        title: "CROPS",
        icon: "<img class='title-icon' src='../img/wheat.svg'>",
        info: "Defined as the maximum number of days between frost days; by 2081-2100; relative to 1996–2015; ensemble mean (min–max).",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "europe",
        location: "Europe"
    },{
        name: "europeEconomy",
        title: "ECONOMY",
        icon: "<i class='fas fa-dollar-sign'></i>",
        info: "Damage in euros at Purchasing Power Parity in 2010 values; relative to 1976-2005",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "europe",
        location: "Europe"
    },{
        name: "europeHealth",
        title: "HEALTH",
        icon: "<i class='fas fa-briefcase-medical'></i>",
        info: "Likelihood of London summer without heat-related deaths: currently 10%.<br>Average number of excess summer heatwave deaths: relative to 2006-2015.",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "europe",
        location: "Europe"
    },{
        name: "americasTitle",
        title: "AMERICAS",
        icon: "<img class='title-icon' src='/img/americas-icon.svg'>",
        credit: ""
    },{
        name: "americasTemp",
        title: "TEMPERATURE",
        icon: "<i class='fas fa-thermometer'></i>",
        info: "Relative to a 1901-30 baseline",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "americas",
        location: "Americas"
    },{
        name: "americasMaxTemp",
        title: "TEMPERATURE",
        icon: "<i class='fas fa-thermometer'></i>",
        info: "By 2081-2100; relative to 1996–2015; ensemble mean (min–max)",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "americas",
        location: "Americas"
    },{
        name: "americasWarmSpell",
        title: "TEMPERATURE",
        icon: "<i class='fas fa-thermometer'></i>",
        info: "Defined as the length of the longest streak of six or more days with the maximum temperature exceeding the 90th percentile of the baseline period (days); by 2081-2100; relative to 1996–2015; ensemble mean (min–max)",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "americas",
        location: "Americas"
    },{
        name: "americasWarmExtremes",
        title: "TEMPERATURE",
        icon: "<i class='fas fa-thermometer'></i>",
        info: "Defined as annual maximum daily maximum that would be a 1-in-20 year event in current climate",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "americas",
        location: "Americas"
    },{
        name: "americasColdExtremes",
        title: "TEMPERATURE",
        icon: "<i class='fas fa-thermometer'></i>",
        info: "Defined as annual minimum daily maximum that would be a 1-in-20 year event in current climate",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "americas",
        location: "Americas"
    },{
        name: "americasRainfall",
        title: "RAINFALL",
        icon: "<i class='fas fa-tint'></i>",
        info: "Relative to a 1901-30 baseline",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "americas",
        location: "Americas"
    },{
        name: "americasDrySpell",
        title: "RAINFALL",
        icon: "<i class='fas fa-tint'></i>",
        info: "Defined as number of consecutive days with less than 1 mm of rainfall; by 2081-2100; relative to 1996–2015; ensemble mean (min–max)",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "americas",
        location: "Americas"
    },{
        name: "americasRainIntensity",
        title: "RAINFALL",
        icon: "<i class='fas fa-tint'></i>",
        info: "Defined as the total annual precipitation divided by the number of wet days in the year; by 2081-2100; relative to 1996–2015; ensemble mean (min–max)",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "americas",
        location: "Americas"
    },{
        name: "americasRainExtremes",
        title: "RAINFALL",
        icon: "<i class='fas fa-tint'></i>",
        info: "Defined as annual maximum 1-day precipitation that would be a 1-in-20 year event in current climate",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "americas",
        location: "Americas"
    },{
        name: "americasRainSeason",
        title: "RAINFALL",
        icon: "<i class='fas fa-tint'></i>",
        info: "Relative to 2006–2015",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "americas",
        location: "Americas"
    },{
        name: "americasDrought",
        title: "DROUGHT",
        icon: "<img class='title-icon' src='../img/drought.svg'>",
        info: "Drought length: Defined as a Standardized Precipitation Index for 12 months of <-0.5; relative to 1976-2005.<br>Water scarcity: change in freshwater availability in below normal conditions (Q20); water demand threshold: 1000 m3 person-1 yr-1; population held constant at 2015 levels; relative to 2006-2015.",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "americas",
        location: "Americas"
    },{
        name: "americasStorms",
        title: "STORMS AND FLOODING",
        icon: "<img class='title-icon' src='../img/cyclone.svg'>",
        info: "Return period for a 1-in-100 year extreme high flows in 2006-15",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "americas",
        location: "Americas"
    },{
        name: "americasCrops",
        title: "CROPS",
        icon: "<img class='title-icon' src='../img/wheat.svg'>",
        info: "US maize yields reference period: 1986–2005.<br>Growing season length: defined as the maximum number of days between frost days; by 2081-2100; relative to 1996–2015; ensemble mean (min–max).",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "americas",
        location: "Americas"
    },{
        name: "americasHealth",
        title: "HEALTH",
        icon: "<i class='fas fa-briefcase-medical'></i>",
        info: "Relative to 1961-90",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "americas",
        location: "Americas"
    },{
        name: "sidsTitle",
        title: "CARIBBEAN AND SMALL ISLAND STATES",
        icon: "<img class='title-icon' src='/img/caribbean-icon.svg'>",
        credit: ""
    },{
        name: "sidsTemp",
        title: "TEMPERATURE",
        icon: "<i class='fas fa-thermometer'></i>",
        info: "Average temperature: relative to pre-industrial.<br>Warm spell duration: annual count of days with at least 6 consecutive days when max temperature > 90th percentile; relative to 1971-2000.",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "caribbean",
        location: "Caribbean and small island states"
    },{
        name: "sidsRain",
        title: "RAINFALL",
        icon: "<i class='fas fa-tint'></i>",
        info: "Average annual rainfall: relative to 1971–2000.<br>Annual count of days when rainfall >10 mm; relative to 1971-2000.",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "caribbean",
        location: "Caribbean and small island states"
    },{
        name: "sidsDrought1",
        title: "DROUGHT",
        icon: "<img class='title-icon' src='../img/drought.svg'>",
        info: "Defined as a Standardized Precipitation Index for 12 months of < -1 (moderate drought or worse)",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "caribbean",
        location: "Caribbean and small island states"
    },{
        name: "sidsDrought2",
        title: "DROUGHT",
        icon: "<img class='title-icon' src='../img/drought.svg'>",
        info: "Drought length: defined as a Standardized Precipitation Index for 12 months of <-0.5; relative to 1976-2005.",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "caribbean",
        location: "Caribbean and small island states"
    },{
        name: "sidsDrought3",
        title: "DROUGHT",
        icon: "<img class='title-icon' src='../img/drought.svg'>",
        info: "Drought length: defined as a Standardized Precipitation Index for 12 months of <-0.5; relative to 1976-2005.",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "caribbean",
        location: "Caribbean and small island states"
    },{
        name: "africaTitle",
        title: "AFRICA",
        icon: "<img class='title-icon' src='/img/africa-icon.svg'>",
        credit: ""
    },{
        name: "africaTemp",
        title: "TEMPERATURE",
        icon: "<i class='fas fa-thermometer'></i>",
        info: "By 2081-2100; relative to 1996–2015; ensemble mean (min–max).<br>Warm spell duration: defined as the length of the longest streak of six or more days with the maximum temperature exceeding the 90th percentile of the baseline period (days); by 2081-2100; relative to 1996–2015; ensemble mean (min–max).",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "africa",
        location: "Africa"
    },{
        name: "africaTempExtremes",
        title: "TEMPERATURE",
        icon: "<i class='fas fa-thermometer'></i>",
        info: "Frequency of warm extremes (annual minimum daily maximum that would be a 1-in-20 year event in current climate).<br>Cold extremes: defined as annual minimum daily maximum that would be a 1-in-20 year event in current climate.",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "africa",
        location: "Africa"
    },{
        name: "africaHeat",
        title: "TEMPERATURE",
        icon: "<i class='fas fa-thermometer'></i>",
        info: "Range is 10-90th percentile",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "africa",
        location: "Africa"
    },{
        name: "africaRain",
        title: "RAINFALL",
        icon: "<i class='fas fa-tint'></i>",
        info: "Length of tropical rain season: relative to 2006–2015.<br>Dry spell duration: defined as number of consecutive days with less than 1 mm of rainfall; by 2081-2100; relative to 1996–2015; ensemble mean (min–max).",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "africa",
        location: "Africa"
    },{
        name: "africaRainIntensity",
        title: "RAINFALL",
        icon: "<i class='fas fa-tint'></i>",
        info: "Rainfall intensity: defined as the total annual precipitation divided by the number of wet days in the year; by 2081-2100; relative to 1996–2015; ensemble mean (min–max).<br>Rainfall extremes: defined as annual maximum 1-day precipitation that would be a 1-in-20 year event in current climate.",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "africa",
        location: "Africa"
    },{
        name: "africaDrought",
        title: "DROUGHT",
        icon: "<img class='title-icon' src='../img/drought.svg'>",
        info: "Defined as a Standardized Precipitation Index for 12 months of <-0.5; relative to 1976-2005.<br>Water scarcity: change in freshwater availability in below normal conditions (Q20); water demand threshold: 1000 m3 person-1 yr-1; population held constant at 2015 levels; relative to 2006-2015.",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "africa",
        location: "Africa"
    },{
        name: "africaStorms",
        title: "STORMS AND FLOODING",
        icon: "<img class='title-icon' src='../img/cyclone.svg'>",
        info: "Return period for a 1-in-100 year extreme high flows in 2006-15",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "africa",
        location: "Africa"
    },{
        name: "africaCrops",
        title: "CROPS",
        icon: "<img class='title-icon' src='../img/wheat.svg'>",
        info: "Defined as the maximum number of days between frost days; by 2081-2100; relative to 1996–2015; ensemble mean (min–max).",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "africa",
        location: "Africa"
    },{
        name: "asiaTitle",
        title: "ASIA",
        icon: "<img class='title-icon' src='/img/asia-icon.svg'>",
        credit: ""
    },{
        name: "asiaIce",
        title: "ICE",
        icon: "<i class='fas fa-snowflake'></i>",
        info: "Relative to 1996–2015; ensemble mean and standard deviation",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "asia",
        location: "Asia"
    },{
        name: "asiaTemp",
        title: "TEMPERATURE",
        icon: "<i class='fas fa-thermometer'></i>",
        info: "Average temperature: relative to 1861-1900.<br>Annual highest maximum temperature: by 2081-2100; relative to 1996–2015; ensemble mean (min–max).",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "asia",
        location: "Asia"
    },{
        name: "asiaWarmSpell",
        title: "TEMPERATURE",
        icon: "<i class='fas fa-thermometer'></i>",
        info: "Defined as the length of the longest streak of six or more days with the maximum temperature exceeding the 90th percentile of the baseline period (days); by 2081-2100; relative to 1996–2015; ensemble mean (min–max)",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "asia",
        location: "Asia"
    },{
        name: "asiaTempExtremes",
        title: "TEMPERATURE",
        icon: "<i class='fas fa-thermometer'></i>",
        info: "Warm extremes: defined as annual maximum daily maximum that would be a 1-in-20 year event in current climate.<br>Cold extremes: defined as annual minimum daily maximum that would be a 1-in-20 year event in current climate.",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "asia",
        location: "Asia"
    },{
        name: "asiaIndiaHeatwaves",
        title: "TEMPERATURE",
        icon: "<i class='fas fa-thermometer'></i>",
        info: "Mid-century: by 2021−2050; relative to 1986−2015.<br>End of century: by 2071−2100; relative to 1986−2015.",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "asia",
        location: "Asia"
    },{
        name: "asiaRainfallDry",
        title: "RAINFALL",
        icon: "<i class='fas fa-tint'></i>",
        info: "Average rainfall: relative to 1861-1900.<br>Dry spell duration: Defined as number of consecutive days with less than 1 mm of rainfall; by 2081-2100; relative to 1996–2015; ensemble mean (min–max).",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "asia",
        location: "Asia"
    },{
        name: "asiaRainfallIntensities",
        title: "RAINFALL",
        icon: "<i class='fas fa-tint'></i>",
        info: "Rainfall intensity: defined as the total annual precipitation divided by the number of wet days in the year; by 2081-2100; relative to 1996–2015; ensemble mean (min–max).<br>Rainfall extremes: Defined as annual maximum 1-day precipitation that would be a 1-in-20 year event in current climate.",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "asia",
        location: "Asia"
    },{
        name: "asiaMonsoon",
        title: "RAINFALL",
        icon: "<i class='fas fa-tint'></i>",
        info: "Indian monsoon extreme rainfall: 3-day rainfall total in a 1-in-100 year event; relative to a baseline of 1969-2005.<br>Asian monsoon: relative to 2006–2015.<br>Length of tropical rain season: relative to 2006–2015.",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "asia",
        location: "Asia"
    },{
        name: "asiaDrought",
        title: "DROUGHT",
        icon: "<img class='title-icon' src='../img/drought.svg'>",
        info: "Average drought length (months): defined as a Standardized Precipitation Index for 12 months of <-0.5; relative to 1976-2005.<br>Water scarcity: Change in freshwater availability in below normal conditions (Q20); water demand threshold: 1000 m3 person-1 yr-1; population held constant at 2015 levels; relative to 2006-2015.",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "asia",
        location: "Asia"
    },{
        name: "asiaStorms",
        title: "STORMS AND FLOODING",
        icon: "<img class='title-icon' src='../img/cyclone.svg'>",
        info: "Population held constant at 2015 levels; relative to 1976-2005",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "asia",
        location: "Asia"
    },{
        name: "asiaFlooding",
        title: "STORMS AND FLOODING",
        icon: "<img class='title-icon' src='../img/cyclone.svg'>",
        info: "Area inundated during an average flood, without flood defences, excluding cyclones.<br>Frequency of extreme high flows: return period for a 1-in-100 year extreme high flows in 2006-15.",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "asia",
        location: "Asia"
    },{
        name: "asiaCrops",
        title: "CROPS",
        icon: "<img class='title-icon' src='../img/wheat.svg'>",
        info: "Defined as the maximum number of days between frost days; by 2081-2100; relative to 1996–2015; ensemble mean (min–max)",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "asia",
        location: "Asia"
    },{
        name: "asiaNature",
        title: "NATURE",
        icon: "<i class='fas fa-frog'></i>",
        info: "Relative to 1986-2005",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "asia",
        location: "Asia"
    },{
        name: "asiaEconomy",
        title: "ECONOMY",
        icon: "<i class='fas fa-dollar-sign'></i>",
        info: "Damage in euros at Purchasing Power Parity in 2010 values; relative to 1976-2005",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        credit: "",
        map: "asia",
        location: "Asia"
    },{
        name: "chinaTitle",
        title: "CHINA",
        icon: "<img class='title-icon' src='/img/china-icon.svg'>",
        credit: ""
    },{
        name: "australasiaTitle",
        title: "AUSTRALASIA",
        icon: "<img class='title-icon' src='/img/australasia-icon.svg'>",
        credit: ""
    },{
        icon: "fas fa-info-circle",
        text: "Extra info here.<br><br>Data compiled by <a href='https://www.carbonbrief.org/author/robertmcsweeney'target='_blank'>Robert McSweeney.</a> Interactive by <a href='https://www.carbonbrief.org/author/rospearce' >Rosamund Pearce</a> with help from Tom Prater. Licensed under <a href='https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode'>Creative Commons.</a>",
    }];