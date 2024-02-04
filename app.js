let titulo = document.querySelector('h1');
titulo.innerText = 'Autojuego de ordenador';
let parrafo = document.querySelector('.texto__parrafo');
parrafo.innerHTML = 'El objetivo es ver cuanto tiempo necesita un ordenador para resolver un número entre 1 y 1000000000000000000000'


function game(){
    let inicializador = 1,adivino;
    let minimo = 1;
    let maximo = 1000000000000000000000;
    let number = Math.floor(Math.random() * (maximo - minimo) + minimo)
    let fecha = performance.now();
    for (adivino = 0; adivino!= number; inicializador++){
        adivino = Math.floor(Math.random() * (maximo - minimo) + minimo);
        if (adivino != number)
            number < adivino ? maximo = adivino : minimo = adivino;
    }
    fecha_fin = performance.now();
    let label = document.getElementById('label');
    label.innerHTML = `Tu ordenador se tardó ${fecha_fin - fecha} milisegundos y tuvo que hacer ${inicializador} iteraciones , el nùmero era ${adivino} y se generó ${number}`;
}