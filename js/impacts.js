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
        text: "",
        info: "Relative to 2000; median and 5th-95th percentile range",
        background: "https://www.carbonbrief.org/wp-content/uploads/2018/04/Turtle-and-bleached-coral-on-Heron-Island-2.jpeg",
        map: "global",
        location: "Global"
    },{
        name: "marineheatwaves",
        title: "OCEANS",
        icon: "<img class='title-icon' src='../img/ocean.svg'>",
        text: "Lorem ipsum dolor sit amet, eligendi scriptorem et nam.",
        info: "Marine heatwaves: Relative to pre-industrial levels. Ocean pH: Relative to 1986-2005; median and 5th-95th percentile range. AMOC: Relative to pre-industrial levels.",
        background: "https://www.carbonbrief.org/wp-content/uploads/2018/01/C5T9H7-rainfall.jpg",
        map: "latin-america",
        location: "Latin America"
    },{
        name: "ice",
        title: "Economy",
        icon: "<i class='fas fa-dollar-sign'></i>",
        info: "Extra info 3 - Lorem ipsum dolor sit amet",
        background: "https://www.carbonbrief.org/wp-content/uploads/2015/07/Stock-wall-street-new-york-finance.jpg",
        map: "global",
        location: "Global"
    },{
        icon: "fas fa-info-circle",
        text: "Extra info here.<br><br>Data compiled by <a href='https://www.carbonbrief.org/author/robertmcsweeney'target='_blank'>Robert McSweeney.</a> Interactive by <a href='https://www.carbonbrief.org/author/rospearce' >Rosamund Pearce.</a> Licensed under <a href='https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode'>Creative Commons.</a>",
    }];