/*
## 🧠 Task 1: Click Counter
**Goal:** Create a button that increases a counter every time it's clicked.

- Add a button to your HTML.
- Display a number that starts at 0.
- When the button is clicked, increase the number by 1.
*/

const para = document.querySelector('.para');
const counterBtn = document.querySelector('.counterBtn');
const resetBtn = document.querySelector('.resetBtn');
const decrementBtn = document.querySelector(".decrementBtn");
const actionText = document.querySelector(".actionText");
const ul = document.querySelector("ul");

let count = 0;
const clickBtn = [];
const timeHistory = [];

function renderHistory() {
  const date = new Date();
  ul.innerHTML = "";
  clickBtn.forEach((val, index) => {
    const li = document.createElement('li')
    const span = document.createElement('span');
    
    li.innerHTML = val;
    timeHistory.push(date.toLocaleTimeString());
    span.innerHTML = ` @ ${timeHistory[index]}`;
    li.append(span);
    ul.append(li);
  })
}

const renderCount = () => {
  para.innerHTML = count;
  renderHistory();
}

const increaseCount = () => {
  if (count === 10) {
    actionText.innerHTML = "Maximum count Limit";
    return;
  }
  
  count++;
  clickBtn.push(`+1 - ${count}`);
  renderCount();
  actionText.innerHTML = "You increased the count";
}


const resetCount = () => {
  if (count === 0) {
    actionText.innerHTML = "Counter is already at 0";
    return;
  }
  
  if (count > 0) {
    clickBtn.push("0");
  }
  
  count = 0;
  renderCount();
  actionText.innerHTML = "You reset the count";
}

const decreaseCount = () => {
  if (count === 0) {
    actionText.innerHTML = "Minimum count Limit";
    return;
  }
  
  count--;
  clickBtn.push(`-1 - ${count}`);
  renderCount();
  actionText.innerHTML = "You decreased the count";
}

counterBtn.addEventListener("click", increaseCount);

resetBtn.addEventListener("click", resetCount);

decrementBtn.addEventListener("click", decreaseCount);

renderCount();
