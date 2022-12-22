<script
src="https://code.jquery.com/jquery-3.3.1.min.js"
integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
crossorigin="anonymous"></script>

let skills

const $button = $('button')
const $ul = $('ul')
const $input = $('input')

$button.on("click", handleAddSkill)
$ul.on("click", "span", handleDelete)

init()

function init() {
  skills = []
  render()
}

function handleAddSkill() {
  const skill = $input.val()
  if (skill) {
    const $skill = $(`<li><span>X</span>${skill}</li>`)
    skills.push($skill)
    $input.val("")
    render()
  } else return
}

function handleDelete() {
  $(this).closest('li').remove()
  let currentSkill = $(this).closest('li')
  skills.pop(currentSkill)
}


function render() {

  if (!skills.length) $ul.css("margin-bottom", "30px")
  else $ul.css("margin-bottom", "0px")

  $ul.html(skills)
}
