/*I believe that you should pay closer attention to code indentation and semicolon consistency*/

/* JavaScript guideline suggest using camel case for variable and function name eg:calculatePrice, 
finalPrice*/
function calculate_price(basePrice) {
    /* lets not include console.log statement in production code*/
    console.log("Calculating final price...");
    /* declare getDiscount with const to prevent reassignment*/
    let discount = getDiscount(basePrice)
const final_price = basePrice - discount
return final_price;
}
/* declare getDiscount with const to prevent reassignment*/
let getDiscount = function(basePrice) {
    /* this varaible is unused please remove it*/
    let currentDiscount = 0;
    if (basePrice > 100) {
        return 20
    } else {
        return 10;
    }
}
