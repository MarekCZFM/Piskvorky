let boxy = document.querySelectorAll('.pole');
let hratZnovu = document.getElementsByClassName('hrat-znovu');
let hlavniPole = document.querySelector('.hraci-plocha');

boxy.forEach(box => {
    box.addEventListener('click', PolozKamen);
})

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
        (kolo % 2 === 0) ? pole.innerHTML = 'X' : pole.innerHTML = 'O';
        kolo++;
        if (ZkontrolujVyhru()){
            (kolo % 2 === 0) ? console.info("O vyhral") : console.info("X vyhral");
        }
    }
}

function ZkontrolujVyhru3x3() {
    let vyhra = false;
    for (let index = 0; index < boxy.length; index++) {
        if (boxy[index].innerHTML !== '')
        {
            let znakNaKontrolu = boxy[index].innerHTML;
            if (index % 3 === 0){ // Radky
                vyhra = true;
                for (let j = index+1; j < index+3; j++){
                    if (boxy[j] !== znakNaKontrolu){
                        vyhra = false;
                    }
                }
                if (vyhra){
                    return vyhra;
                }
            }
            if (index / 3 === 0){ // Sloupce
                vyhra = true;
                for (let j = 0; j+index < boxy.length; j+=3){
                    if (boxy[j] !== znakNaKontrolu){
                        vyhra = false;
                    }
                }
                if (vyhra){
                    return vyhra;
                }
            }
            if (index === 0){     // Leva Diagonala
                if (boxy[4] === znakNaKontrolu && boxy[8] === znakNaKontrolu){
                    return true;
                }
            }
            if (index === 2){     // Prava Diagonala
                if (boxy[4] === znakNaKontrolu && boxy[6] === znakNaKontrolu){
                    return true;
                }
            }
        }
    }
    return vyhra;
}
HratZnovu();