let addBtn
let textTask
let newTask
let ulList

const main = () => {
	prepareDOMElements()
	prepareDOMEvents()
}

const prepareDOMElements = () => {
	addBtn = document.querySelector('.addBtn')
	textTask = document.querySelector('.textTask')
	ulList = document.querySelector('.todolist ul')
}

const prepareDOMEvents = () => {
	addBtn.addEventListener('click', addNewTask)
}

const addNewTask = () => {
	newTask = document.createElement('li')
	newTask.textContent = textTask.value
	ulList.append(newTask)
}

document.addEventListener('DOMContentLoaded', main)