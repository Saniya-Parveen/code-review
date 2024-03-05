function calculate_price(basePrice) {
    console.log("Calculating final price...");
    let discount = getDiscount(basePrice)
const final_price = basePrice - discount
return final_price;
}

let getDiscount = function(basePrice) {
    let currentDiscount = 0;
    if (basePrice > 100) {
        return 20
    } else {
        return 10;
    }
}