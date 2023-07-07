// #####################################
// #### ----- Subject Details ----- ####
// #####################################

let subject = {
  name: 'DigiTech',
  room: 'Room 9',
  students: 150,
  teacher: 'Random middle-aged man'
}

function showSubject() {
  alert(subject.name + ' in ' + subject.room)
}

function changeSubject() {
  let newName = 'Typing Skills'

  subject.name = newName
}

function changeTeacher() {
  let newTeacher = prompt('Who is the new teacher?')

  subject.name = newTeacher
}