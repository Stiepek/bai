function isCar(car1, car2, car3) {
    let p;
    if(car1 == true && car2 == true && car3 == true){
        p = true;
    } else if(car1 == false && car2 == false && car3 == false){
        p = true;
    } else {
        p = false;
    }
    return p;
}

console.log(isCar(true, true, true));
console.log(isCar(false, false, false));
console.log(isCar(true, true, false));
console.log(isCar(false, false, true));
console.log(isCar(true, false, true));

