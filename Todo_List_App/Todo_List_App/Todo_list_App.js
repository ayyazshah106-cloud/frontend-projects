/* ================= REFERENCES ================= */
// Input field reference
const inputValue = document.getElementById("input_value");

// Container where todo items will be rendered
const TodoMainElem = document.querySelector(".Todo_list_elem");


/* ================= LOCAL STORAGE ================= */

// Get saved todos from localStorage (or empty array if none exist)
const getDataFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("MyTodoData")) || [];
};

// Save updated todo list to localStorage
const updateLocalStorage = (data) => {
  localStorage.setItem("MyTodoData", JSON.stringify(data));
};

// Initial todo list state from localStorage
let LocalTodoList = getDataFromLocalStorage();


/* ================= CREATE TODO ELEMENT ================= */

// Function to create and render a single todo item
const addDynamicElem = (task) => {
  const divElem = document.createElement("div");
  divElem.classList.add("main_todo_div");

  divElem.innerHTML = `
    <input type="checkbox" class="todo-checkbox" ${task.completed ? "checked" : ""}>
    
    <li style="text-decoration: ${task.completed ? "line-through" : "none"};">
      ${task.text}
    </li>

    <button class="deleteBtn">Delete</button>
  `;

  TodoMainElem.append(divElem);
};


/* ================= DISPLAY TODOS ON PAGE LOAD ================= */

// Render all todos from localStorage when page loads
const showTodoData = () => {
  TodoMainElem.innerHTML = ""; // clear existing UI

  LocalTodoList.forEach((task) => {
    addDynamicElem(task);
  });
};

// Initial render call
showTodoData();


/* ================= ADD NEW TODO ================= */

// Add new todo item
const addTodoList = (e) => {
  e.preventDefault();

  const text = inputValue.value.trim(); // remove extra spaces
  inputValue.value = ""; // clear input field

  // Ignore empty input
  if (text === "") return;

  // Prevent duplicate todos
  if (LocalTodoList.some(task => task.text === text)) return;

  // Create new task object
  const newTask = {
    text: text,
    completed: false
  };

  // Add to array
  LocalTodoList.push(newTask);

  // Update storage + UI
  updateLocalStorage(LocalTodoList);
  addDynamicElem(newTask);
};

// Add button click event
document.querySelector(".btn").addEventListener("click", addTodoList);


/* ================= DELETE & COMPLETE HANDLING ================= */

// Event delegation for delete & checkbox actions
TodoMainElem.addEventListener("click", (e) => {
  const target = e.target;

  /* ---------- DELETE TODO ---------- */
  if (target.classList.contains("deleteBtn")) {
    const parentElem = target.parentElement;
    const text = parentElem.querySelector("li").innerText;

    // Remove from array
    LocalTodoList = LocalTodoList.filter(task => task.text !== text);

    // Update storage
    updateLocalStorage(LocalTodoList);

    // Remove from UI
    parentElem.remove();
  }

  /* ---------- TOGGLE COMPLETE ---------- */
  if (target.classList.contains("todo-checkbox")) {
    const liElem = target.nextElementSibling;
    const text = liElem.innerText;

    // Update completed status in array
    LocalTodoList = LocalTodoList.map(task => {
      if (task.text === text) {
        task.completed = target.checked;
      }
      return task;
    });

    // Save updated data
    updateLocalStorage(LocalTodoList);

    // Update UI style
    liElem.style.textDecoration = target.checked ? "line-through" : "none";
  }
});


/* ================= ENTER KEY SUPPORT ================= */

// Allow adding todo using Enter key
inputValue.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTodoList(e);
  }
});
