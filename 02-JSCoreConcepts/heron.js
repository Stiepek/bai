// boki trójkąta
//a = 3;
b = 4;
c = 5;
h = 7;

let s = (b + c + h)/2;

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .
var a;
a = (x, y, z, o) => {
    let p;
    p = Math.sqrt(o * (o-x) * (o-y) * (o-z) );
    return p;
};

console.log( `Pole trójkąta o bokach ${b}, ${c}, ${h} wynosi ${a(b, c, h, s)}` );
