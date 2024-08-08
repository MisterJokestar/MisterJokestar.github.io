

document.addEventListener("DOMContentLoaded", function() {
    let currentDate = document.querySelector("#currentDayTime");

    var backColor;
    var foreColor;
    var textColor;
    var linkColor;
  
    var nightToggled = localStorage.getItem("night-toggled");

    if (!nightToggled)
    {
        localStorage.setItem("night-toggled", "F");
        nightToggled = "F";
    }
    else
    {
        if (nightToggled == "T")
        {
            setNightColors();
        }
        else
        {
            setDayColors();
        }
        changeColors()
    }

    function toggleNight() 
    {
        if (nightToggled == "F")
        {
            localStorage.setItem("night-toggled", "T");
            nightToggled = "T";
            setNightColors();
        }
        else
        {
            localStorage.setItem("night-toggled", "F");
            nightToggled = "F";
            setDayColors();
        }
        changeColors();
    }

    function setNightColors()
    {
        backColor = "#232D3F";
        foreColor = "#0F0F0F";
        textColor = "#008170";
        linkColor = "#005B41";
    }

    function setDayColors()
    {
        backColor = "#615055";
        foreColor = "#CDD5D1";
        textColor = "black";
        linkColor = "#615055";
    }

    function changeColors()
    {
        document.getElementById("all").style.backgroundColor = backColor;
        document.body.style.backgroundColor = backColor;
        document.getElementById("main-back").style.backgroundColor = foreColor;
        document.getElementById("main-back").style.color = textColor;
        for (var element of document.getElementsByClassName("text"))
        {
            element.style.color = textColor;
        }
        for (var element of document.getElementsByClassName("text-link"))
        {
            element.style.color = linkColor
        }
    }

    const button = document.getElementById("night-toggle-b");
    button.addEventListener('click', toggleNight);
});