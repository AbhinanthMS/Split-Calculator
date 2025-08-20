function bill(){
    let amount = document.getElementById('amount');
    let persons = document.getElementById('persons');
   let result = (amount.value / persons.value).toFixed(2);
   let billOutput = document.getElementById('billoutput');
   let formatedText = result + " Rs Each!"
   billOutput.innerText = formatedText;
}