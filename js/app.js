//Problem: user interaction doesn't provide desired results
//Solution: add interactivity so the user can manage daily tasks
var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks
//Add a new task
var addTask = function() {
	//when button pressed
	//create a new list item with the text from #new-task:
		//input {checkbox}
		//label
		//input {text}
		//button.edit
		//button.delete
		//each element needs to be modified and appended
}

//Edit existing tasks
var editTask = function() {
	//when edit button pressed
		//if the parent has the class .editMode
			//switch from .editMode
			//label text become the input's value
		//else 
			//switch to .editMode
			//input value becomes the label's text

		//toggle .editMode
}

//Delete existing task
var deleteTask = function() {
	//when the delete button is pressed
		//remove parent list item from ul
}

//Mark tasks complete
var taskCompleted = function() {
	//when the checkox is checked
		//append the task list item to the #completed-tasks
}

//Mark a task as incomplete
var taskIncomplete = function() {
	//when the checkbox is unchecked
		//append the task list item to the #incomplete-tasks
}