// KEYBOARD & INPUT EVENTS

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// Clears input value
taskInput.value = '';

// form.addEventListener('submit', runEvent);

// taskInput.addEventListener('keydown', runEvent);

// taskInput.addEventListener('keyup', runEvent);

// taskInput.addEventListener('keypress', runEvent);

// taskInput.addEventListener('focus', runEvent);

// taskInput.addEventListener('blur', runEvent);

// taskInput.addEventListener('cut', runEvent);

// taskInput.addEventListener('paste', runEvent);

// Input
// taskInput.addEventListener('input', runEvent);

// Change Event
select.addEventListener('change', runEvent);
function runEvent(e) {
  console.log(`Event Type: ${e.type}`);

  console.log(e.target.value);

  // Outputs value in input box when keydown
  // heading.innerText = e.target.value;

  // Get the value of the input
  // console.log(taskInput.value);
  e.preventDefault();

}