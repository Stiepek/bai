class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    imieNazwisko(){
        let nazwisko = this.lastName.toUpperCase();
        console.log(`${this.firstName} ${nazwisko}`);
    };
    inicjaly(){
        console.log(`${this.firstName[0]}.${this.lastName[0]}.`);
    };
}

janNowak = new Person('Jan', 'Nowak');
janNowak.imieNazwisko();
janNowak.inicjaly();

piotrSzczepanski = new Person('Piotr', 'Szczepanski');
piotrSzczepanski.imieNazwisko();
piotrSzczepanski.inicjaly();
