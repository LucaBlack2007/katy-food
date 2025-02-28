const types = [
    "Sushi",
    "Japanese",
    "Asian",
    "Chinese",
    "Fast Food",
    "Thai",
    "Ramen",
    "Vietnamese",
    "Pho",
    "American",
    "Wings",
    "Mexican",
    "Açaí",
    "Pizza",
    "Cafe",
    "Dessert",
    "Ice Cream",
    "Breakfast",
    "Italian"
];


const restaurants = {
    "Chipotle": {
        logo: "./logos/chipotle.png",
        price: 12.00,
        locations: [
            "1948 W Burnside St, Portland, OR 97209",
            "704 NE Weidler St, Portland, OR 97232",
            "9120 SE Washington St, Portland, OR 97216"
        ],
        type: ["Mexican"]
    }    
}

const addRestaurant = (restaurant, logo, price, locations, types) => 
    restaurants[restaurant] = {
        logo: `./logos/${logo}`,
        price: price,
        locations: locations,
        type: types
    }

addRestaurant("Bamboo Sushi", "bamboo_sushi.png", 25.00, [
    "310 SE 28th Ave, Portland, OR 97214",
    "836 NW 23rd Ave, Portland, OR 97210",
    "1409 NE Alberta St, Portland, OR 97211"
], ["Sushi", "Japanese", "Asian"]);

addRestaurant("Fire on the Mountain", "fire_on_the_mountain.png", 15.00, [
    "1708 E Burnside St, Portland, OR 97214",
    "4225 N Interstate Ave, Portland, OR 97217",
    "3443 NE 57th Ave, Portland, OR 97213"
], ["American", "Wings"]);

addRestaurant("Panda Express", "panda_express.png", 10.00, [
    "909 SW 6th Ave, Portland, OR 97204",
    "1460 NE Weidler St, Portland, OR 97232",
    "1012 Lloyd Center, Portland, OR 97232"
], ["Chinese", "Fast Food", "Asian"]);

addRestaurant("Thai Smile", "thai_smile.png", 12.00, [
    "3135 SW Moody Ave, Portland, OR 97239",
    "1325 NE Broadway St, Portland, OR 97232"
], ["Thai", "Asian"]);

addRestaurant("Thai Street", "thai_street.png", 12.00, [
    "121 SE 82nd Ave, Portland, OR 97216"
], ["Thai", "Asian"]);

addRestaurant("Taco Bell", "taco_bell.png", 8.00, [
    "325 NE 102nd Ave, Portland, OR 97220",
    "6116 NE Martin Luther King Jr Blvd, Portland, OR 97211",
    "10075 SW Barbur Blvd, Portland, OR 97219"
], ["Mexican", "Fast Food"]);

addRestaurant("Tita’s Juice Bar", "titas_juice_bar.png", 10.00, [
    "2838 SE Gladstone St, Portland, OR 97202"
], ["Açaí"]);

addRestaurant("Mis Tacones", "mis_tacones.png", 15.00, [
    "1670 NE Killingsworth St, Portland, OR 97211"
], ["Mexican"]);

addRestaurant("MOD Pizza", "mod_pizza.png", 10.00, [
    "1707 NW Glisan St, Portland, OR 97209",
    "7017 NE Sandy Blvd, Portland, OR 97213",
    "12196 SE Sunnyside Rd, Clackamas, OR 97015"
], ["Pizza"]);

addRestaurant("Dominos", "dominos.png", 10.00, [
    "5319 SW Westgate Dr, Portland, OR 97221",
    "1630 SE Bybee Blvd, Portland, OR 97202",
    "16265 NW Cornell Rd, Beaverton, OR 97006"
], ["Pizza", "Fast Food"]);

addRestaurant("Cafe Yumm", "cafe_yumm.png", 12.00, [
    "301 NW 10th Ave, Portland, OR 97209",
    "1400 NW Irving St, Portland, OR 97209"
], ["American"]);

addRestaurant("Panera", "panera.png", 12.00, [
    "7149 SW Nyberg St, Tualatin, OR 97062",
    "3435 SW Cedar Hills Blvd, Beaverton, OR 97005",
    "2314 Lloyd Center, Portland, OR 97232"
], ["Cafe"]);

addRestaurant("Arrivederci’s", "arrivedercis.png", 20.00, [
    "17023 SE McLoughlin Blvd, Milwaukie, OR 97267"
], ["Italian"]);

addRestaurant("Doe Donuts", "doe_donuts.png", 5.00, [
    "8201 SE Powell Blvd, Portland, OR 97266"
], ["Dessert"]);

addRestaurant("Papa Haydn", "papa_haydn.png", 15.00, [
    "701 NW 23rd Ave, Portland, OR 97210",
    "5829 SE Milwaukie Ave, Portland, OR 97202"
], ["Dessert"]);

addRestaurant("Dave’s Hot Chicken", "daves_hot_chicken.png", 12.00, [
    "710 SW 11th Ave, Portland, OR 97205",
    "11750 SE 82nd Ave, Happy Valley, OR 97086"
], ["American", "Fast Food"]);

addRestaurant("Off the Griddle", "off_the_griddle.png", 15.00, [
    "6526 SE Foster Rd, Portland, OR 97206"
], ["Breakfast"]);

addRestaurant("Kayo’s Ramen Bar", "kayos_ramen_bar.png", 15.00, [
    "3808 N Williams Ave, Portland, OR 97227"
], ["Ramen", "Japanese", "Asian"]);
    
addRestaurant("Cheese and Crack", "cheese_and_crack.png", 10.00, [
    "22 SE 28th Ave, Portland, OR 97214"
], ["Dessert", "Cafe"]);

addRestaurant("Pinolo Gelato", "pinolo_gelato.png", 5.00, [
    "3707 SE Division St, Portland, OR 97202",
    "1110 SE Alder St, Portland, OR 97214"
], ["Dessert", "Ice Cream"]);

addRestaurant("Turning Peel", "turning_peel.png", 15.00, [
    "5005 SE 72nd Ave, Portland, OR 97206"
], ["Pizza"]);

addRestaurant("No Name Pho", "no_name_pho.png", 12.00, [
    "8065 SE 13th Ave, Portland, OR 97202"
], ["Vietnamese", "Pho", "Asian"]);

addRestaurant("Fantino", "fantino.png", 20.00, [
    "600 SE Morrison St, Portland, OR 97214"
], ["Italian"]);



