const wordsArea = document.getElementById("wordsArea");
const countWordsBtn = document.getElementById("countWordsBtn");
const totalCount = document.getElementById("totalCount");
const resetBtn = document.getElementById("resetBtn");


const countWords =() =>{
	let words =  wordsArea.value;
	let wordsTrimmed = words.replace(/\s+/g, " ").trim();
	let splitWord = wordsTrimmed.split(" ");
	let numberOfWords = splitWord.length;
	if(splitWord[0] == ""){
		numberOfWords = 0;
	}
	totalCount.innerHTML = numberOfWords;
	
};


function resetWord(){
	document.getElementById("wordsArea").value = '';
	document.getElementById("totalCount").innerHTML = '0';
}
countWordsBtn.addEventListener("click", countWords);

