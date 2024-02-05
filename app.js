window.addEventListener('load',() =>{
    asignarNombre('Autojuego de ordenador','h1');
    asignarNombre('El objetivo es ver cuanto tiempo necesita un ordenador para resolver un número entre 1 y 1000000000000000000000','.texto__parrafo')
});

function asignarNombre(nombre,elemento){
    let titulo = document.querySelector(elemento);
    titulo.innerText = nombre;
}

let boton = document.querySelector('#boton');
boton.addEventListener('click',() => {
    game()
})

function game(){
    let inicializador = 1,adivino,minimo = 1,maximo = 1000000000000000000000;
    let number = generadorNumero(minimo,maximo)
    let fecha = performance.now();
    for (adivino = 0; adivino!= number; inicializador++){
        adivino = generadorNumero(minimo,maximo);
        if (adivino != number)
            number < adivino ? maximo = adivino : minimo = adivino;
    }

    fecha_fin = performance.now();
    asignarNombre(`Tu ordenador se tardó ${fecha_fin - fecha} milisegundos y tuvo que hacer ${inicializador} iteraciones , el nùmero era ${adivino} y se generó ${number}`,'label')
}

function generadorNumero(minimo,maximo){
    return Math.floor(Math.random() * (maximo - minimo) + minimo);
}