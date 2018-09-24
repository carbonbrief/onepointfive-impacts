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
        { "name": "Annual", "1.5C": "<span class='arrow-down'>&#9660;</span> 8%", "2C": "<span class='arrow-down'>&#9660;</span> 11%", "3C": ""},
        { "name": "Winter", "1.5C": "<span class='arrow-down'>&#9660;</span> 5%", "2C": "<span class='arrow-down'>&#9660;</span> 7%", "3C": ""},
        { "name": "Spring", "1.5C": "<span class='arrow-down'>&#9660;</span> 7%", "2C": "<span class='arrow-down'>&#9660;</span> 10%", "3C": ""},
        { "name": "Summer", "1.5C": "<span class='arrow-down'>&#9660;</span> 20%", "2C": "<span class='arrow-down'>&#9660;</span> 26%", "3C": ""},
        { "name": "Autumn", "1.5C": "<span class='arrow-down'>&#9660;</span> 13%", "2C": "<span class='arrow-down'>&#9660;</span> 17%", "3C": ""},
        { "name": "<br><span class='table-subtitle'>Maximum monthly snow storage</span>", "1.5C": "", "2C": "", "3C": ""},
        {"name": "-100 to -30%", "1.5C": "4% <br><span class='uncertainty'>(5-9)</span>", "2C": "8% <br><span class='uncertainty'>(5-12)</span>", "3C": ""},
        {"name": "-30 to -10%", "1.5C": "9% <br><span class='uncertainty'>(7-9)</span>", "2C": "8% <br><span class='uncertainty'>(6-9)</span>", "3C": ""},
        {"name": "-10 to 10%", "1.5C": "19% <br><span class='uncertainty'>(11-17)</span>", "2C": "16% <br><span class='uncertainty'>(10-14)</span>", "3C": ""},
        {"name": "10 to 30%", "1.5C": "3% <br><span class='uncertainty'>(3-7)</span>", "2C": "3% <br><span class='uncertainty'>(3-7)</span>", "3C": ""},
        {"name": ">=30%", "1.5C": "1% <br><span class='uncertainty'>(1-2)</span>", "2C": "0% <br><span class='uncertainty'>(0-3)</span>", "3C": ""},
        {"name": "N/A", "1.5C": "65%", "2C": "65%", "3C": ""}
    ];

       var temperature = [
      {"name": "<span class='table-subtitle'>Annual maximum daily temperature</span>", "1.5C": "<span class='arrow-up'>&#9650;</span> 1.7C <br><span class='uncertainty'>(+1.2-+2)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 2.6C <br><span class='uncertainty'>(+2.1-+2.9)</span>", "3C": ""},
      {"name": "<span class='table-subtitle'>Hot days</span>", "1.5C": "<span class='arrow-up'>&#9650;</span> 16% <br><span class='uncertainty'>(+10-+19)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 25% <br><span class='uncertainty'>(+20-+29)</span>", "3C": ""},
      {"name": "<span class='table-subtitle'>Warm spell duration</span>", "1.5C": "<span class='arrow-up'>&#9650;</span> 17 days <br><span class='uncertainty'>(+15-+19)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 35 days <br><span class='uncertainty'>(+33-+36)</span>", "3C": ""}  
    ];

    var heatwaves = [
      {"name": "<span class='table-subtitle'>Global exposure to heatwaves</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Population facing at least one severe heatwave every 5 years", "1.5C": "14% <br><span class='uncertainty'>(9-18)</span>", "2C": "37%<br><span class='uncertainty'>(32-45)</span>", "3C": ""},
      {"name": "Population facing at least one severe heatwave every 20 years", "1.5C": "50% <br><span class='uncertainty'>(43-56)</span>", "2C": "70%<br><span class='uncertainty'>(66-76)</span>", "3C": ""},
      {"name": "Population facing at least one extreme heatwave every 20 years", "1.5C": "9% <br><span class='uncertainty'>(6-14)</span>", "2C": "28%<br><span class='uncertainty'>(22-36)</span>", "3C": ""},
      {"name": "<span class='table-subtitle'>Frequency of warm extremes over land</span>", "1.5C": "<span class='arrow-up'>&#9650;</span> 129%", "2C": "<span class='arrow-up'>&#9650;</span> 343%", "3C": ""},
      {"name": "<span class='table-subtitle'>Frequency of cold extremes over land</span>", "1.5C": "<span class='arrow-down'>&#9660;</span> 54%", "2C": "<span class='arrow-down'>&#9660;</span> 82%", "3C": ""}
    ];

    var rainfall = [
      {"name": "<span class='table-subtitle'>Average rainfall</span>", "1.5C": "<span class='arrow-up'>&#9650;</span> 2% <br><span class='uncertainty'>(+1-+4)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 4% <br><span class='uncertainty'>(+2-+5)</span>", "3C": ""},
      {"name": "<span class='table-subtitle'>Consecutive dry days</span>", "1.5C": "<span class='arrow-down'>&#9660;</span> 2 <br><span class='uncertainty'>(-5-+1)</span>", "2C": "<span class='arrow-down'>&#9660;</span> 3 <br><span class='uncertainty'>(-6-+1)</span>", "3C": ""},
      {"name": "<span class='table-subtitle'>Maximum consecutive 5-day precipitation</span>", "1.5C": "<span class='arrow-up'>&#9650;</span> 4mm <br><span class='uncertainty'>(+1-+5)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 6mm <br><span class='uncertainty'>(+4-+7)</span>", "3C": ""},
      {"name": "<span class='table-subtitle'>Rainfall intensity</span>", "1.5C": "<span class='arrow-up'>&#9650;</span> 2% <br><span class='uncertainty'>(+2-+3)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 4% <br><span class='uncertainty'>(+3-+4)</span>", "3C": ""},
      {"name": "<span class='table-subtitle'>Frequency of rainfall extremes over land</span>", "1.5C": "<span class='arrow-up'>&#9650;</span> 17%", "2C": "<span class='arrow-up'>&#9650;</span> 36%", "3C": ""}
    ];

    var rivers = [
      {"name": "<span class='table-subtitle'>Change in average river flows in 2100</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "-100 to -30%", "1.5C": "0% <br><span class='uncertainty'>(0-4)</span>", "2C": "0% <br><span class='uncertainty'>(1-3)</span>", "3C": ""},
      {"name": "-30 to -10%", "1.5C": "6% <br><span class='uncertainty'>(5-19)</span>", "2C": "8% <br><span class='uncertainty'>(7-21)</span>", "3C": ""},
      {"name": "-10 to 10%", "1.5C": "84% <br><span class='uncertainty'>(59-86)</span>", "2C": "73% <br><span class='uncertainty'>(47-75)</span>", "3C": ""},
      {"name": "10 to 30%", "1.5C": "7% <br><span class='uncertainty'>(5-16)</span>", "2C": "15% <br><span class='uncertainty'>(13-23)</span>", "3C": ""},
      {"name": ">=30%", "1.5C": "0% <br><span class='uncertainty'>(0-4)</span>", "2C": "1% <br><span class='uncertainty'>(1-7)</span>", "3C": ""},
      {"name": "N/A", "1.5C": "4%", "2C": "4%", "3C": ""}
    ];

    var drought = [
      {"name": "<span class='table-subtitle'>Average drought length (months)</span>", "1.5C": "<span class='arrow-up'>&#9650;</span> 2", "2C": "<span class='arrow-up'>&#9650;</span> 4", "3C": "<span class='arrow-up'>&#9650;</span> 10"},
      {"name": "<span class='table-subtitle'>Population exposed to water scarcity</span>", "1.5C": "<span class='arrow-up'>&#9650;</span> 271m <br><span class='uncertainty'>(+159-+383)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 388m <br><span class='uncertainty'>(+249-+527)</span>", "3C": ""},
      {"name": "<span class='table-subtitle'>Global population exposed to severe drought</span>", "1.5C": "<span class='arrow-up'>&#9650;</span> 132.5m <br><span class='uncertainty'>(±216.2)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 194.5m <br><span class='uncertainty'>(±276.5)</span>", "3C": ""}
    ];

    var storms = [
      {"name": "<span class='table-subtitle'>Global annual number of tropical cyclones</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Total tropical cyclones", "1.5C": "<span class='arrow-down'>&#9660;</span> 0.9", "2C": "<span class='arrow-down'>&#9660;</span> 4.1", "3C": ""},
      {"name": "Category 4 cyclones", "1.5C": "<span class='arrow-up'>&#9650;</span> 2.1", "2C": "<span class='arrow-up'>&#9650;</span> 1.2", "3C": ""},
      {"name": "Category 5 cyclones", "1.5C": "<span class='arrow-up'>&#9650;</span> 1.4", "2C": "<span class='arrow-up'>&#9650;</span> 1.2", "3C": ""},
      {"name": "<br><span class='table-subtitle'>Global annual number of tropical cyclones</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "By 2055", "1.5C": "<span class='arrow-up'>&#9650;</span> 28m/yr <br><span class='uncertainty'(+16-+43)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 30m/yr <br><span class='uncertainty'(+19-+45)</span>", "3C": ""},
      {"name": "By 2095", "1.5C": "<span class='arrow-up'>&#9650;</span> 60m/yr <br><span class='uncertainty'(+32-+113)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 72m/yr <br><span class='uncertainty'(+40-+127)</span>", "3C": ""},
      {"name": "By 2295", "1.5C": "<span class='arrow-up'>&#9650;</span> 136m/yr <br><span class='uncertainty'(+82-+231)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 162m/yr <br><span class='uncertainty'(+99-+273)</span>", "3C": ""}
    ];

    var crops = [
      {"name": "<span class='table-subtitle'>Average crop yield change by 2100</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Maize", "1.5C": "<span class='arrow-down'>&#9660;</span> 6%", "2C": "<span class='arrow-down'>&#9660;</span> 9%", "3C": ""},
      {"name": "Wheat", "1.5C": "<span class='arrow-down'>&#9660;</span> 5%", "2C": "<span class='arrow-down'>&#9660;</span> 4%", "3C": ""},
      {"name": "<span class='table-subtitle'>Growing season length</span>", "1.5C": "<span class='arrow-up'>&#9650;</span> 5 days <br><span class='uncertainty'>(+4-+5)", "2C": "<span class='arrow-up'>&#9650;</span> 8 days <br><span class='uncertainty'>(+7-+8)", "3C": ""},
      {"name": "<br><span class='table-subtitle'>Crop yields over existing farmland</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Wheat (Global)", "1.5C": "<span class='arrow-up'>&#9650;</span> 2% <br><span class='uncertainty'>(-6-+17)", "2C": "<span class='arrow-up'>&#9650;</span> 0% <br><span class='uncertainty'>(-8-+21)", "3C": ""},
      {"name": "Maize (Global)", "1.5C": "<span class='arrow-down'>&#9660;</span> 1% <br><span class='uncertainty'>(-26-+8)", "2C": "<span class='arrow-down'>&#9660;</span> 6% <br><span class='uncertainty'>(-38-+2)", "3C": ""},
      {"name": "Soy (Global)", "1.5C": "<span class='arrow-up'>&#9650;</span> 7% <br><span class='uncertainty'>(-3-+28)", "2C": "<span class='arrow-up'>&#9650;</span> 1% <br><span class='uncertainty'>(-12-+34)", "3C": ""},
      {"name": "Rice (Global)", "1.5C": "<span class='arrow-up'>&#9650;</span> 7% <br><span class='uncertainty'>(-17-+24)", "2C": "<span class='arrow-up'>&#9650;</span> 7% <br><span class='uncertainty'>(-4-+27)", "3C": ""},
      {"name": "<span class='table-subtitle'></span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Wheat (Tropics)", "1.5C": "<span class='arrow-down'>&#9660;</span> 9% <br><span class='uncertainty'>(-25-+12)", "2C": "<span class='arrow-down'>&#9660;</span> 16% <br><span class='uncertainty'>(-42-+14)", "3C": ""},
      {"name": "Maize (Tropics)", "1.5C": "<span class='arrow-down'>&#9660;</span> 3% <br><span class='uncertainty'>(-16-+2)", "2C": "<span class='arrow-down'>&#9660;</span> 6% <br><span class='uncertainty'>(-19-+2)", "3C": ""},
      {"name": "Soy (Tropics)", "1.5C": "<span class='arrow-up'>&#9650;</span> 6% <br><span class='uncertainty'>(-3-+23)", "2C": "<span class='arrow-up'>&#9650;</span> 7% <br><span class='uncertainty'>(-5-+27)", "3C": ""},
      {"name": "Rice (Tropics)", "1.5C": "<span class='arrow-up'>&#9650;</span> 6% <br><span class='uncertainty'>(+0-+20)", "2C": "<span class='arrow-up'>&#9650;</span> 6% <br><span class='uncertainty'>(+0-+24)", "3C": ""}
    ];

    var nature = [
      {"name": "<span class='table-subtitle'>Proportion of species losing >50% of their climatic range</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Invertebrates", "1.5C": "6% <br><span class='uncertainty'>(1-18)</span>", "2C": "18% <br><span class='uncertainty'>(6-35)</span>", "3C": "68% <br><span class='uncertainty'>(52-80)</span>"},
      {"name": "Vertebrates", "1.5C": "4% <br><span class='uncertainty'>(2-9)</span>", "2C": "8% <br><span class='uncertainty'>(4-16)</span>", "3C": "44% <br><span class='uncertainty'>(31-59)</span>"},
      {"name": "Plants", "1.5C": "8% <br><span class='uncertainty'>(4-15)</span>", "2C": "16% <br><span class='uncertainty'>(9-28)</span>", "3C": "67% <br><span class='uncertainty'>(50-80)</span>"},
      {"name": "Insects", "1.5C": "6% <br><span class='uncertainty'>(1-18)</span>", "2C": "18% <br><span class='uncertainty'>(6-35)</span>", "3C": "67% <br><span class='uncertainty'>(52-79)</span>"},
      {"name": "Mammals", "1.5C": "4% <br><span class='uncertainty'>(2-7)</span>", "2C": "8% <br><span class='uncertainty'>(4-14)</span>", "3C": "41% <br><span class='uncertainty'>(29-57)</span>"},
      {"name": "Birds", "1.5C": "2% <br><span class='uncertainty'>(1-6)</span>", "2C": "6% <br><span class='uncertainty'>(3-13)</span>", "3C": "4% <br><span class='uncertainty'>(28-54)</span>"},
      {"name": "Butterflies & moths", "1.5C": "4% <br><span class='uncertainty'>(0-14)</span>", "2C": "10% <br><span class='uncertainty'>(2-29)</span>", "3C": "58% <br><span class='uncertainty'>(40-74)</span>"},
      {"name": "Dragonflies & damselflies", "1.5C": "1% <br><span class='uncertainty'>(0-2)</span>", "2C": "2% <br><span class='uncertainty'>(1-6)</span>", "3C": "21% <br><span class='uncertainty'>(11-42)</span>"},
      {"name": "<span class='table-subtitle'>Average warming across drylands</span>", "1.5C": "<span class='arrow-up'>&#9650;</span> 2.4-3.0C", "2C": "<span class='arrow-up'>&#9650;</span> 3.2-4.0C", "3C": ""},
      {"name": "<span class='table-subtitle'>Average warming across humid lands</span>", "1.5C": "<span class='arrow-up'>&#9650;</span> 1.8-2.0C", "2C": "<span class='arrow-up'>&#9650;</span> 2.4-2.6C", "3C": ""}
    ];

    var economy = [
      {"name": "<span class='table-subtitle'>Global per capita GDP in 2100</span>", "1.5C": "<span class='arrow-down'>&#9660;</span> 8%", "2C": "<span class='arrow-down'>&#9660;</span> 13%", "3C": ""},
      {"name": "<span class='table-subtitle'>Annual flood damage losses from sea level rise</span>", "1.5C": "$10.2tn", "2C": "$11.7tn", "3C": ""},
      {"name": "<span class='table-subtitle'>Global impact on GDP of energy demand for heating and cooling</span>", "1.5C": "<span class='arrow-down'>&#9660;</span> 0.05% <br><span class='uncertainty'>(-0.06-0.02)</span>", "2C": "<span class='arrow-down'>&#9660;</span> 0.19% <br><span class='uncertainty'>(-0.11-0.22)</span>", "3C": "<span class='arrow-down'>&#9660;</span> 0.9% <br><span class='uncertainty'>(-2.0-+0.2)</span>"}
    ];

    var health = [
      {"name": "<span class='table-subtitle'>Global undernourished population</span>", "1.5C": "530-550m", "2C": "540-590m", "3C": ""},
      {"name": "<span class='table-subtitle'>Suitability of drylands for malaria transmission</span>", "1.5C": "<span class='arrow-up'>&#9650;</span> 19% <br><span class='uncertainty'>(17-20)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 27% <br><span class='uncertainty'>(24-30)</span>", "3C": ""},
      {"name": "<span class='table-subtitle'>Suitability of humid lands for malaria transmission</span>", "1.5C": "<span class='arrow-up'>&#9650;</span> 6% <br><span class='uncertainty'>(5-7)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 8% <br><span class='uncertainty'>(6-10)</span>", "3C": ""}
    ];

// Europe objects

    var europeHotDays = [
      {"name": "<span class='table-subtitle'>Increase in annual hot days</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "British Isles", "1.5C": "<span class='arrow-up'>&#9650;</span> 1 day <br><span class='uncertainty'>(0-+4)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 1 day <br><span class='uncertainty'>(0-+7)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 2 days <br><span class='uncertainty'>(0-+10)</span>"},
      {"name": "Iberian Peninsula", "1.5C": "<span class='arrow-up'>&#9650;</span> 11 days <br><span class='uncertainty'>(+5-+18)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 16 days <br><span class='uncertainty'>(+7-+26)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 26 days <br><span class='uncertainty'>(+13-+40)</span>"},
      {"name": "France", "1.5C": "<span class='arrow-up'>&#9650;</span> 4 days <br><span class='uncertainty'>(+1-+15)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 6 days <br><span class='uncertainty'>(+2-+22)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 13 days <br><span class='uncertainty'>(+4-+31)</span>"},
      {"name": "Mediterranean", "1.5C": "<span class='arrow-up'>&#9650;</span> 8 days <br><span class='uncertainty'>(+2-+18)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 10 days <br><span class='uncertainty'>(+3-+25)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 18 days <br><span class='uncertainty'>(+5-+37)</span>"},
      {"name": "Scandinavia", "1.5C": "<span class='arrow-up'>&#9650;</span> 0 days <br><span class='uncertainty'>(0-0)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 1 day <br><span class='uncertainty'>(0-+7)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 2 days <br><span class='uncertainty'>(0-+8)</span>"},
      {"name": "Alps", "1.5C": "<span class='arrow-up'>&#9650;</span> 6 days <br><span class='uncertainty'>(+1-+14)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 8 days <br><span class='uncertainty'>(+2-+23)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 14 days <br><span class='uncertainty'>(+5-+31)</span>"},
      {"name": "Mid-Europe", "1.5C": "<span class='arrow-up'>&#9650;</span> 3 days <br><span class='uncertainty'>(0-+7)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 3 days <br><span class='uncertainty'>(+1-+14)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 7 days <br><span class='uncertainty'>(+3-+19)</span>"},
      {"name": "Eastern Europe", "1.5C": "<span class='arrow-up'>&#9650;</span> 7 days <br><span class='uncertainty'>(+3-+15)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 9 days <br><span class='uncertainty'>(+3-+17)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 14 days <br><span class='uncertainty'>(+7-+25)</span>"}
    ];
      
    var europeHotNights = [

      {"name": "<br><span class='table-subtitle'>Increase in annual tropical nights</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "British Isles", "1.5C": "<span class='arrow-up'>&#9650;</span> 1 night <br><span class='uncertainty'>(0-+12)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 1 night <br><span class='uncertainty'>(0-+16)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 3 nights <br><span class='uncertainty'>(0-+19)</span>"},
      {"name": "Iberian Peninsula", "1.5C": "<span class='arrow-up'>&#9650;</span> 11 nights <br><span class='uncertainty'>(+5-+22)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 16 nights <br><span class='uncertainty'>(+7-+32)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 30 nights <br><span class='uncertainty'>(+14-+49)</span>"},
      {"name": "France", "1.5C": "<span class='arrow-up'>&#9650;</span> 3 nights <br><span class='uncertainty'>(0-+18)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 6 nights <br><span class='uncertainty'>(+1-+25)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 14 nights <br><span class='uncertainty'>(+3-+40)</span>"},
      {"name": "Mediterranean", "1.5C": "<span class='arrow-up'>&#9650;</span> 17 nights <br><span class='uncertainty'>(+11-+26)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 24 nights <br><span class='uncertainty'>(+15-+37)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 38 nights <br><span class='uncertainty'>(+27-+54)</span>"},
      {"name": "Scandinavia", "1.5C": "<span class='arrow-up'>&#9650;</span> 0 nights <br><span class='uncertainty'>(0-0)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 1 night <br><span class='uncertainty'>(0-+11)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 2 nights <br><span class='uncertainty'>(0-+16)</span>"},
      {"name": "Alps", "1.5C": "<span class='arrow-up'>&#9650;</span> 10 nights <br><span class='uncertainty'>(+3-+20)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 13 nights <br><span class='uncertainty'>(+4-+28)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 19 nights <br><span class='uncertainty'>(+7-+38)</span>"},
      {"name": "Mid-Europe", "1.5C": "<span class='arrow-up'>&#9650;</span> 1 night <br><span class='uncertainty'>(0-+9)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 1 night <br><span class='uncertainty'>(0-+11)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 4 nights <br><span class='uncertainty'>(0-+17)</span>"},
      {"name": "Eastern Europe", "1.5C": "<span class='arrow-up'>&#9650;</span> 5 nights <br><span class='uncertainty'>(+1-+15)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 6 nights <br><span class='uncertainty'>(+1-+19)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 11 nights <br><span class='uncertainty'>(+3-+30)</span>"}
    ];

    var europeTemp = [
      {"name": "<span class='table-subtitle'>Summer maximum daily temperature</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "British Isles", "1.5C": "<span class='arrow-up'>&#9650;</span> 0.6C <br><span class='uncertainty'>(-0.7-+2.1)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 1.1C <br><span class='uncertainty'>(-0.5-+2.3)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 2.5C <br><span class='uncertainty'>(+0.2-+4.3)</span>"},
      {"name": "Iberian Peninsula", "1.5C": "<span class='arrow-up'>&#9650;</span> 1.2C <br><span class='uncertainty'>(+0.5-+2)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 2C <br><span class='uncertainty'>(-1.4-+2.6)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 3.5C <br><span class='uncertainty'>(+3-+4.1)</span>"},
      {"name": "France", "1.5C": "<span class='arrow-up'>&#9650;</span> 1.1C <br><span class='uncertainty'>(-1-+2.4)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 2C <br><span class='uncertainty'>(-0.8-+3.9)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 3.7C <br><span class='uncertainty'>(+0.1-+5.7)</span>"},
      {"name": "Mediterranean", "1.5C": "<span class='arrow-up'>&#9650;</span> 1.1C <br><span class='uncertainty'>(-1.8-+3.1)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 1.8C <br><span class='uncertainty'>(-1.6-+4.1)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 3.2C <br><span class='uncertainty'>(-0.8-+6.1)</span>"},
      {"name": "Scandinavia", "1.5C": "<span class='arrow-up'>&#9650;</span> 0.9C <br><span class='uncertainty'>(-0.3-+1.6)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 1.3C <br><span class='uncertainty'>(+0.2-+2.2)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 2.3C <br><span class='uncertainty'>(-1-+3.4)</span>"},
      {"name": "Alps", "1.5C": "<span class='arrow-up'>&#9650;</span> 1.4C <br><span class='uncertainty'>(+0.1-+2.6)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 2.1C <br><span class='uncertainty'>(+0.7-+3.8)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 3.7C <br><span class='uncertainty'>(+2.3-+5.3)</span>"},
      {"name": "Mid-Europe", "1.5C": "<span class='arrow-up'>&#9650;</span> 1.4C <br><span class='uncertainty'>(+0.4-+2.4)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 2C <br><span class='uncertainty'>(+1.3-+3.2)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 3.5C <br><span class='uncertainty'>(+2.6-+4.4)</span>"},
      {"name": "Eastern Europe", "1.5C": "<span class='arrow-up'>&#9650;</span> 1.2C <br><span class='uncertainty'>(-0.8-+2.9)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 1.8C <br><span class='uncertainty'>(+0-+3.6)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 3C <br><span class='uncertainty'>(+1.4-+4.6)</span>"}
    ];

    var europeFrost = [
      {"name": "<span class='table-subtitle'>Winter frost days</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "British Isles", "1.5C": "<span class='arrow-down'>&#9660;</span> 6 days <br><span class='uncertainty'>(-12--2)</span>", "2C": "<span class='arrow-down'>&#9660;</span> 9 days <br><span class='uncertainty'>(-15--4)</span>", "3C": "<span class='arrow-down'>&#9660;</span> 13 days <br><span class='uncertainty'>(-19--9)</span>"},
      {"name": "Iberian Peninsula", "1.5C": "<span class='arrow-down'>&#9660;</span> 6 days <br><span class='uncertainty'>(-12--2)</span>", "2C": "<span class='arrow-down'>&#9660;</span> 9 days <br><span class='uncertainty'>(-15--4)</span>", "3C": "<span class='arrow-down'>&#9660;</span> 13 days <br><span class='uncertainty'>(-19--9)</span>"},
    ];

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

    // put temeprature and heat in one for now

    var sidsTemp = [];

    var sidsRain = [];

    // unfortunately only one row has 2.5C as the third column, this will need to go into a section by itself:

    var sidsDrought1 = [];

    // drought length and half of the aridity data

    var sidsDrought2 = [];

    // the other half of the aridity data

    var sidsDrought3 = [];

// Africa objects

    //temperature and warm spell

    var africaTemp = [];

    var africaTempExtremes = [];

    // heat events

    var africaHeat = [];

    // season and dry spell

    var africaRain = [];

    // rain intensity and extremes

    var africaRainIntensity = [];

    var africaDrought = [];

    var africaStorms = [];

    var africaCrops = [];

// Asia objects

    // Create your own objects as above based on the spreadsheet

// China objects

    // Create your own objects as above based on the spreadsheet

// TABLE OBJECTS END