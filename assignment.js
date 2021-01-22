//1st problem :

function kilometerToMeter(kilo){
    var meter = kilo * 1000;

    if(kilo < 0){
        return undefined;
    }
    else {
        return meter;
    }
}
    var result = kilometerToMeter(-10);
    console.log(result);


 //second problem:

function budgetCalculator(titan, nokia, asus) //titan = clock , nokia = mobile , asus = laptop//
{
    var clock = 50 * titan;
    var mobile = 100 * nokia;
    var laptop = 500 * asus;

    var total_price = clock + mobile + laptop;
    return total_price;
}
    var result = budgetCalculator(10, 5, 3);
    console.log(result);

//third problem :

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

 //fourth problem :

    function megaFriend(name)
    {
        var max_string = name[0].length;
        var max = name[0];
        for (var i = 1; i < name.length; i++) {
            var element = name[i].length;
            if (element > max_string) {
                max = name[i];
                max_string = element;
        }
    }
        return max;
      }
var result = megaFriend(["karim", "shuvanon", "avi", "morter max"]);
console.log(result);