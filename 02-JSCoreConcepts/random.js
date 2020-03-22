losowanie = () => {
    let r;
    r = Math.floor(Math.random() * 15) + 5;
    return r;
};

tablica = () => {
    let randomTab = [];
    let o;
    for(let i = 0; i < 10; i++){
        o = losowanie();
        //console.log(losowanie());
        randomTab.push(o);
        //console.log(randomTab);
    };
    return randomTab;
};

console.log(tablica());
