// ####################################
// ##### ----- Subject List ----- #####
// ####################################

let subjects = ["English", "Digital Technology"]
//contains the subjects

function showSubjects() {
  alert(subjects)
}
//outputs the subjects from the subject list

function addSubject() {
  let newSubject = prompt("What subject do you want to add?")
  //asks the user to add a subject
  //add a new item to the end of the subjects array
  subjects.push(newSubject)
}

function removeSubject() {
  let index = prompt("Choose a number between 0 and 2.")
  //removes one subject from the list from the number the user inputs
  // remove 1 item at the index position of the subjects array
  subjects.splice(index, 1)
}
