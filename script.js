let boxy = document.querySelectorAll('.pole');
let hratZnovu = document.getElementsByClassName('hrat-znovu');
let hlavniPole = document.querySelector('.hraci-plocha');

let kolo = 0;

function HratZnovu() {
    boxy.forEach(box => {
        box.innerHTML = "";
    });
    kolo++;
}

HratZnovu();