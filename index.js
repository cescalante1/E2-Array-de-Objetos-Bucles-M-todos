let PIZZAS = [

    {
    
    id: 1,
    nombre:`Especial`,
    ingredientes:["Muzzarella","Jamon","Morrones"],
    precio:800,


    },

    {
    
        id: 2,
        nombre:`Napolitana`,
        ingredientes:["Muzzarella","Tomate","Ajo"],
        precio:750,
    
    
        },

        {
    
            id:3,
            nombre:`Huevon`,
            ingredientes:["Muzzarella","Huevo","Jamon"],
            precio:550,
        
        
            },

            {
    
                id:4,
                nombre:`Calabresa`,
                ingredientes:["Muzzarella","Salame"],
                precio:500,
            
            
                },

                {
    
                    id:5,
                    nombre:`Tropical`,
                    ingredientes:["Muzzarella","Jamon","Anana"],
                    precio:780,
                
                
                    },

                    {
    
                        id:6,
                        nombre:`Anchoas`,
                        ingredientes:["Muzzarella","Anchoas","Alcaparras"],
                        precio:850,
                    
                    
                        }




]

console.log("Las pizzas con ID impares son:");




const x = PIZZAS.filter(elemento => elemento.id % 2 !=0 ); 

x.forEach(elemento => {

    console.log(`${elemento.nombre}` + ". ID: " + `${elemento.id}`);
    
});
    
   


console.log("Las pizzas que valen menos de $600 son:");

PIZZAS.forEach((elemento) =>{ 

    let valor = elemento.precio;

    if(valor<=600){

        valor = true;
    
        console.log(`${elemento.nombre}` + ". Precio: " + `${elemento.precio}`);
    } 

        
});

console.log("Las pizzas disponibles son:")

PIZZAS.forEach((elemento) => {

    console.log(`${elemento.nombre}`);
    
});

console.log("Los precios de las pizzas son:");


PIZZAS.forEach((elemento) => {

    console.log("$" + `${elemento.precio}`);
    
});

console.log("Pizzas disponibles con sus respectivos precios:");

PIZZAS.forEach((elemento) => {

    console.log("Nombre: " + `${elemento.nombre}` + ", precio: $" + `${elemento.precio}`);
    
});



