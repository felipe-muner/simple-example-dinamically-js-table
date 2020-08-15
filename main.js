let fruitArray = [
  { fruit: "apple", price: 4 },
  { fruit: "mango", price: 5 },
  { fruit: "banana", price: 3 },
];

function drawTable() {
  // sortArray();

  let tbodyRef = document.getElementById("fruit-tbody");
  while (tbodyRef.hasChildNodes()) {
    tbodyRef.removeChild(tbodyRef.firstChild);
  }

  fruitArray.forEach((f) => {
    let newRow = tbodyRef.insertRow();
    let cellFruit = newRow.insertCell(0);
    let cellPrice = newRow.insertCell(1);
    cellFruit.innerHTML = f.fruit;
    cellPrice.innerHTML = f.price;
  });
}
drawTable();

function cleanForm() {
  document.getElementById("fruit").value = "";
  document.getElementById("price").value = "";
}

function validateInput() {
  let fruit = document.getElementById("fruit").value;
  let price = document.getElementById("price").value;

  if (!fruit || !price) {
    alert("The fields FRUIT and PRICE are required.");
    return false;
  } else {
    return true;
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

function sortArray() {
  fruitArray.sort(function (a, b) {
    if (a.price < b.price) return 1;
    if (a.price > b.price) return -1;
    if (a.fruit < b.fruit) return 1;
    if (a.fruit > b.fruit) return -1;
    return 0;
  });
}

function handleAddFruit(e) {
  e.preventDefault();

  let isValid = validateInput();

  if (isValid) {
    addFruit();
    cleanForm();
    sortArray();
    drawTable();
  }
}
