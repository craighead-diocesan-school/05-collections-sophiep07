// ##################################
// ##### ----- Future Job ----- #####
// ##################################

let job = ["astronaut", "firefighter", "police officer", "space doctor", "news anchor", "teacher"]
//contains the possible jobs

function getJob() {
  let index = Math.floor(Math.random() * 5)
  //chooses the job

  alert("Your future job will be " + job[index] + ".")
  //tells the user their future job
}
