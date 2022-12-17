const buttonElements= document.querySelectorAll("button");
let row=1;
let letter=1;
const wordForTheDay='Where'
const wordElements=document.querySelectorAll('.word-row');
let gameOver=false;
let guessedCorrectly=false;

buttonElements.forEach((element)=> {
    element.addEventListener('click', function() {
    keypress(element.attributes["data-key"].value)
});
});

function populateWord(key){
    if(letter<6){
    wordElements[row - 1].querySelectorAll('.word')[letter - 1].innerText=key;
    letter+=1;
    }
}

function checkWord(){
    const letterElements=wordElements[row-1].querySelectorAll('.word');
    let numOfCorrectAlphabets=0;
    letterElements.forEach((element,index)=> {
        const indexofLetterInWordOfTheDay=wordForTheDay.toLowerCase().indexOf(element.innerText.toLowerCase());
        console.log(indexofLetterInWordOfTheDay);

        if(indexofLetterInWordOfTheDay=== index){
            numOfCorrectAlphabets+=1;
            element.classList.add('word-green');

        }else if(indexofLetterInWordOfTheDay>0){
            element.classList.add('word-yellow');
        } else {
            element.classList.add('word-grey');
        }
    });
    if(numOfCorrectAlphabets===5){
        gameOver=true;
        guessedCorrectly=true;
        alert('Correct Guess');
    } else if(row===6){
        gameOver=true;
        alert('better luck next time; correct word: '+wordForTheDay);
    }
}

function enterWord(){
    if(letter<6){
        alert("Not enough letters");}
        else{
            checkWord();
            row+=1;
            letter =1;
    }
} 
function deleteLetter(){
   const letterElements= wordElements[row-1].querySelectorAll('.word');
   for(let index=letterElements.length-1;index>=0;index--){
    const element=letterElements[index];
    if(element.innerText !==''){
        element.innerText='';
        letter-=1;
        break;
    }
   }
}

function keypress(key){

    if(!gameOver){
    if(key.toLowerCase()==='enter'){
        enterWord();
    }else if(key.toLowerCase()==='del'){
        deleteLetter();

    }else{
        populateWord(key);
    }
}else{
    alert('Game over!');
}}