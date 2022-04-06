/* utility classes */
function getRandom(num1, num2){
    return Math.floor(Math.random() * (num2 - num1 + 1) ) + num1;

}

/* /utility classes */

/* dichiaro variabili DOM */
let gioco = document.getElementById("gioco");
let input = document.getElementById("input");
let end = document.getElementById("fine");
/* genero array con 5 numeri casuali */
const randomNum = [];
let i = 0;
let guessed = 0;
let guessednum = [];
let randoms;
while(randomNum.length < 5){
    randoms = getRandom(1, 100);
    if (!randomNum.includes(randoms)){
        randomNum.push(randoms);
    }
}
let memNum = document.getElementById("numeri").innerHTML = randomNum;

/* elimino i numeri generati dopo 30 secondi*/
setTimeout(reset, 5000);

function reset(){
    gioco.classList.add("hide");
    input.classList.remove("hide");
}

/* l'utente inserisce i numeri che ha visto*/
let userNum = [];
console.log(userNum, randomNum)
userValue = document.getElementById("btn").addEventListener("click", getNums);

function getNums(){
        let userValue = document.getElementById("userinput").value;
        userNum.push(userValue);
        console.log(userNum)
        if(userNum.length === 5){
            console.log(randomNum)
            this.removeEventListener("click", getNums);
            for(i=0; i< userNum.length; i++){
                for(let c = 0; c < randomNum.length; c++){
                    console.log(c, userNum[i], randomNum[c], guessed, guessednum)
                    if(parseInt(userNum) === randomNum[c]){
                        randomNum.splice(c, 1)
                        guessed++;
                        guessednum.push(randomNum[c]);

                    }
                }
            }
            end.innerHTML = `
            hai indovinato ${guessed} numeri e sono ${guessednum}
        `;
        }
}



