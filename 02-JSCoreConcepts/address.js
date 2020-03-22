title = "dr";
name = "Mateusz";
surname = 'Kubicki';
street = 'Długa 15';
city = 'Kraków';
zip = '30-781';
country = 'Poland';


/* 
dr Mateusz Kubicki
ul. Długa 15
30-781 Kraków
POLAND
*/

var bigger = country.toUpperCase();

console.log(title + ' ' + name + ' ' + surname);
console.log('ul. ' + street);
console.log(zip + ' ' + city);
console.log(bigger);

console.log('');

console.log(`${title} ${name} ${surname}`);
console.log(`ul. ${street}`);
console.log(`${zip} ${city}`);
console.log(`${bigger}`);
