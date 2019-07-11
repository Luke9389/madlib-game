// Reference needed DOM Elements
const nounOne = document.getElementById('nounOne');
const nounTwo = document.getElementById('nounTwo');
const verbOne = document.getElementById('verbOne');

const resultNounOne = document.getElementById('resultNounOne');
const resultNounTwo = document.getElementById('resultNounTwo');
const resultVerbOne = document.getElementById('resultVerbOne');

// Action to take on user event
// eslint-disable-next-line no-unused-vars
function updateResult(){
    resultNounOne.textContent = nounOne.value;
    resultNounTwo.textContent = nounTwo.value;
    resultVerbOne.textContent = verbOne.value;
}

function makeMadlib(){
   
    document.getElementById('story').classList.toggle('hidden');
}