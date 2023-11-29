// Il computer deve generare 16 numeri casuali nello stesso 
// range della difficoltà prescelta: le bombe. 



/*In seguito l’utente clicca su una cella: se il numero è presente 
nella lista dei numeri generati - abbiamo calpestato una bomba - 
la cella si colora di rosso e la partita termina.
Altrimenti la cella cliccata si colora di azzurro e 
l’utente può continuare a cliccare sulle altre celle.*/



/*La partita termina quando il giocatore clicca su una 
bomba o quando raggiunge il numero massimo possibile di 
numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il 
punteggio, cioè il numero di volte che l’utente ha cliccato 
su una cella che non era una bomba.*/



document.addEventListener('DOMContentLoaded', function () {
    const gridElement = document.getElementById("gridContainer");
    const playButton = document.querySelector('button');

    
    playButton.addEventListener('click', function () {
    
        //const arryRandomNum = genArrayRandomNum (1, 100, 100);

        gridElement.innerHTML = "";

        const gridSize = 100;
        const nBombs = 16;
        const whereBombs = genArrayRandomNum (1,100, 16);


        for (let i = 1; i <= 100; i++) {
            const newElement = createmyElement("div", "grid-box");
            newElement.textContent = i;

            if (whereBombs.includes(i)) {
                newElement.classList.add("bomb");
            }
            
            newElement.addEventListener("click", function () {

                if (newElement.classList.contains("bomb")) {
                    showBomb(newElement);
                    endGame(false);
                    console.log("Hai perso")
                } else {
                    //che succede qui? Me la colora normalmente?
                    newElement.classList.add("clicked");
                    console.log("Hai cliccato la casella col numero " + newElement.textContent);
                }

                explodeBomb(newElement);
                
            });

            gridElement.append(newElement);
        }
    });


    function createmyElement(tagtype, classname) {
        const currentElemnt = document.createElement(tagtype);
        currentElemnt.classList.add(classname);
        return currentElemnt;
    }



    //Aggiungo la funzione show bomb
    function showBomb (bombElement) {
        if (!bombElement.classList.contains("clicked")) {
            bombElement.classList.add("clicked", "bomb");
            console.log("Hai perso")
        }
    }

    //Aggiungo la funzione che mi fa vedere la cella colorata
    function explodeBomb(element) {
        if (element.classList.contains("clicked") && element.classList.contains("bomb")) {
            element.style.backgroundColor = "red";
        }
    }


    //Aggiungo la funzione che mi finisce il gioco

    function endGame(victory) {
        if (!victory) {
            alert("Hai perso! Riprova");
        }
        // Resetta il gioco
        playButton.disabled = false;
    }


    //Funzione ordinamento randomico array


    function genArrayRandomNum (minNum, maxNum, lengthArr) {
        const whereBombs = [];
    
        while (whereBombs.length < lengthArr) {
            let newNumber = randomNum(minNum, maxNum);
            
            if (!whereBombs.includes(newNumber)) {
                whereBombs.push(newNumber);
            }
        }


        console.log(whereBombs);
        return whereBombs;
    }

    //Funzione creazione numeri random

    function randomNum (min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}


});









