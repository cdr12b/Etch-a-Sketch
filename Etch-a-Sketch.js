const container = document.querySelector('.container');
let size = 16*16

//this function will be used to create the 16x16 grid & turn black on mouseover
for (i=0; i<size; i++) {
  const newDiv = document.createElement('div');
  newDiv.className = 'grid';
  newDiv.addEventListener('mouseover',(e)=> {
    e.target.style.backgroundColor = 'black';
  });
  container.appendChild(newDiv);
}
