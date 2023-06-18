// ##################################
// ##### ----- Future Job ----- #####
// ##################################

let job = [
  'astronaut',
  'firefighter',
  'police officer',
  'space doctor',
  'news anchor',
  'teacher',
]

function getJob() {
  let index = Math.floor(Math.random() * 5)

  alert('Your future job will be ' + job[index] + '.')
}
