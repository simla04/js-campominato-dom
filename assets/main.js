const griglia = document.getElementById('griglia');
// console.log( griglia );


//creiamo una funzione per creare un div quadrato dentro la griglia


function creazioneQuadrato(num){
    const div = document.createElement('div');
    div.classList.add('quadrato');

    div.innerHTML = num;
    return div;// div class= "quadrato"
}

// console.log( creazioneQuadrato() );



// inserimento il quadrato creato dalla funzione nella griglia
// griglia.append( creazioneQuadrato() );



//64 quadrati
for( let i = 0; i < 100; i++ ){ 

    let elementoCorrente = creazioneQuadrato( i + 1 );
    console.log(elementoCorrente);
    
    elementoCorrente.addEventListener('click', function(){
        console.log(this)
        
        this.classList.toggle('active');
    

    })
    
    griglia.append( elementoCorrente );
}