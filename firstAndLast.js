function firstLast (itemsToPush){
  
  var firstLastArray = []
  
  firstLastArray.push(itemsToPush[0], itemsToPush[itemsToPush.length - 1])
  console.log(firstLastArray)

}

var itemsToPush = ['aborto', 'seguro', 'legal', 'y', 'gratuito']

firstLast(itemsToPush)