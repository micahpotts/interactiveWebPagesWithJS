//Problem: user interaction doesn't provide desired results
//Solution: add interactivity so the user can manage daily tasks

//Add a new task
	//when button pressed
	//create a new list item with the text from #new-task:
		//input {checkbox}
		//label
		//input {text}
		//button.edit
		//button.delete
		//each element needs to be modified and appended

//Edit existing tasks
	//when edit button pressed
		//if the parent has the class .editMode
			//switch from .editMode
			//label text become the input's value
		//else 
			//switch to .editMode
			//input value becomes the label's text

		//toggle .editMode

//Delete existing task
	//when the delete button is pressed
		//remove parent list item from ul

//Mark tasks complete
	//when the checkox is checked
		//append the task list item to the #completed-tasks

//Mark a task as incomplete
	//when the checkbox is unchecked
		//append the task list item to the #incomplete-tasks