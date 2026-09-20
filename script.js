//your code here!
const list = document.getElementById("infi-list");
let itemCount = 1;

// Function to add list items
function addItems(count) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${itemCount++}`;
    list.appendChild(li);
  }
}

// Add 10 items by default
addItems(10);

// Listen for scroll event on the list container
list.addEventListener("scroll", () => {
  // Check if user reached the bottom of the list
  if (list.scrollTop + list.clientHeight >= list.scrollHeight - 1) {
    addItems(2); // Add 2 more items
  }
});
