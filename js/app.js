let todoSubmit = document.querySelector("#liveToastBtn")
todoSubmit.addEventListener("click", newElement)

const todoListArray = []

function newElement(e) {
    let todoList = JSON.parse(localStorage.getItem("toDo"));
    let todoInput = document.querySelector("#task")
    e.preventDefault()
    if (!todoInput.value) {
        $('#liveToast-error').toast('show')
    }
    else if (todoInput.value.length < 5) {
        $('#liveToast-warning').toast('show')
    } else {
        if (todoList) {
            let todoList = JSON.parse(localStorage.getItem("toDo"));
            todoList.push(`${todoInput.value}`)
            localStorage.setItem("toDo", JSON.stringify(todoList))
            todoInput.value = ""
            $('#liveToast-success').toast('show')
            window.location.reload()
        } else {
            todoListArray.push(`${todoInput.value}`)
            localStorage.setItem("toDo", JSON.stringify(todoListArray))
            todoInput.value = ""
            window.location.reload()
        }

    }
}

function removeElement(erase) {
    erase.remove();
    eraseStrorage(erase);
}


let todoList = JSON.parse(localStorage.getItem("toDo"));
let ulDOM = document.querySelector("#list")
let x = `<span onclick="removeElement(parentNode)" class="close">&times;</span>`
if (todoList) {
    todoList.forEach((e, index) => {
        const liDOM = document.createElement("li")
        liDOM.innerHTML = todoList[index] + x
        ulDOM.appendChild(liDOM)
        liDOM.addEventListener("click", checkedLi)
    })
}




function eraseStrorage(erase) {
    let toDoList = JSON.parse(localStorage.getItem("toDo"));
    if (toDoList.includes(erase.firstChild.textContent) == true) {
        let indexbul = toDoList.findIndex(e =>
            e == erase.firstChild.textContent
        );
        toDoList.splice(indexbul, 1);
        localStorage.setItem("toDo", JSON.stringify(toDoList));
    }
}


function checkedLi() {
    const liDOM = document.createElement("li")
    liDOM.className == "checked" ? liDOM.classList.remove("checked") : liDOM.classList.add("checked")

}

let liElement = document.querySelectorAll('li');
for (let i = 0; i < liElement.length; i++) {
    liElement[i].addEventListener("click", function () {
        liElement[i].className == "checked" ? liElement[i].classList.remove("checked") : liElement[i].classList.add("checked")
    })
}





