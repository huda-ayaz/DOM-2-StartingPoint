// Please feel free to change the JS as you see fit! This is just a starting point.

const root = document.getElementById("root");
root.addEventListener("click", (event) => {
  console.log(event.target.tagName);
  console.log(event.target);
});

const table = document.getElementsByTagName("table")[0];
const rows = table.rows.length;
const columns = table.rows[0].cells.length;

// Add rows to grid
const addButton = document.getElementById("add-row");
addButton.addEventListener("click", () => {
  table.insertRow(rows - 1);
  for(let i = 0; i < columns; i++) {
    table.rows[rows - 1].insertCell(0);
  }
})

