// #####################################
// #### ----- Subject Details ----- ####
// #####################################

let subject = {
  name: "DigiTech",
  room: "Room 9",
  students: 150,
  teacher: "Random middle-aged man",
}
//contains the details of the subject

function showSubject() {
  alert(subject.name + " in " + subject.room)
}
//shows the name of the subject and what room it is in

function changeSubject() {
  let newName = "Typing Skills"

  subject.name = newName
  //changes the subject name to typing skills
}

function changeTeacher() {
  let newTeacher = prompt("Who is the new teacher?")

  subject.name = newTeacher
  //asks the user for a new teacher and changes it in the list
}
