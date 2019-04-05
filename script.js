function Number(){
  var firstNumber = document.getElementById('firstNumber').value;
  var secondNumber = document.getElementById('secondNumber').value;
  //Pour connaitre le reste de la division
  var result = firstNumber % secondNumber;
  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    alert('Veuillez saisir uniquement un nombre');
  } else {
    alert(result);
  }
}
