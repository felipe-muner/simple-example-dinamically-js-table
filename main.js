let fruitArray = [
  { fruit: "apple", price: 4 },
  { fruit: "mango", price: 5 },
  { fruit: "banana", price: 3 },
];

drawTable();
function drawTable() {
  let tbodyRef = document.getElementById("fruit-tbody");
  fruitArray.forEach((f) => {
    let newRow = tbodyRef.insertRow();
    let cellFruit = newRow.insertCell(0);
    let cellPrice = newRow.insertCell(1);
    cellFruit.innerHTML = f.fruit;
    cellPrice.innerHTML = f.price;
  });
}

// Append a text node to the cell
var newText = document.createTextNode("New row");

function validateInput() {
  let fruit = document.getElementById("fruit").value;
  let price = document.getElementById("price").value;
  if (!fruit || !price) {
    alert("The fields FRUIT and PRICE are required");
    return false;
  }
}

function addFruit(e) {
  let fruit = document.getElementById("fruit").value;
  let price = +document.getElementById("price").value;
  fruitArray.push({
    fruit,
    price,
  });
}

function handleAddFruit(e) {
  e.preventDefault();
  validateInput();
  addFruit();

  fruitArray.sort(function (a, b) {
    if (a.price < b.price) return 1;
    if (a.price > b.price) return -1;
    if (a.fruit < b.fruit) return 1;
    if (a.fruit > b.fruit) return -1;
    return 0;
  });

  console.log(fruitArray);
}
