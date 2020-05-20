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

        //sets switch c lick equal to id of switch clicked
        switchClick = e.target.id

        //removes dark red switch styling form all to prevent overlap
        $(".switch-pressed").removeClass("switch-pressed")
        //adds dark red switch styling to switch clicked
        
        $(`#${switchClick}`).addClass("switch-pressed")
        //inputs switch click into switch builder to return array of actions for the bulbs
        changeArray = switchBuilder(currentLevel, switchClick)
        
        //actions the changes using the switch array
        makeChanges(changeArray)
        //checks to see if level is complete
        checkIfComplete(currentDifficulty)
        //removes dark red switch styling
        setTimeout(function(){$(`#${switchClick}`).removeClass("switch-pressed")}, 200)
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
