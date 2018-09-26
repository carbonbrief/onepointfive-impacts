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
        { "name": "Area of thawed permafrost by 2300", "1.5C": "4.8m km<sup>2</sup> <br><span class='uncertainty'>(2.6–6.8)</span>", "2C": "6.6m km<sup>2</sup> <br><span class='uncertainty'>(4.4–8.6)</span>", "3C": ""}
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

    var crops1 = [
      {"name": "<span class='table-subtitle'>Average crop yield change by 2100</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Maize", "1.5C": "<span class='arrow-down'>&#9660;</span> 6%", "2C": "<span class='arrow-down'>&#9660;</span> 9%", "3C": ""},
      {"name": "Wheat", "1.5C": "<span class='arrow-down'>&#9660;</span> 5%", "2C": "<span class='arrow-down'>&#9660;</span> 4%", "3C": ""},
      {"name": "<span class='table-subtitle'>Growing season length</span>", "1.5C": "<span class='arrow-up'>&#9650;</span> 5 days <br><span class='uncertainty'>(+4-+5)", "2C": "<span class='arrow-up'>&#9650;</span> 8 days <br><span class='uncertainty'>(+7-+8)", "3C": ""}
    ];

    var crops2 = [
      {"name": "<span class='table-subtitle'>Crop yields over existing farmland</span>", "1.5C": "", "2C": "", "3C": ""},
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
      {"name": "Iberian Peninsula", "1.5C": "<span class='arrow-down'>&#9660;</span> 4 days <br><span class='uncertainty'>(-7--1)</span>", "2C": "<span class='arrow-down'>&#9660;</span> 6 days <br><span class='uncertainty'>(-9--3)</span>", "3C": "<span class='arrow-down'>&#9660;</span> 10 days <br><span class='uncertainty'>(-13--7)</span>"},
      {"name": "France", "1.5C": "<span class='arrow-down'>&#9660;</span> 5 days <br><span class='uncertainty'>(-12--1)</span>", "2C": "<span class='arrow-down'>&#9660;</span> 8 days <br><span class='uncertainty'>(-14--2)</span>", "3C": "<span class='arrow-down'>&#9660;</span> 12 days <br><span class='uncertainty'>(-16--7)</span>"},
      {"name": "Mediterranean", "1.5C": "<span class='arrow-down'>&#9660;</span> 7 days <br><span class='uncertainty'>(-14--2)</span>", "2C": "<span class='arrow-down'>&#9660;</span> 10 days <br><span class='uncertainty'>(-18--3)</span>", "3C": "<span class='arrow-down'>&#9660;</span> 18 days <br><span class='uncertainty'>(-25--13)</span>"},
      {"name": "Scandinavia", "1.5C": "<span class='arrow-down'>&#9660;</span> 4 days <br><span class='uncertainty'>(-7--2)</span>", "2C": "<span class='arrow-down'>&#9660;</span> 6 days <br><span class='uncertainty'>(-10--3)</span>", "3C": "<span class='arrow-down'>&#9660;</span> 12 days <br><span class='uncertainty'>(-17--8)</span>"},
      {"name": "Alps", "1.5C": "<span class='arrow-down'>&#9660;</span> 5 days <br><span class='uncertainty'>(-10-0)</span>", "2C": "<span class='arrow-down'>&#9660;</span> 8 days <br><span class='uncertainty'>(-12-2)</span>", "3C": "<span class='arrow-down'>&#9660;</span> 14 days <br><span class='uncertainty'>(-19--9)</span>"},
      {"name": "Mid-Europe", "1.5C": "<span class='arrow-down'>&#9660;</span> 4 days <br><span class='uncertainty'>(-7-1)</span>", "2C": "<span class='arrow-down'>&#9660;</span> 6 days <br><span class='uncertainty'>(-9–-1)</span>", "3C": "<span class='arrow-down'>&#9660;</span> 11 days <br><span class='uncertainty'>(-14–-9)</span>"},
      {"name": "Eastern Europe", "1.5C": "<span class='arrow-down'>&#9660;</span> 6 days <br><span class='uncertainty'>(-12-2)</span>", "2C": "<span class='arrow-down'>&#9660;</span> 10 days <br><span class='uncertainty'>(-16–-2)</span>", "3C": "<span class='arrow-down'>&#9660;</span> 18 days <br><span class='uncertainty'>(-28–11)</span>"}
    ];

    var europeWinterTemp = [
      {"name": "<span class='table-subtitle'>Winter minimum temperature</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "British Isles", "1.5C": "<span class='arrow-up'>&#9650;</span> 1.3C <br><span class='uncertainty'>(-1.2-+3.4)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 1.9C <br><span class='uncertainty'>(-1.7-+3.8)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 3.2C <br><span class='uncertainty'>(+1.9-+4.6)</span>"},
      {"name": "Iberian Peninsula", "1.5C": "<span class='arrow-up'>&#9650;</span> 0.6C <br><span class='uncertainty'>(-4.7-+1.6)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 0.9C <br><span class='uncertainty'>(-4.9-+2)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 2C <br><span class='uncertainty'>(+1.2-+2.5)</span>"},
      {"name": "France", "1.5C": "<span class='arrow-up'>&#9650;</span> 0.9C <br><span class='uncertainty'>(-6.3-+2.4)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 1.4C <br><span class='uncertainty'>(-6-+3.1)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 2.8C <br><span class='uncertainty'>(+1-+4)</span>"},
      {"name": "Mediterranean", "1.5C": "<span class='arrow-up'>&#9650;</span> 1.5C <br><span class='uncertainty'>(-5.1-+3.3)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 2.4C <br><span class='uncertainty'>(-4.5-+4.2)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 4.6C <br><span class='uncertainty'>(+2.3-+6.3)</span>"},
      {"name": "Scandinavia", "1.5C": "<span class='arrow-up'>&#9650;</span> 2.1C <br><span class='uncertainty'>(-2.1-+4)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 3.4C <br><span class='uncertainty'>(-1.2-+5.5)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 5.9C <br><span class='uncertainty'>(+4-+7.8)</span>"},
      {"name": "Alps", "1.5C": "<span class='arrow-up'>&#9650;</span> 1C <br><span class='uncertainty'>(-3.2-+2.4)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 1.7C <br><span class='uncertainty'>(-2.5-+3.3)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 3.4C <br><span class='uncertainty'>(+2.1-+4.3)</span>"},
      {"name": "Mid-Europe", "1.5C": "<span class='arrow-up'>&#9650;</span> 0.9C <br><span class='uncertainty'>(-2.1-+2.4)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 1.5C <br><span class='uncertainty'>(-1.4-+3)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 3.2C <br><span class='uncertainty'>(+1.4-+4.6)</span>"},
      {"name": "Eastern Europe", "1.5C": "<span class='arrow-up'>&#9650;</span> 1.6C <br><span class='uncertainty'>(-4.1-+3.1)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 2.6C <br><span class='uncertainty'>(-2.8-+4.7)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 5.3C <br><span class='uncertainty'>(+2.1-+7.7)</span>"}
    ];

    var europeHeatwave = [
      {"name": "<span class='table-subtitle'>Annual likelihood of European summer like 2003 heatwave</span>", "1.5C": "42% <br><span class='uncertainty'>(32-51)</span>", "2C": "59% <br><span class='uncertainty'>(50-70)</span>", "3C": ""},
      {"name": "<span class='table-subtitle'>Annual likelihood of  \"unprecedented\" summer heat</span>", "1.5C": "47% <br><span class='uncertainty'>(21-78)</span>", "2C": "67% <br><span class='uncertainty'>(46-98)</span>", "3C": ""},
      {"name": "<br><span class='table-subtitle'>Warm spell duration</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Mediterranean", "1.5C": "<span class='arrow-up'>&#9650;</span> 15 days <br><span class='uncertainty'>(+12-+22)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 26 days <br><span class='uncertainty'>(+22-+30)</span>", "3C": ""},
      {"name": "Northern Europe", "1.5C": "<span class='arrow-up'>&#9650;</span> 14 days <br><span class='uncertainty'>(+10-+18)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 24 days <br><span class='uncertainty'>(+18-+30)</span>", "3C": ""},
      {"name": "<br><span class='table-subtitle'>Frequency of warm extremes over land</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Northern Europe", "1.5C": "<span class='arrow-up'>&#9650;</span> 73%", "2C": "<span class='arrow-up'>&#9650;</span> 179%", "3C": ""},
      {"name": "Central Europe", "1.5C": "<span class='arrow-up'>&#9650;</span> 115%", "2C": "<span class='arrow-up'>&#9650;</span> 290%", "3C": ""},
      {"name": "Southern Europe/Mediterranean", "1.5C": "<span class='arrow-up'>&#9650;</span> 173%", "2C": "<span class='arrow-up'>&#9650;</span> 478%", "3C": ""}
    ];

    var europeColdwave = [
      {"name": "<span class='table-subtitle'>Frequency of cold extremes over land</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Northern Europe", "1.5C": "<span class='arrow-down'>&#9660;</span> 62%", "2C": "<span class='arrow-down'>&#9660;</span> 89%", "3C": ""},
      {"name": "Central Europe", "1.5C": "<span class='arrow-down'>&#9660;</span> 49%", "2C": "<span class='arrow-down'>&#9660;</span> 77%", "3C": ""},
      {"name": "Southern Europe/Mediterranean", "1.5C": "<span class='arrow-down'>&#9660;</span> 46%", "2C": "<span class='arrow-down'>&#9660;</span> 74%", "3C": ""}
    ];

    var europeRainfallWinterMaxDaily = [
      {"name": "<span class='table-subtitle'>Winter maximum daily rainfall</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "British Isles", "1.5C": "<span class='arrow-up'>&#9650;</span> 6% <br><span class='uncertainty'>(+2-+15)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 7% <br><span class='uncertainty'>(+4-+14)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 14% <br><span class='uncertainty'>(+10-+23)</span>"},
      {"name": "Iberian Peninsula", "1.5C": "<span class='arrow-up'>&#9650;</span> 7% <br><span class='uncertainty'>(-5-+17)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 6% <br><span class='uncertainty'>(-3-+15)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 7% <br><span class='uncertainty'>(-8-+20)</span>"},
      {"name": "France", "1.5C": "<span class='arrow-up'>&#9650;</span> 9% <br><span class='uncertainty'>(+2-+14)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 11% <br><span class='uncertainty'>(+5-+17)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 17% <br><span class='uncertainty'>(+6-+29)</span>"},
      {"name": "Mediterranean", "1.5C": "<span class='arrow-up'>&#9650;</span> 7% <br><span class='uncertainty'>(-2-+18)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 9% <br><span class='uncertainty'>(+1-+23)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 17% <br><span class='uncertainty'>(+10-+30)</span>"},
      {"name": "Scandinavia", "1.5C": "<span class='arrow-up'>&#9650;</span> 7% <br><span class='uncertainty'>(+2-+13)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 10% <br><span class='uncertainty'>(+5-+15)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 16% <br><span class='uncertainty'>(+10-+22)</span>"},
      {"name": "Alps", "1.5C": "<span class='arrow-up'>&#9650;</span> 8% <br><span class='uncertainty'>(+0-+14)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 11% <br><span class='uncertainty'>(+1-+18)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 15% <br><span class='uncertainty'>(+1-+23)</span>"},
      {"name": "Mid-Europe", "1.5C": "<span class='arrow-up'>&#9650;</span> 5% <br><span class='uncertainty'>(-1-+13)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 7% <br><span class='uncertainty'>(+1-+18)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 11% <br><span class='uncertainty'>(+6-+21)</span>"},
      {"name": "Eastern Europe", "1.5C": "<span class='arrow-up'>&#9650;</span> 8% <br><span class='uncertainty'>(-1-+14)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 12% <br><span class='uncertainty'>(+5-+21)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 21% <br><span class='uncertainty'>(+12-+26)</span>"}
      ];
    var europeRainfallSummerMaxDaily = [
      {"name": "<span class='table-subtitle'>Summer maximum daily rainfall</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "British Isles", "1.5C": "<span class='arrow-up'>&#9650;</span> 4% <br><span class='uncertainty'>(-2-+11)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 6% <br><span class='uncertainty'>(+1-+12)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 7% <br><span class='uncertainty'>(+2-+13)</span>"},
      {"name": "Iberian Peninsula", "1.5C": "<span class='arrow-up'>&#9650;</span> 0% <br><span class='uncertainty'>(-17-+18)</span>", "2C": "<span class='arrow-down'>&#9660;</span> 3% <br><span class='uncertainty'>(-25-+16)</span>", "3C": "<span class='arrow-down'>&#9660;</span> 12% <br><span class='uncertainty'>(-29-+0)</span>"},
      {"name": "France", "1.5C": "<span class='arrow-up'>&#9650;</span> 5% <br><span class='uncertainty'>(+0-+10)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 6% <br><span class='uncertainty'>(-7-+15)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 5% <br><span class='uncertainty'>(-5-+24)</span>"},
      {"name": "Mediterranean", "1.5C": "<span class='arrow-up'>&#9650;</span> 6% <br><span class='uncertainty'>(+2-+11)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 9% <br><span class='uncertainty'>(+2-+21)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 13% <br><span class='uncertainty'>(+0-+29)</span>"},
      {"name": "Scandinavia", "1.5C": "<span class='arrow-up'>&#9650;</span> 8% <br><span class='uncertainty'>(+3-+15)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 12% <br><span class='uncertainty'>(+6-+19)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 16% <br><span class='uncertainty'>(+9-+28)</span>"},
      {"name": "Alps", "1.5C": "<span class='arrow-up'>&#9650;</span> 5% <br><span class='uncertainty'>(-4-+18)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 6% <br><span class='uncertainty'>(-7-+27)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 11% <br><span class='uncertainty'>(-12-+36)</span>"},
      {"name": "Mid-Europe", "1.5C": "<span class='arrow-up'>&#9650;</span> 1% <br><span class='uncertainty'>(-19-+60)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 2% <br><span class='uncertainty'>(-26-+86)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 5% <br><span class='uncertainty'>(-28-+115)</span>"},
      {"name": "Eastern Europe", "1.5C": "<span class='arrow-up'>&#9650;</span> 8% <br><span class='uncertainty'>(+2-+14)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 10% <br><span class='uncertainty'>(+5-+21)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 14% <br><span class='uncertainty'>(-1-+27)</span>"}
    ];

    var europeDryDays = [
      {"name": "<span class='table-subtitle'>Summer consecutive dry days</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "British Isles", "1.5C": "<span class='arrow-up'>&#9650;</span> 0 days <br><span class='uncertainty'>(-2-+3)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 1 day <br><span class='uncertainty'>(-2-+4)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 2 days <br><span class='uncertainty'>(-1-+4)</span>"},
      {"name": "Iberian Peninsula", "1.5C": "<span class='arrow-up'>&#9650;</span> 3 days <br><span class='uncertainty'>(-6-+15)</span>", "2C": "<span class='arrow-down'>&#9660;</span> 4 days <br><span class='uncertainty'>(-5-+18)</span>", "3C": "<span class='arrow-down'>&#9660;</span> 7 days <br><span class='uncertainty'>(-3-+23)</span>"},
      {"name": "France", "1.5C": "<span class='arrow-up'>&#9650;</span> 1 day <br><span class='uncertainty'>(-1-+3)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 2 days <br><span class='uncertainty'>(-1-+5)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 4 days <br><span class='uncertainty'>(+0-+7)</span>"},
      {"name": "Mediterranean", "1.5C": "<span class='arrow-up'>&#9650;</span> 0 days <br><span class='uncertainty'>(-1-+2)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 0 days <br><span class='uncertainty'>(-1-+3)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 1 day <br><span class='uncertainty'>(-1-+3)</span>"},
      {"name": "Scandinavia", "1.5C": "<span class='arrow-up'>&#9650;</span> 0 days <br><span class='uncertainty'>(-1-+1)</span>", "2C": "<span class='arrow-down'>&#9660;</span> 1 days <br><span class='uncertainty'>(-2-+1)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 0 days <br><span class='uncertainty'>(-2-+1)</span>"},
      {"name": "Alps", "1.5C": "<span class='arrow-up'>&#9650;</span> 1 day <br><span class='uncertainty'>(-1-+3)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 1 day <br><span class='uncertainty'>(-1-+4)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 2 days <br><span class='uncertainty'>(-1-+5)</span>"},
      {"name": "Mid-Europe", "1.5C": "<span class='arrow-up'>&#9650;</span> 2 days <br><span class='uncertainty'>(-8-+9)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 3 days <br><span class='uncertainty'>(-8-+8)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 5 days <br><span class='uncertainty'>(-9-+13)</span>"},
      {"name": "Eastern Europe", "1.5C": "<span class='arrow-up'>&#9650;</span> 0 days <br><span class='uncertainty'>(-2-+6)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 0 days <br><span class='uncertainty'>(-2-+6)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 1 day <br><span class='uncertainty'>(-1-+4)</span>"}
    ];

    var europeRainIntensity = [
      {"name": "<span class='table-subtitle'>Precipitation intensity</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Mediterranean", "1.5C": "<span class='arrow-up'>&#9650;</span> 2% <br><span class='uncertainty'>(+1-+3)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 2% <br><span class='uncertainty'>(+1-+4)</span>", "3C": ""},
      {"name": "Northern Europe", "1.5C": "<span class='arrow-up'>&#9650;</span> 2% <br><span class='uncertainty'>(+1-+3)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 3% <br><span class='uncertainty'>(+2-+4)</span>", "3C": ""},
      {"name": "<br><span class='table-subtitle'>Frequency of rainfall extremes over land</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Northern Europe", "1.5C": "<span class='arrow-up'>&#9650;</span> 73%", "2C": "<span class='arrow-up'>&#9650;</span> 179%", "3C": ""},
      {"name": "Central Europe", "1.5C": "<span class='arrow-up'>&#9650;</span> 115%", "2C": "<span class='arrow-up'>&#9650;</span> 290%", "3C": ""},
      {"name": "Southern Europe/Mediterranean", "1.5C": "<span class='arrow-up'>&#9650;</span> 173%", "2C": "<span class='arrow-up'>&#9650;</span> 478%", "3C": ""}
    ];

    var europeDrought = [
      {"name": "<span class='table-subtitle'>Average drought length (months)</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Eastern Europe", "1.5C": "<span class='arrow-up'>&#9650;</span> 2", "2C": "<span class='arrow-up'>&#9650;</span> 4", "3C": "<span class='arrow-up'>&#9650;</span> 8"},
      {"name": "Northern Europe", "1.5C": "<span class='arrow-side'>&#9664;&#9654;</span> 0", "2C": "<span class='arrow-side'>&#9664;&#9654;</span> 0", "3C": "<span class='arrow-down'>&#9660;</span> 1"},
      {"name": "Southern Europe", "1.5C": "<span class='arrow-up'>&#9650;</span> 3", "2C": "<span class='arrow-up'>&#9650;</span> 6", "3C": "<span class='arrow-up'>&#9650;</span> 12"},
      {"name": "Western Europe", "1.5C": "<span class='arrow-up'>&#9650;</span> 1", "2C": "<span class='arrow-up'>&#9650;</span> 2", "3C": "<span class='arrow-up'>&#9650;</span> 4"},
      {"name": "<br><span class='table-subtitle'>Population exposed to water scarcity</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Northern Europe", "1.5C": "<span class='arrow-up'>&#9650;</span> 2m <br><span class='uncertainty'>(-7-+11)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 7m <br><span class='uncertainty'>(+1-+14)</span>", "3C": ""},
      {"name": "Central Europe", "1.5C": "<span class='arrow-up'>&#9650;</span> 17m <br><span class='uncertainty'>(-13-+46)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 41m <br><span class='uncertainty'>(+12-+69)</span>", "3C": ""},
      {"name": "Southern Europe and Mediterranean", "1.5C": "<span class='arrow-up'>&#9650;</span> 14m <br><span class='uncertainty'>(+6-+22)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 14m <br><span class='uncertainty'>(+0-+27)</span>", "3C": ""},
      {"name": "<span class='table-subtitle'>Annual water availability in the Mediterranean</span>", "1.5C": "<span class='arrow-down'>&#9660;</span> 9% <br><span class='uncertainty'>(-5--16)", "2C": "<span class='arrow-down'>&#9660;</span> 17% <br><span class='uncertainty'>(-8--28)", "3C": ""}
    ];

    var europeRivers1 = [
      {"name": "<span class='table-subtitle'>High river flows</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Alpine", "1.5C": "<span class='arrow-up'>&#9650;</span> 2%", "2C": "<span class='arrow-up'>&#9650;</span> 1%", "3C": "<span class='arrow-up'>&#9650;</span> 1%"},
      {"name": "Atlantic", "1.5C": "<span class='arrow-up'>&#9650;</span> 3%", "2C": "<span class='arrow-up'>&#9650;</span> 3%", "3C": "<span class='arrow-down'>&#9660;</span> 1%"},
      {"name": "Continental", "1.5C": "<span class='arrow-down'>&#9660;</span> 1%", "2C": "<span class='arrow-down'>&#9660;</span> 1%", "3C": "<span class='arrow-down'>&#9660;</span> 9%"},
      {"name": "Northern", "1.5C": "<span class='arrow-up'>&#9650;</span> 1%", "2C": "<span class='arrow-up'>&#9650;</span> 5%", "3C": "<span class='arrow-up'>&#9650;</span> 12%"},
      {"name": "Mediterranean", "1.5C": "<span class='arrow-down'>&#9660;</span> 11%", "2C": "<span class='arrow-down'>&#9660;</span> 13%", "3C": "<span class='arrow-down'>&#9660;</span> 31%"},
      {"name": "<br><span class='table-subtitle'>River floods</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Alpine", "1.5C": "<span class='arrow-down'>&#9660;</span> 4%", "2C": "<span class='arrow-down'>&#9660;</span> 6%", "3C": "<span class='arrow-down'>&#9650;</span> 9%"},
      {"name": "Atlantic", "1.5C": "<span class='arrow-up'>&#9650;</span> 2%", "2C": "<span class='arrow-up'>&#9650;</span> 3%", "3C": "<span class='arrow-up'>&#9660;</span> 1%"},
      {"name": "Continental", "1.5C": "<span class='arrow-down'>&#9660;</span> 3%", "2C": "<span class='arrow-down'>&#9660;</span> 2%", "3C": "<span class='arrow-down'>&#9660;</span> 9%"},
      {"name": "Northern", "1.5C": "<span class='arrow-down'>&#9660;</span> 7%", "2C": "<span class='arrow-down'>&#9660;</span> 6%", "3C": "<span class='arrow-down'>&#9660;</span> 5%"},
      {"name": "Mediterranean", "1.5C": "<span class='arrow-down'>&#9660;</span> 5%", "2C": "<span class='arrow-down'>&#9660;</span> 5%", "3C": "<span class='arrow-down'>&#9660;</span> 17%"},
    ];

    var europeRivers2 = [
      {"name": "<span class='table-subtitle'>Population affected by river flooding</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Czech Republic", "1.5C": "<span class='arrow-up'>&#9650;</span> 564%", "2C": "<span class='arrow-up'>&#9650;</span> 688%", "3C": "<span class='arrow-up'>&#9650;</span> 705%"},
      {"name": "Germany", "1.5C": "<span class='arrow-up'>&#9650;</span> 612%", "2C": "<span class='arrow-up'>&#9650;</span> 739%", "3C": "<span class='arrow-up'>&#9650;</span> 1234%"},
      {"name": "United Kingdom", "1.5C": "<span class='arrow-up'>&#9650;</span> 1106%", "2C": "<span class='arrow-up'>&#9650;</span> 1062%", "3C": "<span class='arrow-up'>&#9650;</span> 6543%"},
      {"name": "Hungary", "1.5C": "<span class='arrow-up'>&#9650;</span> 1624%", "2C": "<span class='arrow-up'>&#9650;</span> 1194%", "3C": "<span class='arrow-up'>&#9650;</span> 4312%"},
      {"name": "Latvia", "1.5C": "<span class='arrow-down'>&#9660;</span> 90%", "2C": "<span class='arrow-down'>&#9660;</span> 74%", "3C": "<span class='arrow-down'>&#9660;</span> 94%"},
      {"name": "Moldova", "1.5C": "<span class='arrow-up'>&#9650;</span> 94%", "2C": "<span class='arrow-up'>&#9650;</span> 125%", "3C": "<span class='arrow-up'>&#9650;</span> 141%"},
      {"name": "Poland", "1.5C": "<span class='arrow-up'>&#9650;</span> 3390%", "2C": "<span class='arrow-up'>&#9650;</span> 3727%", "3C": "<span class='arrow-up'>&#9650;</span> 1523%"},
      {"name": "Romania", "1.5C": "<span class='arrow-up'>&#9650;</span> 412%", "2C": "<span class='arrow-up'>&#9650;</span> 355%", "3C": "<span class='arrow-up'>&#9650;</span> 651%"},
      {"name": "Russian Federation", "1.5C": "<span class='arrow-up'>&#9650;</span> 220%", "2C": "<span class='arrow-up'>&#9650;</span> 291%", "3C": "<span class='arrow-up'>&#9650;</span> 641%"},
      {"name": "Serbia", "1.5C": "<span class='arrow-up'>&#9650;</span> 139%", "2C": "<span class='arrow-up'>&#9650;</span> 155%", "3C": "<span class='arrow-up'>&#9650;</span> 228%"},
      {"name": "<br><span class='table-subtitle'>Frequency of extreme high flows in major river basins</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Rhine", "1.5C": "1-in-70 years <br><span class='uncertainty'>(62-78)</span>", "2C": "1-in-72 years <br><span class='uncertainty'>(65-79)</span>", "3C": ""},
      {"name": "Danube", "1.5C": "1-in-54 years <br><span class='uncertainty'>(46-62)</span>", "2C": "1-in-63 years <br><span class='uncertainty'>(57-69)</span>", "3C": ""}
    ];

    var europeCrops = [
      {"name": "<span class='table-subtitle'>Growing season length</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Mediterranean", "1.5C": "<span class='arrow-up'>&#9650;</span> 11 days <br><span class='uncertainty'>(+6-+17)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 15 days <br><span class='uncertainty'>(+13-+17)</span>", "3C": ""},
      {"name": "Northern Europe", "1.5C": "<span class='arrow-up'>&#9650;</span> 13 days <br><span class='uncertainty'>(+8-+17)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 20 days <br><span class='uncertainty'>(+14-+26)</span>", "3C": ""}
    ];

    var europeEconomy = [
      {"name": "<span class='table-subtitle'>Economic damages from river flooding</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Czech Republic", "1.5C": "<span class='arrow-up'>&#9650;</span> 645%", "2C": "<span class='arrow-up'>&#9650;</span> 788%", "3C": "<span class='arrow-up'>&#9650;</span> 705%"},
      {"name": "Germany", "1.5C": "<span class='arrow-up'>&#9650;</span> 608%", "2C": "<span class='arrow-up'>&#9650;</span> 789%", "3C": "<span class='arrow-up'>&#9650;</span> 1234%"},
      {"name": "United Kingdom", "1.5C": "<span class='arrow-up'>&#9650;</span> 1206%", "2C": "<span class='arrow-up'>&#9650;</span> 1219%", "3C": "<span class='arrow-up'>&#9650;</span> 6543%"},
      {"name": "Hungary", "1.5C": "<span class='arrow-up'>&#9650;</span> 3165%", "2C": "<span class='arrow-up'>&#9650;</span> 2442%", "3C": "<span class='arrow-up'>&#9650;</span> 4312%"},
      {"name": "Latvia", "1.5C": "<span class='arrow-down'>&#9660;</span> 90%", "2C": "<span class='arrow-down'>&#9660;</span> 76%", "3C": "<span class='arrow-down'>&#9660;</span> 94%"},
      {"name": "Moldova", "1.5C": "<span class='arrow-up'>&#9650;</span> 98%", "2C": "<span class='arrow-up'>&#9650;</span> 129%", "3C": "<span class='arrow-up'>&#9650;</span> 141%"},
      {"name": "Poland", "1.5C": "<span class='arrow-up'>&#9650;</span> 1288%", "2C": "<span class='arrow-up'>&#9650;</span> 1610%", "3C": "<span class='arrow-up'>&#9650;</span> 1523%"},
      {"name": "Romania", "1.5C": "<span class='arrow-up'>&#9650;</span> 334%", "2C": "<span class='arrow-up'>&#9650;</span> 306%", "3C": "<span class='arrow-up'>&#9650;</span> 651%"},
      {"name": "Russian Federation", "1.5C": "<span class='arrow-up'>&#9650;</span> 223%", "2C": "<span class='arrow-up'>&#9650;</span> 302%", "3C": "<span class='arrow-up'>&#9650;</span> 641%"},
      {"name": "Serbia", "1.5C": "<span class='arrow-up'>&#9650;</span> 162%", "2C": "<span class='arrow-up'>&#9650;</span> 158%", "3C": "<span class='arrow-up'>&#9650;</span> 228%"}

    ];

    var europeHealth = [
      {"name": "<span class='table-subtitle'>Heatwave deaths</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Likelihood of London summer without heat-related deaths", "1.5C": "4%", "2C": "2%", "3C": ""},
      {"name": "", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Probability of exceeding summer 2003 heat-mortality in London", "1.5C": "32%", "2C": "55%", "3C": ""},
      {"name": "Probability of exceeding summer 2003 heat-mortality in Paris", "1.5C": "11%", "2C": "27%", "3C": ""},
      {"name": "", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Average number of excess summer heatwave deaths in London", "1.5C": "<span class='arrow-up'>&#9650;</span> 65", "2C": "<span class='arrow-up'>&#9650;</span> 140", "3C": ""},
      {"name": "Average number of excess summer heatwave deaths in Paris", "1.5C": "<span class='arrow-up'>&#9650;</span> 89", "2C": "<span class='arrow-up'>&#9650;</span> 176", "3C": ""}
    ];

// Americas objects

    var americasTemp = [
      {"name": "<span class='table-subtitle'>US Average temperature</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Contigious US", "1.5C": "<span class='arrow-up'>&#9650;</span> 2.0C", "2C": "<span class='arrow-up'>&#9650;</span> 2.7C", "3C": ""},
      {"name": "Northwest", "1.5C": "<span class='arrow-up'>&#9650;</span> 1.9C", "2C": "<span class='arrow-up'>&#9650;</span> 2.6C", "3C": ""},
      {"name": "Southwest", "1.5C": "<span class='arrow-up'>&#9650;</span> 1.8C", "2C": "<span class='arrow-up'>&#9650;</span> 2.5C", "3C": ""},
      {"name": "Rockies", "1.5C": "<span class='arrow-up'>&#9650;</span> 2.1C", "2C": "<span class='arrow-up'>&#9650;</span> 2.8C", "3C": ""},
      {"name": "GreatPlains", "1.5C": "<span class='arrow-up'>&#9650;</span> 2.0C", "2C": "<span class='arrow-up'>&#9650;</span> 2.7C", "3C": ""},
      {"name": "Midwest", "1.5C": "<span class='arrow-up'>&#9650;</span> 2.3C", "2C": "<span class='arrow-up'>&#9650;</span> 3.0C", "3C": ""},
      {"name": "South", "1.5C": "<span class='arrow-up'>&#9650;</span> 1.8C", "2C": "<span class='arrow-up'>&#9650;</span> 2.4C", "3C": ""},
      {"name": "East", "1.5C": "<span class='arrow-up'>&#9650;</span> 2.1C", "2C": "<span class='arrow-up'>&#9650;</span> 2.8C", "3C": ""},
      {"name": "Northeast", "1.5C": "<span class='arrow-up'>&#9650;</span> 2.4C", "2C": "<span class='arrow-up'>&#9650;</span> 3.1C", "3C": ""}
    ];

    var americasMaxTemp = [
      {"name": "<span class='table-subtitle'>Annual highest maximum temperature</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Amazonia", "1.5C": "<span class='arrow-up'>&#9650;</span> 1.2C <br><span class='uncertainty'>(+1.1-+1.5)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 2C <br><span class='uncertainty'>(+1.9-+2.2)", "3C": ""},
      {"name": "Southern South America", "1.5C": "<span class='arrow-up'>&#9650;</span> 1C <br><span class='uncertainty'>(+0.7-+1.4)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 1.6C <br><span class='uncertainty'>(+1.4-+2.1)", "3C": ""},
      {"name": "Central America", "1.5C": "<span class='arrow-up'>&#9650;</span> 1C <br><span class='uncertainty'>(+0.7-+1.2)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 1.5C <br><span class='uncertainty'>(+1.3-+1.7)", "3C": ""},
      {"name": "Western North America", "1.5C": "<span class='arrow-up'>&#9650;</span> 1C <br><span class='uncertainty'>(+0.4-+1.2)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 1.9C <br><span class='uncertainty'>(+1.4-+2.2)", "3C": ""},
      {"name": "Central North America", "1.5C": "<span class='arrow-up'>&#9650;</span> 0.6C <br><span class='uncertainty'>(-0.8-+1.6)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 1.7C <br><span class='uncertainty'>(+0.3-+2.4)", "3C": ""},
      {"name": "Eastern North America", "1.5C": "<span class='arrow-up'>&#9650;</span> 1C <br><span class='uncertainty'>(+0.4-+1.2)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 1.7C <br><span class='uncertainty'>(+1.3-+2.1)", "3C": ""},
      {"name": "Alaska", "1.5C": "<span class='arrow-up'>&#9650;</span> 1.1C <br><span class='uncertainty'>(+0.6-+1.4)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 2.1C <br><span class='uncertainty'>(+1.4-+2.8)", "3C": ""},
      {"name": "Greenland", "1.5C": "<span class='arrow-up'>&#9650;</span> 1.3C <br><span class='uncertainty'>(+0.8-+1.7)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 2.1C <br><span class='uncertainty'>(+1.8-+2.5)", "3C": ""}
      ];


    var americasWarmSpell = [
      {"name": "<span class='table-subtitle'>Warm spell duration</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Amazonia", "1.5C": "<span class='arrow-up'>&#9650;</span> 28 days <br><span class='uncertainty'>(+17-+43)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 71 days <br><span class='uncertainty'>(+67-+80)", "3C": ""},
      {"name": "Southern South America", "1.5C": "<span class='arrow-up'>&#9650;</span> 10 days <br><span class='uncertainty'>(+7-+13)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 16 days <br><span class='uncertainty'>(+15-+18)", "3C": ""},
      {"name": "Central America", "1.5C": "<span class='arrow-up'>&#9650;</span> 22 days <br><span class='uncertainty'>(+16-+25)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 45 days <br><span class='uncertainty'>(+32-+46)", "3C": ""},
      {"name": "Western North America", "1.5C": "<span class='arrow-up'>&#9650;</span> 15 days <br><span class='uncertainty'>(+11-+20)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 26 days <br><span class='uncertainty'>(+22-+30)", "3C": ""},
      {"name": "Central North America", "1.5C": "<span class='arrow-up'>&#9650;</span> 10 days <br><span class='uncertainty'>(+6-+16)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 21 days <br><span class='uncertainty'>(+13-+25)", "3C": ""},
      {"name": "Eastern North America", "1.5C": "<span class='arrow-up'>&#9650;</span> 9 days <br><span class='uncertainty'>(+6-+11)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 18 days <br><span class='uncertainty'>(+14-+20)", "3C": ""},
      {"name": "Alaska", "1.5C": "<span class='arrow-up'>&#9650;</span> 12 days <br><span class='uncertainty'>(+11-+14)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 22 days <br><span class='uncertainty'>(+18-+25)", "3C": ""},
      {"name": "Greenland", "1.5C": "<span class='arrow-up'>&#9650;</span> 16 days <br><span class='uncertainty'>(+14-+20)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 26 days <br><span class='uncertainty'>(+23-+31)", "3C": ""}
    ];

    var americasWarmExtremes = [
      {"name": "<span class='table-subtitle'>Frequency of warm extremes over land</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Alaska and Northwestern Canada", "1.5C": "<span class='arrow-up'>&#9650;</span> 67%", "2C": "<span class='arrow-up'>&#9650;</span> 162%", "3C": ""},
      {"name": "Eastern Canada, Greenland (and Iceland)", "1.5C": "<span class='arrow-up'>&#9650;</span> 79%", "2C": "<span class='arrow-up'>&#9650;</span> 196%", "3C": ""},
      {"name": "Western North America", "1.5C": "<span class='arrow-up'>&#9650;</span> 131%", "2C": "<span class='arrow-up'>&#9650;</span> 350%", "3C": ""},
      {"name": "Central North America", "1.5C": "<span class='arrow-up'>&#9650;</span> 103%", "2C": "<span class='arrow-up'>&#9650;</span> 258%", "3C": ""},
      {"name": "Eastern North America", "1.5C": "<span class='arrow-up'>&#9650;</span> 121%", "2C": "<span class='arrow-up'>&#9650;</span> 325%", "3C": ""},
      {"name": "Central America/Mexico", "1.5C": "<span class='arrow-up'>&#9650;</span> 167%", "2C": "<span class='arrow-up'>&#9650;</span> 486%", "3C": ""},
      {"name": "Amazon", "1.5C": "<span class='arrow-up'>&#9650;</span> 258%", "2C": "<span class='arrow-up'>&#9650;</span> 737%", "3C": ""},
      {"name": "Northeastern Brazil", "1.5C": "<span class='arrow-up'>&#9650;</span> 310%", "2C": "<span class='arrow-up'>&#9650;</span> 920%", "3C": ""},
      {"name": "Western Coast South America", "1.5C": "<span class='arrow-up'>&#9650;</span> 188%", "2C": "<span class='arrow-up'>&#9650;</span> 553%", "3C": ""},
      {"name": "Southeastern South America", "1.5C": "<span class='arrow-up'>&#9650;</span> 114%", "2C": "<span class='arrow-up'>&#9650;</span> 288%", "3C": ""}
    ];

    var americasColdExtremes = [
      {"name": "<span class='table-subtitle'>Frequency of cold extremes over land</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Alaska and Northwestern Canada", "1.5C": "<span class='arrow-down'>&#9660;</span> 65%", "2C": "<span class='arrow-down'>&#9660;</span> 91%", "3C": ""},
      {"name": "Eastern Canada/Greenland/Iceland", "1.5C": "<span class='arrow-down'>&#9660;</span> 71%", "2C": "<span class='arrow-down'>&#9660;</span> 95%", "3C": ""},
      {"name": "Western North America", "1.5C": "<span class='arrow-down'>&#9660;</span> 42%", "2C": "<span class='arrow-down'>&#9660;</span> 69%", "3C": ""},
      {"name": "Central North America", "1.5C": "<span class='arrow-down'>&#9660;</span> 44%", "2C": "<span class='arrow-down'>&#9660;</span> 72%", "3C": ""},
      {"name": "Eastern North America", "1.5C": "<span class='arrow-down'>&#9660;</span> 61%", "2C": "<span class='arrow-down'>&#9660;</span> 88%", "3C": ""},
      {"name": "Central America/Mexico", "1.5C": "<span class='arrow-down'>&#9660;</span> 50%", "2C": "<span class='arrow-down'>&#9660;</span> 77%", "3C": ""},
      {"name": "Amazon", "1.5C": "<span class='arrow-down'>&#9660;</span> 56%", "2C": "<span class='arrow-down'>&#9660;</span> 82%", "3C": ""},
      {"name": "Northeastern Brazil", "1.5C": "<span class='arrow-down'>&#9660;</span> 73%", "2C": "<span class='arrow-down'>&#9660;</span> 95%", "3C": ""},
      {"name": "West Coast South America", "1.5C": "<span class='arrow-down'>&#9660;</span> 53%", "2C": "<span class='arrow-down'>&#9660;</span> 81%", "3C": ""},
      {"name": "Southeastern South America", "1.5C": "<span class='arrow-down'>&#9660;</span> 40%", "2C": "<span class='arrow-down'>&#9660;</span> 67%", "3C": ""}
    ];

    var americasRainfall = [
      {"name": "<span class='table-subtitle'>Average rainfall</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Contigious US", "1.5C": "<span class='arrow-up'>&#9650;</span> 2%", "2C": "<span class='arrow-up'>&#9650;</span> 3%", "3C": ""},
      {"name": "Northwest", "1.5C": "<span class='arrow-up'>&#9650;</span> 2%", "2C": "<span class='arrow-up'>&#9650;</span> 3%", "3C": ""},
      {"name": "Southwest", "1.5C": "<span class='arrow-up'>&#9650;</span> 0%", "2C": "<span class='arrow-up'>&#9650;</span> 1%", "3C": ""},
      {"name": "Rockies", "1.5C": "<span class='arrow-up'>&#9650;</span> 1%", "2C": "<span class='arrow-up'>&#9650;</span> 2%", "3C": ""},
      {"name": "GreatPlains", "1.5C": "<span class='arrow-up'>&#9650;</span> 0%", "2C": "<span class='arrow-up'>&#9650;</span> 1%", "3C": ""},
      {"name": "Midwest", "1.5C": "<span class='arrow-up'>&#9650;</span> 5%", "2C": "<span class='arrow-up'>&#9650;</span> 6%", "3C": ""},
      {"name": "South", "1.5C": "<span class='arrow-up'>&#9650;</span> 2%", "2C": "<span class='arrow-up'>&#9650;</span> 3%", "3C": ""},
      {"name": "East", "1.5C": "<span class='arrow-up'>&#9650;</span> 5%", "2C": "<span class='arrow-up'>&#9650;</span> 7%", "3C": ""},
      {"name": "Northeast", "1.5C": "<span class='arrow-up'>&#9650;</span> 6%", "2C": "<span class='arrow-up'>&#9650;</span> 8%", "3C": ""}
    ];

    var americasDrySpell = [
      {"name": "<span class='table-subtitle'>Dry spell duration</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Amazonia", "1.5C": "<span class='arrow-up'>&#9650;</span> 1 day <br><span class='uncertainty'>(-3-+3)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 2 days <br><span class='uncertainty'>(-1-+5)</span>", "3C": ""},
      {"name": "Southern South America", "1.5C": "<span class='arrow-down'>&#9660;</span> 3 days <br><span class='uncertainty'>(-3-+1)</span>", "2C": "<span class='arrow-down'>&#9660;</span> 1 day <br><span class='uncertainty'>(-4-+0)</span>", "3C": ""},
      {"name": "Central America", "1.5C": "<span class='arrow-side'>&#9664;&#9654;</span> 0 days <br><span class='uncertainty'>(-2-+1)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 1 day <br><span class='uncertainty'>(-1-+5)</span>", "3C": ""},
      {"name": "Western North America", "1.5C": "<span class='arrow-down'>&#9660;</span> 3 days <br><span class='uncertainty'>(-3--1)</span>", "2C": "<span class='arrow-down'>&#9660;</span> 3 days <br><span class='uncertainty'>(-5-+0)</span>", "3C": ""},
      {"name": "Central North America", "1.5C": "<span class='arrow-side'>&#9664;&#9654;</span> 0 days <br><span class='uncertainty'>(-1-+1)</span>", "2C": "<span class='arrow-side'>&#9664;&#9654;</span> 0 days <br><span class='uncertainty'>(-2-+1)</span>", "3C": ""},
      {"name": "Eastern North America", "1.5C": "<span class='arrow-side'>&#9664;&#9654;</span> 0 days <br><span class='uncertainty'>(-1-+0)</span>", "2C": "<span class='arrow-side'>&#9664;&#9654;</span> 0 days <br><span class='uncertainty'>(-1-+1)</span>", "3C": ""},
      {"name": "Alaska", "1.5C": "<span class='arrow-down'>&#9660;</span> 1 day <br><span class='uncertainty'>(-2-+1)</span>", "2C": "<span class='arrow-down'>&#9660;</span> 1 day <br><span class='uncertainty'>(-2-+1)</span>", "3C": ""},
      {"name": "Greenland", "1.5C": "<span class='arrow-down'>&#9660;</span> 3 days <br><span class='uncertainty'>(-3--1)</span>", "2C": "<span class='arrow-down'>&#9660;</span> 3 days <br><span class='uncertainty'>(-5--2)</span>", "3C": ""}
    ];

    var americasRainIntensity = [
      {"name": "<span class='table-subtitle'>Rainfall intensity</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Amazonia", "1.5C": "<span class='arrow-up'>&#9650;</span> 2% <br><span class='uncertainty'>(+1-+4)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 3% <br><span class='uncertainty'>(+2-+4)</span>", "3C": ""},
      {"name": "Southern South America", "1.5C": "<span class='arrow-up'>&#9650;</span> 2% <br><span class='uncertainty'>(+1-+3)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 4% <br><span class='uncertainty'>(+3-+5)</span>", "3C": ""},
      {"name": "Central America", "1.5C": "<span class='arrow-up'>&#9650;</span> 4% <br><span class='uncertainty'>(0-+5)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 4% <br><span class='uncertainty'>(+1-+5)</span>", "3C": ""},
      {"name": "Western North America", "1.5C": "<span class='arrow-up'>&#9650;</span> 3% <br><span class='uncertainty'>(+1-+5)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 4% <br><span class='uncertainty'>(+3-+7)</span>", "3C": ""},
      {"name": "Central North America", "1.5C": "<span class='arrow-up'>&#9650;</span> 2% <br><span class='uncertainty'>(-2-+4)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 2% <br><span class='uncertainty'>(+1-+6)</span>", "3C": ""},
      {"name": "Eastern North America", "1.5C": "<span class='arrow-up'>&#9650;</span> 2% <br><span class='uncertainty'>(+0-+4)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 3% <br><span class='uncertainty'>(+2-+4)</span>", "3C": ""},
      {"name": "Alaska", "1.5C": "<span class='arrow-up'>&#9650;</span> 5% <br><span class='uncertainty'>(+3-+6)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 5% <br><span class='uncertainty'>(+4-+8)</span>", "3C": ""},
      {"name": "Greenland", "1.5C": "<span class='arrow-up'>&#9650;</span> 4% <br><span class='uncertainty'>(+4-+7)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 5% <br><span class='uncertainty'>(+4-+9)</span>", "3C": ""}
    ];

    var americasRainExtremes = [
      {"name": "<span class='table-subtitle'>Frequency of rainfall extremes over land</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Alaska and Northwestern Canada", "1.5C": "<span class='arrow-up'>&#9650;</span> 67%", "2C": "<span class='arrow-up'>&#9650;</span> 162%", "3C": ""},
      {"name": "Eastern Canada, Greenland (and Iceland)", "1.5C": "<span class='arrow-up'>&#9650;</span> 79%", "2C": "<span class='arrow-up'>&#9650;</span> 196%", "3C": ""},
      {"name": "Western North America", "1.5C": "<span class='arrow-up'>&#9650;</span> 131%", "2C": "<span class='arrow-up'>&#9650;</span> 350%", "3C": ""},
      {"name": "Central North America", "1.5C": "<span class='arrow-up'>&#9650;</span> 103%", "2C": "<span class='arrow-up'>&#9650;</span> 258%", "3C": ""},
      {"name": "Eastern North America", "1.5C": "<span class='arrow-up'>&#9650;</span> 121%", "2C": "<span class='arrow-up'>&#9650;</span> 325%", "3C": ""},
      {"name": "Central America/Mexico", "1.5C": "<span class='arrow-up'>&#9650;</span> 167%", "2C": "<span class='arrow-up'>&#9650;</span> 486%", "3C": ""},
      {"name": "Amazon", "1.5C": "<span class='arrow-up'>&#9650;</span> 258%", "2C": "<span class='arrow-up'>&#9650;</span> 737%", "3C": ""},
      {"name": "Northeastern Brazil", "1.5C": "<span class='arrow-up'>&#9650;</span> 310%", "2C": "<span class='arrow-up'>&#9650;</span> 920%", "3C": ""},
      {"name": "West Coast South America", "1.5C": "<span class='arrow-up'>&#9650;</span> 188%", "2C": "<span class='arrow-up'>&#9650;</span> 553%", "3C": ""},
      {"name": "Southeastern South America", "1.5C": "<span class='arrow-up'>&#9650;</span> 114%", "2C": "<span class='arrow-up'>&#9650;</span> 288%", "3C": ""}
    ];

    var americasRainSeason = [
      {"name": "<span class='table-subtitle'>Length of tropical rain season (days)</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Central America", "1.5C": "<span class='arrow-down'>&#9660;</span> 3 days", "2C": "<span class='arrow-down'>&#9660;</span> 1 day", "3C": ""},
      {"name": "Amazon", "1.5C": "<span class='arrow-down'>&#9660;</span> 9 days", "2C": "<span class='arrow-down'>&#9660;</span> 9 days", "3C": ""},
      {"name": "Northeast Brazil", "1.5C": "<span class='arrow-down'>&#9660;</span> 10 days", "2C": "<span class='arrow-down'>&#9660;</span> 9 days", "3C": ""},
      {"name": "Southeastern South America", "1.5C": "<span class='arrow-up'>&#9650;</span> 2 days", "2C": "<span class='arrow-down'>&#9660;</span> 10 days", "3C": ""}
    ];

    var americasDrought = [
      {"name": "<span class='table-subtitle'>Average drought length (months)</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Central America", "1.5C": "<span class='arrow-up'>&#9650;</span> 5", "2C": "<span class='arrow-up'>&#9650;</span> 8", "3C": "<span class='arrow-up'>&#9650;</span> 19"},
      {"name": "South America", "1.5C": "<span class='arrow-up'>&#9650;</span> 1", "2C": "<span class='arrow-up'>&#9650;</span> 3", "3C": "<span class='arrow-up'>&#9650;</span> 8"},
      {"name": "North America", "1.5C": "<span class='arrow-up'>&#9650;</span> 1", "2C": "<span class='arrow-up'>&#9650;</span> 1", "3C": "<span class='arrow-up'>&#9650;</span> 3"},
      {"name": "<br><span class='table-subtitle'>Population exposed to water scarcity</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Alaska", "1.5C": "<span class='arrow-up'>&#9650;</span> 0m <br><span class='uncertainty'>(0-0)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 0m <br><span class='uncertainty'>(0-0)</span>", "3C": ""},
      {"name": "Amazon", "1.5C": "<span class='arrow-up'>&#9650;</span> 6m <br><span class='uncertainty'>(-1-+14)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 6m <br><span class='uncertainty'>(-5-+17)</span>", "3C": ""},
      {"name": "Central America and Mexico", "1.5C": "<span class='arrow-up'>&#9650;</span> 6m <br><span class='uncertainty'>(+3-+9)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 10m <br><span class='uncertainty'>(+1-+20)</span>", "3C": ""},
      {"name": "Eastern Canada, Greenland (and Iceland)", "1.5C": "<span class='arrow-up'>&#9650;</span> 0m <br><span class='uncertainty'>(0-0)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 0m <br><span class='uncertainty'>(0-0)</span>", "3C": ""},
      {"name": "Central North America", "1.5C": "<span class='arrow-up'>&#9650;</span> 15m <br><span class='uncertainty'>(+10-+19)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 18m <br><span class='uncertainty'>(+10-+27)</span>", "3C": ""},
      {"name": "Eastern North America", "1.5C": "<span class='arrow-up'>&#9650;</span> 8m <br><span class='uncertainty'>(+1-+16)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 17m <br><span class='uncertainty'>(+8-+25)</span>", "3C": ""},
      {"name": "Northeastern Brazil", "1.5C": "<span class='arrow-up'>&#9650;</span> 6m <br><span class='uncertainty'>(-5-+16)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 7m <br><span class='uncertainty'>(+3-+11)</span>", "3C": ""},
      {"name": "Western North America", "1.5C": "<span class='arrow-up'>&#9650;</span> 4m <br><span class='uncertainty'>(-1-+9)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 4m <br><span class='uncertainty'>(-3-+11)</span>", "3C": ""},
      {"name": "West Coast South America", "1.5C": "<span class='arrow-up'>&#9650;</span> 0m <br><span class='uncertainty'>(-2-+2)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 1m <br><span class='uncertainty'>(-2-+3)</span>", "3C": ""}
    ];

    var americasStorms = [
      {"name": "<span class='table-subtitle'>Frequency of extreme high river flows</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Amazon", "1.5C": "1-in-108 years <br><span class='uncertainty'>(103-113)</span>", "2C": "1-in-87 years <br><span class='uncertainty'>(84-90)</span>", "3C": ""},
      {"name": "Mississipi", "1.5C": "1-in-85 years <br><span class='uncertainty'>(82-88)</span>", "2C": "1-in-64 years <br><span class='uncertainty'>(60-68)</span>", "3C": ""},
      {"name": "Mackenzie", "1.5C": "1-in-61 years <br><span class='uncertainty'>(54-68)</span>", "2C": "1-in-49 years <br><span class='uncertainty'>(45-53)</span>", "3C": ""}

    ];

    var americasCrops = [
      {"name": "<span class='table-subtitle'>US maize yields</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Likelihood of annual yields below average", "1.5C": "82%", "2C": "82%", "3C": ""},
      {"name": "Likelihood of annual yields >10% below average", "1.5C": "57%", "2C": "67%", "3C": ""},
      {"name": "Likelihood of annual yields >20% below average", "1.5C": "12%", "2C": "31%", "3C": ""},
      {"name": "<br><span class='table-subtitle'>Growing season length</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Amazonia", "1.5C": "<span class='arrow-up'>&#9650;</span> 1 day <br><span class='uncertainty'>(+1-+1)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 2 days <br><span class='uncertainty'>(+2-+2)</span>", "3C": ""},
      {"name": "Southern South America", "1.5C": "<span class='arrow-up'>&#9650;</span> 6 days <br><span class='uncertainty'>(+3-+7)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 9 days <br><span class='uncertainty'>(+8-+11)</span>", "3C": ""},
      {"name": "Central America", "1.5C": "<span class='arrow-up'>&#9650;</span> 1 day <br><span class='uncertainty'>(+0-+1)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 1 day <br><span class='uncertainty'>(+0-+1)</span>", "3C": ""},
      {"name": "Western North America", "1.5C": "<span class='arrow-up'>&#9650;</span> 12 days <br><span class='uncertainty'>(+8-+15)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 18 days <br><span class='uncertainty'>(+15-+21)</span>", "3C": ""},
      {"name": "Central North America", "1.5C": "<span class='arrow-up'>&#9650;</span> 11 days <br><span class='uncertainty'>(+7-+15)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 17 days <br><span class='uncertainty'>(+9-+22)</span>", "3C": ""},
      {"name": "Eastern North America", "1.5C": "<span class='arrow-up'>&#9650;</span> 12 days <br><span class='uncertainty'>(+9-+18)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 19 days <br><span class='uncertainty'>(+15-+22)</span>", "3C": ""},
      {"name": "Alaska", "1.5C": "<span class='arrow-up'>&#9650;</span> 10 days <br><span class='uncertainty'>(+4-+12)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 16 days <br><span class='uncertainty'>(+10-+22)</span>", "3C": ""},
      {"name": "Greenland", "1.5C": "<span class='arrow-up'>&#9650;</span> 9 days <br><span class='uncertainty'>(+6-+11)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 13 days <br><span class='uncertainty'>(+9-+16)</span>", "3C": ""}
    ];

    var americasHealth = [
      {"name": "<span class='table-subtitle'>Annual cases of dengue fever in Latin America</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "2050", "1.5C": "<span class='arrow-up'>&#9650;</span> 6.4m <br><span class='uncertainty'>(+4.0-+10.6)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 6.7m <br><span class='uncertainty'>(+4.1-+11.1)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 7.5m <br><span class='uncertainty'>(+4.4-+13.1)</span>"},
      {"name": "2100", "1.5C": "<span class='arrow-up'>&#9650;</span> 4.5m <br><span class='uncertainty'>(+1.6-+7.5)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 5.0m <br><span class='uncertainty'>(+3.1-+8.6)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 7.8m <br><span class='uncertainty'>(+3.9-+16.0)</span>"}
    ];

// Caribbean objects

    // put temeprature and heat in one for now

    var sidsTemp = [
      {"name": "<span class='table-subtitle'>Average temperature</span>", "1.5C": "<span class='arrow-up'>&#9650;</span> 1.2C <br><span class='uncertainty'>(+1.0-+1.4)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 1.6C <br><span class='uncertainty'>(+1.4-+1.9)</span>", "3C": "<span class='arrow-up'>&#9650;</span> 2.0C <br><span class='uncertainty'>(+1.7-+2.3)</span>"},
      {"name": "<span class='table-subtitle'>Warm spell duration (days)</span>", "1.5C": "<span class='arrow-up'>&#9650;</span> +7-+11", "2C": "<span class='arrow-up'>&#9650;</span> +9–+22", "3C": "<span class='arrow-up'>&#9650;</span> +17–+39"}
    ];

    var sidsRain = [
      {"name": "<span class='table-subtitle'>Average annual rainfall</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Caribbean", "1.5C": "<span class='arrow-up'>&#9650;</span> 4%", "2C": "<span class='arrow-up'>&#9650;</span> 0%", "3C": "<span class='arrow-up'>&#9650;</span> 0%"},
      {"name": "Barbados", "1.5C": "<span class='arrow-up'>&#9650;</span> 2%", "2C": "<span class='arrow-down'>&#9660;</span> 7%", "3C": "<span class='arrow-down'>&#9660;</span> 11%"},
      {"name": "Belize", "1.5C": "<span class='arrow-up'>&#9650;</span> 2%", "2C": "<span class='arrow-down'>&#9660;</span> 8%", "3C": "<span class='arrow-down'>&#9660;</span> 10%"},
      {"name": "Cuba", "1.5C": "<span class='arrow-up'>&#9650;</span> 1%", "2C": "<span class='arrow-up'>&#9650;</span> 0%", "3C": "<span class='arrow-up'>&#9650;</span> 0%"},
      {"name": "Jamaica", "1.5C": "<span class='arrow-up'>&#9650;</span> 5%", "2C": "<span class='arrow-down'>&#9660;</span> 2%", "3C": "<span class='arrow-down'>&#9660;</span> 3%"},
      {"name": "Trinidad", "1.5C": "<span class='arrow-down'>&#9660;</span> 6%", "2C": "<span class='arrow-down'>&#9660;</span> 18%", "3C": "<span class='arrow-down'>&#9660;</span> 21%"},
      {"name": "<span class='table-subtitle'>Annual days where rainfall >10mm</span>", "1.5C": "-1-+2", "2C": "-4–+1", "3C": "-6–+0"}
    ];

    // unfortunately only one row has 2.5C as the third column, this will need to go into a section by itself:

    var sidsDrought1 = [
      {"name": "<span class='table-subtitle'>Percentage of time in moderate-to-severe drought</span>", "1.5C": "17%", "2C": "26%", "3C": "34%"},
    ];

    // drought length and half of the aridity data

    var sidsDrought2 = [
      {"name": "<span class='table-subtitle'>Average drought length (months)</span>", "1.5C": "<span class='arrow-up'>&#9650;</span> 3", "2C": "<span class='arrow-up'>&#9650;</span> 5", "3C": "<span class='arrow-up'>&#9650;</span> 21"},
      {"name": "<br><span class='table-subtitle'>Aridity</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "SIDS average", "1.5C": "<span class='arrow-up'>&#9650;</span> 4% <br><span class='uncertainty'>(±3%)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 5% <br><span class='uncertainty'>(±5%)</span>", "3C": ""},
      {"name": "Bahamas", "1.5C": "<span class='arrow-up'>&#9650;</span> 2%", "2C": "<span class='arrow-up'>&#9650;</span> 2%", "3C": ""},
      {"name": "Belize", "1.5C": "<span class='arrow-up'>&#9650;</span> 8%", "2C": "<span class='arrow-up'>&#9650;</span> 9%", "3C": ""},
      {"name": "Cabo Verde", "1.5C": "<span class='arrow-up'>&#9650;</span> 5%", "2C": "<span class='arrow-up'>&#9650;</span> 7%", "3C": ""},
      {"name": "Comoros", "1.5C": "<span class='arrow-up'>&#9650;</span> 0%", "2C": "<span class='arrow-up'>&#9650;</span> 1%", "3C": ""},
      {"name": "Cuba", "1.5C": "<span class='arrow-up'>&#9650;</span> 3%", "2C": "<span class='arrow-up'>&#9650;</span> 5%", "3C": ""},
      {"name": "Dominican Republic", "1.5C": "<span class='arrow-up'>&#9650;</span> 6%", "2C": "<span class='arrow-up'>&#9650;</span> 13%", "3C": ""},
      {"name": "Fiji", "1.5C": "<span class='arrow-up'>&#9650;</span> 2%", "2C": "<span class='arrow-up'>&#9650;</span> 4%", "3C": ""},
      {"name": "Grenada", "1.5C": "<span class='arrow-up'>&#9650;</span> 7%", "2C": "<span class='arrow-up'>&#9650;</span> 12%", "3C": ""},
      {"name": "Guinea-Bissau", "1.5C": "<span class='arrow-up'>&#9650;</span> 11%", "2C": "<span class='arrow-up'>&#9650;</span> 10%", "3C": ""},
      {"name": "Guyana", "1.5C": "<span class='arrow-up'>&#9650;</span> 7%", "2C": "<span class='arrow-up'>&#9650;</span> 8%", "3C": ""},
      {"name": "Haiti", "1.5C": "<span class='arrow-up'>&#9650;</span> 5%", "2C": "<span class='arrow-up'>&#9650;</span> 10%", "3C": ""},
      {"name": "Jamaica", "1.5C": "<span class='arrow-up'>&#9650;</span> 4%", "2C": "<span class='arrow-up'>&#9650;</span> 7%", "3C": ""},
    ];

    // the other half of the aridity data

    var sidsDrought3 = [
      {"name": "Maldives", "1.5C": "<span class='arrow-down'>&#9660;</span> 2%", "2C": "<span class='arrow-down'>&#9660;</span> 5%", "3C": ""},
      {"name": "Mauritius", "1.5C": "<span class='arrow-up'>&#9650;</span> 3%", "2C": "<span class='arrow-up'>&#9650;</span> 6%", "3C": ""},
      {"name": "Micronesia", "1.5C": "<span class='arrow-up'>&#9650;</span> 0%", "2C": "<span class='arrow-down'>&#9660;</span> 1%", "3C": ""},
      {"name": "Papua New Guinea", "1.5C": "<span class='arrow-down'>&#9660;</span> 1%", "2C": "<span class='arrow-down'>&#9660;</span> 2%", "3C": ""},
      {"name": "St. Lucia", "1.5C": "<span class='arrow-up'>&#9650;</span> 6%", "2C": "<span class='arrow-up'>&#9650;</span> 10%", "3C": ""},
      {"name": "St. Vincent and the Grenadines", "1.5C": "<span class='arrow-up'>&#9650;</span> 6%", "2C": "<span class='arrow-up'>&#9650;</span> 10%", "3C": ""},
      {"name": "Samoa", "1.5C": "<span class='arrow-up'>&#9650;</span> 0%", "2C": "<span class='arrow-up'>&#9650;</span> 4%", "3C": ""},
      {"name": "Sao Tome and Principe", "1.5C": "<span class='arrow-down'>&#9660;</span> 3%", "2C": "<span class='arrow-down'>&#9660;</span> 3%", "3C": ""},
      {"name": "Singapore", "1.5C": "<span class='arrow-up'>&#9650;</span> 5%", "2C": "<span class='arrow-up'>&#9650;</span> 5%", "3C": ""},
      {"name": "Solomon Islands", "1.5C": "<span class='arrow-up'>&#9650;</span> 0%", "2C": "<span class='arrow-up'>&#9650;</span> 1%", "3C": ""},
      {"name": "Suriname", "1.5C": "<span class='arrow-up'>&#9650;</span> 7%", "2C": "<span class='arrow-up'>&#9650;</span> 7%", "3C": ""},
      {"name": "Timor-Leste", "1.5C": "<span class='arrow-up'>&#9650;</span> 4%", "2C": "<span class='arrow-up'>&#9650;</span> 5%", "3C": ""},
      {"name": "Tonga", "1.5C": "<span class='arrow-up'>&#9650;</span> 1%", "2C": "<span class='arrow-up'>&#9650;</span> 1%", "3C": ""},
      {"name": "Trinidad and Tobago", "1.5C": "<span class='arrow-up'>&#9650;</span> 9%", "2C": "<span class='arrow-up'>&#9650;</span> 12%", "3C": ""},
      {"name": "Vanuatu", "1.5C": "<span class='arrow-up'>&#9650;</span> 4%", "2C": "<span class='arrow-up'>&#9650;</span> 5%", "3C": ""}
    ];

// Africa objects

    //temperature and warm spell

    var africaTemp = [
      {"name": "<span class='table-subtitle'>Annual highest maximum temperature</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Sahara", "1.5C": "<span class='arrow-up'>&#9650;</span> 1.1C <br><span class='uncertainty'>(+0.8-+1.2)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 1.8C <br><span class='uncertainty'>(+1.6-+2.1)</span>", "3C": ""},
      {"name": "West Africa", "1.5C": "<span class='arrow-up'>&#9650;</span> 0.8C <br><span class='uncertainty'>(+0.6-+0.8)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 1.4C <br><span class='uncertainty'>(+1.3-+1.6)</span>", "3C": ""},
      {"name": "East Africa", "1.5C": "<span class='arrow-up'>&#9650;</span> 0.9C <br><span class='uncertainty'>(+0.8-+1)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 1.5C <br><span class='uncertainty'>(+1.3-+1.7)</span>", "3C": ""},
      {"name": "Southern Africa", "1.5C": "<span class='arrow-up'>&#9650;</span> 0.9C <br><span class='uncertainty'>(+0.8-+1.2)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 1.7C <br><span class='uncertainty'>(+1.4-+1.8)</span>", "3C": ""},
      {"name": "<br><span class='table-subtitle'>Warm spell duration</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Sahara", "1.5C": "<span class='arrow-up'>&#9650;</span> 26 days <br><span class='uncertainty'>(+20-+30)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 49 days <br><span class='uncertainty'>(+44-+54)</span>", "3C": ""},
      {"name": "West Africa", "1.5C": "<span class='arrow-up'>&#9650;</span> 23 days <br><span class='uncertainty'>(+18-+25)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 56 days <br><span class='uncertainty'>(+49-+64)</span>", "3C": ""},
      {"name": "East Africa", "1.5C": "<span class='arrow-up'>&#9650;</span> 25 days <br><span class='uncertainty'>(+22-+28)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 55 days <br><span class='uncertainty'>(+49-+63)</span>", "3C": ""},
      {"name": "Southern Africa", "1.5C": "<span class='arrow-up'>&#9650;</span> 19 days <br><span class='uncertainty'>(+14-+22)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 41 days <br><span class='uncertainty'>(+36-+45)</span>", "3C": ""}
    ];

    var africaTempExtremes = [
      {"name": "<span class='table-subtitle'>Frequency of warm extremes over land</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Sahara", "1.5C": "<span class='arrow-up'>&#9650;</span> 332%", "2C": "<span class='arrow-up'>&#9650;</span> 930%", "3C": ""},
      {"name": "West Africa", "1.5C": "<span class='arrow-up'>&#9650;</span> 249%", "2C": "<span class='arrow-up'>&#9650;</span> 753%", "3C": ""},
      {"name": "East Africa", "1.5C": "<span class='arrow-up'>&#9650;</span> 282%", "2C": "<span class='arrow-up'>&#9650;</span> 822%", "3C": ""},
      {"name": "Southern Africa", "1.5C": "<span class='arrow-up'>&#9650;</span> 208%", "2C": "<span class='arrow-up'>&#9650;</span> 596%", "3C": ""},
      {"name": "<span class='table-subtitle'>Frequency of cold extremes over land</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Sahara", "1.5C": "<span class='arrow-down'>&#9660;</span> 61%", "2C": "<span class='arrow-down'>&#9660;</span> 87%", "3C": ""},
      {"name": "West Africa", "1.5C": "<span class='arrow-down'>&#9660;</span> 70%", "2C": "<span class='arrow-down'>&#9660;</span> 94%", "3C": ""},
      {"name": "East Africa", "1.5C": "<span class='arrow-down'>&#9660;</span> 69%", "2C": "<span class='arrow-down'>&#9660;</span> 93%", "3C": ""},
      {"name": "Southern Africa", "1.5C": "<span class='arrow-down'>&#9660;</span> 59%", "2C": "<span class='arrow-down'>&#9660;</span> 86%", "3C": ""}
    ];

    // heat events

    var africaHeat = [
      {"name": "<span class='table-subtitle'>Heat events</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Likelihood of exceeding record-hot year of 2015 in Africa", "1.5C": "91% <br><span class='uncertainty'>(88-93)</span>", "2C": "100% <br><span class='uncertainty'>(100-100)</span>", "3C": ""},
      {"name": "Likelihood of exceeding Dec–Feb 2009-10 hot season in northern Africa", "1.5C": "11% <br><span class='uncertainty'>(9-14)</span>", "2C": "30% <br><span class='uncertainty'>(28-34)</span>", "3C": ""},
      {"name": "Likelihood of exceeding temperature extremes during 1991-92 drought in southern Africa", "1.5C": "74% <br><span class='uncertainty'>(70-78)</span>", "2C": "98% <br><span class='uncertainty'>(97-100)</span>", "3C": ""}
    ];

    // season and dry spell

    var africaRain = [
      {"name": "<span class='table-subtitle'>Length of tropical rain season</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "West Africa", "1.5C": "<span class='arrow-down'>&#9660;</span> 7 days", "2C": "<span class='arrow-down'>&#9660;</span> 8 days", "3C": ""},
      {"name": "East Africa", "1.5C": "<span class='arrow-down'>&#9660;</span> 7 days", "2C": "<span class='arrow-down'>&#9660;</span> 5 days", "3C": ""},
      {"name": "Southern Africa", "1.5C": "<span class='arrow-down'>&#9660;</span> 6 days", "2C": "<span class='arrow-down'>&#9660;</span> 7 days", "3C": ""},
      {"name": "<br><span class='table-subtitle'>Dry spell duration</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Sahara", "1.5C": "<span class='arrow-down'>&#9660;</span> 6 days <br><span class='uncertainty'>(-14-+4)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 0 days <br><span class='uncertainty'>(-12-+5)</span>", "3C": ""},
      {"name": "West Africa", "1.5C": "<span class='arrow-down'>&#9660;</span> 4 days <br><span class='uncertainty'>(-8-0)</span>", "2C": "<span class='arrow-down'>&#9660;</span> 3 days <br><span class='uncertainty'>(-6-+1)</span>", "3C": ""},
      {"name": "East Africa", "1.5C": "<span class='arrow-down'>&#9660;</span> 1 day <br><span class='uncertainty'>(-3-+3)</span>", "2C": "<span class='arrow-down'>&#9660;</span> 2 days <br><span class='uncertainty'>(-7-+2)</span>", "3C": ""},
      {"name": "Southern Africa", "1.5C": "<span class='arrow-side'>&#9664;&#9654;</span> 0 days <br><span class='uncertainty'>(-3-+3)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 2 days <br><span class='uncertainty'>(-3-+5)</span>", "3C": ""}
    ];

    // rain intensity and extremes

    var africaRainIntensity = [
      {"name": "<span class='table-subtitle'>Rainfall intensity</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Sahara", "1.5C": "<span class='arrow-down'>&#9660;</span> 1% <br><span class='uncertainty'>(-6-+6)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 1% <br><span class='uncertainty'>(-2-+5)</span>", "3C": ""},
      {"name": "West Africa", "1.5C": "<span class='arrow-up'>&#9650;</span> 1% <br><span class='uncertainty'>(-1-+2)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 2% <br><span class='uncertainty'>(+1-+4)</span>", "3C": ""},
      {"name": "East Africa", "1.5C": "<span class='arrow-up'>&#9650;</span> 0% <br><span class='uncertainty'>(-2-+1)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 1% <br><span class='uncertainty'>(-1-+4)</span>", "3C": ""},
      {"name": "Southern Africa", "1.5C": "<span class='arrow-up'>&#9650;</span> 0% <br><span class='uncertainty'>(-2-+1)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 0% <br><span class='uncertainty'>(-2-+1)</span>", "3C": ""},
      {"name": "<br><span class='table-subtitle'>Frequency of rainfall extremes over land</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Sahara", "1.5C": "<span class='arrow-up'>&#9650;</span> 322%", "2C": "<span class='arrow-up'>&#9650;</span> 930%", "3C": ""},
      {"name": "West Africa", "1.5C": "<span class='arrow-up'>&#9650;</span> 249%", "2C": "<span class='arrow-up'>&#9650;</span> 753%", "3C": ""},
      {"name": "East Africa", "1.5C": "<span class='arrow-up'>&#9650;</span> 282%", "2C": "<span class='arrow-up'>&#9650;</span> 822%", "3C": ""},
      {"name": "Southern Africa", "1.5C": "<span class='arrow-up'>&#9650;</span> 208%", "2C": "<span class='arrow-up'>&#9650;</span> 596%", "3C": ""}
    ];

    var africaDrought = [
      {"name": "<span class='table-subtitle'>Average drought length (months)</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Northern Africa", "1.5C": "<span class='arrow-up'>&#9650;</span> 7", "2C": "<span class='arrow-up'>&#9650;</span> 20", "3C": "<span class='arrow-up'>&#9650;</span> 60"},
      {"name": "Western Africa", "1.5C": "<span class='arrow-up'>&#9650;</span> 6", "2C": "<span class='arrow-up'>&#9650;</span> 9", "3C": "<span class='arrow-up'>&#9650;</span> 24"},
      {"name": "Central Africa", "1.5C": "<span class='arrow-up'>&#9650;</span> 1", "2C": "<span class='arrow-up'>&#9650;</span> 2", "3C": "<span class='arrow-up'>&#9650;</span> 5"},
      {"name": "Eastern Africa", "1.5C": "<span class='arrow-up'>&#9650;</span> 3", "2C": "<span class='arrow-up'>&#9650;</span> 5", "3C": "<span class='arrow-up'>&#9650;</span> 12"},
      {"name": "Southern Africa", "1.5C": "<span class='arrow-up'>&#9650;</span> 4", "2C": "<span class='arrow-up'>&#9650;</span> 6", "3C": "<span class='arrow-up'>&#9650;</span> 19"},
      {"name": "<br><span class='table-subtitle'>Population exposed to water scarcity</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Sahara", "1.5C": "<span class='arrow-up'>&#9650;</span> 0m <br><span class='uncertainty'>(-2-+2)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 1 <br><span class='uncertainty'>(-1-+4)</span>", "3C": ""},
      {"name": "West Africa", "1.5C": "<span class='arrow-down'>&#9660;</span> 13m <br><span class='uncertainty'>(-34-+9)</span>", "2C": "<span class='arrow-down'>&#9660;</span> 2 <br><span class='uncertainty'>(-31-+27)</span>", "3C": ""},
      {"name": "East Africa", "1.5C": "<span class='arrow-up'>&#9650;</span> 6m <br><span class='uncertainty'>(-11-+22)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 22 <br><span class='uncertainty'>(+0-+43)</span>", "3C": ""},
      {"name": "Southern Africa", "1.5C": "<span class='arrow-up'>&#9650;</span> 5m <br><span class='uncertainty'>(+0-+10)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 10 <br><span class='uncertainty'>(+3-+17)</span>", "3C": ""}
    ];

    var africaStorms = [
      {"name": "<span class='table-subtitle'>Frequency of extreme high river flows</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Congo", "1.5C": "1-in-80 years <br><span class='uncertainty'>(74-86)</span>", "2C": "1-in-57 years <br><span class='uncertainty'>(52-62)</span>", "3C": ""},
      {"name": "Nile", "1.5C": "1-in-92 years <br><span class='uncertainty'>(85-99)</span>", "2C": "1-in-55 years <br><span class='uncertainty'>(51-59)</span>", "3C": ""}
    ];

    var africaCrops = [
      {"name": "<span class='table-subtitle'>Growing season length</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Sahara", "1.5C": "<span class='arrow-up'>&#9650;</span> 0 days <br><span class='uncertainty'>(+0-+0)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 0 days <br><span class='uncertainty'>(+0-+0)</span>", "3C": ""},
      {"name": "West Africa", "1.5C": "<span class='arrow-up'>&#9650;</span> 0 days <br><span class='uncertainty'>(+0-+1)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 0 days <br><span class='uncertainty'>(+0-+1)</span>", "3C": ""},
      {"name": "East Africa", "1.5C": "<span class='arrow-up'>&#9650;</span> 0 days <br><span class='uncertainty'>(+0-+0)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 0 days <br><span class='uncertainty'>(+0-+0)</span>", "3C": ""},
      {"name": "Southern Africa", "1.5C": "<span class='arrow-up'>&#9650;</span> 0 days <br><span class='uncertainty'>(+0-+0)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 0 days <br><span class='uncertainty'>(+0-+0)</span>", "3C": ""}
    ];

// Asia objects

    var asiaIce = [
      {"name": "<span class='table-subtitle'>Glacier mass in the high mountains of Asia</span>", "1.5C": "<span class='arrow-down'>&#9660;</span> 36% <br><span class='uncertainty'>(-29--43)</span>", "2C": "<span class='arrow-down'>&#9660;</span> 36% <br><span class='uncertainty'>(-28--44)</span>", "3C": "<span class='arrow-down'>&#9660;</span> 64% <br><span class='uncertainty'>(-59--69)</span>"}
    ];

    var asiaTemp = [
      {"name": "<span class='table-subtitle'>Average temperature</span>", "1.5C": "2.3C", "2C": "3C", "3C": "6C"},
    ];

    var asiaTempMax = [
      {"name": "<span class='table-subtitle'>Annual highest maximum temperature</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Northern Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 0.9C <br><span class='uncertainty'>(+0.4-+1.1)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 1.7C <br><span class='uncertainty'>(+1.5-+2)</span>", "3C": ""},
      {"name": "Tibet", "1.5C": "<span class='arrow-up'>&#9650;</span> 0.8C <br><span class='uncertainty'>(+0.6-+1)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 1.5C <br><span class='uncertainty'>(+1.1-+1.9)</span>", "3C": ""},
      {"name": "Central Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 0.8C <br><span class='uncertainty'>(+0.6-+1.1)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 1.6C <br><span class='uncertainty'>(+1.4-+1.9)</span>", "3C": ""},
      {"name": "Eastern Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 1C <br><span class='uncertainty'>(+0.8-+1.4)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 1.8C <br><span class='uncertainty'>(+1.4-+2)</span>", "3C": ""},
      {"name": "South East Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 0.7C <br><span class='uncertainty'>(+0.6-+0.9)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 1.4C <br><span class='uncertainty'>(+1-+1.6)</span>", "3C": ""},
      {"name": "Southern Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 1.2C <br><span class='uncertainty'>(+0.8-+1.4)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 1.7C <br><span class='uncertainty'>(+1.5-+2)</span>", "3C": ""},
      {"name": "<br><span class='table-subtitle'>Warm spell duration</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Northern Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 8 days <br><span class='uncertainty'>(+6-+10)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 17 days <br><span class='uncertainty'>(+14-+19)</span>", "3C": ""},
      {"name": "Tibet", "1.5C": "<span class='arrow-up'>&#9650;</span> 12 days <br><span class='uncertainty'>(+10-+14)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 22 days <br><span class='uncertainty'>(+19-+25)</span>", "3C": ""},
      {"name": "Central Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 15 days <br><span class='uncertainty'>(+11-+17)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 26 days <br><span class='uncertainty'>(+24-+34)</span>", "3C": ""},
      {"name": "Eastern Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 12 days <br><span class='uncertainty'>(+11-+16)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 23 days <br><span class='uncertainty'>(+20-+25)</span>", "3C": ""},
      {"name": "South East Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 16 days <br><span class='uncertainty'>(+13-+24)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 46 days <br><span class='uncertainty'>(+41-+56)</span>", "3C": ""},
      {"name": "Southern Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 28 days <br><span class='uncertainty'>(+21-+40)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 55 days <br><span class='uncertainty'>(+43-+67)</span>", "3C": ""}
    ];

    var asiaTempExtremes = [
      {"name": "<span class='table-subtitle'>Frequency of warm extremes over land</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Northern Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 76%", "2C": "<span class='arrow-up'>&#9650;</span> 187%", "3C": ""},
      {"name": "Western Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 235%", "2C": "<span class='arrow-up'>&#9650;</span> 673%", "3C": ""},
      {"name": "Central Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 126%", "2C": "<span class='arrow-up'>&#9650;</span> 339%", "3C": ""},
      {"name": "Tibetan Plateau", "1.5C": "<span class='arrow-up'>&#9650;</span> 109%", "2C": "<span class='arrow-up'>&#9650;</span> 290%", "3C": ""},
      {"name": "Eastern Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 86%", "2C": "<span class='arrow-up'>&#9650;</span> 217%", "3C": ""},
      {"name": "Southern Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 160%", "2C": "<span class='arrow-up'>&#9650;</span> 438%", "3C": ""},
      {"name": "South East Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 223%", "2C": "<span class='arrow-up'>&#9650;</span> 635%", "3C": ""},
      {"name": "<br><span class='table-subtitle'>Frequency of cold extremes over land</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Northern Asia", "1.5C": "<span class='arrow-down'>&#9660;</span> 58%", "2C": "<span class='arrow-down'>&#9660;</span> 86%", "3C": ""},
      {"name": "Western Asia", "1.5C": "<span class='arrow-down'>&#9660;</span> 45%", "2C": "<span class='arrow-down'>&#9660;</span> 71%", "3C": ""},
      {"name": "Central Asia", "1.5C": "<span class='arrow-down'>&#9660;</span> 41%", "2C": "<span class='arrow-down'>&#9660;</span> 67%", "3C": ""},
      {"name": "Tibetan Plateau", "1.5C": "<span class='arrow-down'>&#9660;</span> 39%", "2C": "<span class='arrow-down'>&#9660;</span> 65%", "3C": ""},
      {"name": "Eastern Asia", "1.5C": "<span class='arrow-down'>&#9660;</span> 46%", "2C": "<span class='arrow-down>&#9660;</span> 74%", "3C": ""},
      {"name": "Southern Asia", "1.5C": "<span class='arrow-down'>&#9660;</span> 54%", "2C": "<span class='arrow-down'>&#9660;</span> 81%", "3C": ""},
      {"name": "South East Asia", "1.5C": "<span class='arrow-down'>&#9660;</span> 65%", "2C": "<span class='arrow-down'>&#9660;</span> 90%", "3C": ""}
    ];

    var asiaIndiaHeatwaves = [
      {"name": "<span class='table-subtitle'>Heatwaves in India by mid-century</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Total number of severe heat waves", "1.5C": "5x", "2C": "9x", "3C": ""},
      {"name": "Duration of severe heat waves", "1.5C": "2x", "2C": "3x", "3C": ""},
      {"name": "Maximum population exposure to heatwave days, MPEHWd", "1.5C": "9x", "2C": "15x", "3C": ""},
      {"name": "<br><span class='table-subtitle'>Heatwaves in India by end of century</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Total number of severe heat waves", "1.5C": "8x", "2C": "32x", "3C": ""},
      {"name": "Duration of severe heat waves", "1.5C": "3x", "2C": "5x", "3C": ""},
      {"name": "Maximum population exposure to heatwave days, MPEHWd", "1.5C": "19x", "2C": "93x", "3C": ""}
    ];

    var asiaRainfallDry = [
     {"name": "<span class='table-subtitle'>Average rainfall</span>", "1.5C": "", "2C": "", "3C": ""},
     {"name": "Asia average", "1.5C": "<span class='arrow-up'>&#9650;</span> 4%", "2C": "<span class='arrow-up'>&#9650;</span> 6%", "3C": "<span class='arrow-up'>&#9650;</span> 10%"},
     {"name": "Northern Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 9%", "2C": "<span class='arrow-up'>&#9650;</span> 12%", "3C": ""},
     {"name": "Central Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 5%", "2C": "<span class='arrow-up'>&#9650;</span> 4%", "3C": ""},
     {"name": "Eastern Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 4%", "2C": "<span class='arrow-up'>&#9650;</span> 7%", "3C": ""},
     {"name": "Western Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 3%", "2C": "<span class='arrow-up'>&#9650;</span> 4%", "3C": ""},
     {"name": "Southern Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 3%", "2C": "<span class='arrow-down'>&#9660;</span> 3%", "3C": ""},
     {"name": "Southeast Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 0%", "2C": "<span class='arrow-up'>&#9650;</span> 1%", "3C": ""},
     {"name": "<br><span class='table-subtitle'>Dry spell duration</span>", "1.5C": "", "2C": "", "3C": ""},
     {"name": "Northern Asia", "1.5C": "<span class='arrow-down'>&#9660;</span> 1 day <br><span class='uncertainty'>(-2--1)</span>", "2C": "<span class='arrow-down'>&#9660;</span> 2 days <br><span class='uncertainty'>(-3--1)</span>", "3C": ""},
     {"name": "Tibet", "1.5C": "<span class='arrow-down'>&#9660;</span> 2 days <br><span class='uncertainty'>(-2--1)</span>", "2C": "<span class='arrow-down'>&#9660;</span> 4 days <br><span class='uncertainty'>(-6-+1)</span>", "3C": ""},
     {"name": "Central Asia", "1.5C": "<span class='arrow-down'>&#9660;</span> 1 day <br><span class='uncertainty'>(-6-+3)</span>", "2C": "<span class='arrow-down'>&#9660;</span> 1 day <br><span class='uncertainty'>(-4-+4)</span>", "3C": ""},
     {"name": "Eastern Asia", "1.5C": "<span class='arrow-down'>&#9660;</span> 3 days <br><span class='uncertainty'>(-5-0)</span>", "2C": "<span class='arrow-down'>&#9660;</span> 3 days <br><span class='uncertainty'>(-5--1)</span>", "3C": ""},
     {"name": "Southern Asia", "1.5C": "<span class='arrow-down'>&#9660;</span> 2 days <br><span class='uncertainty'>(-9-+5)</span>", "2C": "<span class='arrow-down'>&#9660;</span> 3 days <br><span class='uncertainty'>(-8-+5)</span>", "3C": ""},
     {"name": "Southeast Asia", "1.5C": "<span class='arrow-down'>&#9660;</span> 2 days <br><span class='uncertainty'>(-4-+0)</span>", "2C": "<span class='arrow-down'>&#9660;</span> 1 day <br><span class='uncertainty'>(-3-+1)</span>", "3C": ""}
    ];

    var asiaRainfallIntensities = [
      {"name": "<span class='table-subtitle'>Rainfall intensity</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Northern Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 3% <br><span class='uncertainty'>(+1-+3)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 4% <br><span class='uncertainty'>(+2-+5)</span>", "3C": ""},
      {"name": "Tibet", "1.5C": "<span class='arrow-up'>&#9650;</span> 2% <br><span class='uncertainty'>(+1-+5)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 4% <br><span class='uncertainty'>(+2-+5)</span>", "3C": ""},
      {"name": "Central Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 3% <br><span class='uncertainty'>(+0-+6)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 3% <br><span class='uncertainty'>(+1-+6)</span>", "3C": ""},
      {"name": "Eastern Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 5% <br><span class='uncertainty'>(+4-+6)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 7% <br><span class='uncertainty'>(+5-+8)</span>", "3C": ""},
      {"name": "Southern Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 5% <br><span class='uncertainty'>(+4-+6)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 7% <br><span class='uncertainty'>(+6-+8)</span>", "3C": ""},
      {"name": "Southeast Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 4% <br><span class='uncertainty'>(+2-+6)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 6% <br><span class='uncertainty'>(+4-+8)</span>", "3C": ""},
      {"name": "<span class='table-subtitle'>Frequency of rainfall extremes over land</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Northern Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 20%", "2C": "<span class='arrow-up'>&#9650;</span> 42%", "3C": ""},
      {"name": "Western Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 10%", "2C": "<span class='arrow-up'>&#9650;</span> 22%", "3C": ""},
      {"name": "Central Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 19%", "2C": "<span class='arrow-up'>&#9650;</span> 40%", "3C": ""},
      {"name": "Tibetan Plateau", "1.5C": "<span class='arrow-up'>&#9650;</span> 20%", "2C": "<span class='arrow-up'>&#9650;</span> 42%", "3C": ""},
      {"name": "Eastern Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 22%", "2C": "<span class='arrow-up'>&#9650;</span> 46%", "3C": ""},
      {"name": "Southern Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 23%", "2C": "<span class='arrow-up'>&#9650;</span> 50%", "3C": ""},
      {"name": "Southeast Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 22%", "2C": "<span class='arrow-up'>&#9650;</span> 47%", "3C": ""}
    ];

    var asiaMonsoon = [
      {"name": "<span class='table-subtitle'>Indian monsoon extreme rainfall</span>", "1.5C": "<span class='arrow-up'>&#9650;</span> 20%", "2C": "<span class='arrow-up'>&#9650;</span> 25%", "3C": ""},
      {"name": "<br><span class='table-subtitle'>Asian monsoon</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "South Asia: summer average", "1.5C": "<span class='arrow-up'>&#9650;</span> 3%", "2C": "<span class='arrow-up'>&#9650;</span> 4%", "3C": ""},
      {"name": "South Asia: annual maximum", "1.5C": "<span class='arrow-up'>&#9650;</span> 6%", "2C": "<span class='arrow-up'>&#9650;</span> 10%", "3C": ""},
      {"name": "South Asia: decadal maximum", "1.5C": "<span class='arrow-up'>&#9650;</span> 8%", "2C": "<span class='arrow-up'>&#9650;</span> 12%", "3C": ""},
      {"name": "", "1.5C": "", "2C": "", "3C": ""},
      {"name": "East Asia: summer average", "1.5C": "<span class='arrow-up'>&#9650;</span> 8%", "2C": "<span class='arrow-up'>&#9650;</span> 9%", "3C": ""},
      {"name": "East Asia: annual maximum", "1.5C": "<span class='arrow-up'>&#9650;</span> 7%", "2C": "<span class='arrow-up'>&#9650;</span> 10%", "3C": ""},
      {"name": "East Asia: decadal maximum", "1.5C": "<span class='arrow-up'>&#9650;</span> 8%", "2C": "<span class='arrow-up'>&#9650;</span> 12%", "3C": ""},
      {"name": "<br><span class='table-subtitle'>Length of tropical rain season</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Eastern Asia", "1.5C": "<span class='arrow-down'>&#9660;</span> 8 days", "2C": "<span class='arrow-up'>&#9650;</span> 4 days", "3C": ""},
      {"name": "Southern Asia", "1.5C": "<span class='arrow-down'>&#9660;</span> 3 days", "2C": "<span class='arrow-down'>&#9660;</span> 2 days", "3C": ""},
      {"name": "Southeast Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 3 days", "2C": "<span class='arrow-up'>&#9650;</span> 5 days", "3C": ""}

    ];

    var asiaDrought = [
      {"name": "<span class='table-subtitle'>Average drought length (months)</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Russian Federation", "1.5C": "<span class='arrow-down'>&#9650;</span> 1", "2C": "<span class='arrow-down'>&#9660;</span> 1", "3C": "<span class='arrow-down'>&#9660;</span> 1"},
      {"name": "Western Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 4", "2C": "<span class='arrow-up'>&#9650;</span> 9", "3C": "<span class='arrow-up'>&#9650;</span> 20"},
      {"name": "Central Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 3", "2C": "<span class='arrow-up'>&#9650;</span> 5", "3C": "<span class='arrow-up'>&#9650;</span> 12"},
      {"name": "Eastern Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 1", "2C": "<span class='arrow-up'>&#9650;</span> 3", "3C": "<span class='arrow-up'>&#9650;</span> 9"},
      {"name": "Southern Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 1", "2C": "<span class='arrow-up'>&#9650;</span> 2", "3C": "<span class='arrow-up'>&#9650;</span> 7"},
      {"name": "Southeastern Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 2", "2C": "<span class='arrow-up'>&#9650;</span> 2", "3C": "<span class='arrow-up'>&#9650;</span> 4"},
      {"name": "<br><span class='table-subtitle'>Population exposed to water scarcity</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Northern Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 6m <br><span class='uncertainty'>(-11-+22)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 13m <br><span class='uncertainty'>(-1-+27)</span>", "3C": ""},
      {"name": "Western Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 13m <br><span class='uncertainty'>(+8-+17)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 16m <br><span class='uncertainty'>(+12-+20)</span>", "3C": ""},
      {"name": "Central Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 13m <br><span class='uncertainty'>(+7-+19)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 15m <br><span class='uncertainty'>(+9-+21)</span>", "3C": ""},
      {"name": "Tibetan Plateau", "1.5C": "<span class='arrow-up'>&#9650;</span> 3m <br><span class='uncertainty'>(+0-+6)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 5m <br><span class='uncertainty'>(+2-+7)</span>", "3C": ""},
      {"name": "Eastern Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 48m <br><span class='uncertainty'>(+44-+52)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 63m <br><span class='uncertainty'>(+49-+76)</span>", "3C": ""},
      {"name": "Southern Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 20m <br><span class='uncertainty'>(+11-+29)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 31m <br><span class='uncertainty'>(+14-+48)</span>", "3C": ""},
      {"name": "Southeastern Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 79m <br><span class='uncertainty'>(+62-+95)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 67m <br><span class='uncertainty'>(+31-+103)</span>", "3C": ""}
    ];

    var asiaStorms = [
      {"name": "<span class='table-subtitle'>Population affected by river flooding</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Bangladesh", "1.5C": "<span class='arrow-up'>&#9650;</span> 227%", "2C": "<span class='arrow-up'>&#9650;</span> 546%", "3C": "<span class='arrow-up'>&#9650;</span> 3214%"},
      {"name": "Bhutan", "1.5C": "<span class='arrow-up'>&#9650;</span> 261%", "2C": "<span class='arrow-up'>&#9650;</span> 436%", "3C": "<span class='arrow-up'>&#9650;</span> 2458%"},
      {"name": "India", "1.5C": "<span class='arrow-up'>&#9650;</span> 326%", "2C": "<span class='arrow-up'>&#9650;</span> 571%", "3C": "<span class='arrow-up'>&#9650;</span> 2409%"},
      {"name": "Kazakhstan", "1.5C": "<span class='arrow-up'>&#9650;</span> 163%", "2C": "<span class='arrow-up'>&#9650;</span> 251%", "3C": "<span class='arrow-up'>&#9650;</span> 496%"},
      {"name": "Kyrgyz Republic", "1.5C": "<span class='arrow-up'>&#9650;</span> 71%", "2C": "<span class='arrow-up'>&#9650;</span> 108%", "3C": "<span class='arrow-up'>&#9650;</span> 255%"},
      {"name": "Cambodia", "1.5C": "<span class='arrow-up'>&#9650;</span> 71%", "2C": "<span class='arrow-up'>&#9650;</span> 86%", "3C": "<span class='arrow-up'>&#9650;</span> 242%"},
      {"name": "Lao PDR", "1.5C": "<span class='arrow-up'>&#9650;</span> 135%", "2C": "<span class='arrow-up'>&#9650;</span> 161%", "3C": "<span class='arrow-up'>&#9650;</span> 378%"},
      {"name": "Myanmar", "1.5C": "<span class='arrow-up'>&#9650;</span> 47%", "2C": "<span class='arrow-up'>&#9650;</span> 89%", "3C": "<span class='arrow-up'>&#9650;</span> 301%"},
      {"name": "Russian Federation", "1.5C": "<span class='arrow-up'>&#9650;</span> 220%", "2C": "<span class='arrow-up'>&#9650;</span> 291%", "3C": "<span class='arrow-up'>&#9650;</span> 532%"},
      {"name": "Thailand", "1.5C": "<span class='arrow-up'>&#9650;</span> 129%", "2C": "<span class='arrow-up'>&#9650;</span> 167%", "3C": "<span class='arrow-up'>&#9650;</span> 936%"},
      {"name": "Tajikistan", "1.5C": "<span class='arrow-up'>&#9650;</span> 29%", "2C": "<span class='arrow-up'>&#9650;</span> 46%", "3C": "<span class='arrow-up'>&#9650;</span> 95%"},
      {"name": "Uzbekistan", "1.5C": "<span class='arrow-up'>&#9650;</span> 163%", "2C": "<span class='arrow-up'>&#9650;</span> 251%", "3C": "<span class='arrow-up'>&#9650;</span> 548%"},
      {"name": "Vietnam", "1.5C": "<span class='arrow-up'>&#9650;</span> 139%", "2C": "<span class='arrow-up'>&#9650;</span> 177%", "3C": "<span class='arrow-up'>&#9650;</span> 449%"},
    ];

    var asiaFlooding = [
      {"name": "<span class='table-subtitle'>Flooding in the Ganges-Brahmaputra-Meghna delta in Bangladesh</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Area", "1.5C": "980-1470km", "2C": "1150-1770km", "3C": "1620-2490km"},
      {"name": "% of region", "1.5C": "5-8%", "2C": "6-10%", "3C": "9-13%"},
      {"name": "Depth of flooding", "1.5C": "0.16-0.19m", "2C": "0.17-0.21m", "3C": "0.21-0.27m%"},
      {"name": "<span class='table-subtitle'>Frequency of extreme high flows in major river basins</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Ganges", "1.5C": "1-in-67 years <br><span class='uncertainty'>(63-71)</span>", "2C": "1-in-41 years <br><span class='uncertainty'>(38-44)</span>", "3C": ""},
      {"name": "Indus", "1.5C": "1-in-130 years <br><span class='uncertainty'>(124-136)</span>", "2C": "1-in-127 years <br><span class='uncertainty'>(121-133)</span>", "3C": ""},
      {"name": "Ob'", "1.5C": "1-in-54 years <br><span class='uncertainty'>(45-63)</span>", "2C": "1-in-48 years <br><span class='uncertainty'>(39-57)</span>", "3C": ""}
    ];

    var asiaCrops = [
      {"name": "<span class='table-subtitle'>Growing season length</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Northern Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 7 days <br><span class='uncertainty'>(+6-+11)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 14 days <br><span class='uncertainty'>(+12-+17)</span>", "3C": ""},
      {"name": "Tibet", "1.5C": "<span class='arrow-up'>&#9650;</span> 10 days <br><span class='uncertainty'>(+8-+13)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 17 days <br><span class='uncertainty'>(+14-+22)</span>", "3C": ""},
      {"name": "Eastern Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 9 days <br><span class='uncertainty'>(+7-+12)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 13 days <br><span class='uncertainty'>(+9-+15)</span>", "3C": ""},
      {"name": "Central Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 13 days <br><span class='uncertainty'>(+9-+15)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 18 days <br><span class='uncertainty'>(+14-+22)</span>", "3C": ""},
      {"name": "Southern Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 4 days <br><span class='uncertainty'>(+4-+4)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 6 days <br><span class='uncertainty'>(+5-+7)</span>", "3C": ""},
      {"name": "Southeastern Asia", "1.5C": "<span class='arrow-up'>&#9650;</span> 1 day <br><span class='uncertainty'>(+1-+1)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 1 day <br><span class='uncertainty'>(+1-+1)</span>", "3C": ""}
    ];

    var asiaNature = [
      {"name": "<span class='table-subtitle'>Change in area of \"sandy land\" in northern China</span>", "1.5C": "+16km2 per decade", "2C": "+20km2 per decade", "3C": ""}
    ];

    var asiaEconomy = [
      {"name": "<span class='table-subtitle'>Economic damages from river flooding</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Bangladesh", "1.5C": "<span class='arrow-up'>&#9650;</span> 245%", "2C": "<span class='arrow-up'>&#9650;</span> 585%", "3C": "<span class='arrow-up'>&#9650;</span> 2933%"},
      {"name": "Bhutan", "1.5C": "<span class='arrow-up'>&#9650;</span> 277%", "2C": "<span class='arrow-up'>&#9650;</span> 466%", "3C": "<span class='arrow-up'>&#9650;</span> 2704%"},
      {"name": "India", "1.5C": "<span class='arrow-up'>&#9650;</span> 358%", "2C": "<span class='arrow-up'>&#9650;</span> 546%", "3C": "<span class='arrow-up'>&#9650;</span> 2071%"},
      {"name": "Kazakhstan", "1.5C": "<span class='arrow-up'>&#9650;</span> 190%", "2C": "<span class='arrow-up'>&#9650;</span> 308%", "3C": "<span class='arrow-up'>&#9650;</span> 629%"},
      {"name": "Kyrgyz Republic", "1.5C": "<span class='arrow-up'>&#9650;</span> 101%", "2C": "<span class='arrow-up'>&#9650;</span> 141%", "3C": "<span class='arrow-up'>&#9650;</span> 348%"},
      {"name": "Cambodia", "1.5C": "<span class='arrow-up'>&#9650;</span> 70%", "2C": "<span class='arrow-up'>&#9650;</span> 88%", "3C": "<span class='arrow-up'>&#9650;</span> 235%"},
      {"name": "Lao PDR", "1.5C": "<span class='arrow-up'>&#9650;</span> 143%", "2C": "<span class='arrow-up'>&#9650;</span> 172%", "3C": "<span class='arrow-up'>&#9650;</span> 400%"},
      {"name": "Myanmar", "1.5C": "<span class='arrow-up'>&#9650;</span> 49%", "2C": "<span class='arrow-up'>&#9650;</span> 93%", "3C": "<span class='arrow-up'>&#9650;</span> 316%"},
      {"name": "Russian Federation", "1.5C": "<span class='arrow-up'>&#9650;</span> 223%", "2C": "<span class='arrow-up'>&#9650;</span> 302%", "3C": "<span class='arrow-up'>&#9650;</span> 641%"},
      {"name": "Thailand", "1.5C": "<span class='arrow-up'>&#9650;</span> 119%", "2C": "<span class='arrow-up'>&#9650;</span> 154%", "3C": "<span class='arrow-up'>&#9650;</span> 948%"},
      {"name": "Tajikistan", "1.5C": "<span class='arrow-up'>&#9650;</span> 42%", "2C": "<span class='arrow-up'>&#9650;</span> 64%", "3C": "<span class='arrow-up'>&#9650;</span> 124%"},
      {"name": "Uzbekistan", "1.5C": "<span class='arrow-up'>&#9650;</span> 80%", "2C": "<span class='arrow-up'>&#9650;</span> 114%", "3C": "<span class='arrow-up'>&#9650;</span> 218%"},
      {"name": "Vietnam", "1.5C": "<span class='arrow-up'>&#9650;</span> 148%", "2C": "<span class='arrow-up'>&#9650;</span> 190%", "3C": "<span class='arrow-up'>&#9650;</span> 474%"}
    ];
// China objects

    var chinaTemp = [
      {"name": "<span class='table-subtitle'>Temperature</span>", "1.5C": "", "2C": "", "3C": ""},
      {"name": "Annual temperature", "1.5C": "<span class='arrow-up'>&#9650;</span> 1.8C <br><span class='uncertainty'>(1.4-2.2)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 2.5C <br><span class='uncertainty'>(2.0-3.0)</span>", "3C": ""},
      {"name": "Spring temperature", "1.5C": "<span class='arrow-up'>&#9650;</span> 1.6C <br><span class='uncertainty'>(0.9-2.2)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 2.2C <br><span class='uncertainty'>(1.6-3.0)</span>", "3C": ""},
      {"name": "Summer temperature", "1.5C": "<span class='arrow-up'>&#9650;</span> 1.7C <br><span class='uncertainty'>(1.0-2.1)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 2.4C <br><span class='uncertainty'>(1.6-2.9)</span>", "3C": ""},
      {"name": "Autumn temperature", "1.5C": "<span class='arrow-up'>&#9650;</span> 1.9C <br><span class='uncertainty'>(1.5-2.5)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 2.6C <br><span class='uncertainty'>(2.2-3.3)</span>", "3C": ""},
      {"name": "Winter temperature", "1.5C": "<span class='arrow-up'>&#9650;</span> 2.1C <br><span class='uncertainty'>(1.3-2.9)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 2.9C <br><span class='uncertainty'>(2.0-3.6)</span>", "3C": ""}
    ];

    var chinaHeat = [
    {"name": "<span class='table-subtitle'>Heat events</span>", "1.5C": "", "2C": "", "3C": ""},
    {"name": "Likelihood of hot summer equivalent to 2013 in eastern China", "1.5C": "42%", "2C": "86%", "3C": ""},
    {"name": "Likelihood of hot spring equivalent to 2014 in northeastern China", "1.5C": "8%", "2C": "20%", "3C": ""},
    {"name": "<br><span class='table-subtitle'>Extreme maximum temperature events</span>", "1.5C": "", "2C": "", "3C": ""},
    {"name": "China", "1.5C": "<span class='arrow-up'>&#9650;</span> 39%", "2C": "<span class='arrow-up'>&#9650;</span> 48%", "3C": ""},
    {"name": "Northeast China", "1.5C": "<span class='arrow-up'>&#9650;</span> 33%", "2C": "<span class='arrow-up'>&#9650;</span> 99%", "3C": ""},
    {"name": "North China", "1.5C": "<span class='arrow-up'>&#9650;</span> 2%", "2C": "<span class='arrow-up'>&#9650;</span> 79%", "3C": ""},
    {"name": "East China", "1.5C": "<span class='arrow-up'>&#9650;</span> 13%", "2C": "<span class='arrow-up'>&#9650;</span> 24%", "3C": ""},
    {"name": "Central China", "1.5C": "<span class='arrow-up'>&#9650;</span> 56%", "2C": "<span class='arrow-up'>&#9650;</span> 39%", "3C": ""},
    {"name": "South China", "1.5C": "<span class='arrow-up'>&#9650;</span> 21%", "2C": "<span class='arrow-up'>&#9650;</span> 9%", "3C": ""},
    {"name": "Southwest China", "1.5C": "<span class='arrow-up'>&#9650;</span> 213%", "2C": "<span class='arrow-up'>&#9650;</span> 322%", "3C": ""},
    {"name": "Northwest China", "1.5C": "<span class='arrow-up'>&#9650;</span> 32%", "2C": "<span class='arrow-up'>&#9650;</span> 61%", "3C": ""}
    ];

    var chinaHeatExtremes = [
    {"name": "<span class='table-subtitle'>Extreme temperatures</span>", "1.5C": "", "2C": "", "3C": ""},
    {"name": "Annual hottest day", "1.5C": "<span class='arrow-up'>&#9650;</span> 1.0C", "2C": "<span class='arrow-up'>&#9650;</span> 1.6C", "3C": ""},
    {"name": "Annual coldest night", "1.5C": "<span class='arrow-up'>&#9650;</span> 1.1C", "2C": "<span class='arrow-up'>&#9650;</span> 1.8C", "3C": ""},
    {"name": "Annual warm days", "1.5C": "<span class='arrow-up'>&#9650;</span> 8%", "2C": "<span class='arrow-up'>&#9650;</span> 14%", "3C": ""},
    {"name": "Annual warm spell duration", "1.5C": "<span class='arrow-up'>&#9650;</span> 15 days", "2C": "<span class='arrow-up'>&#9650;</span> 30 days", "3C": ""}
    ];

    var chinaRain = [
    {"name": "<span class='table-subtitle'>Annual rainfall</span>", "1.5C": "", "2C": "", "3C": ""},
    {"name": "Annual rainfall", "1.5C": "<span class='arrow-up'>&#9650;</span> 4% <br><span class='uncertainty'>(-1-+11)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 6% <br><span class='uncertainty'>(+1-+14)</span>", "3C": ""},
    {"name": "Spring rainfall", "1.5C": "<span class='arrow-up'>&#9650;</span> 6% <br><span class='uncertainty'>(-2-+14)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 9% <br><span class='uncertainty'>(-1-+18)</span>", "3C": ""},
    {"name": "Summer rainfall", "1.5C": "<span class='arrow-up'>&#9650;</span> 2% <br><span class='uncertainty'>(-3-+9)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 4% <br><span class='uncertainty'>(-3-+13)</span>", "3C": ""},
    {"name": "Autumn rainfall", "1.5C": "<span class='arrow-up'>&#9650;</span> 2% <br><span class='uncertainty'>(-6-+18)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 4% <br><span class='uncertainty'>(-6-+22)</span>", "3C": ""},
    {"name": "Winter rainfall", "1.5C": "<span class='arrow-up'>&#9650;</span> 11% <br><span class='uncertainty'>(-3-+23)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 15% <br><span class='uncertainty'>(0-+31)</span>", "3C": ""},
    {"name": "", "1.5C": "", "2C": "", "3C": ""},
    {"name": "Frequency of days with trace rainfall", "1.5C": "<span class='arrow-down'>&#9660;</span> 6%", "2C": "<span class='arrow-down'>&#9660;</span> 8%", "3C": ""},
    {"name": "Frequency of days with light rainfall", "1.5C": "<span class='arrow-down'>&#9660;</span> 2%", "2C": "<span class='arrow-up'>&#9650;</span> 6%", "3C": ""},
    {"name": "Frequency of days with moderate rainfall", "1.5C": "<span class='arrow-up'>&#9650;</span> 2%", "2C": "<span class='arrow-up'>&#9650;</span> 5%", "3C": ""},
    {"name": "Frequency of days with heavy rainfall", "1.5C": "<span class='arrow-up'>&#9650;</span> 6%", "2C": "<span class='arrow-up'>&#9650;</span> 0%", "3C": ""},
    {"name": "Frequency of days with intense rainfall", "1.5C": "<span class='arrow-up'>&#9650;</span> 21%", "2C": "<span class='arrow-up'>&#9650;</span> 16%", "3C": ""},
    {"name": "<br><span class='table-subtitle'>Rainfall Extremes</span>", "1.5C": "", "2C": "", "3C": ""},
    {"name": "Annual number of extreme rainfall events", "1.5C": "<span class='arrow-up'>&#9650;</span> 20% <br><span class='uncertainty'>(+20-+24)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 26% <br><span class='uncertainty'>(+19-+37)</span>", "3C": ""},
    {"name": "Maximum 5-day rainfall total", "1.5C": "<span class='arrow-up'>&#9650;</span> 11% <br><span class='uncertainty'>(+9-+13)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 12% <br><span class='uncertainty'>(+6-+14)</span>", "3C": ""},
    {"name": "Consecutive dry days", "1.5C": "<span class='arrow-up'>&#9650;</span> 0% <br><span class='uncertainty'>(-3-+19)</span>", "2C": "<span class='arrow-down'>&#9660;</span> 5% <br><span class='uncertainty'>(-8-+18)</span>", "3C": ""}
    ];

    var chinaRainExtremes = [
    {"name": "<span class='table-subtitle'>Heavy rainfall</span>", "1.5C": "", "2C": "", "3C": ""},
    {"name": "Rainfall amount on a very wet day", "1.5C": "<span class='arrow-up'>&#9650;</span> 20%", "2C": "<span class='arrow-up'>&#9650;</span> 27%", "3C": "<span class='arrow-up'>&#9650;</span> 57%"},
    {"name": "Rainfall amount on an extremely wet day", "1.5C": "<span class='arrow-up'>&#9650;</span> 69%", "2C": "<span class='arrow-up'>&#9650;</span> 87%", "3C": "<span class='arrow-up'>&#9650;</span> 162%"}
    ];

    var chinaStorms = [
    {"name": "<span class='table-subtitle'>Population affected by river flooding</span>", "1.5C": "<span class='arrow-up'>&#9650;</span> 93%", "2C": "<span class='arrow-up'>&#9650;</span> 134%", "3C": "<span class='arrow-up'>&#9650;</span> 442%"},
    {"name": "", "1.5C": "", "2C": "", "3C": ""},
    {"name": "<span class='table-subtitle'>Likelihood of flooding equivalent to summer of 2010 in southeastern China</span>", "1.5C": "26%", "2C": "30%", "3C": ""},
    {"name": "", "1.5C": "", "2C": "", "3C": ""},
    {"name": "<span class='table-subtitle'>Frequency of extreme high flows in Yangtze river</span>", "1.5C": "1-in-58 years <br><span class='uncertainty'>(50-66)</span>", "2C": "1-in-26 years <br><span class='uncertainty'>(17-35)</span>", "3C": ""}

    ];

    var chinaCrops = [
    {"name": "<span class='table-subtitle'>Crop yields</span>", "1.5C": "", "2C": "", "3C": ""},
    {"name": "Wheat", "1.5C": "<span class='arrow-up'>&#9650;</span> 4%", "2C": "<span class='arrow-up'>&#9650;</span> 9%", "3C": ""},
    {"name": "Rice", "1.5C": "<span class='arrow-up'>&#9650;</span> 4%", "2C": "<span class='arrow-up'>&#9650;</span> 9%", "3C": ""},
    {"name": "Maize", "1.5C": "<span class='arrow-up'>&#9650;</span> 0%", "2C": "<span class='arrow-down'>&#9660;</span> 2%", "3C": ""}
    ];

    var chinaEconomy = [
    {"name": "<span class='table-subtitle'>Economic damages from river flooding</span>", "1.5C": "<span class='arrow-up'>&#9650;</span> 93%", "2C": "<span class='arrow-up'>&#9650;</span> 134%", "3C": "<span class='arrow-up'>&#9650;</span> 442%"},
    {"name": "", "1.5C": "", "2C": "", "3C": ""},
    {"name": "<span class='table-subtitle'>Economic damages caused by tropical cyclones</span>", "1.5C": "<span class='arrow-up'>&#9650;</span> $14-16m", "2C": "<span class='arrow-up'>&#9650;</span> $31-49m", "3C": ""},
    {"name": "<br><span class='table-subtitle'>Annual days of temperature-related weight restrictions on flights</span>", "1.5C": "", "2C": "", "3C": ""},
    {"name": "Beijing", "1.5C": "<span class='arrow-up'>&#9650;</span> 2", "2C": "<span class='arrow-up'>&#9650;</span> 3", "3C": ""},
    {"name": "Shanghai", "1.5C": "<span class='arrow-up'>&#9650;</span> 2", "2C": "<span class='arrow-up'>&#9650;</span> 9", "3C": ""},
    {"name": "Lasa", "1.5C": "<span class='arrow-up'>&#9650;</span> 18", "2C": "<span class='arrow-up'>&#9650;</span> 39", "3C": ""},
    {"name": "Urumqi", "1.5C": "<span class='arrow-side'>&#9664;&#9654;</span> 0", "2C": "<span class='arrow-up'>&#9650;</span> 1", "3C": ""}
    ];

//Australasia objects

    var ausOceans = [
    {"name": "<span class='table-subtitle'>Likelihood of another 2016 Coral Sea marine heatwave</span>", "1.5C": "64% <br><span class='uncertainty'>(53-76)</span>", "2C": "87% <br><span class='uncertainty'>(79-93)</span>", "3C": ""}
    ];

    var ausHeat = [
    {"name": "<span class='table-subtitle'>Extreme events</span>", "1.5C": "", "2C": "", "3C": ""},
    {"name": "Likelihood of another 2012-13 \"angry summer\" ", "1.5C": "57% <br><span class='uncertainty'>(50-65)</span>", "2C": "77% <br><span class='uncertainty'>(70-84)</span>", "3C": ""},
    {"name": "Likelihood of high temperatures seen in 2006 drought in SE Australia", "1.5C": "52% <br><span class='uncertainty'>(45-59)</span>", "2C": "74% <br><span class='uncertainty'>(67-81)</span>", "3C": ""},
    {"name": "<br><span class='table-subtitle'>Annual highest maximum temperature</span>", "1.5C": "", "2C": "", "3C": ""},
    {"name": "Northern Australia", "1.5C": "<span class='arrow-up'>&#9650;</span> 0.06C <br><span class='uncertainty'>(+0.4–+0.9)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 1.3C <br><span class='uncertainty'>(+0.8–+1.8)</span>", "3C": ""},
    {"name": "Southern Australia", "1.5C": "<span class='arrow-up'>&#9650;</span> 1.2C <br><span class='uncertainty'>(+0.3–+1.5)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 1.5C <br><span class='uncertainty'>(+1–+2.7)</span>", "3C": ""},
    {"name": "<br><span class='table-subtitle'>Warm spell duration</span>", "1.5C": "", "2C": "", "3C": ""},
    {"name": "Northern Australia", "1.5C": "<span class='arrow-up'>&#9650;</span> 14 days <br><span class='uncertainty'>(+9–+19)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 26 days <br><span class='uncertainty'>(+18-+36)</span>", "3C": ""},
    {"name": "Southern Australia", "1.5C": "<span class='arrow-up'>&#9650;</span> 6 days <br><span class='uncertainty'>(+4–+9)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 11 days <br><span class='uncertainty'>(+9-+14)</span>", "3C": ""}
    ];

    var ausHeatExtremes = [
    {"name": "<span class='table-subtitle'>Frequency of warm extremes over land</span>", "1.5C": "", "2C": "", "3C": ""},
    {"name": "Northern Australia", "1.5C": "<span class='arrow-up'>&#9650;</span> 149%", "2C": "<span class='arrow-up'>&#9650;</span> 406%", "3C": ""},
    {"name": "Southern Australia & New Zealand", "1.5C": "<span class='arrow-up'>&#9650;</span> 93%", "2C": "<span class='arrow-up'>&#9650;</span> 234%", "3C": ""},
    {"name": "<br><span class='table-subtitle'>Frequency of cold extremes over land</span>", "1.5C": "", "2C": "", "3C": ""},
    {"name": "Northern Australia", "1.5C": "<span class='arrow-down'>&#9660;</span> 61%", "2C": "<span class='arrow-down'>&#9660;</span> 89%", "3C": ""},
    {"name": "Southern Australia & New Zealand", "1.5C": "<span class='arrow-down'>&#9660;</span> 62%", "2C": "<span class='arrow-down'>&#9660;</span> 89%", "3C": ""}
    ];

    var ausRain = [
    {"name": "<span class='table-subtitle'>Length of tropical rain season (Northern Australia)</span>", "1.5C": "<span class='arrow-down'>&#9660;</span> 10 days", "2C": "<span class='arrow-down'>&#9660;</span> 7 days", "3C": ""},
    {"name": "<br><span class='table-subtitle'>Dry spell duration</span>", "1.5C": "", "2C": "", "3C": ""},
    {"name": "Northern Australia", "1.5C": "<span class='arrow-up'>&#9650;</span> 1 day <br><span class='uncertainty'>(-11–+7)</span>", "2C": "<span class='arrow-down'>&#9660;</span> 4 days <br><span class='uncertainty'>(-14-+8)</span>", "3C": ""},
    {"name": "Southern Australia", "1.5C": "<span class='arrow-up'>&#9650;</span> 0 days <br><span class='uncertainty'>(-3–+2)</span>", "2C": "<span class='arrow-down'>&#9660;</span> 1 day <br><span class='uncertainty'>(-3-+3)</span>", "3C": ""},
    {"name": "<br><span class='table-subtitle'>Rainfall intensity</span>", "1.5C": "", "2C": "", "3C": ""},
    {"name": "Northern Australia", "1.5C": "<span class='arrow-up'>&#9650;</span> 0% <br><span class='uncertainty'>(-3–+3)</span>", "2C": "<span class='arrow-down'>&#9660;</span> 1% <br><span class='uncertainty'>(-4-+4)</span>", "3C": ""},
    {"name": "Southern Australia", "1.5C": "<span class='arrow-up'>&#9650;</span> 1% <br><span class='uncertainty'>(-3–+2)</span>", "2C": "<span class='arrow-down'>&#9660;</span> 0% <br><span class='uncertainty'>(-2-+4)</span>", "3C": ""},
    {"name": "<br><span class='table-subtitle'>Frequency of rainfall extremes over land</span>", "1.5C": "", "2C": "", "3C": ""},
    {"name": "Northern Australia", "1.5C": "<span class='arrow-up'>&#9650;</span> 149%", "2C": "<span class='arrow-up'>&#9650;</span> 406%", "3C": ""},
    {"name": "Southern Australia & New Zealand", "1.5C": "<span class='arrow-up'>&#9650;</span> 93%", "2C": "<span class='arrow-up'>&#9650;</span> 234%", "3C": ""}
    ];

    var ausDrought = [
    {"name": "<span class='table-subtitle'>Likelihood of another 2006 drought in SE Australia</span>", "1.5C": "3% <br><span class='uncertainty'>(1-4)</span>", "2C": "3% <br><span class='uncertainty'>(1-4)</span>", "3C": ""},
    {"name": "", "1.5C": "", "2C": "", "3C": ""},
    {"name": "Average drought length in Oceania (months)", "1.5C": "<span class='arrow-up'>&#9650;</span> 2", "2C": "<span class='arrow-up'>&#9650;</span> 4", "3C": "<span class='arrow-up'>&#9650;</span> 11"},
    {"name": "", "1.5C": "", "2C": "", "3C": ""},
    {"name": "Northern Australia", "1.5C": "<span class='arrow-up'>&#9650;</span> 0m <br><span class='uncertainty'>(-1–+1)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 1m <br><span class='uncertainty'>(-0-+1)</span>", "3C": ""},
    {"name": "Southern Australia & New Zealand", "1.5C": "<span class='arrow-up'>&#9650;</span> 1m <br><span class='uncertainty'>(-1–+3)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 2m <br><span class='uncertainty'>(-0-+3)</span>", "3C": ""}
    ];

    var ausStorms = [
    {"name": "<span class='table-subtitle'>Frequency of extreme high river flows in the Murray-Darling</span>", "1.5C": "1-in-143 years <br><span class='uncertainty'>(138-148)</span>", "2C": "1-in-96 years <br><span class='uncertainty'>(91-101)</span>", "3C": ""}
    ];

    var ausCrops = [
    {"name": "Growing season length", "1.5C": "", "2C": "", "3C": ""},
    {"name": "Northern Australia", "1.5C": "<span class='arrow-up'>&#9650;</span> 0 days <br><span class='uncertainty'>(+0–+0)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 0 days <br><span class='uncertainty'>(+0-+0)</span>", "3C": ""},
    {"name": "Southern Australia & New Zealand", "1.5C": "<span class='arrow-up'>&#9650;</span> 1 day <br><span class='uncertainty'>(+1–+2)</span>", "2C": "<span class='arrow-up'>&#9650;</span> 1 day <br><span class='uncertainty'>(+1-+2)</span>", "3C": ""}
    ];


// TABLE OBJECTS END