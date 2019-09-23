const container = document.querySelector('#container');
var gridContainer = document.createElement('grid-container');

.gridContainer {
  display: grid;
  gridTemplateColumns: auto auto auto;
  backgroundColor: blue;
  padding: 10px;
}

.gridItem {
  backgroundColor: white;
  border: 1px solid;
  padding: 20px;
}

.div:hover {
  backgroundColor: blue;
}

//this variable will be used to create the 16x16 grid
var sketches = document.createDocumentFragment();
for (i=0; i<16; i++) {
  var newDiv = document.createElement('div');
  newDiv.className = 'grid-item';
  sketches.appendChild(newDiv);
}
gridContainer.appendChild(sketches);
