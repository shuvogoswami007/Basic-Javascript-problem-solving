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