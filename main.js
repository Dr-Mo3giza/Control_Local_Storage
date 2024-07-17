// Creating some variables out of main components
let inputBox = document.getElementById("text-box");
let inputValue = "";
let allBtns = document.querySelectorAll("button");
let checkBtn = document.querySelector(".check");
let addBtn = document.querySelector(".add");
let deleteBtn = document.querySelector(".delete");
let showBtn = document.querySelector(".show");
let previewBox = document.querySelector(".preview");

// Adding an Event Listener to each button
for (let btn of allBtns) {
  btn.addEventListener("click", (e) => {
    inputValue = inputBox.value;
    let clickedBtn = e.target;

    // Checking if the input box is empty
    if (!inputValue && clickedBtn !== showBtn) {
      previewBox.textContent = "Input Can't Be Empty";
      return;
    }

    // Check if the item exists in the local storage (Check Button)
    if (clickedBtn === checkBtn && localStorage.getItem(inputValue) !== null) {
      previewBox.textContent = `Found Local Storage Item Called ${inputValue}`;
    } else if (clickedBtn === checkBtn && !localStorage.inputValue) {
      previewBox.textContent = `No Local Storage Item With The Name ${inputValue}`;
    }

    // Add item to the local storage (Add Button)
    if (clickedBtn === addBtn) {
      localStorage.setItem(inputValue, "");
      previewBox.textContent = `Local Storage Item ${inputValue} Added`;
      // Clearing input box after adding
      inputBox.value = "";
    }

    // Delete an item if it's found in the local storage (Delete Button)
    if (clickedBtn === deleteBtn && localStorage.getItem(inputValue) !== null) {
      localStorage.removeItem(inputValue);
      previewBox.textContent = `Local Storage Item ${inputValue} Deleted`;
      // Clearing input box after deleting
      inputBox.value = "";
    } else if (clickedBtn === deleteBtn && localStorage.getItem(inputValue) === null) {
      previewBox.textContent = `No Local Storage Item With The Name ${inputValue}`;
    }

    // Show all items found in the local storage (Show Button)
    if (clickedBtn === showBtn && localStorage.length > 0) {
      // Clearing input box from any previous results
      previewBox.textContent = "";
      // using object.entries is for the challenge purpose, there are better methods to do the same thing
      let storageList = Object.entries(localStorage);
      for (let [key, value] of storageList) {
        previewBox.innerHTML += `${key} ${value} <br>`;
      }
      return;
    } else if (clickedBtn === showBtn && localStorage.length === 0) {
      previewBox.textContent = `Local Storage Is Empty`;
    }
  });
}
