const ansInput = document.getElementById('answer');

function checkAnswer(){

    if(ansInput.value === ''){
        alert('your answer is empty .. write answer');
        ansInput.value = '';
    }
    else if(Number(ansInput.value) === 8){
        alert('your answer is correct');
        ansInput.value = '';
    } 
     else {
        alert('your answer is wrong');
        ansInput.value = '';
    }
}
