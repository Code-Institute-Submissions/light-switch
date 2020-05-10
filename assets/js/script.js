$( document ).ready(function() {
    var scoreCounter = 0
    var currentLevel
    var action
    var switchClick
    var currentDifficulty

    //declaring level bests
    var bestStats = ["n/a", "n/a", "n/a", "n/a", "n/a", "n/a", "n/a", "n/a", "n/a", "n/a", "n/a", "n/a"]
    

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
        
        switch(currentLevel) {
            case "1":
                case "l1s1":
                        return ["on","on","on","on","on","on"]
                    case "l1s2":
                        return ["on","on","on","on","on","on"]
                    case "l1s3":
                        return ["on","on","on","on","on","on"]
                    case "l1s4":
                        return ["on","on","on","on","on","on"]
            break;  
            case "2":

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

            break;
        }
    }
    $(".diff-btn").on("click", function() {
        currentLevel = $(this).children().text()

    })
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
        
    })
    
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
        switchClick = e.target.id
        changeArray = switchBuilder(currentLevel, switchClick)
        makeChanges(changeArray)
        checkIfComplete(currentDifficulty)
    });
    //end of adapted code
    function makeChanges(changeArray){
        
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
        
        if ($(`${difficultyClass}.bulb-section`).find('.bulb-lit').length == $(`${difficultyClass}.bulb-section`).children().children().length){
            winningMessage(currentLevel, scoreCounter, currentDifficulty)
            
        }
    }
    function winningMessage(currentLevel, scoreCounter, currentDifficulty){
        setStats(currentLevel, scoreCounter, bestStats)
        alert(bestStats)
    
    }
    var setStats = function(currentLevel, scoreToSet, bestStats){
        if(scoreToSet < bestStats[currentLevel-1] || bestStats[currentLevel-1] == "n/a"){
            bestStats[currentLevel -1] = scoreToSet
        }
        return bestStats
    }
})
