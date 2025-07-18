/* Get the input field where users type tasks */
const inputBox = document.getElementById("input-box");

/* Get the container (e.g., <ul>) where tasks will be displayed */
const listContainer = document.getElementById("list-container");

/* Function to add a new task to the list */
function addTask() {
    /* Check if the input is empty */
    if (inputBox.value === '') {
        /* Show alert if no text is entered */
        alert("you must write something");
    } else {
        /* Create a new <li> element for the task */
        let li = document.createElement("li");
        /* Set the <li> content to the input text */
        li.innerHTML = inputBox.value;
        /* Add the <li> to the list container */
        listContainer.appendChild(li);
        /* Create a <span> for the delete button */
        let span = document.createElement("span");
        /* Set the <span> to show a × symbol (Unicode) */
        span.innerHTML = "\u00d7";
        /* Add the delete button to the <li> */
        li.appendChild(span);
    }
    /* Clear the input field after adding the task */
    inputBox.value = '';
    /* Save the updated list to localStorage */
    saveData();
}

/* Add click event listener to the list container */
listContainer.addEventListener("click", function(e) {
    /* If a <li> is clicked, toggle its 'checked' class */
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        /* Save the list after marking/unmarking */
        saveData();
    }
    /* If a <span> (delete button) is clicked, remove its parent <li> */
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        /* Save the list after deletion */
        saveData();
    }
}, false);

/* Function to save the list to localStorage */
function saveData() {
    /* Store the list container's HTML in localStorage under key 'data' */
    localStorage.setItem("data", listContainer.innerHTML);
}

/* Function to load and display saved tasks */
function showTask() {
    /* Set the list container's HTML to the saved data from localStorage */
    listContainer.innerHTML = localStorage.getItem("data");
}

/* Call showTask to load saved tasks when the page loads */
showTask();