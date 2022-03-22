const menu = [
  {
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

const getInfo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(menu);
      reject(() => console.log("hubo un error!"));
    }, 1000);
  });
};

//async es que van a llegar en algun momento
const result = async ()=> {
    //try es intentá hacerlo. Si sale, haces lo de adentro
    try {
        console.log(await getInfo()); //espera a que llegue getInfo
        //catch es agarrá el error, no lo dejes ahi suelto
    } catch (error) {
        console.log(error);
    }
    //aca iria el finally
}

result()

//*ojo! la sintaxis cuando no es flecha es levemente distinta:
//async function getInfo()