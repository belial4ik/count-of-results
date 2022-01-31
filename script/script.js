const shopName = document.querySelector("#shop-name")
const shopWeight = document.querySelector("#shop-weight")
const shopPosition = document.querySelector("#shop-position")
const addNewListButton = document.querySelector("#add-button")
const container = document.querySelector(".container")
const clearBtn = document.querySelector("#clearBtn")

const countSpan = document.querySelector("#count")
const countOfWeightSpan = document.querySelector("#count-of-weight")
const countOfPositionsSpan = document.querySelector("#count-of-positions")

let x = 0
let w = 0
let p = 0

count.innerText = x
countOfWeightSpan.innerText = w
countOfPositionsSpan.innerText = p

let arrayData = []

let objectData = {}

let getStoreData = JSON.parse(localStorage.getItem("list"))

function loadFromLocalStorage() {
  if (getStoreData) {
    getStoreData.forEach(({totalCount,nameOfMagazine,countOfWeight,countOfPositions}) => {
      const div = document.createElement("div")
      const span1 = document.createElement("span")
      const span2 = document.createElement("span")
      const span3 = document.createElement("span")
      const button = document.createElement("button")

      span1.className = "column"
      span2.className = "column"
      span3.className = "column"
      div.className = "d-flex"
      button.className = "button"
      button.innerText = "❌"
      container.appendChild(div)
      div.append(span1)
      div.append(span2)
      div.append(span3)
      div.append(button)
      
      span1.innerText += nameOfMagazine
      span2.innerText += countOfWeight
      span3.innerText += countOfPositions
      console.dir(span1)
      console.dir(span2)
      console.dir(span3)

      w += +span2.outerText
      p += +span3.outerText

      // console.log(countOfWeight);
      // console.log(countOfPositions);

      countSpan.innerText = getStoreData.length
      countOfWeightSpan.innerText = w
      countOfPositionsSpan.innerText = p      

      button.addEventListener("click", () => {
        const outerTextSpan2 = span2.outerText;
        const outerTextSpan3 = span3.outerText;        
        
        w -= +outerTextSpan2
        p -= +outerTextSpan3

        countSpan.innerText = getStoreData.length -= 1
        countOfWeightSpan.innerText = w
        countOfPositionsSpan.innerText = p

        container.removeChild(div)

        // getStoreData.filter((el,id) => {
        //   if(el.id === id) {
            
        //   }
        // })
      })
    })
  }  
}

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
  // console.log(getStoreData.length);
// 
  // let aaa = getStoreData.length
  let newX = getStoreData == null ? x += 1 : getStoreData.length + 1
  w += +valueWeight
  p += +valuePositions

  countSpan.innerText = newX
  countOfWeightSpan.innerText = w
  countOfPositionsSpan.innerText = p

  objectData = {
    totalCount:  newX,
    nameOfMagazine: valueShopName.toUpperCase(),
    countOfWeight: +valueWeight,
    countOfPositions: +valuePositions
  }

  span1.className = "column"
  span2.className = "column"
  span3.className = "column"
  div.className = "d-flex"
  button.className = "button"
  button.innerText = "❌"
  
  span1.innerText = valueShopName
  span2.innerText = valueWeight
  span3.innerText = valuePositions

  container.append(div)
  div.append(span1)
  div.append(span2)
  div.append(span3)
  div.append(button)
  
  getStoreData === null ? arrayData.push(objectData) : getStoreData.push(objectData)
  
  let store = getStoreData === null ? JSON.stringify(arrayData) : JSON.stringify(getStoreData)
  localStorage.setItem("list", store)

  button.addEventListener("click", () => {
    const outerTextSpan2 = span2.outerText;
    const outerTextSpan3 = span3.outerText;
    x--
    w -= +outerTextSpan2
    p -= +outerTextSpan3

    countSpan.innerText = x
    countOfWeightSpan.innerText = w
    countOfPositionsSpan.innerText = p

    container.removeChild(div)

  })
}

clearBtn.addEventListener("click", () => {
  localStorage.clear()
  location.reload()
})

loadFromLocalStorage()
