(function() {
    //--- Hero Panel Cross Fader ---
    var heroPanels = [
        {"element":$("#hero-panel-chess"), "bgcolor":"#ddd"},
        {"element":$("#hero-panel-jumbled"), "bgcolor":"#f0959e"},
        {"element":$("#hero-panel-paint"), "bgcolor":"#a2c64c"},
        {"element":$("#hero-panel-sudoku"), "bgcolor":"#00a3d9"},
    ];

    var currentPanelIndex = Math.floor(Math.random() * heroPanels.length);
    var fadeInterval = null;

    //heroPanels[currentPanelIndex]["element"].fadeIn(2000);
    heroPanels[curentPanelIndex]["element"].removeClass("hide");
    $("#hero-container").css("background-color", heroPanels[currentPanelIndex]["bgcolor"]);

    function crossFade(){
        heroPanels[currentPanelIndex]["element"].stop(true, true).fadeOut(2000);
        currentPanelIndex = (currentPanelIndex + 1) % heroPanels.length;
        setTimeout(function () {
            $("#hero-container").css("background-color", heroPanels[currentPanelIndex]["bgcolor"]);
            heroPanels[currentPanelIndex]["element"].stop(true, true).fadeIn(2000);
        }, 1000);
    }

    function timedCrossFade() {
        fadeInterval = setInterval(crossFade, 8000);
    }

    //timedCrossFade();
}());
