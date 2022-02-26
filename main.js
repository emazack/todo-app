const input = document.querySelector(".input-field");
const enterButton = document.querySelector(".enter-button");
const list = document.querySelector(".todos-container");


// add todo
enterButton.addEventListener("click", function() {
    let text = input.value;
    list.innerHTML += 
    `
    <div class="todo">
    <div class="check">
    <input type="checkbox" name="check-todo">
    </div>
    <div class="text">${text}</div>
    <div class="buttons">
    <button class="edit">
    edit
    </button>
    <button class="save hidden">
    save
    </button>
    <button class="delete">
    delete
    </button>
    </div>
    </div>
    `;
    todo();
})

function todo() {
    //const todo = document.querySelectorAll(".todo");
    const editButtons = document.querySelectorAll(".edit");
    const saveButtons = document.querySelectorAll(".save");
    const deleteButtons = document.querySelectorAll(".delete");
    
    // remove todo
    deleteButtons.forEach(singleButton => {        
        singleButton.addEventListener("click", function (e) {
            let clickedButton = e.currentTarget;
            let correspondingTodo = clickedButton.closest(".todo");
            correspondingTodo.remove();
        })
    });
    
    // edit todo
    editButtons.forEach(singleButton => {        
        singleButton.addEventListener("click", function (e) {
            let clickedButton = e.currentTarget;
            let saveButton = clickedButton.nextElementSibling;
            let divToEdit = clickedButton.closest(".buttons").previousElementSibling;
            let textToEdit = divToEdit.innerHTML;
            divToEdit.outerHTML = 
            `
            <input class="text-edit" type="text" value="${textToEdit}">
            `;
            saveButton.classList.remove("hidden");
            clickedButton.classList.add("hidden");
        })
    });
    
    //save todo
    saveButtons.forEach(singleButton => {        
        singleButton.addEventListener("click", function (e) {
            let clickedButton = e.currentTarget;
            let editButton = clickedButton.previousElementSibling;
            let inputToSave = clickedButton.closest(".buttons").previousElementSibling;
            let textToSave = inputToSave.value;
            inputToSave.outerHTML = 
            `
            <div class="text">
            ${textToSave}       
            </div>
            `;
            editButton.classList.remove("hidden");
            clickedButton.classList.add("hidden");
        })
    });
}