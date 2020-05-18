$( document ).ready(function() {
    var scoreCounter = 0
    var currentLevel
    var action
    var switchClick
    var currentDifficulty

    //declaring blank level bests
    var bestStats = ["n/a", "n/a", "n/a", "n/a", "n/a", "n/a", "n/a", "n/a", "n/a", "n/a", "n/a", "n/a"]
    
    //transitioning between screens 
    var openGameContainer = function(){
        $(".levelselect-container").removeClass("active-container")
        $(".instructions-container").removeClass("active-container")
        $(".stats-container").removeClass("active-container")
        $(".game-container").addClass("active-container")
    }
    var selectActiveLevel = function(level){
        $(".level-1").removeClass("active-level")
        $(".level-2").removeClass("active-level")
        $(".level-3").removeClass("active-level")
        $(level).addClass("active-level")
    }

    var resetAll = function(){
        $(".bulb-lit").addClass("bulb-unlit")
        $(".bulb-unlit").removeClass("bulb-lit")
        scoreCounter = 0
    }

    //sets difficulty level, and makes relevant switch/bulb sets visible
    $(".easy-lvl").on("click", function() {
        resetAll()
        selectActiveLevel(".level-1")
        currentDifficulty = "1"
        openGameContainer()
    })
    $(".med-lvl").on("click", function() {
        resetAll()
        selectActiveLevel(".level-2")
        currentDifficulty = "2"
        openGameContainer()
    })
    $(".hard-lvl").on("click", function() {
        resetAll()
        selectActiveLevel(".level-3")
        currentDifficulty = "3"
        openGameContainer()
    })
    $("#reset-link").on("click", function(){
        resetAll()
    })

    
    var switchBuilder = function(currentLevel, switchClickedID){
    //returns array to action on each bulb after clicking a switch    
        switch(currentLevel) {
            case "1":
                switch(switchClickedID){
                    case "l1s1":
                        return ["on","null","on","null","null","off"]
                    case "l1s2":
                        return ["null","on","null","null","null","on"]
                    case "l1s3":
                        return ["null","null","off","on","null","null"]
                    case "l1s4":
                        return ["null","null","null","null","on","null"]
                }
            break;  
            case "2":
                switch(switchClickedID){
                    case "l1s1":
                        return ["on","null","on","off","null","flip"]
                    case "l1s2":
                        return ["flip","off","on","on","null","null"]
                    case "l1s3":
                        return ["null","on","null","flip","on","flip"]
                    case "l1s4":
                        return ["flip","null","null","null","null","on"]
                }
            break;
            case "3":
                switch(switchClickedID){
                    case "l1s1":
                        return ["on","on","null","flip","null","null"]
                    case "l1s2":
                        return ["null","on","flip","flip","null","null"]
                    case "l1s3":
                        return ["null","flip","null","flip","on","null"]
                    case "l1s4":
                        return ["flip","null","null","flip","null","flip"]
                }
            break
            case "4":
                switch(switchClickedID){
                    case "l1s1":
                        return ["flip","flip","null","on","flip","null"]
                    case "l1s2":
                        return ["on","off","off","null","off","on"]
                    case "l1s3":
                        return ["off","null","flip","null","on","off"]
                    case "l1s4":
                        return ["null","null","on","on","flip","flip"]
                }

            break;
            case "5":
                switch(switchClickedID){
                    case "l2s1":
                        return ["on","flip","on","off","null","on", "flip", "on", "null"]
                    case "l2s2":
                        return ["off","on","null","on","null","null", "off", "null", "on"]
                    case "l2s3":
                        return ["flip","null","null","null","on","null", "null", "on", "null"]
                    case "l2s4":
                        return ["null","null","null","off","null","on", "on", "null", "null"]
                    case "l2s5":
                        return ["null","flip","off","null","null","null", "flip", "off", "null"]
                    case "l2s6":
                        return ["null","flip","null","null","off","null", "null", "null", "on"]
                    case "l2s7":
                        return ["null","null","on","null","null","on", "off", "off", "null"]
                    case "l2s8":
                        return ["on","null","on","on","flip","null", "on", "on", "null"]
                }
            break;
            case "6":
                switch(switchClickedID){
                    case "l2s1":
                        return ["null",	"flip",	"flip",	"flip",	"on",	"on",	"null",	"null",	"null"]
                    case "l2s2":
                        return ["flip",	"null",	"off",	"off",	"flip",	"null",	"null",	"on",	"on"]
                    case "l2s3":
                        return ["on",	"off",	"on",	"flip",	"null",	"on",	"flip",	"null",	"null"]
                    case "l2s4":
                        return ["null",	"null",	"null",	"null",	"on",	"flip",	"null",	"on",	"on"]
                    case "l2s5":
                        return ["flip",	"null",	"flip",	"on",	"off",	"off",	"on",	"flip",	"null"]
                    case "l2s6":
                        return ["off",	"off",	"on",	"flip",	"on",	"null",	"null",	"null",	"null"]
                    case "l2s7":
                        return ["null",	"flip",	"on",	"null",	"off",	"on",	"null",	"on",	"null"]
                    case "l2s8":
                        return ["null",	"on",	"null",	"null",	"null",	"null",	"flip",	"off",	"off"]
                }
            break;
            case "7":
                switch(switchClickedID){
                    case "l2s1":
                        return ["on",	"null",	"on",	"on",	"on",	"flip",	"null",	"flip",	"flip"]
                    case "l2s2":
                        return ["off",	"null",	"on",	"flip",	"flip",	"on",	"flip",	"flip",	"null"]
                    case "l2s3":
                        return ["flip",	"on",	"off",	"flip",	"null",	"off",	"on",	"flip",	"off"]
                    case "l2s4":
                        return ["off",	"on",	"on",	"flip",	"flip",	"off",	"flip",	"flip",	"null"]
                    case "l2s5":
                        return ["off",	"flip",	"null",	"off",	"null",	"flip",	"off",	"null",	"off"]
                    case "l2s6":
                        return ["null",	"null",	"flip",	"on",	"null",	"on",	"on",	"on",	"flip"]
                    case "l2s7":
                        return ["flip",	"on",	"on",	"null",	"null",	"off",	"on",	"on",	"off"]
                    case "l2s8":
                        return ["on",	"off",	"null",	"null",	"off",	"null",	"on",	"flip",	"on"]
                }
            break;
            case "8":
                switch(switchClickedID){
                    case "l2s1":
                        return ["off",	"off",	"off",	"on",	"on",	"flip",	"null",	"on",	"flip"]
                    case "l2s2":
                        return ["null",	"null",	"on",	"null",	"flip",	"on",	"on",	"flip",	"null"]
                    case "l2s3":
                        return ["flip",	"on",	"off",	"flip",	"null",	"off",	"on",	"on",	"off"]
                    case "l2s4":
                        return ["flip",	"on",	"on",	"flip",	"flip",	"off",	"null",	"null",	"null"]
                    case "l2s5":
                        return ["off",	"flip",	"null",	"off",	"null",	"flip",	"off",	"null",	"off"]
                    case "l2s6":
                        return ["null",	"null",	"flip",	"on",	"null",	"off",	"flip",	"flip",	"flip"]
                    case "l2s7":
                        return ["flip",	"on",	"on",	"null",	"null",	"off",	"on",	"on",	"off"]
                    case "l2s8":
                        return ["on",	"off",	"null",	"null",	"off",	"null",	"on",	"flip",	"on"]
                }
            break;
            case "9":
                switch(switchClickedID){
                    case "l3s1":
                        return ["flip",	"on",	"on",	"flip",	"off",	"off",	"on",	"null",	"off",	"off",	"flip",	"flip",	"null",	"off",	"flip",	"on",	"off",	"off"]
                    case "l3s2":
                        return ["off",	"on",	"on",	"on",	"on",	"null",	"null",	"flip",	"null",	"on",	"on",	"on",	"null",	"on",	"on",	"off",	"off",	"null"]
                    case "l3s3":
                        return ["flip",	"off",	"off",	"on",	"null",	"flip",	"on",	"flip",	"off",	"flip",	"null",	"null",	"null",	"null",	"on",	"null",	"null",	"off"]
                    case "l3s4":
                        return ["off",	"off",	"flip",	"null",	"null",	"off",	"on",	"on",	"null",	"off",	"flip",	"off",	"null",	"flip",	"on",	"on",	"on",	"null"]
                    case "l3s5":
                        return ["on",	"null",	"off",	"null",	"flip",	"null",	"on",	"on",	"flip",	"flip",	"on",	"off",	"on",	"null",	"null",	"off",	"flip",	"on"]
                    case "l3s6":
                        return ["null",	"on",	"on",	"on",	"null",	"on",	"null",	"flip",	"off",	"flip",	"flip",	"on",	"off",	"null",	"off",	"on",	"flip",	"null"]
                    case "l3s7":
                        return ["null",	"off",	"on",	"null",	"on",	"null",	"flip",	"null",	"null",	"on",	"off",	"flip",	"off",	"on",	"flip",	"flip",	"off",	"off"]
                    case "l3s8":
                        return ["flip",	"on",	"on",	"on",	"off",	"null",	"on",	"off",	"flip",	"off",	"on",	"off",	"null",	"off",	"on",	"off",	"flip",	"on"]
                    case "l3s9":
                        return ["on",	"on",	"null",	"off",	"null",	"off",	"on",	"flip",	"on",	"null",	"off",	"off",	"off",	"flip",	"null",	"flip",	"null",	"flip"]
                    case "l3s10":
                        return ["null",	"null",	"flip",	"on",	"on",	"null",	"null",	"null",	"null",	"off",	"off",	"off",	"null",	"on",	"off",	"flip",	"on",	"flip"]
                    case "l3s11":
                        return ["off",	"null",	"off",	"off",	"null",	"on",	"on",	"on",	"flip",	"flip",	"off",	"on",	"off",	"on",	"on",	"on",	"flip",	"null"]
                    case "l3s12":
                        return ["null",	"on",	"null",	"null",	"null",	"on",	"flip",	"null",	"on",	"on",	"on",	"on",	"on",	"on",	"flip",	"null",	"on",	"flip"]
                }
            break;
            case "10":
                switch(switchClickedID){
                    case "l3s1":
                        return ["off",	"flip",	"off",	"on",	"off",	"null",	"flip",	"off",	"on",	"null",	"null",	"on",	"flip",	"null",	"off",	"flip",	"flip",	"on"]
                    case "l3s2":
                        return ["flip",	"flip",	"off",	"flip",	"flip",	"on",	"null",	"flip",	"flip",	"off",	"on",	"null",	"null",	"null",	"off",	"on",	"null",	"on"]
                    case "l3s3":
                        return ["off",	"flip",	"on",	"null",	"flip",	"on",	"on",	"flip",	"null",	"on",	"null",	"flip",	"off",	"on",	"on",	"flip",	"off",	"flip"]
                    case "l3s4":
                        return ["off",	"on",	"flip",	"on",	"on",	"null",	"on",	"null",	"off",	"flip",	"on",	"off",	"on",	"flip",	"off",	"on",	"null",	"on"]
                    case "l3s5":
                        return ["on",	"on",	"on",	"flip",	"null",	"flip",	"flip",	"null",	"flip",	"null",	"null",	"on",	"on",	"flip",	"on",	"null",	"flip",	"null"]
                    case "l3s6":
                        return ["on",	"flip",	"null",	"on",	"on",	"off",	"on",	"off",	"null",	"null",	"flip",	"null",	"off",	"flip",	"null",	"flip",	"flip",	"on"]
                    case "l3s7":
                        return ["on",	"flip",	"flip",	"on",	"null",	"on",	"on",	"null",	"off",	"null",	"null",	"off",	"off",	"null",	"flip",	"on",	"null",	"on"]
                    case "l3s8":
                        return ["on",	"flip",	"flip",	"flip",	"null",	"null",	"null",	"null",	"on",	"null",	"flip",	"flip",	"off",	"off",	"null",	"on",	"null",	"flip"]
                    case "l3s9":
                        return ["flip",	"flip",	"on",	"on",	"off",	"flip",	"off",	"null",	"null",	"on",	"off",	"on",	"off",	"on",	"off",	"null",	"off",	"null"]
                    case "l3s10":
                        return ["flip",	"flip",	"flip",	"flip",	"on",	"flip",	"flip",	"on",	"null",	"null",	"null",	"on",	"off",	"null",	"null",	"on",	"off",	"on"]
                    case "l3s11":
                        return ["on",	"on",	"flip",	"on",	"on",	"on",	"flip",	"on",	"off",	"on",	"on",	"flip",	"off",	"off",	"null",	"off",	"off",	"on"]
                    case "l3s12":
                        return ["flip",	"on",	"off",	"flip",	"on",	"on",	"null",	"on",	"flip",	"flip",	"off",	"off",	"on",	"off",	"flip",	"flip",	"null",	"off"]
                }
            break;
            case "11":
                switch(switchClickedID){
                    case "l3s1":
                        return ["on",	"null",	"on",	"null",	"on",	"on",	"flip",	"flip",	"off",	"on",	"off",	"null",	"null",	"flip",	"null",	"null",	"flip",	"on"]
                    case "l3s2":
                        return ["off",	"flip",	"null",	"on",	"null",	"on",	"off",	"off",	"off",	"on",	"flip",	"flip",	"off",	"on",	"off",	"null",	"null",	"null"]
                    case "l3s3":
                        return ["flip",	"flip",	"on",	"off",	"flip",	"null",	"flip",	"on",	"null",	"off",	"flip",	"flip",	"off",	"null",	"off",	"flip",	"null",	"flip"]
                    case "l3s4":
                        return ["null",	"on",	"off",	"flip",	"null",	"null",	"off",	"on",	"on",	"off",	"off",	"on",	"on",	"null",	"on",	"off",	"flip",	"off"]
                    case "l3s5":
                        return ["off",	"flip",	"on",	"flip",	"off",	"off",	"off",	"null",	"flip",	"null",	"null",	"flip",	"flip",	"null",	"null",	"null",	"flip",	"on"]
                    case "l3s6":
                        return ["on",	"off",	"off",	"flip",	"flip",	"on",	"flip",	"off",	"flip",	"null",	"on",	"off",	"on",	"null",	"off",	"off",	"null",	"null"]
                    case "l3s7":
                        return ["off",	"flip",	"off",	"off",	"null",	"on",	"flip",	"flip",	"on",	"on",	"off",	"off",	"null",	"off",	"flip",	"on",	"null",	"on"]
                    case "l3s8":
                        return ["null",	"on",	"on",	"null",	"on",	"null",	"flip",	"null",	"on",	"null",	"flip",	"on",	"null",	"on",	"flip",	"on",	"flip",	"null"]
                    case "l3s9":
                        return ["on",	"null",	"on",	"on",	"off",	"null",	"on",	"null",	"on",	"flip",	"off",	"flip",	"flip",	"off",	"off",	"null",	"flip",	"on"]
                    case "l3s10":
                        return ["off",	"off",	"flip",	"flip",	"off",	"flip",	"on",	"off",	"off",	"off",	"on",	"on",	"on",	"flip",	"off",	"off",	"on",	"null"]
                    case "l3s11":
                        return ["on",	"null",	"off",	"null",	"null",	"on",	"null",	"off",	"off",	"on",	"on",	"on",	"off",	"null",	"null",	"flip",	"null",	"on"]
                    case "l3s12":
                        return ["off",	"flip",	"flip",	"null",	"on",	"flip",	"flip",	"on",	"on",	"on",	"null",	"flip",	"off",	"off",	"off",	"null",	"off",	"on"]
                }
            break;
            case "12":
                switch(switchClickedID){
                    case "l3s1":
                        return ["null",	"on",	"flip",	"on",	"off",	"on",	"on",	"on",	"null",	"null",	"on",	"off",	"null",	"off",	"off",	"off",	"null",	"null"]
                    case "l3s2":
                        return ["null",	"null",	"on",	"off",	"on",	"flip",	"flip",	"off",	"on",	"null",	"on",	"null",	"off",	"flip",	"on",	"null",	"flip",	"null"]
                    case "l3s3":
                        return ["null",	"flip",	"on",	"on",	"flip",	"null",	"on",	"flip",	"on",	"null",	"on",	"flip",	"on",	"flip",	"null",	"on",	"flip",	"null"]
                    case "l3s4":
                        return ["flip",	"flip",	"flip",	"off",	"off",	"on",	"null",	"off",	"off",	"flip",	"on",	"null",	"off",	"null",	"on",	"on",	"on",	"flip"]
                    case "l3s5":
                        return ["null",	"off",	"off",	"off",	"null",	"off",	"on",	"flip",	"on",	"on",	"on",	"on",	"null",	"off",	"off",	"on",	"off",	"off"]
                    case "l3s6":
                        return ["flip",	"flip",	"null",	"flip",	"flip",	"on",	"off",	"on",	"on",	"null",	"flip",	"null",	"off",	"off",	"null",	"off",	"off",	"flip"]
                    case "l3s7":
                        return ["on",	"null",	"on",	"off",	"null",	"on",	"null",	"null",	"on",	"flip",	"off",	"on",	"on",	"on",	"null",	"on",	"on",	"flip"]
                    case "l3s8":
                        return ["on",	"null",	"off",	"on",	"off",	"on",	"on",	"null",	"off",	"on",	"off",	"flip",	"on",	"off",	"on",	"null",	"null",	"null"]
                    case "l3s9":
                        return ["null",	"flip",	"on",	"null",	"null",	"off",	"flip",	"off",	"flip",	"flip",	"off",	"null",	"off",	"on",	"on",	"off",	"on",	"on"]
                    case "l3s10":
                        return ["null",	"flip",	"null",	"on",	"off",	"off",	"off",	"null",	"on",	"null",	"flip",	"flip",	"on",	"null",	"flip",	"null",	"on",	"on"]
                    case "l3s11":
                        return ["on",	"flip",	"off",	"off",	"null",	"null",	"null",	"flip",	"on",	"on",	"flip",	"off",	"off",	"flip",	"null",	"off",	"off",	"on"]
                    case "l3s12":
                        return ["off",	"flip",	"null",	"null",	"null",	"null",	"off",	"flip",	"null",	"null",	"flip",	"on",	"null",	"flip",	"null",	"null",	"flip",	"flip"]
                }
            break;
        }
    }
    
    $(".diff-btn").on("click", function() {
        //when clicking a level in the select screen menu, takes the level difficulty and sets it globally
        currentLevel = $(this).children().text()

    })

    //navbar navigation links 
    $("#instructions-link").on("click", function() {
        $(".levelselect-container").removeClass("active-container")
        $(".stats-container").removeClass("active-container")
        $(".game-container").removeClass("active-container")
        $(".instructions-container").addClass("active-container")
    })
    $("#level-select-link").on("click", function() {
        $(".stats-container").removeClass("active-container")
        $(".instructions-container").removeClass("active-container")
        $(".game-container").removeClass("active-container")
        $(".levelselect-container").addClass("active-container")
    })
    $("#stats-link").on("click", function() {
        $(".levelselect-container").removeClass("active-container")
        $(".instructions-container").removeClass("active-container")
        $(".game-container").removeClass("active-container")
        $(".stats-container").addClass("active-container")
    })
    $(".exit-btn").on("click", function() {
        openGameContainer()
        //closing any screen returns you to game without reseting  
    })
    
//actions of flipping, turning on or off based on returned array from switch builder function

    var bulbFlip = function(bulbClass){
        if ($(bulbClass).children().hasClass("bulb-lit")){
            $(bulbClass).children().addClass("bulb-unlit")
            $(bulbClass).children().removeClass("bulb-lit")
        } else {
            $(bulbClass).children().addClass("bulb-lit")
            $(bulbClass).children().removeClass("bulb-unlit")
        }
    }
    var bulbOn = function(bulbClass){
        
        if ($(bulbClass).children().hasClass("bulb-lit")){
        } else {
            $(bulbClass).children().addClass("bulb-lit")
            $(bulbClass).children().removeClass("bulb-unlit")
        }
    }
    var bulbOff = function(bulbClass){
        if ($(bulbClass).children().hasClass("bulb-unlit")){
        } else {
            $(bulbClass).children().addClass("bulb-unlit")
            $(bulbClass).children().removeClass("bulb-lit")
        }
    }
    var bulbNull = function(bulbClass){}
    

    // Code Adapted From https://stackoverflow.com/questions/10578566/jquery-this-id-return-undefined8
    $(".switch").click(function (e) {
        scoreCounter = scoreCounter+1
        //sets switch click equal to id of switch clicked
        switchClick = e.target.id
        //inputs switch click into switch builder to return array of actions for the bulbs
        changeArray = switchBuilder(currentLevel, switchClick)
        
        //actions the changes using the switch array
        makeChanges(changeArray)
        //checks to see if level is complete
        checkIfComplete(currentDifficulty)
    });
    //end of adapted code
    function makeChanges(changeArray){
        //for each object in the array, takes relevant action on the relevant bulb
        for(let i = 0; i < changeArray.length ; i++){
            
            let bulbNumber = i + 1
            let bulbValue = `.l${currentDifficulty}b${bulbNumber}`
            whichChange(bulbValue,changeArray[i])
        }

    }
        

    function whichChange(bulbClass, action){
        switch(action){
            case "on":
                bulbOn(bulbClass)
            break
            case "off":
                bulbOff(bulbClass)
            break
            case "flip":
                bulbFlip(bulbClass)
            break
            case "null":
                bulbNull(bulbClass)
            break
        }
    }


    function checkIfComplete(currentDifficulty){
        let bulbCount
        switch(currentDifficulty){
            case("1"):
                bulbCount = 6
            break
            case("2"):
                bulbCount = 9
            break
            case("3"):
                bulbCount = 18
            break
        }
        
        var difficultyClass = `.level-${currentDifficulty}`
        //if total bulbs = total bulbs that are lit, level is complete, and winning message is displayed
        if ($(`${difficultyClass}.bulb-section`).find('.bulb-lit').length == $(`${difficultyClass}.bulb-section`).children().children().length){
            winningMessage(currentLevel, scoreCounter, currentDifficulty)
            
        }
    }
    function winningMessage(currentLevel, scoreCounter, currentDifficulty){

        //checks to see if score on current level is new best, and returns relevant winning message
        setStats(currentLevel, scoreCounter, bestStats)
        //after 1500 ms, returns to the home screen
        setTimeout(function(){$(".stats-container").removeClass("active-container")
        $(".instructions-container").removeClass("active-container")
        $(".game-container").removeClass("active-container")
        $(".levelselect-container").addClass("active-container")},1500)
        
    
    }
    var setStats = function(currentLevel, scoreToSet, bestStats){
        if(scoreToSet < bestStats[currentLevel-1] || bestStats[currentLevel-1] == "n/a"){
            bestStats[currentLevel -1] = scoreToSet
            $(`#l${currentLevel}-score`).text(scoreToSet)

            setTimeout(function(){alert(`Contgratulations, your new high score for level ${currentLevel} is ${scoreToSet}!`)},500)

        }
        else{
            setTimeout(function(){alert(`Well done on beating level ${currentLevel}, but you've not set a new high score.`)},500)
        }

        return bestStats
    }
})
