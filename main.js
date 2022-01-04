
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
            <div class="text">
                ${text}
            </div>
            <div class="buttons">
                <button class="edit">
                    edit
                </button>
                <button class="delete">
                    delete
                </button>
            </div>
        </div>
    `
    todo();
})

function todo() {
    const todo = document.querySelectorAll(".todo");
    const editButtons = document.querySelectorAll(".edit");
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
}