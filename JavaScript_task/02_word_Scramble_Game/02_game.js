
const authorName =document.querySelector(".word");
const hintB = document.querySelector(".hint span");
const timeText = document.querySelector(".time b");
const useinput= document.querySelector("input");
const refreshBtn = document.querySelector(".refresh");
const checkBtn = document.querySelector(".check");

let currectWord,timer;

const initTimer = maxTime =>{
    clearInterval(timer);
    timer = setInterval(()=>{
        if(maxTime > 0){
            maxTime--;
            return timeText.innerText = maxTime;
        }
        clearInterval(timer);
        alert(`Time Off ${currectWord} is currect answer`);
        initGame();
    },1000)
}

const initGame = ()=>{
    initTimer(30);
    let rendomObj = words[Math.floor(Math.random()* words.length)];
    let wordArray = rendomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random()* (i + 1));
        [wordArray[i],wordArray[j]] = [wordArray[j],wordArray[i]];
    }
    authorName.innerText = wordArray.join("");
    hintB.innerText = rendomObj.hint;
    currectWord =rendomObj.word.toLocaleLowerCase();
    useinput.value =  "";
    useinput.setAttribute("maxlenght",currectWord.length);

   
}
const checkword = ()=>{
    let userWord = useinput.value.toLocaleLowerCase();
    if (!userWord) return alert("Please enter a word to check");
    if(userWord !== currectWord) return alert(`Opps ${userWord} is not correct word`);
    alert(`Congrats  ${userWord.toLocaleUpperCase()} is correct word`); 
    initGame();
}

initGame();
refreshBtn.addEventListener("click",initGame);
checkBtn.addEventListener("click",checkword)