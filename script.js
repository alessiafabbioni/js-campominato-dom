
document.addEventListener('DOMContentLoaded', function () {
    const gridElement = document.getElementById("gridContainer");


    const playButton = document.querySelector('button');

    
    playButton.addEventListener('click', function () {
       
        for (let i = 1; i <= 100; i++) {
            const newElement = createmyElement("div", "grid-box");
            newElement.textContent = i;

            
            newElement.addEventListener("click", function () {
                newElement.classList.add("clicked");
                console.log("Hai cliccato la casella col numero " + newElement.textContent);
            });

            gridElement.append(newElement);
        }
    });


    function createmyElement(tagtype, classname) {
        const currentElemnt = document.createElement(tagtype);
        currentElemnt.classList.add(classname);
        return currentElemnt;
    }
});

// Il computer deve generare 16 numeri casuali nello stesso 
// range della difficoltà prescelta: le bombe. 



/*In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.*/



/*La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.*/