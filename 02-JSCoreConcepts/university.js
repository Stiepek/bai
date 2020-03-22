names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

class Students {
    constructor(names) {
        this.names = names;
    }

    startWith(letter){
        let p = this.names;
        let o = [];
        p.forEach(item => {
            if(item[0] == letter){
                o.push(item);
            }
        });
        return o;// names (array) which starts with the letter
    }

    sort() {
        let p = this.names.sort();
        console.log(p);
        let o = [];
        p.forEach(item => {
            o.push(item);
        });
        return o;// names (array) in alphabetical order 
    }

    get() {
        let p = this.names;
        //console.log(p);
        return p; // names (array) in natural order
    }

    getFirst(n) {
        let p = this.names;
        console.log(p);
        let o = [];
        for(let i = 0; i < n; i++){
            //console.log(p[i]);
            o.push(p[i]);
        };
        return o;// get first 'n' names (array) 
    }
}

students = new Students(names);
console.log(students.get());
console.log(students.sort());
console.log(students.startWith('P'));
console.log(students.startWith('M').sort());
//console.log(students.sort().getFirst(4));
//console.log(students.startWith('M').sort().getFirst(2));
console.log(students.get());
console.log(students.getFirst(3));



