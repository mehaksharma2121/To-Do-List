const todoForm= document.getElementById('todoForm');
const todoInput= document.getElementById('todoInput');
const todoList= document.getElementById('todoList');

todoForm.addEventListener('submit', function(event){
    event.preventDefault();
    const text= todoInput.value;
    // console.log(text);

    if (text===''){
        alert("Enter input")
        return;
    }
    const listItem= document.createElement('li');
    listItem.textContent= text;
    const deleteButton= document.createElement("button")
    deleteButton.textContent= "Remove";
    deleteButton.onclick= function(){
        todoList.removeChild(listItem);
    }

    listItem.appendChild(deleteButton)

    todoList.appendChild(listItem);
    todoInput.value='';

})
todoList.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){  
        e.target.classList.toggle("checked");
        }
})