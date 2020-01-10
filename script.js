// Add event lister

// document.querySelector('.clear-tasks').addEventListener('click', function (e) {
//   console.log('Hello World!');

//   // e.preventDefault();
// });


// Another event listener
document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {

  let val;
  val = e;
  // Event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList

  // Event type
  val = e.type;

  // Timestamp
  val = e.timeStamp;


  // Get coordinates of event relative to the window

  val = e.clientY;
  val = e.clientX;

  // Get coordinates relative to element
  val = e.offsetY;
  val = e.offsetX;


  e.target.innerText = 'Click Now To Fast Forward!';
  console.log(val);
}

