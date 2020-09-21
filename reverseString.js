
function reverseString (word){
  var stringInReverse = []
  
  for (i = word.length - 1; i >= 0; i--){
    stringInReverse.push(word[i])
  }
   return stringInReverse.join('')
}
var word = 'feminismo'
var resultado = reverseString (word)


console.log(resultado)