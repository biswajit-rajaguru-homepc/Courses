const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const addNewTodoDialog = document.getElementById('add-new-todo-dialog')
const submitDialogButton = document.getElementById('submit-dialog-button')
let noOfTODOs = 0, noOfUncheckedTODOs = 0
const todoList = document.getElementById('todo-list')

function submitDialog() {
  addNewTodoDialog.close()

}

function updateUncheckedCount(event) {
  if (event.target.checked == true) {
    noOfUncheckedTODOs--
  } else noOfUncheckedTODOs++
  document.getElementById('unchecked-count').innerHTML = noOfUncheckedTODOs.toString()

}

function createNewTodo() {
  const todo = document.getElementById('new-todo').value
  document.getElementById('new-todo').value = ""
  const newListItem = document.createElement("li")
  const todoLabel = document.createElement("LABEL")
  const todoText = document.createTextNode(todo)
  const isChecked = document.createElement('INPUT')
  const deleteButton = document.createElement('BUTTON')
  deleteButton.innerHTML = "Delete"
  
  todoLabel.innerHTML = todo
  
  isChecked.setAttribute('type', 'checkbox')
  isChecked.checked = false
  isChecked.addEventListener('click', updateUncheckedCount)
  
  deleteButton.addEventListener('click', function () {
    noOfTODOs--
    if (newListItem.children[1].checked == false) noOfUncheckedTODOs--
    
    todoList.removeChild(newListItem)
    
    document.getElementById('item-count').innerHTML = noOfTODOs.toString()
    document.getElementById('unchecked-count').innerHTML = noOfUncheckedTODOs.toString()

  })


  newListItem.appendChild(todoLabel)
  newListItem.appendChild(isChecked)
  newListItem.appendChild(deleteButton)

  todoList.appendChild(newListItem)
  noOfTODOs++
  noOfUncheckedTODOs++
  document.getElementById('item-count').innerHTML = noOfTODOs.toString()
  document.getElementById('unchecked-count').innerHTML = noOfUncheckedTODOs.toString()



}
submitDialogButton.addEventListener('click', submitDialog)
addNewTodoDialog.addEventListener('close',createNewTodo)

function newTodo() {
  //alert('New TODO button clicked!')
  if (typeof addNewTodoDialog.showModal === "function") {
    addNewTodoDialog.showModal()
  } else {
    console.log('Dialog s not supported')
  } 
  /*cntr++;
  
  const todoItem = {}
  todoItem['index'] = cntr
  todoItem['isChecked'] = false
  todoItem['name'] = 
  
  todoList[cntr] = 
  */
  
}


