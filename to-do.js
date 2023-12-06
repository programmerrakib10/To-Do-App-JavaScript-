let form = document.querySelector(".new-task-form")
let taskInput = document.getElementById("new-task-input")
let taskLists = document.getElementById("tasks");

form.addEventListener("submit", function(event) {
    event.preventDefault()

    if (taskInput.value) {

        let task = taskInput.value;

        console.log(task)
    // creating task div
        let taskEl = document.createElement("div")
        taskEl.classList.add("task")
    // creating content div
        let taskElContent = document.createElement("div")
        taskElContent.classList.add("content")
    
        //inserting content div to task
        taskEl.appendChild(taskElContent);
    
        //create Input
        let taskElInput = document.createElement("input");
        taskElInput.classList.add("text")
        taskElInput.value = task;
        taskElInput.setAttribute("readonly", "readonly")
    
        // Inserting input to content div 
        taskElContent.appendChild(taskElInput);
    
        let taskElAction = document.createElement("div")
        taskElAction.classList.add("actions")
    
        taskElContent.appendChild(taskElAction);
    
         //button add
    
    
        let taskElEditBtn = document.createElement("button");
        taskElEditBtn.classList.add("edit")
        taskElEditBtn.innerText = "Edit";
    
        let taskElDeleteBtn = document.createElement("button");
        taskElDeleteBtn.classList.add("delete")
        taskElDeleteBtn.innerText = "Delete";
    
        let taskElCompleteBtn = document.createElement("button");
        taskElCompleteBtn.classList.add("complete")
        taskElCompleteBtn.innerText = "Complete";
    
        //link button with div
        taskElAction.appendChild(taskElEditBtn)
        taskElAction.appendChild(taskElDeleteBtn)
        taskElAction.appendChild(taskElCompleteBtn)
    
        //Insering task element div to tasks div
        taskLists.appendChild(taskEl);
        taskInput.value = " ";
//Edit Button work start
        taskElEditBtn.addEventListener("click", function () {
            if (taskElEditBtn.innerText.toLowerCase() === "edit") {
                taskElEditBtn.innerText = "Save";
                taskElInput.removeAttribute("readonly");
                taskElInput.focus();
            } else {
                taskElEditBtn.innerText = "Edit";
                taskElInput.setAttribute("readonly", "readonly");
            }
        });
 //Edit button work End
 // Complete button work Start 
 taskElCompleteBtn.addEventListener("click", function () {
    if (taskElCompleteBtn.innerText.toLowerCase() === "mark complete") {
        taskElCompleteBtn.innerText = "Completed";
        taskElInput.classList.add("mark-completed");
        taskElCompleteBtn.style.backgroundColor = "black";
        
    } else {
        taskElCompleteBtn.innerText = "Mark Complete";
        taskElInput.classList.remove("mark-completed");
        taskElCompleteBtn.style.backgroundColor = "rgb(11, 167, 11)";
    }
});
// Complete button work End 
// Delete Button work Start 
 taskElDeleteBtn.addEventListener("click", function (e) {
    taskLists.removeChild(taskEl)
 })

    } else {
        alert("Input value (Programmer Rakib)")
    }
   
});

// document.getElementById("new-task-submit") .addEventListener("click", function (event) {
//     console.log("Event hocce :", event);
// })