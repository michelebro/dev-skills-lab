<script
src="https://code.jquery.com/jquery-3.3.1.min.js"
integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
crossorigin="anonymous"></script>


// ------Contstants and Variables (State)-----------
let skills

// ------Cached Element References -----------

//3 things user will interact with :
//add skill button,
//delete capability when press x - cache ul tag for event delegation
//ul tag cached so we can add lsitener and add skills in ul tag
//input tag

const $button = $('button')
const $ul = $('ul')
const $input = $('input')
//after create want to go to dev tools to test var's (that jq) in console type $button

// ---------Event Listeners -----------------

$button.on("click", handleAddSkill)
$ul.on("click", "span", handleDelete)

// ---------Functions ------------------------

//called as soon as app loads
init()

function init() {
  //assign skills to array -- where skill var gets assigned
  skills = []
  //then want to call render function
  render()
}

//event listener function 4 add skill button
function handleAddSkill() {
  //to test if works
  // alert('add skill button clicked')
  //store value from input tag inside a local variable
  const skill = $input.val()
  //check to make sure we have skill data
  // test code: if(skill) alert('Skill data was present')
  // test code: else alert('No skill provided')
  if (skill) {
    //create UI for skill -whole html line
    const $skill = $(`<li><span>X</span>${skill}</li>`)
    //push the skill ui into the skills list array
    skills.push($skill)
    //clear the input tag value - we have to call it in JQ
    $input.val("")
    //call render
    render()
    //if no skill then exit out of function, clean exit
  } else return
}

//event listener function for ul tag
//only if li clicked

function handleDelete() {
  //to test if works
  // alert("elements in ul tag clicked")
  // console.log($(this)) = span
  $(this).closest('li').remove()
  //***/need to remove li from skills array too 
  let currentSkill = $(this).closest('li')
  skills.pop(currentSkill)

  //bonus - maybe add button for prev skills to add?
  // let prevSkills = []
  // prevSkills.push(currentSkill)
}

//xfer memory( state of app) to DOM -XF list of skills to DOM
function render() {
  // render() - take the list of skills in the skill array
  //and add them to the ul tag
  // console.log(skills) - to test
  //html method in JQuery
  //if no skills array (length) is grester than 0/ (!skills) then we will add margin bc the input and h1 no space without li's
  if (!skills.length) $ul.css("margin-bottom", "30px")
  else $ul.css("margin-bottom", "0px")

  $ul.html(skills)
}

//BONUS



// think out what are steps for:
// 1. type text in input
// 2. click on add skill button
// 3. grabbing text from input button
// 4. creating a piece of user intergace with it
// 5/ insert user interface into a list we can then xfer to DOM
