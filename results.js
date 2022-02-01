let toxPlants = [];
let nonToxPlants = [];

//Runs onload and populates the list of plants.
function populatePlants() {
    //Sorts the plants into toxic and nontoxic
    let plants = pullJSON().plants;
    console.log(plants)
    for (let i = 0; i < plants.length; i++) {
        if (plants[i].toxic == true) {
            toxPlants.push(plants[i]);
        }
        else {
            nonToxPlants.push(plants[i]);
        }
    }
}

// function for onclick event for toxic and non toxic 
function searchToxic() {
    let resultsPage = document.getElementById('resultsPage');
    resultsPage.style = "";
    this.removePreviousResults();
    this.displayresults(toxPlants);
}

function searchNonToxic() {
    let resultsPage = document.getElementById('resultsPage');
    resultsPage.style = "";
    this.removePreviousResults();
    this.displayresults(nonToxPlants);
}

function removePreviousResults() {
    let previousImages = document.querySelectorAll('.cardImg');
    previousImages.forEach(
        image => image.remove()
    );
}

function displayresults(plants) {
    let cardSlot = document.querySelectorAll('.grid-item');
    for (let i = 0; i < plants.length; i++) {
        let card = document.createElement("img");
        card.classList.add("cardImg")
        console.log(cardSlot.length)
        card.src = `graphics/plant-cards/${plants[i].name}.png`
        cardSlot[i].innerHTML=card.outerHTML;
    }
}

function pullJSON() {
    //This will call the JSON File
    return {
        "plants": [
            {
                "name": "Pothos",
                "toxic": true
            },
            {
                "name": "Monstera",
                "toxic": true
            },
            {
                "name": "Mini_Monstera",
                "toxic": true
            },
            {
                "name": "Snake_Plant",
                "toxic": true
            },
            {
                "name": "Aloe_Vera",
                "toxic": true
            },
            {
                "name": "Adasons_Monstera",
                "toxic": true
            },
            {
                "name": "Philodendron_Cordatum",
                "toxic": true
            },
            {
                "name": "String_of_Pearls",
                "toxic": true
            },
            {
                "name": "Cat_Grass",
                "toxic": false
            },

            {
                "name": "Pilea_Peperomia",
                "toxic": false
            },
            {
                "name": "Spider_Plant",
                "toxic": false
            },

            {
                "name": "String_of_Hearts",
                "toxic": false
            },
            {
                "name": "Burros_Tail",
                "toxic": false
            },
            {
                "name": "Parlor_Palm",
                "toxic": false
            },
            {
                "name":"Christmas_Cactus",
                "toxic": false
            }

        ]
    }
}