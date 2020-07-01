"use strict";

let foodOptions = [
    {type: "drive-thru", name: "McDonald's", specialty: "burgers"},
    {type: "drive-thru", name: "Dairy Queen", specialty: "burgers"},
    {type: "drive-thru", name: "Wendy\'s", specialty: "burgers"},
    {type: "drive-thru", name: "Jack in the Box", specialty: "burgers"},
    {type: "drive-thru", name: "Raising Cane\'s", specialty: "chicken"},
    {type: "drive-thru", name: "Arby\'s", specialty: "sandwiches"},
    {type: "drive-thru", name: "Bill Miller\'s BBQ", specialty: "BBQ"},
    {type: "drive-thru", name: "Sonic", specialty: "burgers"},
    {type: "drive-thru", name: "Whataburger", specialty: "burgers"},
    {type: "drive-thru", name: "Taco Bell", specialty: "burritos"},
    {type: "drive-thru", name: "Panda Express", specialty: "asian cuisine"},
    {type: "drive-thru", name: "Busch\'s Chicken", specialty: "chicken"},
    {type: "drive-thru", name: "Taco Cabana", specialty: "mexican-food"},
    {type: "drive-thru", name: "Churches Chicken", specialty: "chicken"},
    {type: "drive-thru", name: "Popeye\'s", specialty: "chicken"},
    {type: "drive-thru", name: "KFC", specialty: "chicken"},
    {type: "drive-thru", name: "Freddy\'s Frozen Custard", specialty: "burgers"},
    {type: "drive-thru", name: "Arby\'s", specialty: "sandwiches"},
    {type: "drive-thru", name: "Schlotzsky\'s", specialty: "sandwiches"},
    {type: "drive-thru", name: "Chick-fil-a", specialty: "chicken"},
    {type: "drive-thru", name: "Laguna Madre", specialty: "fish"},
    {type: "drive-thru", name: "Little Caesar\'s", specialty: "pizza"},
    {type: "drive-thru", name: "In-N-Out", specialty: "burgers"},
    {type: "drive-thru", name: "Carl\'s Jr.", specialty: "burgers"},
    {type: "drive-thru", name: "Las Palapas", specialty: "mexican-food"},
    {type: "drive-thru", name: "Taco Palenque", specialty: "mexican-food"},
    {type: "drive-thru", name: "Mama Margie's", specialty: "mexican-food"},
    {type: "order-to-go", name: "La Madeleine", specialty: "sandwiches"},
    {type: "order-to-go", name: "Pizza Hut", specialty: "pizza"},
    {type: "order-to-go", name: "Domino\'s", specialty: "pizza"},
    {type: "order-to-go", name: "Papa John\'s", specialty: "pizza"},
    {type: "order-to-go", name: "Wing Stop", specialty: "wings"},
    {type: "order-to-go", name: "Plucker\'s", specialty: "wings"},
    {type: "order-to-go", name: "Wing Daddy\'s", specialty: "wings"},
    {type: "order-to-go", name: "Goomba\'s Pizzeria", specialty: "pizza"},
    {type: "order-to-go", name: "Oblate Cafe", specialty: "mexican-food"},
    {type: "order-to-go", name: "Panchito\'s", specialty: "mexican-food"},
    {type: "order-to-go", name: "Rusty Bucket\'s Jaw-Smacking BBQ", specialty: "BBQ"},
    {type: "order-to-go", name: "Rudy's BBQ", specialty: "BBQ"},
    {type: "order-to-go", name: "Freebird's", specialty: "burritos"},
    {type: "order-to-go", name: "Chipotle", specialty: "burritos"},
    {type: "order-to-go", name: "Blanco BBQ", specialty: "BBQ"},
    {type: "dine-in", name: "Chili's Grill & Bar", specialty: "bar-grill"},
    {type: "dine-in", name: "J. Alexander's Restaurant", specialty: "bar-grill"},
    {type: "dine-in", name: "Cheddar's Scratch Kitchen", specialty: "bar-grill"},
    {type: "dine-in", name: "Twin Peaks", specialty: "bar-grill"},
    {type: "dine-in", name: "Walk-Ons", specialty: "wings"},
    {type: "dine-in", name: "Guillermo's", specialty: "mexican-food"},
    {type: "dine-in", name: "Applebee's", specialty: "bar-grill"},
    {type: "dine-in", name: "T.G.I. Friday's", specialty: "bar-grill"},
    {type: "dine-in", name: "Kona Grill", specialty: "asian cuisine"},
    {type: "dine-in", name: "Republic of Texas", specialty: "bar-grill"},
    {type: "dine-in", name: "Iron Cactus Mexican Restaurant and Margarita Bar", specialty: "mexican-food"},
    {type: "dine-in", name: "Paesanos Rivervalk", specialty: "italian"},
    {type: "dine-in", name: "Olive Garden", specialty: "italian"},
    {type: "dine-in", name: "Macaroni Grill", specialty: "italian"},
    {type: "dine-in", name: "Luciano's Neighborhood Pizzeria", specialty: "italian"},
    {type: "dine-in", name: "Acenar Mexican Restaurant", specialty: "mexican-food"},
    {type: "dine-in", name: "Bourbon Streen Seafood Kitchen Downtown", specialty: "seafood"},
    {type: "dine-in", name: "Red Lobster", specialty: "seafood"},
    {type: "dine-in", name: "Sea Island", specialty: "seafood"},
    {type: "dine-in", name: "Ostra Restaurant", specialty: "seafood"},
    {type: "dine-in", name: "Tomatillo's", specialty: "mexican-food"},
    {type: "dine-in", name: "Rosario's", specialty: "mexican-food"},
    {type: "dine-in", name: "Dick's Last Resort", specialty: "bar-grill"},
    {type: "dine-in", name: "Jim's", specialty: "breakfast"},
    {type: "dine-in", name: "Denny's", specialty: "breakfast"},
    {type: "dine-in", name: "IHOP", specialty: "breakfast"},
    {type: "dine-in", name: "Waffle House", specialty: "breakfast"},
    {type: "dine-in", name: "Fogo de Chao Brazilian Steakhouse", specialty: "mexican-food"},
    {type: "dine-in", name: "Mi Tierra Cafe y Panaderia", specialty: "mexican-food"},
    {type: "dine-in", name: "Pico De Gallo", specialty: "mexican-food"},
    {type: "dine-in", name: "Margaritaville", specialty: "seafood"},
    {type: "dine-in", name: "Hooters", specialty: "wings"}
];

let dessertOptions = [
    {name: "Dairy Queen"},
    {name: "Sonic"},
    {name: "Starbucks"},
    {name: "Tiff's Treats"},
    {name: "Marble Slab"},
    {name: "Cold Stone Creamery"},
    {name: "Amy's Ice Cream"},
    {name: "La Panaderia"},
    {name: "Aloha Ice"},
    {name: "Las Nieves"},
    {name: "Los Trejos Fruteria"},
    {name: "Baskin Robbins"},
    {name: "Yogurt Zone"},
    {name: "Dunkin' Donuts"},
    {name: "Krispy Kreme Donuts"},
    {name: "Shipley's Donuts"},
    {name: "TCBY"},
    {name: "ChurroStar"},
    {name: "Arctic Ape Desserts"},
    {name: "Lulu's Classic"},
    {name: "Cheesecake Factory"},
    {name: "Bird Bakery"},
    {name: "Bakery Lorraine"},
    {name: "Sweet Secrets Cake Shop"},
    {name: "La Chiquita Paleteria y Neveria"},
];

var type = document.getElementById('type').value;
var specialty = document.getElementById('specialty').value;



// FUNCTIONS TO RENDER FOOD SPECS

// General Random Option
function randomFoodOption(foodArray) {
    foodArray = foodOptions[Math.floor(Math.random() * foodOptions.length)];
    return foodArray.name;
}

function randomDessertOption(dessertArray) {
    dessertArray = dessertOptions[Math.floor(Math.random() * dessertOptions.length)];
    return dessertArray.name;
}


// DOM MANIPULATION

// ====GENERATE RANDOM FOOD, NO SPECS=====

function generateRandomFood(){
    document.getElementById('randomFoodButton').addEventListener('click', function () {
        document.getElementById('results').innerHTML = `<br><br><h2 class="center">How about... </h2><h1 class="center">${randomFoodOption()}!</h1>`;
    })
}
generateRandomFood();

// =====GENERATE RANDOM BASED ON USER INPUT=====
document.getElementById('narrow-search').addEventListener('click', function () {
    var type = document.getElementById('type').value;
    var specialty = document.getElementById('specialty').value;
    var result = foodOptions.filter(function (food) {
        if (specialty === "any"){
            return food.type === type
        } else {
            return food.type === type && food.specialty === specialty
        }
    });
    console.log(result);
    document.getElementById('results').innerHTML = `<br><br><h2 class="center">Based on your search, how about:</h2><h1 class="center">${result[Math.floor(Math.random() * result.length)].name}</h1>`;
});

// ======POPULATE INPUT FIELD FOR TYPE OF FOOD BASED ON CATEGORY=======


document.getElementById('getDessert').addEventListener('click', function(){
    document.getElementById('results').innerHTML = `<br><br><h2 class="center">How about... </h2><h1 class="center">${randomDessertOption()} for dessert?</h1>`;
});