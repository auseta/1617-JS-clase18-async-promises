const menu = [{
    id: 1,
    type: "desayuno",
    nombre: "café y dos medialunas",
},
{
    id: 2,
    type: "almuerzo",
    nombre: "bife a caballo",
},
{
    id: 3,
    type: "merienda",
    nombre: "tostado",
},
];

//console.log(info[1].type);

const getInfo =()=> {
    setTimeout(() => {
        console.log('uf,uf, ahi llegue!');
        return menu
    }, 1000);

}

//dio undefined! por que? porque ese console.log y getInfo son sincronicos, no esperan a los datos. No saben que va a llegar, buscan y no lo encuentran
console.log(getInfo());