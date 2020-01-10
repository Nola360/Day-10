// Mouse Events

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');


// Click
// clearBtn.addEventListener('click', runEvent);

// Double Click event
clearBtn.addEventListener('dblclick', runEvent);

// Mouse Down
clearBtn.addEventListener('mousedown', runEvent);

// Mouse Enter - active on parent element
clearBtn.addEventListener('mouseenter', runEvent);

// Mouse Leave - active on parent element
clearBtn.addEventListener('mouseleave', runEvent);

// Mouseover - active on element
clearBtn.addEventListener('mouseover', runEvent);

// Mouseout - active on element
clearBtn.addEventListener('mouseout', runEvent);

// Mouse move - active anywhere inside element
card.addEventListener('mousemove', runEvent);


// Event Handler
function runEvent(e) {
  console.log(`event Type: ${e.type}`);

  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY}, 40)`
}