// #####################################
// ##### ----- Number Search ----- #####
// #####################################

let numberArray = [1, 100, 1000, 10000, 100000, 1000000, 10000000, 1234567890]
//contains the numbers

function searchNumbers() {
  let searchTarget = prompt("What number do you want to search the array for?")
  let searchResult = false

  for (let currentNumber of numberArray) {
    if (currentNumber == searchTarget) {
      searchResult = true
    }
  }

  alert(searchTarget + " found: " + searchResult)
  //this function asks the user what number they want to search and tells them if it is false or true
}
