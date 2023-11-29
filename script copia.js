//Seleziono elemento contenitore e creo i relativi box

const gridElement = document.getElementById("gridContainer");

for (let i = 1; i <= 100; i++) {

    const newElement = createmyElement("div", "grid-box");
    newElement.textContent = i;
    
    newElement.addEventListener("click",
        
    function () {
            newElement.classList.add("clicked");
            console.log("hai cliccato la casella col numero" + newElement.textContent)

        }
    );

    gridElement.append(newElement);

}

//Definizione funzione

function createmyElement(tagtype, classname) {
    
    const currentElemnt = document.createElement(tagtype);
    currentElemnt.classList.add(classname);

    return currentElemnt;
}

// Il computer deve generare 16 numeri casuali nello stesso 
// range della difficoltà prescelta: le bombe. 