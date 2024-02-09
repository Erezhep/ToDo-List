const taskList = [
    {
		"id" : 1,
		"title" : "Сходить в магазин",
		"body" : "Купить хлеб",
		"important": false
	},
	{
		"id" : 2,
		"title" : "Спорт",
		"body" : "Сходить в  тренажер",
		"important": false
	},
	{
		"id" : 3,
		"title" : "Учеба",
		"body" : "Посетить курс по Swift",
		"important": true
	}
];

const todoList = document.querySelector('.todo__list');


const add_task = btnAdd;
add_task.addEventListener('click', (e) => {
	//e.preventDefault()
	const titleInput = form.elements["title"];
	const bodyInput = form.elements["body"];
	
	const end_id = taskList[taskList.length - 1].id;
	if (titleInput.value !== "" && bodyInput.value !== ""){
		const obj = {
			"id" : end_id + 1,
			"title" : titleInput.value,
			"body" : bodyInput.value,
			"important" : false
		};

		taskList.push(obj);
		let t = createTaskItem(obj);
		titleInput.value = "";
		bodyInput.value = "";
		todoList.insertAdjacentHTML('afterbegin', t);
	}else{
		alert("Заполните все поля");
	}

})

function getTasksList (tasks) {
	const objOfTasks = tasks.reduce((acc, item)=>{
		acc[item.id] = item;
		return acc;
	}, {});
	const arrOfTasks = Object.values(objOfTasks);

	let templateListItem = '';
    
	arrOfTasks.forEach((item)=>{
		templateListItem += createTaskItem(item);
	});
	todoList.insertAdjacentHTML('afterbegin', templateListItem);}

getTasksList(taskList);

function createTaskItem (task) {
	const taskItem = `
    <li class="todo__list__item" id="${task.id}i">
        <div class="list__item__desc">
            <h3>${task.title}</h3>
            <p>${task.body}</p>
        </div>
        <div class="list__item__btns">
            <div class="btns__important" id="${task.id}b">
				<button type="button" id="${task.id}" onclick="importantTag(${task.id})">
            	    <img src="images/icons8-important-30.png" alt="">
				</button>
            </div>
            <div class="btns__delete">
				<button type="button" id="-${task.id}" onclick="removeTag(${task.id})">
                	<img src="images/icons8-delete-30.png" alt="">
				</button>
            </div>
        </div>
    </li>
    `;
	return taskItem;

}

// Buttons ----------------------------------------------------------------

const objList = taskList.reduce((acc, item)=>{
	acc[item.id] = item;
	return acc;
}, {});

const objKeys = Object.keys(objList);


// Удаление заданию
function removeTag(id){
	const btnOfKey = document.getElementById("-" + id);
	console.log(id + "i");
	const taskToRemove = document.getElementById(id + "i");
	if (taskToRemove) {
		taskToRemove.remove();
		console.log('Элемент успешно удален из DOM.');
	  } else {
		console.log('Элемент не найден.');
	  }
}

// важный или не важный
function importantTag(id){
	const btnImportant = document.getElementById(id);

	const backgroundColor = window.getComputedStyle(btnImportant).backgroundColor; // Фоновый цвет кнопку
	const listBlock = document.getElementById(id + "b"); // Фоновый цвет блок
	const listImportant = document.getElementById(id + "i"); // Фоновый цвет листа
	
	let colorList = 'rgb(255, 253, 130)'; // Фоновый цвет для лист по умолчанию
	let colorButton = 'rgb(255, 255, 255)' // Фоновый цвет для блок и кнопку по умолчанию

	if (backgroundColor ===  colorButton){
		colorButton = 'rgb(237, 33, 124)';
		colorList = 'rgb(88, 164, 176)'
	}
	btnImportant.style.backgroundColor = colorButton;
	listImportant.style.backgroundColor = colorList;
	listBlock.style.backgroundColor = colorButton;
		
}
// End buttons ------------------------------------------------------------
