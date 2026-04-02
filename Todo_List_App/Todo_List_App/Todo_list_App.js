<<<<<<< HEAD
//step1 store the references 

const inputValue = document.getElementById("input_value");
// const button = document.querySelector(".btn");
const TodoMainElem = document.querySelector(".Todo_list_elem");



const getDataFromLocalStroage = ()=>{
  return JSON.parse(localStorage.getItem('MyTodoData')); //pass the key  
}

const LocalTodoListAddlocalStrorage = (LocalTodoList)=>{
return localStorage.setItem("MyTodoData", JSON.stringify(LocalTodoList));
};


let LocalTodoList = getDataFromLocalStroage() || []; // global scop




const addDynamicElem = (currentTodo)=>{
const divElem = document.createElement("div");
divElem.classList.add("main_todo_div");

divElem.innerHTML = `<li> ${currentTodo}</li>
        <button class="deleteBtn">Delete</button>`;

    TodoMainElem.append(divElem); 
    
};

const showTodoData = ()=>{
console.log(LocalTodoList);

LocalTodoList.forEach((currentTodo)=>{
addDynamicElem(currentTodo);
});

};


 showTodoData(); //step 3 when page referesh data show

//<==============Remove data=================>

const removetodoElem = (e)=>
  {
    const todoElemremove = e.target;
  let todoListContent = todoElemremove.previousElementSibling.innerText;
  const perentElem = todoElemremove.parentElement;
 
  console.log(todoListContent);
  LocalTodoList = LocalTodoList.filter((curElem)=>{
  
  // console.log(curElem);
 return curElem !== todoListContent.toLowerCase();
  
});

 LocalTodoListAddlocalStrorage(LocalTodoList); 
 perentElem.remove();
console.log(LocalTodoList);
}



 TodoMainElem.addEventListener("click" , (e)=>
  {
e.preventDefault();
if(e.target.classList.contains("deleteBtn")){

  removetodoElem(e);
}

});



//step 3 addTodoList function call when button clicked 
const addTodoList = (e)=>{
 e.preventDefault();

//step4 pahlay data store hoga  then display  
// Local storage main add 

const TodoListValue = inputValue.value.trim(); //remove left right space

inputValue.value = "";

if(TodoListValue !== ""  && !LocalTodoList.includes(TodoListValue))
  {

LocalTodoList.push(TodoListValue); //push data in local storage
LocalTodoList =[...new Set(LocalTodoList)];  //Get Unique value
localStorage.setItem("MyTodoData",JSON.stringify(LocalTodoList)) //set data in local storage


// console.log(LocalTodoList);


const divElem = document.createElement("div");
divElem.classList.add("main_todo_div");

divElem.innerHTML = `<li> ${TodoListValue}</li>
        <button class="deleteBtn">Delete</button>`;

    TodoMainElem.append(divElem);    
}

};







// step 2 Button Event fire 
document.querySelector(".btn").addEventListener("click", (e)=>{
addTodoList(e);

});


// const deletetodo = (e)=>{
//   console.log(e.target);
// }







=======
//step1 store the references 

const inputValue = document.getElementById("input_value");
// const button = document.querySelector(".btn");
const TodoMainElem = document.querySelector(".Todo_list_elem");



const getDataFromLocalStroage = ()=>{
  return JSON.parse(localStorage.getItem('MyTodoData')); //pass the key  
}

const LocalTodoListAddlocalStrorage = (LocalTodoList)=>{
return localStorage.setItem("MyTodoData", JSON.stringify(LocalTodoList));
};


let LocalTodoList = getDataFromLocalStroage() || []; // global scop




const addDynamicElem = (currentTodo)=>{
const divElem = document.createElement("div");
divElem.classList.add("main_todo_div");

divElem.innerHTML = `<li> ${currentTodo}</li>
        <button class="deleteBtn">Delete</button>`;

    TodoMainElem.append(divElem); 
    
};

const showTodoData = ()=>{
console.log(LocalTodoList);

LocalTodoList.forEach((currentTodo)=>{
addDynamicElem(currentTodo);
});

};


 showTodoData(); //step 3 when page referesh data show

//<==============Remove data=================>

const removetodoElem = (e)=>
  {
    const todoElemremove = e.target;
  let todoListContent = todoElemremove.previousElementSibling.innerText;
  const perentElem = todoElemremove.parentElement;
 
  console.log(todoListContent);
  LocalTodoList = LocalTodoList.filter((curElem)=>{
  
  // console.log(curElem);
 return curElem !== todoListContent.toLowerCase();
  
});

 LocalTodoListAddlocalStrorage(LocalTodoList); 
 perentElem.remove();
console.log(LocalTodoList);
}



 TodoMainElem.addEventListener("click" , (e)=>
  {
e.preventDefault();
if(e.target.classList.contains("deleteBtn")){

  removetodoElem(e);
}

});



//step 3 addTodoList function call when button clicked 
const addTodoList = (e)=>{
 e.preventDefault();

//step4 pahlay data store hoga  then display  
// Local storage main add 

const TodoListValue = inputValue.value.trim(); //remove left right space

inputValue.value = "";

if(TodoListValue !== ""  && !LocalTodoList.includes(TodoListValue))
  {

LocalTodoList.push(TodoListValue); //push data in local storage
LocalTodoList =[...new Set(LocalTodoList)];  //Get Unique value
localStorage.setItem("MyTodoData",JSON.stringify(LocalTodoList)) //set data in local storage


// console.log(LocalTodoList);


const divElem = document.createElement("div");
divElem.classList.add("main_todo_div");

divElem.innerHTML = `<li> ${TodoListValue}</li>
        <button class="deleteBtn">Delete</button>`;

    TodoMainElem.append(divElem);    
}

};







// step 2 Button Event fire 
document.querySelector(".btn").addEventListener("click", (e)=>{
addTodoList(e);

});


// const deletetodo = (e)=>{
//   console.log(e.target);
// }







>>>>>>> b2155b6 (C.v project)
