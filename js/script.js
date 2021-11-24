// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
// in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.





// genero elementi  

// caso livello == 1 genero 100 elementi n=100  con dimensione quadrato 1/10
// caso livello == 2 genero 81 elementi  n=81 con dimensione quadrato 1/9
// caso livello == 3 genero 49 elementi  n=49 con dimensione quadrato 1/7

// quando clicco sul numero aggiungo la classe bg-color (toggle)


// Seleziono il bottone con id play e aggiungo un evento al click
document.getElementById('play').addEventListener('click', play);


// Faccio un test con 100 elementi
// const squaresNumber = value;








// creo la griglia con i quadrati
function play() {
    
    let level = document.getElementById('level').value;

        
    if (level === '1') {
        squaresNumber = 100;
        squares = 10;
    } else if (level === '2'){
        squaresNumber = 81;
        squares = 9;
    } else {
        squaresNumber = 49;
        squares = 7;
    }


    
    let numbers = totSquare(squaresNumber);

    // Per ogni elemento creo un quadrato e lo appendo al contenitore
    const container = document.getElementById('grid');

    container.innerHTML = '';

    for(let i = 0; i < numbers.length; i++) {
        const thisNumber = numbers[i];
        const newSquare = newObject(thisNumber);


        // Attacco l'evento allo square
        newSquare.addEventListener('click', squareClick);
        
        // Aggiungo l'elemento alla griglia
        grid.appendChild(newSquare);
    }    
}


// Funzione che crea i contenitori
function newObject(number) {
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    newSquare.innerHTML = `<span>${number}</span>`; 

    newSquare.style.width = `calc(100%/(${squares};`;
    newSquare.style.height = `calc(100%/(${squares};`;
    return newSquare;
}


// Funzione che genera l' array contenente i numeri 
function totSquare (squaresNumber) {
    const numbersArray = [];
    while(numbersArray.length < squaresNumber) {
        for(let i = 1; i <= squaresNumber; i++) {
            numbersArray.push(i);  
          }
    }
    return numbersArray;
}

// Funzione che al click attiva lo sfondo del riquadro
function squareClick() {
    this.classList.add('active');
    const thisSquareNumber = parseInt( this.querySelector('square') );
}