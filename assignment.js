function kilometerToMeter(kilo){
    var meter = kilo * 1000;

    if(meter < 0){
        console.log("undefined");
    }
    else {
        return meter;
    }
}
    var result = kilometerToMeter(-15);
    console.log(result);


function budgetCalculator(ram, sam, jodu) //ram = clock , sam = mobile , jodu = laptop//
{
    var clock = 50 * ram;
    var mobile = 100 * sam;
    var laptop = 500 * jodu;

    var total_price = clock + mobile + laptop;
    return total_price;
}
    var result = budgetCalculator(10, 5, 3);
    console.log(result);



    function hotelCost(number){
    if(number<=10){
    var cost = number * 100;
    return cost;
    }
    else if(number>10 && number<=20){
    var cost2 = ((number-10) * 80) + (10 * 100);
    return cost2;
    }
    else{
    var cost3 = ((number - 20) * 50) + (10 * 80) + (10 * 100);
    return cost3;
    }
}   
    var result = hotelCost(25);
    console.log(result);