const shopName = document.querySelector("#shop-name")
const shopWeight = document.querySelector("#shop-weight")
const shopPosition = document.querySelector("#shop-position")
const addNewListButton = document.querySelector("#add-button")
const container = document.querySelector(".container")

const count = document.querySelector("#count")
const countOfWeight = document.querySelector("#count-of-weight")
const countOfPositions = document.querySelector("#count-of-positions")

let c12 = 0
let w = 0
let p = 0

count.innerText = c12
countOfWeight.innerText = w
countOfPositions.innerText = p

addNewListButton.addEventListener('click', (e) => {
  if (shopWeight.value === '' && shopPosition.value === '') {
    alert('введите что нибудь')
  } else {
    createDeleteElement(shopName.value,shopWeight.value,shopPosition.value) 
    shopName.value = '';
    shopWeight.value = '';
    shopPosition.value = ''
  }
})

function createDeleteElement(valueShopName,valueWeight,valuePositions) {  
  const div = document.createElement("div")
  const span1 = document.createElement("span")
  const span2 = document.createElement("span")
  const span3 = document.createElement("span")
  const button = document.createElement("button")
  console.log(c12);

  c12 += 1
  w += +valueWeight
  p += +valuePositions

  count.innerText = c12
  countOfWeight.innerText = w
  countOfPositions.innerText = p

  console.log(valueShopName);
  console.log(valueWeight);
  console.log(valuePositions);

  span1.className = "column"
  span2.className = "column"
  span3.className = "column"
  div.className = "row"
  button.className = "button"
  button.innerText = "delete"
  
  span1.innerText = valueShopName
  span2.innerText = valueWeight
  span3.innerText = valuePositions

  container.append(div)
  div.append(span1)
  div.append(span2)
  div.append(span3)
  div.append(button)
}

