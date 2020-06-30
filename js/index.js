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
    {type: "drive-thru", name: "Taco Cabana", specialty: "mexican food"},
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
    {type: "drive-thru", name: "Las Palapas", specialty: "mexican food"},
    {type: "drive-thru", name: "Taco Palenque", specialty: "tacos"},
    {type: "drive-thru", name: "Mama Margie's", specialty: "mexican food"},
    {type: "order-to-go", name: "La Madeleine", specialty: "sandwiches"},
    {type: "order-to-go", name: "Pizza Hut", specialty: "pizza", phoneNumber: ""},
    {type: "order-to-go", name: "Domino\'s", specialty: "pizza", phoneNumber: ""},
    {type: "order-to-go", name: "Papa John\'s", specialty: "pizza", phoneNumber: ""},
    {type: "order-to-go", name: "Wing Stop", specialty: "wings", phoneNumber: ""},
    {type: "order-to-go", name: "Plucker\'s", specialty: "wings", phoneNumber: ""},
    {type: "order-to-go", name: "Wing Daddy\'s", specialty: "wings", phoneNumber: ""},
    {type: "order-to-go", name: "Goomba\'s Pizzeria", specialty: "pizza", phoneNumber: ""},
    {type: "order-to-go", name: "Oblate Cafe", specialty: "mexican food", phoneNumber: ""},
    {type: "order-to-go", name: "Panchito\'s", specialty: "mexican food", phoneNumber: ""},
    {type: "order-to-go", name: "Rusty Bucket\'s Jaw-Smacking BBQ", specialty: "BBQ", phoneNumber: ""},
    {type: "order-to-go", name: "Rudy's BBQ", specialty: "BBQ", phoneNumber: ""},
    {type: "order-to-go", name: "Freebird's", specialty: "burritos", phoneNumber: ""},
    {type: "order-to-go", name: "Chipotle", specialty: "burritos", phoneNumber: ""},
    {type: "order-to-go", name: "Blanco BBQ", specialty: "BBQ", phoneNumber: ""},
    {type: "dine-in", name: "Chili's Grill & Bar", specialty: "general", phoneNumber: ""},
    {type: "dine-in", name: "J. Alexander's Restaurant", specialty: "general", phoneNumber: ""},
    {type: "dine-in", name: "Cheddar's Scratch Kitchen", specialty: "general", phoneNumber: ""},
    {type: "dine-in", name: "Twin Peaks", specialty: "general", phoneNumber: ""},
    {type: "dine-in", name: "Walk-Ons", specialty: "wings", phoneNumber: ""},
    {type: "dine-in", name: "Guillermo's", specialty: "mexican-food", phoneNumber: ""},
    {type: "dine-in", name: "Applebee's", specialty: "general", phoneNumber: ""},
    {type: "dine-in", name: "T.G.I. Friday's", specialty: "general", phoneNumber: ""},
    {type: "dine-in", name: "Kona Grill", specialty: "asian cuisine", phoneNumber: ""},
    {type: "dine-in", name: "Republic of Texas", specialty: "general", phoneNumber: ""},
    {type: "dine-in", name: "Iron Cactus Mexican Restaurant and Margarita Bar", specialty: "general", phoneNumber: ""},
    {type: "dine-in", name: "Paesanos Rivervalk", specialty: "italian", phoneNumber: ""},
    {type: "dine-in", name: "Olive Garden", specialty: "italian", phoneNumber: ""},
    {type: "dine-in", name: "Macaroni Grill", specialty: "italian", phoneNumber: ""},
    {type: "dine-in", name: "Luciano's Neighborhood Pizzeria", specialty: "italian", phoneNumber: ""},
    {type: "dine-in", name: "Acenar Mexican Restaurant", specialty: "mexican-food", phoneNumber: ""},
    {type: "dine-in", name: "Bourbon Streen Seafood Kitchen Downtown", specialty: "seafood", phoneNumber: ""},
    {type: "dine-in", name: "Red Lobster", specialty: "seafood", phoneNumber: ""},
    {type: "dine-in", name: "Sea Island", specialty: "seafood", phoneNumber: ""},
    {type: "dine-in", name: "Ostra Restaurant", specialty: "seafood", phoneNumber: ""},
    {type: "dine-in", name: "Tomatillo's", specialty: "mexican-food", phoneNumber: ""},
    {type: "dine-in", name: "Rosario's", specialty: "tacos", phoneNumber: ""},
    {type: "dine-in", name: "Dick's Last Resort", specialty: "general", phoneNumber: ""},
    {type: "dine-in", name: "Jim's", specialty: "breakfast", phoneNumber: ""},
    {type: "dine-in", name: "Denny's", specialty: "breakfast", phoneNumber: ""},
    {type: "dine-in", name: "IHOP", specialty: "breakfast", phoneNumber: ""},
    {type: "dine-in", name: "Waffle House", specialty: "breakfast", phoneNumber: ""},
    {type: "dine-in", name: "Fogo de Chao Brazilian Steakhouse", specialty: "tacos", phoneNumber: ""},
    {type: "dine-in", name: "Mi Tierra Cafe y Panaderia", specialty: "mexican-food", phoneNumber: ""},
    {type: "dine-in", name: "Pico De Gallo", specialty: "mexican-food", phoneNumber: ""},
    {type: "dine-in", name: "Margaritaville", specialty: "seafood", phoneNumber: ""},
    {type: "dine-in", name: "Hooters", specialty: "wings", phoneNumber: ""}
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
document.getElementById('randomFoodButton').addEventListener('click', function () {
    document.getElementById('results').innerHTML = `<br><br><h2>How about... </h2><h1>${randomFoodOption()}!</h1>`;
});

// =====GENERATE RANDOM FAST FOOD BASED ON USER INPUT=====
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
    document.getElementById('results').innerHTML = `<br><br><h2>Based on your search, how about:</h2><h1>${result[Math.floor(Math.random() * result.length)].name}</h1>`;
});

document.getElementById('getDessert').addEventListener('click', function(){
    document.getElementById('dessertResults').innerHTML = `<br><br><h2>How about... </h2><h1>${randomDessertOption()}!</h1>`;
});