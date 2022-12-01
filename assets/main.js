// seleziono il tag select
let difficolta = document.getElementById('difficolta')
const griglia = document.getElementById('griglia');
// console.log( griglia );
let bombe = [];
let bomba;
let frase = document.getElementById('punteggio');
let contatore = 0;
// variabile flag o "soldatino"
let isGameOver = false;

// console.log( griglia )

//creiamo una funzione per creare un div quadrato dentro la griglia, crea la singola cella con la classe quadrato
function creazioneQuadrato(num){
    const div = document.createElement('div');
    div.classList.add('quadrato');
    
    // inserire il numero dentro ai div="quadrato"
    div.innerHTML = `<span>${num}</span>`;
    return div;// <-div div class= "quadrato"></-div>
}
// console.log( creazioneQuadrato() );

// inserimento il quadrato creato dalla funzione nella griglia
// griglia.append( creazioneQuadrato() );

// attivare il gioco quando si cambia difficoltà
// all'interno dei paramentri c'è anche una funzione che viene definita "funzione call back"


difficolta.addEventListener('change', function () {
    // ogni livello di difficoltà cambia il numero di celle
    let difficoltaValue = difficolta.value;
    creaGioco(difficoltaValue)
})
// creo una funzione che in base alla difficoltà cambia il numero di celle
function creaGioco(livelloDiDIfficolta) {
    if( livelloDiDIfficolta = 'easy'){
        // creo 100 celle
        // invocazione funzione per generare le bombe nell'array
        bombe = [];
        generaBombe(1, 100)
        console.log(bombe)
        creaCelle(100)
    } else if (livelloDiDIfficolta = 'medium') {
        // creo 81 
        // invocazione funzione per generare le bombe nell'array
        bombe = [];
        generaBombe(1, 81)
        console.log(bombe)
        creaCelle(81);
    } else if ( livelloDiDIfficolta = 'hard') {
        // creo 64
        // invocazione funzione per generare le bombe nell'array
        bombe = [];
        generaBombe(1, 49)
        console.log(bombe)
        creaCelle(49)
    }
}

// funzione crea celle
function creaCelle(numeroCelle) {

    // pulisce la griglia
    griglia.innerHTML = '';
    frase.innerHTML = '';
    isGameOver = false;
    
    for( let i = 1; i <= numeroCelle; i++ ){ 

    let elementoCorrente = creazioneQuadrato(i);
    // console.log(elementoCorrente);
    
    elementoCorrente.addEventListener('click', function() {
        
        let numeroNellaCella = parseInt(this.firstChild.innerHTML)
        
        if(isGameOver == false) {
            if(bombe.includes(numeroNellaCella)) {
                // se becco la bomba
                // al click della cella viene aggiunta la classe bomba con sfondo rosso, che se preso segna la sconfitta del giocatore
                this.classList.toggle('bomba');
                // ciclo tutte le celle da zero e controllo quali sono le bombe, ogni volta che ne trovo una aggiungo la classe bomba
                for( let y = 0; y < numeroCelle; y++ ){
                    if( bombe.includes( parseInt(griglia.children[y].firstChild.innerHTML)) ) {
                        griglia.children[y].classList.add('bomba');
                    }
                }
                // cambio variabile di controllo per non avere più accesso alle funzioni al click e terminare così la partita
                isGameOver = true;
                frase.innerHTML = `<p> La partita è terminata hai perso, il tuo punteggio finale è ${contatore}</p>`
            } else {
                // no bomba
                // al click della cella viene aggiunta la classe "salvo" perchè non era una bomba
                this.classList.toggle('salvo');
                // aumenta il punteggio ogni volta che non tocco una bomba
                contatore++;
            }
        }
        // console.log(this)
        // this.classList.toggle('active');
    })
    griglia.append( elementoCorrente );
}
} 
// livello 2 campo minato

// copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco( attenzione non bisogna copiare tutta la cartella dell'esercizio ma solo  html, e le cartelle js/css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione del git).
// il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione nella stessa cella può essere posizionata al massimo una bomba, perchè nell'array delle bombe non potranno esserci due numeri uguali.

function generaBombe(bombaMin, bombaMax) {

    // ciclo for per ottenere un ciclo di 16 giri
    for( let m = 0; m < 16; m++) {
        // ciclo do while per generare un numero random e poi controllare se già presente nell'array nel caso ci sia già il ciclo do while ricomincia e vienerirato ad un altro numero
        do{
            bomba = getRandomInt(bombaMin, bombaMax)
        } while (bombe.includes(bomba));

        bombe.push(bomba);
    }
}
// funzione per generare un numero random tra min e max
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) +min;
}
