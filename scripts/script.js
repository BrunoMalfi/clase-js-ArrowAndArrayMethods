console.log('----------start Arrow and Arrray Methods ---------')
// 1 . Funcioones flecha :
const saludar= ()=> "hola" ; 
console.log('Ej 1  saludar(): ', saludar())
const division = (a,b)=>a/b
console.log('Ej 1  division(10,5): ', division(10,5))
const miNombre= (nombre)=>{return `Mi nombre es ${nombre}`; }
console.log('Ej 1  miNombre("Bruno"): ', miNombre("Bruno"))
const test1 =()=>{
    const test2=()=>{
        return "Función test 2 ejecutada."
    }
    return test2();
}
console.log('Ej 1  test1(): ', test1())

// 2 . Foreach
let gente = [
    {
      nombre: "Jamiro",
      edad: 45,
    },
    {
      nombre: "Juan",
      edad: 35,
    },
    {
      nombre: "Paco",
      edad: 34,
    },
    {
      nombre: "Pepe",
      edad: 14,
    },
    {
      nombre: "Pilar",
      edad: 24,
    },
    {
      nombre: "Laura",
      edad: 24,
    },
    {
      nombre: "Jenny",
      edad: 10,
    },
  ];

  const gente25 = []
  const genteJ = []
  gente.forEach(persona => {
    if(persona.edad >= 25){gente25.push(persona)}
   });
   gente.forEach(persona => {
    if(persona.nombre.substring(0,1) =='J'){genteJ.push(persona)}
   });
   console.log('Ej 2 mayor 25 : ', gente25)
   console.log('Ej 2 Gente J : ', genteJ)
// 3 . Map
const gente25MapClean =[]
const gente25Map = gente.map((persona) =>{
    if(persona.edad >= 25){
        gente25MapClean.push(persona)
        return persona
    }
})
console.log('Ej 3 mayor 25 : ', gente25Map)
console.log('Ej 3 mayor 25 Clean: ', gente25MapClean)
const genteJMapClean=[];
const genteJMap=gente.map((persona)=>{
    if(persona.nombre.substring(0,1) =='J'){
        genteJMapClean.push(persona)
        return persona
    }
})
console.log('Ej 3 Gente J : ', genteJMap)
console.log('Ej 3 Gente J Clean : ', genteJMapClean)
const numbers = [ 4, 5, 6, 7, 8, 9, 10];
const megaNumbers = numbers.map((number)=>{return number**number})
console.log('Ej 3 numbers**numbers = : ', megaNumbers)
//4 Filter
const numbersEj4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosImpares=numbersEj4.filter(numero => numero%2 ==1 )
console.log('Ej 4  numerosImpares :  ', numerosImpares)
const foodList = [
    { name: 'Tempeh', isVeggie: true },
    { name: 'Cheesbacon burguer', isVeggie: false },
    { name: 'Tofu burguer', isVeggie: true },
    { name: 'Entrecot', isVeggie: false }
  ];
const foodListVeggie= foodList.filter(food => food.isVeggie)
console.log('Ej 4  foodListVeggie ', foodListVeggie )
//5 Reduce 
const numeros = [39, 2, 4, 25, 62];
const numerosMul =numeros.reduce((prevValue,afterValue) => prevValue *afterValue)
console.log('Ej 5  numerosMul ', numerosMul )
//Extra 
const staff = [
    {
      name: "Pepe",
      role: "The Boss",
      hobbies: ["leer", "ver pelis"],
    },
    {
      name: "Ana",
      role: "becaria",
      hobbies: ["nadar", "bailar"],
    },
    {
      name: "Luis",
      role: "programador",
      hobbies: ["dormir", "comprar"],
    },
    {
      name: "Carlos",
      role: "secretario",
      hobbies: ["futbol", "queso"],
    },
  ];
  
  const objectSenteces= staff.map((person)=>{
    return person.name+" es "+person.role+"y le gusta "+person.hobbies[0]+" y "+person.hobbies[1]
  })

  console.log('Ej Extra Map objectSenteces : ',objectSenteces)

  const foodList2 = ["Pizza", "Ramen", "Paella", "Entrecot"];
  const foodList2Sentecces = foodList2.map((food)=>{
    switch(food) {
        case "Pizza":
            return "Como soy de Italia, amo comer Pizza"
        case "Ramen":
            return "Como soy de Japón, amo comer Ramen"
        case "Paella":
            return "Como soy de Valencia, amo comer Paella"
        case "Entrecot":
            return "Aunque no como carne, el Entrecot es sabroso"
    }
  })
  console.log('Ej Extra Map foodList2Sentecces : ',foodList2Sentecces)

  const inventory = [
    {
      name: 'Mobile phone',
      price: 199
    },
    {
      name: 'TV Samsung',
      price: 459
    },
    {
      name: 'Viaje a cancún',
      price: 600
    },
    {
      name: 'Mascarilla',
      price: 1
    }
  ];

const inventory300 = inventory.filter( (item) =>item.price >300).map(item=> item.name)
console.log('Ej Extra Filter inventory300 : ',inventory300)
const sentenceElements = [
    'Me',
    'llamo',
    'Bruno',
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
    ];
const sentenceElementsReduce= sentenceElements.reduce((cumulative,word)=> cumulative+" "+word )
console.log('Ej Extra Reduce sentenceElementsReduce  : ',sentenceElementsReduce )

// function factorial (numero,cumulative){
//     if (cumulative == undefined){ cumulative = 1}
//     if (numero >0 ){
//         cumulative = numero * numero-1
//         factorial(numero - 1,cumulative);
//     }else{
//     return cumulative
//     }
// }

// const NumeroFact = 7; 
//  console.log('Factorial : ', factorial(NumeroFact))
const factorial = n => {
    if (n === 0) {
      return 1
    }
    return n * factorial(n - 1)
  }

  console.log('Factorial  del 7  con recursividd ', factorial(7))