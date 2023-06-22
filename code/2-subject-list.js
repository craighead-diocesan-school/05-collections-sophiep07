// ####################################
// ##### ----- Subject List ----- #####
// ####################################

let subjects = [
  'English',
  'Digital Technology',
]

function showSubjects() {
  alert(subjects)
}

function addSubject() {
  let newSubject = prompt('What subject do you want to add?')

  // add a new item to the end of the subjects array
  subjects.push(newSubject)
}

function removeSubject() {
  let index = prompt('Choose a number between 0 and 2.')

  // remove 1 item at the index position of the subjects array
  subjects.splice(index, 1)
}
