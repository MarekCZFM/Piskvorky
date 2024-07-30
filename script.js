let boxy = document.querySelectorAll('.pole');
let hratZnovu = document.getElementsByClassName('hrat-znovu');
let hlavniPole = document.querySelector('.hraci-plocha');

let kolo = 0; // X == 0, Y == 1
let odehraneHry = 1;

function HratZnovu() {
    boxy.forEach(box => {
        box.innerHTML = "";
    });
    kolo = 0;
    odehraneHry++;
}

function PolozKamen(event) {
    let pole = event.target;
    if (pole.innerHTML === '')
    {
        kolo % 2 ? pole.innerHTML = 'X' : pole.innerHTML = 'Y';
        kolo++;
    }
}
HratZnovu();