function calculatePrice(basePrice) {
    const discount = getDiscount(basePrice);
    const finalPrice = basePrice - discount;    
    return finalPrice;
}

const getDiscount = function(basePrice) {
    
    if (basePrice > 100) {
        return 20;
    } else {
        return 10;
    }
}
