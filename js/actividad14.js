let miNumero = "17";
let edad = Number(miNumero);
console.log( edad );

if ( isNaN(edad)){
    console.log("No es un número");
}
else{
    if(edad >= 18){
        console.log("Puedo votar");
    }
    else{
        console.log("Muy joven para votar");
    }
}

if(isNaN(edad)){
    console.log("No es un numero");
}
else{
    let resultado = (edad >= 18)? "Puedo votar" : "Muy joven para votar";
    console.log( resultado );
}
