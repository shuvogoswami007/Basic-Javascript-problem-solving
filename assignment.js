


function budgetCalculator(ram, sam, jodu){
    var clock = 50 * ram;
    var mobile = 100 * sam;
    var laptop = 500 * jodu;

    var total_price = clock + mobile + laptop;
    return total_price;
}
    var result = budgetCalculator(10, 5, 3);
    console.log(result);


