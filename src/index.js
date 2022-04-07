document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    buildListItem(e.target.newTaskDescription.value)
  })
});


function buildListItem(item) {
  let li = document.createElement('li')
  li.textContent = item
  document.querySelector('#tasks').appendChild(li)
}