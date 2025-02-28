const restaurants = {
    "Chipotle": {
        "logo": "./logos/chipotle.png",
        "average-price": 12.00,
        "locations": [
            "3582 SE Powell Blvd, Portland, OR 97202"
        ]
    }    
}

const addRestaurant = (restaurant, logo, price, locations) => 
    restaurants[restaurant] = {
        "logo": logo,
        "average-price": price,
        "locations": locations
    }

