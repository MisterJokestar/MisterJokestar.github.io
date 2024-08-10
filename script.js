

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
        var all = document.getElementById("all");
        if (all != null)
        {
            all.style.backgroundColor = backColor;
        }
        document.body.style.backgroundColor = backColor;
        var mainBack = document.getElementById("main-back");
        if (mainBack != null)
        {
            mainBack.style.backgroundColor = foreColor;
            mainBack.style.color = textColor;
        }
        var textArray = document.getElementsByClassName("text");
        if (textArray != null)
        {
            for (var element of textArray)
            {
                element.style.color = textColor;
            }
        }
        var textCustomArray = document.getElementsByClassName("customfont");
        if (textArray != null)
        {
            for (var element of textArray)
            {
                element.style.color = textColor;
            }
        }
        var textLinkArray = document.getElementsByClassName("text-link");
        if (textLinkArray != null)
        {
            for (var element of textLinkArray)
            {
                element.style.color = linkColor;
            }
        }
    }

    const button = document.getElementById("night-toggle-b");
    button.addEventListener('click', toggleNight);
});