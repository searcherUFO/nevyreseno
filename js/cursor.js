//initialization of variables to stocks positions X and Y of cursor, the timeout value and identify cursor element as a constant to use it after

let cursorX = 0;
let cursorY = 0;
let timeout = null;
const cursor = document.getElementById('cursor');

//Add an eventlistener to listen to the mouse movement and adapt the position of the cursor

document.addEventListener('mousemove', (event) => {

  //Initialization of constants for width and height of mouse cursor
  const cursorWidth = cursor.clientWidth;
  const cursorHeight = cursor.clientHeight;

  //To get the middle of mouse cursor, divide width and height by 2
  cursorX = event.clientX - cursorWidth / 2;
  cursorY = event.clientY - cursorHeight / 2;

  //Clear the timeout if it used before
  if (timeout !== null) {
    clearTimeout(timeout);
  }

  // if cursor don't move in 1000ms then translate it to be more visible and not behind cursor
  timeout = setTimeout(() => {
    //use a keyframes to translate it 40px under the mouse cursor
    const keyframes1 = {
      transform: `translate(${cursorX}px, ${cursorY + 40}px)`
    };
    //animate property can be use on the keyframes with a duration of 500ms and a fill forwards to stay in position after the animation
    cursor?.animate(keyframes1, {
      duration: 500,
      fill: 'forwards'
    });
  }, 1000);

  //Use a second keyframes to make a follow cursor to the mouse cursor
  const keyframes2 = {
    transform: `translate(${cursorX + 10}px, ${cursorY + 10}px)`
  };

  //animation of the last keyframes. With more duration the following cursor will be slower to join next position of cursor. Fill forwards is as before to conserv position after animation
  cursor?.animate(keyframes2, {
    duration: 800,
    fill: 'forwards'
  });
});

// Search of class of the hover element and add it to its attribute to begin the animation
document.addEventListener('mouseover', (event) => {

  //established a target hovered by the mouse
  const target = event.target;

  //if conditions to check the class contain in the object hovered and change attribute to cursor
  if (target.classList.contains('next-slide')) {
    cursor?.setAttribute('data-attribute', 'home');
  } 


  else if (target.classList.contains('homePage-logo')) {
    cursor?.setAttribute('data-attribute', 'link');
  } 
 

  // else if (target.classList.contains('prev-slide')) {
  //   cursor?.setAttribute('data-attribute', 'link');
  // } 
  // else if (target.classList.contains('prev-slide')) {
  //   cursor?.setAttribute('data-attribute', 'link');
  // } 
  // else if (target.classList.contains('prev-slide')) {
  //   cursor?.setAttribute('data-attribute', 'link');
  // } 




  else if (target.classList.contains('buttonTo')) {
    cursor?.setAttribute('data-attribute', 'button');
  } 
  else {
    cursor?.removeAttribute('data-attribute');
  }
});