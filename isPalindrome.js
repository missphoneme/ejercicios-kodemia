function isPalindrome (word){
  
  var isPalToCompOri = word.split(' ').join('') //toma la frase original y le quita los espacios
  var isPalToComp = isPalToCompOri.split(' ').reverse().join('')//toma la palabra sin espacios y le hace reversa
  
  
  if (isPalToCompOri == isPalToComp){
    console.log('Es un palíndromo')
  }
  else{
    console.log('No es un palíndromo')
  }
}


var word = 'anita lava la tina'
isPalindrome(word)